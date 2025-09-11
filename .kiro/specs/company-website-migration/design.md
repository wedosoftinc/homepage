# Design Document

## Overview

위두소프트 웹사이트를 Linear.app 스타일의 모던한 디자인으로 전환하는 설계입니다. Next.js 기반의 정적 사이트로 구축하여 기존 워드프레스의 복잡성을 제거하고, 다크 테마를 기본으로 하되 라이트 테마 토글 기능을 제공합니다. IT 솔루션 전문 회사로서의 기술적 전문성을 어필하면서도 사용자 선택권을 보장합니다.

## Architecture

### Technology Stack

**Frontend Framework**
- Next.js 14 (App Router)
- TypeScript for type safety
- React 18 with Server Components

**Styling & UI**
- Tailwind CSS for utility-first styling
- Headless UI for accessible components
- Framer Motion for animations
- Lucide React for icons

**Content Management**
- MDX for rich markdown content
- Gray-matter for frontmatter parsing
- Remark/Rehype plugins for content processing

**Build & Deployment**
- GitHub Actions for CI/CD
- Next.js static export for GitHub Pages
- Image optimization with next/image

### Site Architecture

```
wedosoft-website/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── (home)/            # Home page group
│   │   ├── solutions/         # Solution pages (Google Workspace, Freshworks, etc.)
│   │   ├── services/          # Service pages (컨설팅, 교육, 마이그레이션)
│   │   ├── pricing/           # Pricing with tab-based product comparison
│   │   ├── blog/              # Blog system
│   │   ├── about/             # Company info
│   │   └── contact/           # Contact page
│   ├── components/            # Reusable components
│   │   ├── ui/               # Basic UI components (Linear-style)
│   │   ├── layout/           # Layout components (Header, Footer, Navigation)
│   │   ├── content/          # Content-specific components
│   │   ├── pricing/          # Pricing table components
│   │   └── theme/            # Theme toggle components
│   ├── lib/                  # Utility functions
│   ├── styles/               # Global styles & theme definitions
│   ├── hooks/                # Custom hooks (theme, pricing tabs)
│   └── data/                 # Static data
├── content/                  # MDX content files
│   ├── blog/                # Blog posts
│   ├── solutions/           # Solution descriptions
│   ├── services/            # Service descriptions
│   └── pages/               # Static pages
├── public/                  # Static assets
└── scripts/                # Build and migration scripts
```

## Components and Interfaces

### Core Components

**Layout Components**
```typescript
// Header with navigation and theme toggle
interface HeaderProps {
  navigation: NavigationItem[]
  currentPath: string
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

// Mega menu for solutions
interface MegaMenuProps {
  solutions: Solution[]
  services: Service[]
  isOpen: boolean
}

// Footer with company info and links
interface FooterProps {
  companyInfo: CompanyInfo
  links: FooterLink[]
  theme: 'dark' | 'light'
}

// Main layout wrapper with theme support
interface LayoutProps {
  children: React.ReactNode
  metadata: PageMetadata
  theme: 'dark' | 'light'
}
```

**Content Components**
```typescript
// Linear-style hero section with 3D perspective image
interface HeroProps {
  title: string
  subtitle: string
  cta?: CallToAction
  perspectiveImage?: string
  theme: 'dark' | 'light'
}

// Solution card (Google Workspace, Freshworks, etc.)
interface SolutionCardProps {
  solution: Solution
  variant: 'featured' | 'standard'
  theme: 'dark' | 'light'
}

// Pricing table with tabs
interface PricingTableProps {
  products: Product[]
  activeTab: string
  onTabChange: (tab: string) => void
  theme: 'dark' | 'light'
}

// Customer logo grid (Linear-style)
interface CustomerGridProps {
  customers: Customer[]
  theme: 'dark' | 'light'
}

// 3D perspective image component
interface PerspectiveImageProps {
  src: string
  alt: string
  className?: string
  rotateX?: number
  rotateY?: number
}
```

**UI Components**
```typescript
// Reusable button component
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

// Card component for content display
interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
  hover?: boolean
}
```

### Data Models

**Blog Post Model**
```typescript
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: Date
  updatedAt?: Date
  author: Author
  categories: Category[]
  tags: Tag[]
  featuredImage?: string
  seo: SEOMetadata
}
```

**Service Model**
```typescript
interface Service {
  id: string
  name: string
  description: string
  features: string[]
  benefits: string[]
  icon: string
  category: ServiceCategory
  featured: boolean
}
```

