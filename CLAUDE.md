# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**We Do Soft Homepage** - Next.js 15 기반 B2B SaaS 솔루션 판매 사이트. shadcn/ui 디자인 시스템으로 구축된 글로벌 SaaS 솔루션(Monday.com, Freshworks, Google Workspace) 홈페이지.

## Development Commands

```bash
# Development
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint

# shadcn/ui component installation
npx shadcn-ui@latest add [component-name]
```

## Critical Rules

### Language & Communication
- **모든 소통은 반드시 한국어로만 진행**
- **모든 제안과 작업은 사용자의 의견을 구하고 컨펌을 받은 후 시작**

### Content Integrity
1. **원본 데이터 절대 준수**: XML 파일과 원본 사이트(wedosoft0527.mycafe24.com)의 내용만 사용
2. **임의 콘텐츠 생성 금지**: 가상의 고객 후기, 임의의 통계, 존재하지 않는 서비스 내용 절대 생성 금지
3. **검증된 정보**: 연락처(02-2135-3071), 이메일(support@wedosoft.net), 주소(서울시 마포구 양화로 186 5층)

### Coding Standards
- **TypeScript 엄격 모드** 사용
- **Server Components 우선**: 필요시에만 'use client' 사용 (현재 76개 클라이언트 컴포넌트)
- **Tailwind CSS 클래스** 사용, 인라인 스타일 금지
- **Lucide React 아이콘** 사용, 이모지 금지
- **PascalCase** 컴포넌트 명명, **kebab-case** 파일 명명

## Architecture

### Path Aliases
```typescript
@/*           → Root directory
@/components  → /components
@/lib/utils   → /lib/utils
@/components/ui → /components/ui
```

### Key Directories
- `app/` - Next.js App Router (35 pages)
- `components/sections/` - Reusable page sections (PageHero, ContentSection, ProductDetail, etc.)
- `components/ui/` - shadcn/ui base components
- `components/navigation/` - Navigation components (mega menu)
- `data/` - Product & pricing JSON data (products.json, pricing-data.json, services.json)
- `docs/` - Design system guides & extracted content
- `lib/` - Utility functions (cn() for className merging)

### Design System

**Global Utility Classes** (app/globals.css):
```css
/* Typography */
.heading-hero          /* text-3xl md:text-4xl lg:text-5xl */
.heading-section       /* text-2xl md:text-3xl lg:text-4xl */
.heading-subsection    /* text-xl md:text-2xl lg:text-3xl */
.heading-card          /* text-lg md:text-xl */

/* Spacing */
.section-spacing         /* py-16 md:py-20 lg:py-24 */
.section-spacing-small   /* py-12 md:py-16 lg:py-20 */
.section-spacing-large   /* py-20 md:py-24 lg:py-32 */

/* Backgrounds */
.section-bg-primary     /* bg-background */
.section-bg-muted       /* bg-muted/30 */
.section-bg-gradient    /* bg-gradient-to-b from-muted/30 to-background */

/* Containers */
.section-container         /* container mx-auto */
.section-container-narrow  /* container mx-auto max-w-4xl */
.section-container-wide    /* container mx-auto max-w-7xl */

/* Grids */
.card-grid-2   /* grid md:grid-cols-2 gap-6 md:gap-8 */
.card-grid-3   /* grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 */
.card-grid-4   /* grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 */
```

**Changing spacing/typography**: Modify `app/globals.css` once, applies site-wide.

### Standard Components

**PageHero** - Standardized hero section for all pages:
```tsx
import { PageHero } from '@/components/sections'

<PageHero
  badge={{ icon: SparklesIcon, text: "Solutions" }}
  title={<>Title with <span className="text-primary">highlight</span></>}
  subtitle="Description text..."
  buttons={{
    primary: { text: "CTA", href: "/contact", icon: HeartIcon },
    secondary: { text: "Secondary", href: "/pricing" }
  }}
  className="bg-gradient-to-br from-primary/5 via-background to-secondary/5"
/>
```

**ContentSection** - Standard content section with title/subtitle/content:
```tsx
import { ContentSection } from '@/components/sections'

<ContentSection
  badge={{ icon: InfoIcon, text: "Section Badge" }}
  title="Section Title"
  subtitle="Section description..."
>
  {/* Content here */}
</ContentSection>
```

### Color System
Use **CSS variables** (shadcn/ui HSL color system), not direct color values:

✅ Correct:
```tsx
<div className="bg-background text-foreground border-border">
```

❌ Wrong:
```tsx
<div className="bg-gray-900 text-white border-gray-700">
```

### Data Structure

**Product Data** (`data/products.json`):
- 4 product categories: customer-experience, collaboration, infrastructure, consulting
- Each product has: id, name, logo, category, vendor, basic_info, key_features, pricing_integration
- Icon fields reference Heroicons (e.g., "CpuChipIcon", "SparklesIcon")

**Pricing Data** (`data/pricing-data.json`):
- Structured pricing tiers by product
- Integration with product pages via pricing_integration field

**Services Data** (`data/services.json`):
- Consulting, implementation, education services
- Structured with title, description, features

### Theme
- Dark/Light mode via next-themes
- Default: dark mode
- ThemeProvider in app/layout.tsx
- Uses 'class' strategy for Tailwind

### Deployment
- GitHub Pages via GitHub Actions (.github/workflows/)
- Auto-deploys on push to main
- Logo redirects configured in next.config.js

## Business Context

**4 Product Lines**:
1. 고객 경험 & 세일즈 관리: Freshdesk Omni, Freshsales, Freshchat, Freddy AI, Freshcaller
2. 협업 및 생산성 향상: Monday Work Management, Monday Dev, Monday Sales CRM, Google Workspace
3. IT 인프라 관리: Freshservice, Splashtop
4. 컨설팅 & 전문 서비스: 디지털 전환 컨설팅, 솔루션 구축, 교육

**Target**: B2B 기업, 조직 관리자, 협업/생산성 향상에 관심 있는 고객

## References

- Design system guide: `docs/DESIGN-SYSTEM-GUIDE.md`
- Agent instructions: `AGENTS.md`
- Original content: `WordPress.2025-09-11.xml`, `wedosoft.WordPress.2025-09-11.xml`
- Product content: `docs/*-content-extracted.md`

## 제안방식
사용자와 논의후 제안을 할 경우, 옵션1, 옵션2를 제안하고 각각의 장단점을 설명 후 최종안으로 항상 하이브리드 옵션을 제안하는데 가급적 이렇게 하지마. 나는 순수한 방식을 선호하기에 여러 옵션의 장점을 혼합하는 방식은 좋지 않아. 따라서 장/단점을 명확히 분석해서 나에게 가장 적합할 것 같은 방식을 추천해. 