# Implementation Checklist

## Phase 1: Project Setup
- [x] Create monorepo structure with `apps/web` and `apps/studio`
- [x] Initialize root `package.json` with workspaces
- [x] Create `.env.example` with required variables
- [x] Initialize Astro project in `apps/web`
- [x] Install Astro dependencies (`@astrojs/tailwind`, `@sanity/client`, `@sanity/image-url`)
- [x] Configure `astro.config.mjs` with sitemap and RSS integrations
- [x] Initialize Sanity project in `apps/studio`
- [x] Configure Sanity studio for local development

## Phase 2: Design System
- [x] Set up TailwindCSS configuration
- [x] Define CSS variables for dark theme tokens
- [x] Define CSS variables for light theme tokens
- [x] Configure Inter font (Google Fonts or self-hosted)
- [x] Create `Button.astro` component (primary, secondary, outline, ghost variants)
- [x] Create `Card.astro` component with hover lift
- [x] Create `Badge.astro` component for tech tags (default, subtle, accent variants)
- [x] Create `SectionHeader.astro` component
- [x] Create `Container.astro` wrapper component
- [x] Create `SectionDivider.astro` component
- [x] Implement theme-aware card hover system (`.card-interactive`, `.card-interactive-subtle`)
- [x] Add theme-aware shadow tokens (`--card-shadow`, `--card-shadow-hover`, `--card-border-hover`)
- [x] Add reduced motion support for card animations

## Phase 3: Sanity Schemas
- [x] Create `post` schema (title, slug, excerpt, coverImage, body, seo)
- [x] Create `caseStudy` schema (title, slug, problem, solution, impact, stack)
- [x] Create `siteSettings` schema (title, description, socialLinks)
- [x] Create Sanity client utility (`lib/sanity.ts`)
- [x] Create GROQ queries for all content types
- [x] Create image URL builder utility (`lib/image.ts`)
- [x] Create portable text serializer (`lib/portable-text.ts`)
- [x] Define TypeScript types (`types/index.ts`)

## Phase 4: Layout & Navigation
- [x] Create `BaseLayout.astro` with html structure
- [x] Create SEO meta tags in BaseLayout
- [x] Create JSON-LD for structured data (in blog post page)
- [x] Create `Header.astro` with navigation
- [x] Create `ThemeToggle.astro` with localStorage persistence
- [x] Create `Footer.astro` with social links
- [x] Update social links (GitHub: fahad-here, LinkedIn: mohammed-fahad-29a988165)

## Phase 5: Pages

### Home Page
- [x] Create `pages/index.astro`
- [x] Create `Hero.astro` section
- [x] Create `ProofTiles.astro` section (credibility metrics)
- [x] Create `FeaturedWork.astro` section
- [x] Create `Services.astro` section
- [x] Create `HowIWork.astro` section
- [x] Create `LatestWriting.astro` section
- [x] Create `ContactCTA.astro` section
- [x] Add type annotations for Sanity data (`CaseStudy[]`, `Post[]`)

### Work Pages
- [x] Create `WorkCard.astro` component
- [x] Create `pages/work/index.astro` (case study listing with placeholders)
- [x] Create `pages/work/[slug].astro` (case study detail)
- [x] Add type annotations for Sanity data

### Blog Pages
- [x] Create `PostCard.astro` component
- [x] Create `pages/blog/index.astro` (blog listing with "Coming Soon" placeholders)
- [x] Create `pages/blog/[slug].astro` (blog post detail)
- [x] Add type annotations for Sanity data

### Other Pages
- [x] Create `pages/about.astro` (with focus areas, experience timeline, education, "Now" panel)
- [x] Create `pages/contact.astro` with Netlify form
- [x] Create `pages/thanks.astro` (form submission success page)
- [x] Create `pages/privacy.astro`

### Contact Form Features
- [x] Netlify form integration (`data-netlify`, `netlify-honeypot`)
- [x] Progressive enhancement (works without JS)
- [x] Inline success/error states with JavaScript
- [x] Honeypot spam protection
- [x] Redirect to `/thanks` page on submission

## Phase 6: SEO & Performance
- [x] Implement per-page title and meta descriptions
- [x] Add OpenGraph meta tags
- [x] Add Twitter Card meta tags
- [x] Add canonical URLs
- [x] Create `pages/rss.xml.ts` for RSS feed
- [x] Create `pages/robots.txt.ts`
- [ ] Configure sitemap generation (currently disabled due to @astrojs/sitemap bug)
- [x] Add JSON-LD for BlogPosting (posts)
- [x] Optimize images with Sanity URL builder
- [x] Verify minimal client-side JS

## Phase 7: Sample Content
- [x] Create placeholder case studies (displayed when Sanity is empty)
- [x] Create placeholder blog posts ("Coming Soon" cards)
- [ ] Add real content to Sanity Studio

## Phase 8: Deployment
- [x] Create `netlify.toml` configuration
- [ ] Set up environment variables in Netlify
- [ ] Deploy Astro site to Netlify
- [ ] Deploy Sanity Studio (hosted or Netlify)
- [ ] Configure Sanity webhook for rebuild (optional)

## Known Issues
- [ ] `@astrojs/sitemap` crashes with "Cannot read properties of undefined (reading 'reduce')" - temporarily disabled
- [x] TypeScript implicit `any[]` errors - fixed with proper type annotations

## Verification
- [x] All pages render correctly locally (dev server)
- [ ] Sanity Studio schemas work with real content
- [x] Theme toggle works (dark ↔ light)
- [ ] Contact form submits successfully (needs Netlify deploy)
- [ ] Lighthouse score 90+ on all metrics
- [ ] All routes accessible on production
- [ ] sitemap.xml validates (blocked by sitemap bug)
- [ ] robots.txt accessible
- [ ] RSS feed works
- [ ] OG images render correctly
- [ ] Mobile responsive testing complete
