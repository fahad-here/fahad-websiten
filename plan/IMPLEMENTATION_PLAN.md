# Personal Website Implementation Plan

## Overview
Build a production-ready personal website for Fahad Hussain — a Senior Software Engineer / Tech Lead specializing in fintech infrastructure (payments, wallets, CRM systems, trading platforms). The site will attract both consulting clients and full-time opportunities.

**This is NOT a generic SaaS landing page.** It represents a hands-on engineer who builds and operates real production systems.

**Stack**: Astro + Sanity + TailwindCSS + Netlify

---

## Phase 1: Project Setup

### 1.1 Initialize Monorepo Structure
```
fahad-website/
├── apps/
│   ├── web/          # Astro site
│   └── studio/       # Sanity Studio
├── packages/         # Shared types (optional)
├── .env.example
├── package.json      # Workspace root
└── README.md
```

### 1.2 Astro Project Setup (`apps/web`)
- Initialize Astro with TypeScript
- Install dependencies: `@astrojs/tailwind`, `@sanity/client`, `@sanity/image-url`
- Configure `astro.config.mjs` with sitemap, RSS integrations
- Set up TailwindCSS with custom theme tokens

### 1.3 Sanity Studio Setup (`apps/studio`)
- Initialize Sanity project
- Configure for local development
- Set up deployment to Sanity's hosted studio (or self-host on Netlify)

---

## Phase 2: Design System & Theme

### 2.1 CSS Variables / Tailwind Config

#### Dark Mode (default) `:root[data-theme="dark"]`
```css
/* Surfaces */
--bg: #070B14;
--panel: #0B1220;
--panel-2: #0F1A30;
--border: rgba(255,255,255,0.08);

/* Text */
--text: #EAF0FF;
--text-2: rgba(234,240,255,0.82);
--muted: #9AA6C2;

/* Brand */
--primary: #22D3EE;
--primary-2: #0891B2;
--secondary: #6366F1;
--accent: #22D3EE;

/* UI */
--ring: rgba(34,211,238,0.35);
--shadow: 0 10px 30px rgba(0,0,0,0.35);

/* Semantics */
--success: #22C55E;
--warning: #F59E0B;
--danger: #EF4444;
```

#### Light Mode `:root[data-theme="light"]`
```css
/* Surfaces */
--bg: #F7FAFF;
--panel: #FFFFFF;
--panel-2: #F1F6FF;
--border: rgba(11,18,32,0.10);

/* Text */
--text: #0B1220;
--text-2: rgba(11,18,32,0.80);
--muted: #51607A;

/* Brand */
--primary: #0891B2;
--primary-2: #0E7490;
--secondary: #4F46E5;
--accent: #0891B2;

/* UI */
--ring: rgba(8,145,178,0.25);
--shadow: 0 10px 30px rgba(11,18,32,0.10);

/* Semantics */
--success: #16A34A;
--warning: #D97706;
--danger: #DC2626;
```

### 2.2 Color Usage Rules (MANDATORY)

#### PRIMARY COLOR (--primary)
Use ONLY for:
- Primary CTA buttons
- Primary links
- Active navigation item
- Key highlights in hero headline
- Focus rings (with --ring)

Do NOT use for: Large backgrounds, card backgrounds, body text

#### SECONDARY COLOR (--secondary)
Use SPARINGLY (~10%) for:
- Small badges or tags
- Subtle section dividers
- Decorative accents

#### TEXT COLORS
- Headings: --text
- Body text: --text-2 or --muted
- Never use primary/secondary for long text blocks

#### BUTTON STYLES
Primary: `bg: --primary`, `text: --bg`, `hover: --primary-2`
Secondary/Outline: `bg: transparent`, `border: --border`, `text: --text`, `hover: --panel-2`

### 2.3 Design Correction Rules
- Reduce vertical whitespace by ~25–35% across sections
- Hero is visually strong; other sections are calmer
- Avoid repeating the same card layout everywhere
- Cards: Radius 12–16px, subtle border + shadow
- Increase contrast between --bg and --panel (panel must be visible)

