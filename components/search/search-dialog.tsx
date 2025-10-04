"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { MagnifyingGlassIcon, XMarkIcon, SparklesIcon, PaperAirplaneIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface SearchResult {
  id: string
  csv_id: number
  title_ko: string
  title_en: string
  content_preview: string
  short_slug: string
  product: string
  category_name: string
  folder_name: string
  rank: number
}

interface AutocompleteSuggestion {
  title: string
  product: string
  category: string
  preview: string
}

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialQuery?: string
  productFilter?: string
}

export function SearchDialog({ open, onOpenChange, initialQuery = "", productFilter }: SearchDialogProps) {
  const router = useRouter()
  const [query, setQuery] = React.useState(initialQuery)
  const [results, setResults] = React.useState<SearchResult[]>([])
  const [suggestions, setSuggestions] = React.useState<AutocompleteSuggestion[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [showSuggestions, setShowSuggestions] = React.useState(true)
  const debounceRef = React.useRef<NodeJS.Timeout>()

  // AI Chat state
  const [chatMode, setChatMode] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = React.useState('')
  const [isChatLoading, setIsChatLoading] = React.useState(false)
  const chatEndRef = React.useRef<HTMLDivElement>(null)

  // Debounced autocomplete
  React.useEffect(() => {
    if (query.length < 1) {
      setSuggestions([])
      setResults([])
      setShowSuggestions(true)
      return
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const params = new URLSearchParams({ q: query, limit: '5' })
        if (productFilter) params.append('product', productFilter)

        const res = await fetch(`/api/search/autocomplete?${params}`)
        const data = await res.json()

        if (data.suggestions) {
          setSuggestions(data.suggestions)
          setShowSuggestions(true)
        }
      } catch (error) {
        console.error('Autocomplete error:', error)
      }
    }, 300)

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [query, productFilter])

  // Full search on Enter
  const handleSearch = async () => {
    if (query.length < 2) return

    setIsLoading(true)
    setShowSuggestions(false)

    try {
      const params = new URLSearchParams({ q: query, limit: '10' })
      if (productFilter) params.append('product', productFilter)

      const res = await fetch(`/api/search?${params}`)
      const data = await res.json()

      if (data.results) {
        setResults(data.results)
      }
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleResultClick = (result: SearchResult) => {
    const path = `/docs/${result.product}/${result.short_slug}`
    router.push(path)
    onOpenChange(false)
  }

  // Handle AI chat
  const handleChatSubmit = async () => {
    if (!chatInput.trim() || isChatLoading) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: chatInput
    }

    setMessages((prev) => [...prev, userMessage])
    setChatInput('')
    setIsChatLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          searchQuery: query,
          productFilter: productFilter
        })
      })

      const data = await res.json()

      if (data.message) {
        setMessages((prev) => [...prev, data.message])
      }
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.'
        }
      ])
    } finally {
      setIsChatLoading(false)
    }
  }

  const handleChatKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleChatSubmit()
    }
  }

  // Auto-scroll chat
  React.useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  // Start AI chat mode
  const startChatMode = () => {
    setChatMode(true)
    setMessages([
      {
        role: 'assistant',
        content: `안녕하세요! Freshworks 제품에 대해 궁금하신 점을 물어보세요.${
          query ? `\n\n"${query}"에 대한 검색 결과를 바탕으로 답변드리겠습니다.` : ''
        }`
      }
    ])
  }

  // Back to search mode
  const backToSearch = () => {
    setChatMode(false)
    setMessages([])
    setChatInput('')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="sr-only">{chatMode ? 'AI 대화' : '문서 검색'}</DialogTitle>

          {chatMode ? (
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                onClick={backToSearch}
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-5 w-5 text-primary" />
                <span className="font-semibold">AI 대화</span>
                {query && (
                  <span className="text-sm text-muted-foreground">• "{query}"</span>
                )}
              </div>
            </div>
          ) : (
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="문서 검색..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full rounded-lg border bg-background pl-11 pr-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('')
                    setResults([])
                    setSuggestions([])
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          )}
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(80vh-120px)] px-6 py-4">
          {/* AI Chat Mode */}
          {chatMode ? (
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex gap-3",
                    message.role === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-3",
                      message.role === 'user'
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.role === 'assistant' ? (
                      <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-li:my-0.5 prose-pre:my-2">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>
          ) : (
            <>
              {/* Autocomplete Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
            <div className="space-y-1 mb-6">
              <p className="text-xs font-medium text-muted-foreground mb-2">추천 검색어</p>
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(suggestion.title)
                    handleSearch()
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <MagnifyingGlassIcon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">
                        {suggestion.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {suggestion.product} • {suggestion.category}
                      </p>
                      {suggestion.preview && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {suggestion.preview}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
              )}

          {/* Search Results */}
          {!showSuggestions && results.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {results.length}개의 검색 결과
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={startChatMode}
                >
                  <SparklesIcon className="h-4 w-4" />
                  AI에게 물어보기
                </Button>
              </div>

              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left px-4 py-4 rounded-lg border hover:border-primary hover:bg-accent/30 transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                        {result.title_ko || result.title_en}
                      </h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded flex-shrink-0">
                        {result.product}
                      </span>
                    </div>

                    {result.category_name && (
                      <p className="text-xs text-muted-foreground">
                        {result.category_name}
                        {result.folder_name && ` • ${result.folder_name}`}
                      </p>
                    )}

                    {result.content_preview && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {result.content_preview}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Empty State */}
          {!showSuggestions && !isLoading && results.length === 0 && query.length >= 2 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">검색 결과가 없습니다.</p>
              <p className="text-sm text-muted-foreground mt-2">
                다른 검색어를 시도해보세요.
              </p>
            </div>
          )}

              {/* Initial State */}
              {!showSuggestions && !isLoading && results.length === 0 && query.length < 2 && (
                <div className="text-center py-12">
                  <MagnifyingGlassIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">2글자 이상 입력하여 검색하세요.</p>
                </div>
              )}
            </>
          )}
        </div>

        {chatMode ? (
          <div className="border-t px-6 py-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={handleChatKeyDown}
                disabled={isChatLoading}
                className="flex-1 rounded-lg border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
              />
              <Button
                size="icon"
                onClick={handleChatSubmit}
                disabled={!chatInput.trim() || isChatLoading}
              >
                <PaperAirplaneIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="border-t px-6 py-3 bg-muted/30">
            <p className="text-xs text-muted-foreground text-center">
              <kbd className="px-2 py-1 bg-background border rounded text-xs">Enter</kbd>로 검색 •{' '}
              <kbd className="px-2 py-1 bg-background border rounded text-xs">Esc</kbd>로 닫기
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