**Navigation Model**
```typescript
interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
  external?: boolean
  megaMenu?: MegaMenuSection[]
}

interface MegaMenuSection {
  title: string
  items: NavigationItem[]
  description?: string
  icon?: string
}

// Based on existing menu structure
interface SiteNavigation {
  solutions: {
    title: "솔루션"
    sections: [
      {
        title: "고객 경험 & 세일즈 관리"
        items: ["Freshdesk", "Freshdesk Omni", "Freshchat", "Freddy AI", "Freshsales", "Monday Sales CRM"]
      },
      {
        title: "협업 & 업무 생산성"  
        items: ["Monday Work Management", "Monday Dev", "Monday Service", "Google Workspace"]
      },
      {
        title: "IT 인프라 관리"
        items: ["Freshservice", "Splashtop"]
      }
    ]
  }
  services: {
    title: "서비스"
    items: ["컨설팅 & 진단", "구축 & 마이그레이션", "교육 & 트레이닝", "지원 & 유지보수"]
  }
  pricing: { title: "가격", href: "/pricing" }
  about: { title: "회사 소개", href: "/about" }
}
```

## Data Models

### Content Structure

**Frontmatter Schema**
```yaml
# Blog Post Frontmatter
title: "Post Title"
excerpt: "Brief description"
publishedAt: "2024-01-01"
updatedAt: "2024-01-02"
author: "Author Name"
categories: ["Category1", "Category2"]
tags: ["tag1", "tag2"]
featuredImage: "/images/featured.jpg"
seo:
  title: "SEO Title"
  description: "SEO Description"
  keywords: ["keyword1", "keyword2"]
```

**Migration Data Structure**
```typescript
interface WordPressPost {
  id: string
  title: string
  content: string
  excerpt: string
  publishDate: string
  categories: string[]
  tags: string[]
  author: string
  slug: string
  status: 'publish' | 'draft'
}

interface MigratedPost {
  filename: string
  frontmatter: BlogPostFrontmatter
  content: string
  images: string[]
}
```

### Configuration

**Site Configuration**
```typescript
interface SiteConfig {
  name: string
  description: string
  url: string
  author: {
    name: string
    email: string
    social: SocialLinks
  }
  navigation: NavigationItem[]
  services: Service[]
  seo: {
    defaultTitle: string
    titleTemplate: string
    defaultDescription: string
    keywords: string[]
  }
}
```

## Error Handling

### Content Loading Errors
- Graceful fallbacks for missing content
- Error boundaries for component failures
- 404 pages for missing routes
- Proper error logging and monitoring

### Build-time Validation
- Content schema validation
- Image optimization error handling
- Link checking for internal references
- SEO metadata validation

### Runtime Error Handling
```typescript
// Error boundary for content components
class ContentErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error and show fallback UI
  }
}

// Content loading with error handling
async function loadContent(slug: string): Promise<Content | null> {
  try {
    return await getContentBySlug(slug)
  } catch (error) {
    console.error(`Failed to load content: ${slug}`, error)
    return null
  }
}
```

## Testing Strategy

### Unit Testing
- Component testing with React Testing Library
- Utility function testing with Jest
- Content parsing and validation testing

### Integration Testing
- Page rendering tests
- Navigation flow testing
- Content loading and display testing

### Performance Testing
- Lighthouse CI integration
- Core Web Vitals monitoring
- Bundle size analysis

### Content Validation
- Markdown parsing validation
- Image optimization verification
- SEO metadata completeness check

### Testing Tools
```json
{
  "jest": "^29.0.0",
  "@testing-library/react": "^13.0.0",
  "@testing-library/jest-dom": "^5.0.0",
  "lighthouse-ci": "^0.12.0",
  "bundlewatch": "^0.3.0"
}
```

## Design System

### Color Palette (Linear-inspired with WedoSoft branding)

```css
:root {
  /* Dark Theme (Default) */
  --bg-primary: #0A0A0A;
  --bg-secondary: #1A1A1A;
  --bg-tertiary: #101010;
  --text-primary: #FFFFFF;
  --text-secondary: #CCCCCC;
  --text-muted: #888888;
  --border: #444444;
  
  /* Light Theme */
  --bg-primary-light: #FFFFFF;
  --bg-secondary-light: #F7FAFC;
  --bg-tertiary-light: #EBF3FF;
  --text-primary-light: #383838;
  --text-secondary-light: #4A4A4A;
  --text-muted-light: #6E6E6E;
  --border-light: #E2E8F0;
  
  /* Brand Colors (consistent across themes) */
  --brand-primary: #3284D6;
  --brand-secondary: #2A6BAF;
  --brand-light: #5FA1E1;
  
  /* Semantic Colors */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}

/* Theme Classes */
.theme-dark {
  --bg-primary: var(--bg-primary);
  --bg-secondary: var(--bg-secondary);
  --text-primary: var(--text-primary);
  /* ... */
}

.theme-light {
  --bg-primary: var(--bg-primary-light);
  --bg-secondary: var(--bg-secondary-light);
  --text-primary: var(--text-primary-light);
  /* ... */
}
```

### Typography Scale
```css
/* Headings */
.text-h1 { font-size: 3.75rem; line-height: 1.1; }
.text-h2 { font-size: 3rem; line-height: 1.2; }
.text-h3 { font-size: 2.25rem; line-height: 1.3; }
.text-h4 { font-size: 1.875rem; line-height: 1.4; }

/* Body Text */
.text-lg { font-size: 1.125rem; line-height: 1.7; }
.text-base { font-size: 1rem; line-height: 1.6; }
.text-sm { font-size: 0.875rem; line-height: 1.5; }
```