### 2.4 Visual Design System (NON-NEGOTIABLE)

#### Section Dividers
- Thin border line between major sections
- Section label chip aligned left (e.g. "Selected work", "Services")
- Tighter, rhythmic spacing

#### Visual Signatures (NO stock photos)
- Service cards with icons
- How I Work as horizontal stepper with connector line + icons
- Case study cards with abstract gradient thumbnails or mini system diagram SVGs
- All visuals generated locally (SVG/gradients)

#### Proof Tiles (2x2 Grid)
Replace bullet row with 2x2 proof tiles. Each tile:
- Outline icon
- Short title
- 1 supporting line

#### Service Cards (2 columns)
Each card:
- Icon
- 1-liner
- Typical outcomes (2 bullets)
- Stack tags

#### How I Work Stepper
3-step horizontal stepper:
- Number + icon
- Title
- One sentence
- Connector line between steps

#### Header Monogram
- Rounded square "FH" logo
- Subtle border and glow
- sr-only "Home" for accessibility

#### Easter Egg
ONE tasteful easter egg in footer:
- Option A: Command snippet with copy-on-click
- Option B: "System Status: Operational" chip with tooltip

### 2.4 Typography
- Primary: Inter (Google Fonts)
- Mono: `ui-monospace, monospace` for tags/metrics

### 2.5 Base Components
- `Button.astro` (primary, outline variants)
- `Card.astro` (base card with hover lift)
- `Badge.astro` (tech tags)
- `SectionHeader.astro`
- `Container.astro` (max-width wrapper)

---

## Phase 3: Sanity Schemas

### 3.1 Content Types
1. **post** - Blog articles
   - title, slug, excerpt, coverImage, publishedAt, author, categories[], body (portable text), seo{}

2. **caseStudy** - Portfolio pieces
   - title, slug, summary, problem, solution, outcome (one-line), impact[], stack[], role, coverImage, featured, publishedAt, body, seo{}

3. **siteSettings** - Global config
   - siteTitle, siteDescription, socialLinks{}, defaultOgImage

### 3.2 Sanity Utilities
- GROQ queries for posts, case studies, settings
- Image URL builder helper
- Portable text serializer for Astro

---

## Phase 4: Layout & Navigation

### 4.1 Base Layout
- `BaseLayout.astro` with `<html>`, `<head>`, slots
- SEO component for meta tags, OG, JSON-LD
- Theme toggle (dark/light) with localStorage persistence

### 4.2 Header
- **FH Monogram Logo** (rounded square, subtle border/glow, sr-only "Home")
- Nav: Work, Blog, About, Contact
- Theme toggle button

### 4.3 Footer
- Social links (GitHub, LinkedIn, Email)
- Copyright
- Privacy link
- **Easter Egg:** "System Status: Operational" chip with tooltip OR command snippet with copy-on-click

---

## Phase 5: Pages

### 5.1 Home (`/`)

#### Hero Section
**Headline:** "I build payment systems and internal platforms that survive production."

**Subheadline:** "Senior Software Engineer / Tech Lead specializing in fintech backends, payments, cloud infrastructure, and system architecture."

**CTAs:**
- Primary: "View Selected Work" → /work
- Secondary (outline): "Get in Touch" → /contact

**Visual:** Subtle grid/noise + gradient glow (ONLY place for decorative effects)

#### Proof Tiles (below hero)
2x2 grid of proof tiles with icons:
- **Payments & reconciliation** (icon: credit-card) → "Webhook-safe flows, recovery paths, traceability"
- **Wallets & ledgers** (icon: wallet) → "Balance correctness, lifecycle states, auditability"
- **Event-driven services** (icon: arrows-right-left) → "Queues, workers, idempotency, retries"
- **AWS / K8s / CI/CD** (icon: cloud) → "Deploy safely, monitor, iterate"

#### Featured Case Studies (3 cards)
PLACEHOLDERS — real content from Sanity later.

