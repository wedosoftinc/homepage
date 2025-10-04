export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string
          csv_id: number
          product: string
          category_id: string | null
          folder_id: string | null
          title_en: string
          title_ko: string | null
          content_html_en: string
          content_html_ko: string | null
          content_text_en: string | null
          content_text_ko: string | null
          short_slug: string | null
          slug: string
          full_path: string
          tags: string[] | null
          meta_title_ko: string | null
          meta_description_ko: string | null
          view_count: number
          helpful_count: number
          not_helpful_count: number
          published: boolean
          created_at: string
          updated_at: string
        }
      }
      categories: {
        Row: {
          id: string
          name_en: string
          name_ko: string | null
          slug: string
          description_en: string | null
          description_ko: string | null
          display_order: number
          created_at: string
          updated_at: string
        }
      }
      folders: {
        Row: {
          id: string
          category_id: string
          name_en: string
          name_ko: string | null
          slug: string
          description_en: string | null
          description_ko: string | null
          display_order: number
          created_at: string
          updated_at: string
        }
      }
    }
  }
}

export type Document = Database['public']['Tables']['documents']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Folder = Database['public']['Tables']['folders']['Row']

export interface DocumentWithRelations extends Document {
  category?: Category
  folder?: Folder
}