### Spacing System
```css
/* Consistent spacing scale */
.space-xs { margin: 0.5rem; }
.space-sm { margin: 1rem; }
.space-md { margin: 1.5rem; }
.space-lg { margin: 2rem; }
.space-xl { margin: 3rem; }
.space-2xl { margin: 4rem; }
```

### Component Variants (Linear-style with theme support)

```typescript
// Button variants with theme support
const buttonVariants = {
  primary: {
    dark: "bg-brand-primary text-white hover:bg-brand-secondary",
    light: "bg-brand-primary text-white hover:bg-brand-secondary"
  },
  secondary: {
    dark: "bg-bg-secondary text-text-primary hover:bg-border",
    light: "bg-bg-secondary-light text-text-primary-light hover:bg-border-light"
  },
  outline: {
    dark: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    light: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  }
}

// Card variants with theme support
const cardVariants = {
  default: {
    dark: "bg-bg-secondary border border-border rounded-lg",
    light: "bg-white border border-border-light rounded-lg shadow-sm"
  },
  elevated: {
    dark: "bg-bg-secondary rounded-lg shadow-2xl",
    light: "bg-white rounded-lg shadow-lg"
  },
  pricing: {
    dark: "bg-bg-secondary border border-border rounded-xl p-8 hover:border-brand-primary transition-colors",
    light: "bg-white border border-border-light rounded-xl p-8 hover:border-brand-primary transition-colors shadow-sm"
  }
}

// Theme toggle component
const themeToggleVariants = {
  button: "p-2 rounded-lg transition-colors hover:bg-bg-secondary",
  icon: "w-5 h-5 transition-transform"
}
```

## Migration Strategy

### Content Migration Pipeline
1. **XML Parsing**: Extract all posts, pages, and metadata
2. **Content Transformation**: Convert HTML to MDX format
3. **Image Processing**: Download and optimize images
4. **URL Mapping**: Create redirect mapping for SEO
5. **Validation**: Verify content integrity and formatting

### Migration Tools
```typescript
// XML to MDX converter
interface MigrationTool {
  parseWordPressXML(filePath: string): WordPressData
  convertToMDX(posts: WordPressPost[]): MigratedPost[]
  downloadImages(imageUrls: string[]): Promise<void>
  generateRedirects(urlMappings: URLMapping[]): string
}
```

### SEO Preservation
- Maintain existing URL structure where possible
- Generate 301 redirects for changed URLs
- Preserve meta descriptions and titles
- Maintain category and tag hierarchies

This design provides a solid foundation for building a modern, performant, and maintainable website that addresses all the requirements while leveraging the best practices of modern web development.
##
 Pricing Page Design

### Tab-based Product Comparison
Linear-style pricing page with 4 main product tabs, each containing detailed pricing tiers.

```typescript
interface PricingPageProps {
  products: {
    'google-workspace': GoogleWorkspacePlans[]
    'freshworks': FreshworksPlans[]
    'monday': MondayPlans[]
    'splashtop': SplashtopPlans[]
  }
  activeTab: string
  theme: 'dark' | 'light'
}

// Deep linking support
// /pricing?tab=google-workspace → Google Workspace tab active
// /pricing?tab=freshworks → Freshworks tab active
// etc.
```

### Pricing Card Layout
```typescript
interface PricingCardProps {
  plan: {
    name: string
    price: string
    period: string
    features: string[]
    highlighted?: boolean
    cta: string
  }
  theme: 'dark' | 'light'
}
```

## Theme System Implementation

### Theme Context
```typescript
interface ThemeContextType {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  systemPreference: 'dark' | 'light'
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark') // Default to dark
  
  // Save preference to localStorage
  // Detect system preference
  // Apply theme classes to document
}
```

### CSS Custom Properties
```css
/* Theme-aware components */
.btn-primary {
  background-color: var(--brand-primary);
  color: var(--text-primary);
  border: 1px solid var(--brand-primary);
}

.card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text-primary);
}

/* 3D Perspective Effects (Linear-style) */
.perspective-image {
  transform: perspective(1200px) rotateX(15deg) rotateY(-10deg);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.perspective-image:hover {
  transform: perspective(1200px) rotateX(10deg) rotateY(-5deg) scale(1.02);
}
```

## Linear-inspired Components

### Hero Section
- Large, impactful headline
- Subtle subtitle
- 3D perspective product screenshot
- Dual CTA buttons (primary + secondary)

### Customer Logos
- Animated logo grid
- Grayscale with hover color
- Responsive grid layout

### Feature Cards
- Minimal design with icons
- Hover animations
- Consistent spacing

### Navigation
- Clean, minimal header
- Mega menu for solutions
- Theme toggle in header
- Sticky navigation

This design system provides a solid foundation for building a Linear-inspired website that maintains WedoSoft's brand identity while embracing modern design trends.