Card structure: Title → Problem → Outcome → Stack → Link

**Case Study 1: Wallet & Transaction Processing System**
- Problem: "Needed a reliable way to track balances, transactions, and payment states across multiple providers."
- Outcome: "Designed a ledger-based wallet system with idempotent webhooks and event-driven processing."
- Stack: Node.js, Django, MySQL, Redis, RabbitMQ

**Case Study 2: Multi-Gateway Payment Integrations**
- Problem: "Payment flows were tightly coupled and hard to monitor or reconcile."
- Outcome: "Built a unified payment layer with queue-based processing and full webhook reconciliation."
- Stack: Node.js, Python, BullMQ, RabbitMQ, REST APIs

**Case Study 3: CRM Re-Architecture & Performance Stabilization**
- Problem: "Legacy CRM frontend and backend were slowing development and affecting reliability."
- Outcome: "Led a gradual re-architecture, improving performance and stabilizing releases without downtime."
- Stack: React, APIs, Elasticsearch, AWS

#### Services (4 cards, 2 columns)
Each card: Icon + 1-liner + Typical outcomes (2 bullets) + Stack tags

**Architecture & Re-Architecture** (icon: layers)
- "Breaking down legacy systems into scalable, maintainable architectures."
- Outcomes: Faster deployments, Clear migration paths
- Stack: System Design, Microservices

**Backend APIs & Integrations** (icon: plug)
- "Designing robust APIs and integrating external services safely."
- Outcomes: Reliable integrations, Clean API contracts
- Stack: REST, GraphQL, Webhooks

**Payment Systems** (icon: credit-card)
- "Wallets, gateways, webhooks, reconciliation, failure-safe flows."
- Outcomes: Zero missed transactions, Full audit trails
- Stack: Payments, Ledgers, Queues

**Cloud & DevOps** (icon: cloud)
- "Dockerized deployments, Kubernetes, CI/CD, monitoring."
- Outcomes: Safe deploys, Production observability
- Stack: AWS, K8s, Docker

#### How I Work (Horizontal Stepper)
3-step horizontal stepper with connector line and icons:

**Step 1: Understand** (icon: magnifying-glass)
- "Map the system, identify constraints, clarify requirements."

**Step 2: Design** (icon: blueprint)
- "Build for failure, scale, and observability."

**Step 3: Ship** (icon: rocket)
- "Deploy incrementally, monitor, iterate."

Visual: Number badges inside circles, icons, subtle connector line between steps

#### Latest Writing
If no blog posts exist, show 3 "Coming Soon" cards:
- "Designing Payment Systems That Don't Lose Money"
- "Event-Driven Architectures in Real Fintech Products"
- "Lessons from Re-Architecting Legacy Systems"

Do NOT show "No posts yet".

#### Contact CTA
"Let's discuss your next project" + button

### 5.2 Work Index (`/work`)
- Grid of all case studies
- Each card: title, problem, outcome, stack tags

### 5.3 Case Study Detail (`/work/[slug]`)
- Hero with title, role, stack
- Problem section
- Solution section
- Outcome / Impact bullets
- Optional body content

### 5.4 Blog Index (`/blog`)
- List/grid of posts
- Each card: coverImage, title, excerpt, date, categories

### 5.5 Blog Post (`/blog/[slug]`)
- Title, date, author, reading time
- Cover image
- Portable text body
- Related posts (optional)

### 5.6 About (`/about`)

**Visual Structure (NOT a wall of text):**

**"Now" Panel** (top right card)
- Location: Dubai, UAE
- Focus: Fintech infrastructure
- Availability: Open to consulting / contract work

**Intro** (4-5 lines):
I'm a senior software engineer and technical lead based in Dubai, working primarily in fintech and financial platforms.

My work focuses on designing and operating backend systems where correctness, reliability, and performance actually matter — payments, wallets, transaction processing, internal platforms, and supporting infrastructure.

