-- Add Vector Search (RAG) to documents table
-- This migration enables semantic search using OpenAI embeddings

-- 1. Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Add embedding column (OpenAI text-embedding-3-small: 1536 dimensions)
ALTER TABLE documents
ADD COLUMN IF NOT EXISTS embedding vector(1536);

-- 3. Create vector similarity search function
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5,
  product_filter text DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  csv_id bigint,
  title_ko text,
  title_en text,
  content_text_ko text,
  short_slug text,
  product text,
  category_name text,
  folder_name text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.id,
    d.csv_id,
    d.title_ko,
    d.title_en,
    substring(d.content_text_ko, 1, 500) as content_text_ko,
    d.short_slug,
    d.product,
    c.name_ko as category_name,
    f.name_ko as folder_name,
    1 - (d.embedding <=> query_embedding) as similarity
  FROM documents d
  LEFT JOIN categories c ON d.category_id = c.id
  LEFT JOIN folders f ON d.folder_id = f.id
  WHERE
    d.published = true
    AND d.embedding IS NOT NULL
    AND 1 - (d.embedding <=> query_embedding) > match_threshold
    AND (product_filter IS NULL OR d.product = product_filter)
  ORDER BY d.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- 4. Create HNSW index for fast vector search
-- HNSW (Hierarchical Navigable Small World) is optimized for high-dimensional vectors
CREATE INDEX IF NOT EXISTS idx_documents_embedding
ON documents USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);

-- 5. Create function to generate embeddings (placeholder)
-- This will be called by the application layer
CREATE OR REPLACE FUNCTION update_document_embedding(
  doc_id uuid,
  new_embedding vector(1536)
)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE documents
  SET
    embedding = new_embedding,
    updated_at = now()
  WHERE id = doc_id;
END;
$$;

-- Comments for documentation
COMMENT ON COLUMN documents.embedding IS 'Vector embedding (1536-dim) from OpenAI text-embedding-3-small model';
COMMENT ON FUNCTION match_documents IS 'Semantic similarity search using cosine distance';
COMMENT ON INDEX idx_documents_embedding IS 'HNSW index for fast approximate nearest neighbor search';
