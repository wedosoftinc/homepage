-- Supabase DB Schema for WeDo Soft Documentation Portal
-- Created: 2025-01-04
-- Version: 1.0

-- ============================================
-- 1. Enable Extensions
-- ============================================

CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================
-- 2. Categories Table
-- ============================================

CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en text NOT NULL,
  name_ko text,
  slug text UNIQUE NOT NULL,
  description_en text,
  description_ko text,
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

COMMENT ON TABLE categories IS 'Top-level categories (e.g., Freshdesk FAQ, Configuration)';

-- ============================================
-- 3. Folders Table
-- ============================================

CREATE TABLE folders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name_en text NOT NULL,
  name_ko text,
  slug text NOT NULL,
  description_en text,
  description_ko text,
  display_order int DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(category_id, slug)
);

COMMENT ON TABLE folders IS 'Sub-categories or folders within categories';

-- ============================================
-- 4. Documents Table (Main)
-- ============================================

CREATE TABLE documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  -- CSV Source Tracking
  csv_id int UNIQUE NOT NULL,
  csv_imported_at timestamptz DEFAULT now(),
  product text NOT NULL DEFAULT 'freshdesk',

  -- Hierarchy
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  folder_id uuid REFERENCES folders(id) ON DELETE SET NULL,

  -- English Original
  title_en text NOT NULL,
  content_html_en text NOT NULL,
  content_text_en text,

  -- Korean Translation
  title_ko text,
  content_html_ko text,
  content_text_ko text,

  -- Vector Embeddings (1536 dimensions - OpenAI text-embedding-3-small)
  title_embedding vector(1536),
  content_embedding vector(1536),
  combined_embedding vector(1536),

  embedding_model text DEFAULT 'text-embedding-3-small',
  embedding_version int DEFAULT 1,
  embeddings_generated_at timestamptz,

  -- Translation Quality Management
  translation_version int DEFAULT 1,
  translation_quality real DEFAULT 0.6,
  translation_method text,
  needs_review boolean DEFAULT false,
  review_priority int DEFAULT 0,

  -- SEO
  meta_title_en text,
  meta_title_ko text,
  meta_description_en text,
  meta_description_ko text,
  meta_keywords text[],

  -- URL Structure
  slug text NOT NULL,
  full_path text UNIQUE NOT NULL,

  -- Tags
  tags text[],

  -- Statistics
  view_count int DEFAULT 0,
  helpful_count int DEFAULT 0,
  not_helpful_count int DEFAULT 0,
  search_count int DEFAULT 0,

  -- Metadata
  display_order int DEFAULT 0,
  visibility int DEFAULT 1,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

COMMENT ON TABLE documents IS 'Main documents table with multilingual support and vector search';

-- ============================================
-- 5. Indexes for Documents
-- ============================================

-- Basic Indexes
CREATE INDEX idx_documents_category ON documents(category_id);
CREATE INDEX idx_documents_folder ON documents(folder_id);
CREATE INDEX idx_documents_product ON documents(product);
CREATE INDEX idx_documents_slug ON documents(slug);
CREATE INDEX idx_documents_path ON documents(full_path);
CREATE INDEX idx_documents_published ON documents(published) WHERE published = true;

-- Quality Management
CREATE INDEX idx_documents_quality ON documents(translation_quality);
CREATE INDEX idx_documents_review ON documents(needs_review) WHERE needs_review = true;

-- Statistics
CREATE INDEX idx_documents_views ON documents(view_count DESC);
CREATE INDEX idx_documents_search ON documents(search_count DESC);

-- Vector Search Indexes (HNSW Algorithm)
CREATE INDEX idx_documents_title_embedding
  ON documents
  USING hnsw (title_embedding vector_cosine_ops);

CREATE INDEX idx_documents_content_embedding
  ON documents
  USING hnsw (content_embedding vector_cosine_ops);

CREATE INDEX idx_documents_combined_embedding
  ON documents
  USING hnsw (combined_embedding vector_cosine_ops);

-- Full-Text Search (PostgreSQL native)
CREATE INDEX idx_documents_fts_ko
  ON documents
  USING GIN (to_tsvector('korean', coalesce(title_ko, '') || ' ' || coalesce(content_text_ko, '')));

CREATE INDEX idx_documents_fts_en
  ON documents
  USING GIN (to_tsvector('english', coalesce(title_en, '') || ' ' || coalesce(content_text_en, '')));

-- ============================================
-- 6. Translation History Table
-- ============================================

