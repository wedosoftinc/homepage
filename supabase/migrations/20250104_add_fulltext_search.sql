-- Add Full-Text Search to documents table
-- This migration adds search functionality with autocomplete support

-- 1. Add search vector column for Korean content
ALTER TABLE documents
ADD COLUMN IF NOT EXISTS search_vector_ko tsvector;

-- 2. Create function to update search vector
-- Weight: A (highest) for titles, B for content, C for tags
CREATE OR REPLACE FUNCTION update_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector_ko =
    setweight(to_tsvector('simple', coalesce(NEW.title_ko, '')), 'A') ||
    setweight(to_tsvector('simple', coalesce(NEW.title_en, '')), 'A') ||
    setweight(to_tsvector('simple', coalesce(NEW.content_text_ko, '')), 'B') ||
    setweight(to_tsvector('simple', coalesce(array_to_string(NEW.tags, ' '), '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Create trigger to auto-update search vector
DROP TRIGGER IF EXISTS documents_search_vector_update ON documents;
CREATE TRIGGER documents_search_vector_update
  BEFORE INSERT OR UPDATE ON documents
  FOR EACH ROW
  EXECUTE FUNCTION update_search_vector();

-- 4. Update existing documents
UPDATE documents SET search_vector_ko =
  setweight(to_tsvector('simple', coalesce(title_ko, '')), 'A') ||
  setweight(to_tsvector('simple', coalesce(title_en, '')), 'A') ||
  setweight(to_tsvector('simple', coalesce(content_text_ko, '')), 'B') ||
  setweight(to_tsvector('simple', coalesce(array_to_string(tags, ' '), '')), 'C');

-- 5. Create GIN index for fast searching
CREATE INDEX IF NOT EXISTS idx_documents_search_vector_ko
ON documents USING GIN(search_vector_ko);

-- 6. Create search function with autocomplete
CREATE OR REPLACE FUNCTION search_documents(
  search_query TEXT,
  product_filter TEXT DEFAULT NULL,
  limit_count INT DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  csv_id INT,
  title_ko TEXT,
  title_en TEXT,
  content_preview TEXT,
  short_slug TEXT,
  product TEXT,
  category_name TEXT,
  folder_name TEXT,
  rank REAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.id,
    d.csv_id,
    d.title_ko,
    d.title_en,
    substring(d.content_text_ko, 1, 200) as content_preview,
    d.short_slug,
    d.product,
    c.name_ko as category_name,
    f.name_ko as folder_name,
    ts_rank(d.search_vector_ko, plainto_tsquery('simple', search_query)) as rank
  FROM documents d
  LEFT JOIN categories c ON d.category_id = c.id
  LEFT JOIN folders f ON d.folder_id = f.id
  WHERE
    d.published = true
    AND d.search_vector_ko @@ plainto_tsquery('simple', search_query)
    AND (product_filter IS NULL OR d.product = product_filter)
  ORDER BY rank DESC, d.view_count DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- 7. Create autocomplete suggestions function
CREATE OR REPLACE FUNCTION autocomplete_suggestions(
  search_query TEXT,
  product_filter TEXT DEFAULT NULL,
  limit_count INT DEFAULT 5
)
RETURNS TABLE (
  title TEXT,
  product TEXT,
  category TEXT,
  preview TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COALESCE(d.title_ko, d.title_en) as title,
    d.product,
    c.name_ko as category,
    substring(d.content_text_ko, 1, 100) as preview
  FROM documents d
  LEFT JOIN categories c ON d.category_id = c.id
  WHERE
    d.published = true
    AND d.search_vector_ko @@ plainto_tsquery('simple', search_query)
    AND (product_filter IS NULL OR d.product = product_filter)
  ORDER BY ts_rank(d.search_vector_ko, plainto_tsquery('simple', search_query)) DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- Comments for documentation
COMMENT ON COLUMN documents.search_vector_ko IS 'Full-text search vector for Korean/English content';
COMMENT ON FUNCTION search_documents IS 'Full-text search with ranking and filters';
COMMENT ON FUNCTION autocomplete_suggestions IS 'Autocomplete suggestions for search';
