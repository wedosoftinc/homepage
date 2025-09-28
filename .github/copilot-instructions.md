# AI Coding Agent Instructions - WeDoSoft Homepage

## Architecture Overview

This is a **B2B SaaS company homepage** built with Next.js 15 + TypeScript + shadcn/ui, serving Korean enterprise customers. The codebase follows a component-driven architecture with emphasis on business-professional UI/UX.

### Key Tech Stack Decision Points
- **Next.js App Router**: Server Components by default, `'use client'` only when necessary
- **shadcn/ui Design System**: All UI components use HSL CSS variables from `app/globals.css`
- **Theme System**: Dark mode first with `next-themes` provider in `app/layout.tsx`
- **Icon Strategy**: @heroicons/react for consistency, **no Lucide React despite shadcn default**
- **Styling**: Tailwind classes only, no inline styles

## Critical File Dependencies

### Core Configuration Files
```bash
# Essential shadcn/ui setup - DO NOT MODIFY without understanding impact
components.json          # shadcn config with "new-york" style + HSL colors
app/globals.css         # HSL color system + Pretendard Korean font
tailwind.config.js      # Custom container padding + CSS variable integration
```

### Component Architecture Patterns
```typescript
// Layout Pattern (consistent across all pages)
MainNavigation -> Page Content -> Footer

// Component Import Pattern (always follow this structure)
import { Button } from "@/components/ui/button"           // shadcn base
import { Card, CardContent } from "@/components/ui/card"  // compound components
import { ChevronDown } from "@heroicons/react/24/outline" // icons
import { Badge } from "@/components/ui/badge"             // decorative
```

## Project-Specific Conventions

### Menu Structure (Critical Business Logic)
The navigation in `components/navigation/main-navigation.tsx` follows a specific 3-tier business structure:
1. **솔루션 (Solutions)**: 3 categories with 6-4-3 product distribution
2. **서비스 (Services)**: 4 professional services (컨설팅/구축/교육/운영지원)
3. **Direct Pages**: 맞춤 견적, 블로그, 회사소개

### Color System (HSL-based, NOT RGB/HEX)
```css
/* CORRECT - use CSS variables */
className="bg-background text-foreground border-border"
className="text-primary hover:text-primary/90"

/* WRONG - never use direct colors */
className="bg-gray-900 text-white border-gray-700"
```

### Component Patterns
```typescript
// Page Layout Pattern (use in all main pages)
<div className="min-h-screen bg-background">
  <MainNavigation />
  <main className="container py-8">
    {/* Page content */}
  </main>
  <Footer />
</div>

// Card Hover Pattern (business-professional feel)
className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary"

// Megamenu Content Structure (mobile-responsive)
<NavigationMenuContent>
  <div className="w-[650px] p-4"> {/* Fixed width for desktop */}
    <div className="grid grid-cols-3 gap-4"> {/* 3-column layout */}
```

## Development Workflows

### Adding New shadcn/ui Components
```bash
# Always use this exact command format
npx shadcn-ui@latest add [component-name]

# Components auto-install to components/ui/ with proper imports
# Example: npx shadcn-ui@latest add accordion
```

### Content Guidelines (CRITICAL)
- **Source Truth**: WordPress XML files in `/docs/` directory contain ALL real content
- **Never Fabricate**: No fake customer testimonials, statistics, or contact info
- **Korean B2B Tone**: Professional, technical, benefit-focused language
- **Product Categories**: Must match exact 4-tier structure (고객경험/협업생산성/IT인프라/컨설팅서비스)

### Build & Deploy
```bash
npm run dev    # Development server (localhost:3000)
npm run build  # Production build with TypeScript strict mode
npm run lint   # Next.js ESLint (runs automatically in CI)
```

## Integration Points

### Theme Integration
- Root provider in `app/layout.tsx` with `defaultTheme="dark"`
- All components automatically inherit dark/light modes via CSS variables
- Theme toggle component available at `@/components/ui/theme-toggle`

### Mobile Navigation
- Uses shadcn Sheet component with custom expand/collapse sections
- Maintains same menu structure as desktop megamenu
- Touch-friendly interaction patterns with proper ARIA labels

### Business Logic Constraints
- **Contact Info**: Only use verified details from XML (02-2135-3071, support@wedosoft.net)
- **Product URLs**: Follow `/products/{product-name}` structure exactly
- **Korean/English Mixed**: Support bilingual content where business-appropriate

## Performance & SEO Considerations

- **Server Components**: Default for all pages unless interactivity required
- **Image Optimization**: Use `next/image` with proper `priority` on hero images
- **Font Loading**: Pretendard Korean font loaded via CDN in `globals.css`
- **Bundle Analysis**: Icons separated into dedicated chunks via Heroicons strategy

---

*Read `AGENTS.md` for comprehensive business context and `README.md` for setup instructions.*