CREATE TABLE translation_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid REFERENCES documents(id) ON DELETE CASCADE,
  version int NOT NULL,

  title_ko text,
  content_html_ko text,
  content_text_ko text,

  quality_score real,
  translation_method text,
  translated_by text,

  created_at timestamptz DEFAULT now(),

  UNIQUE(document_id, version)
);

COMMENT ON TABLE translation_history IS 'Version history for all translations';

CREATE INDEX idx_translation_history_document ON translation_history(document_id);
CREATE INDEX idx_translation_history_version ON translation_history(document_id, version DESC);

-- ============================================
-- 7. Search Queries Table (AI Caching)
-- ============================================

CREATE TABLE search_queries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Query
  query_text text NOT NULL,
  query_embedding vector(1536),
  query_language text DEFAULT 'ko',

  -- Search Type
  search_type text NOT NULL,  -- 'keyword' | 'semantic' | 'hybrid' | 'ai'

  -- Results
  result_document_ids uuid[],
  result_count int,

  -- AI Answer (RAG)
  ai_answer_text text,
  ai_answer_model text,
  ai_answer_sources uuid[],
  ai_answer_generated_at timestamptz,

  -- User Feedback
  was_helpful boolean,
  feedback_text text,

  -- Metadata
  user_id uuid,
  user_ip inet,
  session_id text,
  search_duration_ms int,

  created_at timestamptz DEFAULT now()
);

COMMENT ON TABLE search_queries IS 'Search history and AI answer caching';

-- Indexes
CREATE INDEX idx_search_queries_text ON search_queries(query_text);
CREATE INDEX idx_search_queries_created ON search_queries(created_at DESC);
CREATE INDEX idx_search_queries_embedding
  ON search_queries
  USING hnsw (query_embedding vector_cosine_ops);

-- AI Answer Cache (for quick lookup)
CREATE INDEX idx_search_queries_cache
  ON search_queries(query_text, search_type)
  WHERE ai_answer_text IS NOT NULL;

-- ============================================
-- 8. Document Feedback Table
-- ============================================

CREATE TABLE document_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid REFERENCES documents(id) ON DELETE CASCADE,

  is_helpful boolean NOT NULL,
  feedback_text text,

  user_id uuid,
  user_ip inet,

  created_at timestamptz DEFAULT now()
);

COMMENT ON TABLE document_feedback IS 'User feedback for document quality';

CREATE INDEX idx_feedback_document ON document_feedback(document_id);
CREATE INDEX idx_feedback_created ON document_feedback(created_at DESC);
CREATE INDEX idx_feedback_helpful ON document_feedback(is_helpful);

-- ============================================
-- 9. Functions
-- ============================================

-- Semantic Search Function
CREATE OR REPLACE FUNCTION semantic_search(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 10,
  filter_product text DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  title_ko text,
  content_text_ko text,
  slug text,
  full_path text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.id,
    d.title_ko,
    d.content_text_ko,
    d.slug,
    d.full_path,
    1 - (d.combined_embedding <=> query_embedding) as similarity
  FROM documents d
  WHERE
    d.published = true
    AND (filter_product IS NULL OR d.product = filter_product)
    AND 1 - (d.combined_embedding <=> query_embedding) > match_threshold
  ORDER BY d.combined_embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

COMMENT ON FUNCTION semantic_search IS 'Vector similarity search with optional product filtering';

-- Increment View Count
CREATE OR REPLACE FUNCTION increment_view_count(doc_id uuid)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE documents
  SET view_count = view_count + 1
  WHERE id = doc_id;
END;
$$;

COMMENT ON FUNCTION increment_view_count IS 'Atomically increment document view count';

-- Get Popular Documents
CREATE OR REPLACE FUNCTION get_popular_documents(
  limit_count int DEFAULT 10,
  filter_product text DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  title_ko text,
  view_count int,
  helpful_count int,
  full_path text
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.id,
    d.title_ko,
    d.view_count,
    d.helpful_count,
    d.full_path
  FROM documents d
  WHERE
    d.published = true
    AND (filter_product IS NULL OR d.product = filter_product)
  ORDER BY d.view_count DESC
  LIMIT limit_count;
END;
$$;

-- ============================================
-- 10. Row Level Security (Optional - For Future)
-- ============================================

-- Enable RLS (commented out for now, enable in production)
-- ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE search_queries ENABLE ROW LEVEL SECURITY;

-- Public read access policy example
-- CREATE POLICY "Documents are viewable by everyone" ON documents
--   FOR SELECT USING (published = true);

-- ============================================
-- 11. Triggers (Auto-update timestamps)
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_folders_updated_at BEFORE UPDATE ON folders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- End of Schema
-- ============================================