**Focus Areas** (2x2 Grid with Icons):
- **Payment Systems** (icon: credit-card) → "Gateways, reconciliation, failure handling"
- **Backend Architecture** (icon: layers) → "APIs, services, data flows"
- **Event-Driven Systems** (icon: arrows) → "Queues, workers, async processing"
- **Cloud Infrastructure** (icon: cloud) → "AWS, Kubernetes, CI/CD"

**Principles** (3 chips row):
- "Clarity over cleverness"
- "Incremental over rewrite"
- "Production over assumptions"

**Experience:** Timeline cards with icons and better spacing. Factual, verifiable bullet points.

### 5.7 Contact (`/contact`)
- Netlify form (name, email, message)
- Hidden `form-name` field
- Success/error states
- Fallback mailto link
- Social links

### 5.8 Privacy (`/privacy`) - Optional
- Basic privacy policy template

---

## Phase 6: SEO & Performance

### 6.1 SEO Implementation
- Per-page `<title>` and meta description
- OpenGraph + Twitter Card meta
- Canonical URLs
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt`
- RSS feed at `/rss.xml`
- JSON-LD: WebSite (home), BlogPosting (posts)

### 6.2 Performance
- Static generation (no SSR)
- Minimal client JS (only theme toggle)
- Responsive images via Sanity image URL builder
- Font optimization (swap display)

---

## Phase 7: Sample Content

### 7.1 Case Studies (Anonymized)
Content will come from Sanity. Placeholders used on homepage until content exists.

### 7.2 Sample Blog Posts
Coming Soon cards displayed until posts exist in Sanity.

---

## Phase 8: Deployment

### 8.1 Netlify Configuration
- Build command: `npm run build -w apps/web`
- Publish directory: `apps/web/dist`
- Environment variables:
  - `SANITY_PROJECT_ID`
  - `SANITY_DATASET`
  - `SANITY_API_VERSION`
  - `SITE_URL`

### 8.2 Sanity Webhook (Optional)
- Trigger Netlify rebuild on content publish

### 8.3 Sanity Studio Deployment
- Deploy to `studio.yourdomain.com` or Sanity's hosted option

---

## File Structure (apps/web)

```
apps/web/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── BaseLayout.astro
│   │   │   └── ThemeToggle.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   └── SectionHeader.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ProofBar.astro
│   │   │   ├── FeaturedWork.astro
│   │   │   ├── Services.astro
│   │   │   ├── HowIWork.astro
│   │   │   ├── LatestWriting.astro
│   │   │   └── ContactCTA.astro
│   │   ├── work/
│   │   │   └── WorkCard.astro
│   │   ├── blog/
│   │   │   └── PostCard.astro
│   │   └── seo/
│   │       ├── SEO.astro
│   │       └── JsonLd.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── rss.xml.ts
│   │   └── robots.txt.ts
│   ├── lib/
│   │   ├── sanity.ts
│   │   ├── image.ts
│   │   └── portable-text.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── global.css
├── public/
│   └── fonts/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Content Rules (CRITICAL)

- Remove vague marketing claims unless backed by public data
- Use concrete, believable engineering outcomes:
  - Wallet ledger & transaction lifecycle
  - Multi-gateway payment integrations + webhook reconciliation
  - Event-driven processing (RabbitMQ / BullMQ)
  - AWS EKS deployments + CI/CD pipelines
  - Elasticsearch indexing & performance improvements
  - System migrations & re-architecture
- Tone: calm, confident, technical — not salesy

---

## Verification Plan

### Local Testing
1. Run `npm run dev` in `apps/web` — verify all pages render
2. Run Sanity Studio locally — verify schemas work
3. Test theme toggle (dark ↔ light)
4. Test contact form submission (Netlify CLI or deploy preview)
5. Run Lighthouse audit — target 90+ on all metrics

### Post-Deploy Testing
1. Verify all routes accessible
2. Test contact form submissions arrive
3. Validate sitemap.xml and robots.txt
4. Test RSS feed
5. Verify OG images render correctly
6. Test on mobile devices
