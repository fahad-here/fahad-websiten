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
- [x] Create `Button.astro` component (primary, secondary, ghost)
- [x] Create `Card.astro` component with hover lift
- [x] Create `Badge.astro` component for tech tags
- [x] Create `SectionHeader.astro` component
- [x] Create `Container.astro` wrapper component

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

## Phase 5: Pages

### Home Page
- [x] Create `pages/index.astro`
- [x] Create `Hero.astro` section
- [x] Create `CredibilityStrip.astro` section
- [x] Create `SelectedWork.astro` section
- [x] Create `Services.astro` section
- [x] Create `TechToolbox.astro` section
- [x] Create `LatestWriting.astro` section
- [x] Create `ContactCTA.astro` section

### Work Pages
- [x] Create `WorkCard.astro` component
- [x] Create `pages/work/index.astro` (case study listing)
- [x] Create `pages/work/[slug].astro` (case study detail)

### Blog Pages
- [x] Create `PostCard.astro` component
- [x] Create `pages/blog/index.astro` (blog listing)
- [x] Create `pages/blog/[slug].astro` (blog post detail)

### Other Pages
- [x] Create `pages/about.astro`
- [x] Create `pages/contact.astro` with Netlify form
- [x] Create `pages/privacy.astro`

## Phase 6: SEO & Performance
- [x] Implement per-page title and meta descriptions
- [x] Add OpenGraph meta tags
- [x] Add Twitter Card meta tags
- [x] Add canonical URLs
- [x] Create `pages/rss.xml.ts` for RSS feed
- [x] Create `pages/robots.txt.ts`
- [x] Configure sitemap generation
- [x] Add JSON-LD for BlogPosting (posts)
- [x] Optimize images with Sanity URL builder
- [x] Verify minimal client-side JS

## Phase 7: Sample Content
- [x] Create case study: Forex CRM Re-Architecture
- [x] Create case study: Payment Gateway Platform
- [x] Create case study: Real-Time Commissions Engine
- [x] Create case study: Crypto Exchange Platform
- [x] Create 2 sample blog posts
- [x] Configure siteSettings in Sanity

## Phase 8: Deployment
- [x] Create `netlify.toml` configuration
- [ ] Set up environment variables in Netlify
- [ ] Deploy Astro site to Netlify
- [ ] Deploy Sanity Studio (hosted or Netlify)
- [ ] Configure Sanity webhook for rebuild (optional)

## Verification
- [ ] All pages render correctly locally
- [ ] Sanity Studio schemas work
- [ ] Theme toggle works (dark ↔ light)
- [ ] Contact form submits successfully
- [ ] Lighthouse score 90+ on all metrics
- [ ] All routes accessible on production
- [ ] sitemap.xml validates
- [ ] robots.txt accessible
- [ ] RSS feed works
- [ ] OG images render correctly
- [ ] Mobile responsive testing complete
