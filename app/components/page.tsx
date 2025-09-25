'use client'

import { useState } from "react"
import {
    ClipboardDocumentIcon as Copy,
    CheckIcon as Check,
    SwatchIcon as Palette,
    CodeBracketIcon as Code,
    EyeIcon as Eye
} from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
    ExclamationTriangleIcon as AlertTriangle,
    InformationCircleIcon as InfoIcon,
    CheckCircleIcon as CheckCircle
} from "@heroicons/react/24/outline"

const componentExamples = [
    {
        name: "Button",
        description: "기본 버튼 컴포넌트",
        component: (
            <div className="flex gap-2 flex-wrap">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>
        ),
        code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>`
    },
    {
        name: "Card",
        description: "콘텐츠 카드",
        component: (
            <Card className="w-[300px]">
                <CardHeader>
                    <CardTitle>제목</CardTitle>
                    <CardDescription>설명</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>카드 내용</p>
                </CardContent>
            </Card>
        ),
        code: `<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>
    <p>카드 내용</p>
  </CardContent>
</Card>`
    },
    {
        name: "Badge",
        description: "배지 컴포넌트",
        component: (
            <div className="flex gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
            </div>
        ),
        code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>`
    },
    {
        name: "Input",
        description: "입력 필드",
        component: (
            <div className="w-full max-w-sm space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input type="email" id="email" placeholder="이메일 입력" />
            </div>
        ),
        code: `<Label htmlFor="email">이메일</Label>
<Input type="email" id="email" placeholder="이메일 입력" />`
    },
    {
        name: "Progress",
        description: "진행률 표시",
        component: (
            <div className="w-full max-w-sm">
                <Progress value={60} />
            </div>
        ),
        code: `<Progress value={60} />`
    },
    {
        name: "Accordion",
        description: "접이식 컨텐츠",
        component: (
            <Accordion type="single" collapsible className="w-full max-w-sm">
                <AccordionItem value="item-1">
                    <AccordionTrigger>첫 번째 항목</AccordionTrigger>
                    <AccordionContent>
                        첫 번째 항목의 내용입니다.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>두 번째 항목</AccordionTrigger>
                    <AccordionContent>
                        두 번째 항목의 내용입니다.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        ),
        code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>첫 번째 항목</AccordionTrigger>
    <AccordionContent>
      첫 번째 항목의 내용입니다.
    </AccordionContent>
  </AccordionItem>
</Accordion>`
    },
    {
        name: "Alert",
        description: "알림 메시지",
        component: (
            <div className="space-y-3 w-full max-w-md">
                <Alert>
                    <InfoIcon className="h-4 w-4" />
                    <AlertTitle>정보</AlertTitle>
                    <AlertDescription>
                        일반적인 정보 메시지입니다.
                    </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>오류</AlertTitle>
                    <AlertDescription>
                        오류가 발생했습니다.
                    </AlertDescription>
                </Alert>
            </div>
        ),
        code: `<Alert>
  <InfoIcon className="h-4 w-4" />
  <AlertTitle>정보</AlertTitle>
  <AlertDescription>
    일반적인 정보 메시지입니다.
  </AlertDescription>
</Alert>`
    },
    {
        name: "Checkbox",
        description: "체크박스",
        component: (
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">약관에 동의합니다</Label>
            </div>
        ),
        code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">약관에 동의합니다</Label>
</div>`
    },
    {
        name: "Switch",
        description: "스위치 토글",
        component: (
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">비행기 모드</Label>
            </div>
        ),
        code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">비행기 모드</Label>
</div>`
    },
    {
        name: "Slider",
        description: "슬라이더",
        component: (
            <div className="w-full max-w-sm space-y-2">
                <Label>볼륨</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
            </div>
        ),
        code: `<Slider defaultValue={[50]} max={100} step={1} />`
    },
    {
        name: "Select",
        description: "선택 드롭다운",
        component: (
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="과일을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="apple">사과</SelectItem>
                    <SelectItem value="banana">바나나</SelectItem>
                    <SelectItem value="orange">오렌지</SelectItem>
                </SelectContent>
            </Select>
        ),
        code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="과일을 선택하세요" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">사과</SelectItem>
    <SelectItem value="banana">바나나</SelectItem>
  </SelectContent>
</Select>`
    },
    {
        name: "Textarea",
        description: "텍스트 영역",
        component: (
            <div className="w-full max-w-sm space-y-2">
                <Label htmlFor="message">메시지</Label>
                <Textarea id="message" placeholder="메시지를 입력하세요" />
            </div>
        ),
        code: `<Label htmlFor="message">메시지</Label>
<Textarea id="message" placeholder="메시지를 입력하세요" />`
    }
]

export default function ComponentsPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null)

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedCode(id)
        setTimeout(() => setCopiedCode(null), 2000)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="border-b bg-muted/30">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
                    <div className="text-center space-y-6">
                        <div className="flex justify-center space-x-2 mb-4">
                            <Badge variant="secondary" className="px-3 py-1">
                                <Palette className="h-3 w-3 mr-1" />
                                shadcn/ui
                            </Badge>
                            <Badge variant="outline" className="px-3 py-1">
                                React 19+
                            </Badge>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            컴포넌트 갤러리
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            설치된 shadcn/ui 컴포넌트들을 확인하세요.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {componentExamples.map((example, index) => (
                        <Card key={index} className="flex flex-col h-full">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-lg">{example.name}</CardTitle>
                                    <Badge variant="outline">Component</Badge>
                                </div>
                                <CardDescription>{example.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <div className="border rounded-lg p-4 bg-muted/30">
                                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                        <Eye className="h-3 w-3" />
                                        <span>미리보기</span>
                                    </div>
                                    <div className="flex items-center justify-center min-h-[100px]">
                                        {example.component}
                                    </div>
                                </div>
                                <div className="border rounded-lg">
                                    <div className="flex items-center justify-between p-3 border-b bg-muted/30">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Code className="h-3 w-3" />
                                            <span>코드</span>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => copyToClipboard(example.code, example.name)}
                                        >
                                            {copiedCode === example.name ? (
                                                <Check className="h-3 w-3" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </Button>
                                    </div>
                                    <div className="p-3">
                                        <pre className="text-xs">
                                            <code>{example.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
