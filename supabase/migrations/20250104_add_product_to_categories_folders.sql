-- Add product column to categories and folders tables
-- This allows each product (freshdesk, freshservice) to have independent category/folder structures

-- Add product column to categories
ALTER TABLE categories
ADD COLUMN IF NOT EXISTS product text NOT NULL DEFAULT 'freshdesk';

-- Add product column to folders
ALTER TABLE folders
ADD COLUMN IF NOT EXISTS product text NOT NULL DEFAULT 'freshdesk';

-- Update unique constraints to include product
-- Categories: product + slug must be unique
ALTER TABLE categories DROP CONSTRAINT IF EXISTS categories_slug_key;
CREATE UNIQUE INDEX IF NOT EXISTS categories_product_slug_key ON categories(product, slug);

-- Folders: product + category_id + slug must be unique
CREATE UNIQUE INDEX IF NOT EXISTS folders_product_category_slug_key ON folders(product, category_id, slug);

-- Add published column to categories and folders for consistency
ALTER TABLE categories
ADD COLUMN IF NOT EXISTS published boolean DEFAULT true;

ALTER TABLE folders
ADD COLUMN IF NOT EXISTS published boolean DEFAULT true;

-- Add comments
COMMENT ON COLUMN categories.product IS 'Product identifier (freshdesk, freshservice)';
COMMENT ON COLUMN folders.product IS 'Product identifier (freshdesk, freshservice)';
COMMENT ON COLUMN categories.published IS 'Whether this category is visible';
COMMENT ON COLUMN folders.published IS 'Whether this folder is visible';
