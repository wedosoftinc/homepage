/**
 * 블로그 데이터 - Contentful API 사용
 *
 * 기존 MDX 기반에서 Contentful CMS로 마이그레이션
 */

export {
  getAllPosts,
  getPaginatedPosts,
  getPostBySlug,
  getPostsByCategory,
  getAllCategories,
  getAdjacentPosts,
  type BlogPost,
} from './contentful'
