# Personal Site Build Spec (Astro + Sanity + Netlify)

## Goal
A premium, fintech-inspired personal website that represents a hands-on engineer who builds and operates real production systems. SEO-first, fast, and easy to maintain. No custom backend.

**This site is NOT a generic SaaS landing page.** It showcases credible, specific, and outcome-driven engineering work.

## Stack
- Astro (web)
- Sanity (CMS)
- TypeScript
- TailwindCSS (or CSS variables + minimal utility)
- Netlify hosting + Netlify Forms

---

## Design System

### Theme Tokens (CSS Variables)

#### Dark (default) `:root[data-theme="dark"]`
```css
/* Surfaces */
--bg: #070B14;              /* page background */
--panel: #0B1220;           /* cards/nav */
--panel-2: #0F1A30;         /* elevated panels */
--border: rgba(255,255,255,0.08);

/* Text */
--text: #EAF0FF;
--text-2: rgba(234,240,255,0.82);
--muted: #9AA6C2;

/* Brand */
--primary: #22D3EE;         /* brand primary (cyan/teal) */
--primary-2: #0891B2;       /* darker primary for hover */
--secondary: #6366F1;       /* indigo secondary (used sparingly) */
--accent: #22D3EE;          /* alias for primary */

/* UI */
--ring: rgba(34,211,238,0.35);
--shadow: 0 10px 30px rgba(0,0,0,0.35);

/* Semantics */
--success: #22C55E;
--warning: #F59E0B;
--danger: #EF4444;
```

#### Light `:root[data-theme="light"]`
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
--primary: #0891B2;         /* brand primary (teal) */
--primary-2: #0E7490;       /* hover */
--secondary: #4F46E5;       /* indigo secondary */
--accent: #0891B2;          /* alias for primary */

/* UI */
--ring: rgba(8,145,178,0.25);
--shadow: 0 10px 30px rgba(11,18,32,0.10);

/* Semantics */
--success: #16A34A;
--warning: #D97706;
--danger: #DC2626;
```

---

## Color Usage Rules (MANDATORY)

### PRIMARY COLOR (--primary)
Use ONLY for:
- Primary CTA buttons
- Primary links
- Active navigation item
- Key highlights in hero headline
- Focus rings (with --ring)

Do NOT use primary for:
- Large backgrounds
- Card backgrounds
- Body text

### SECONDARY COLOR (--secondary)
Use SPARINGLY for:
- Small badges or tags
- Subtle section dividers
- Decorative accents (max 10% usage)

Do NOT use secondary for:
- Primary CTAs
- Headings
- Large surfaces

### ACCENT COLOR (--accent)
- Alias of --primary
- May be used for glow effects or subtle gradients ONLY
- Never as plain text color for paragraphs

### TEXT COLORS
- Headings: --text
- Body text: --text-2 or --muted
- Never use primary or secondary for long text blocks

### SURFACES
- Page background: --bg
- Cards / sections: --panel or --panel-2
- Borders: --border only

### BUTTON STYLES
Primary Button:
- background: --primary
- text: dark background contrast (--bg)
- hover: --primary-2

Secondary/Outline Button:
- background: transparent
- border: --border
- text: --text
- hover: subtle background using --panel-2

### ERROR / SUCCESS COLORS
- Use semantic tokens only (--success, --warning, --danger)
- Never repurpose primary/secondary for status indicators

### GENERAL RULE
If a UI element looks visually loud, it is probably using the wrong color.
The overall aesthetic must remain calm, restrained, and technical.

---

## Design Correction Rules

- Reduce vertical whitespace by ~25–35% across sections
- Increase hierarchy: hero is visually strong; other sections are calmer
- Avoid repeating the same card layout everywhere
- Buttons:
  - Primary: solid (--primary)
  - Secondary: outline (border + text)
  - Consistent hover/active states
- Cards:
  - Radius 12–16px
  - Subtle border + shadow
  - Clear Outcome → Stack → Role structure

---

## Visual Design Rules (NON-NEGOTIABLE)

### 1. Proof Bar → Proof Tiles (2x2 Grid)
Replace bullet separator row with a 2x2 grid of "Proof Tiles".
Each tile contains:
- Small outline icon
- Short title
- 1 supporting line

Tiles:
- **Payments & reconciliation** → "Webhook-safe flows, recovery paths, traceability"
- **Wallets & ledgers** → "Balance correctness, lifecycle states, auditability"
- **Event-driven services** → "Queues, workers, idempotency, retries"
- **AWS / K8s / CI/CD** → "Deploy safely, monitor, iterate"

### 2. Section Dividers
Add consistent dividers between major sections:
- Thin border line AND/OR subtle gradient divider
- Section label chip aligned left (e.g. "Selected work")
- Tighter, more rhythmic spacing

### 3. Visual Signatures (NO stock photos)
At least 3 visual elements across homepage:
- Service cards with icons
- "How I work" as visual stepper with connecting line + icons
- Case study cards with visual thumbnail area:
  - Abstract gradient thumbnail OR
  - Mini "system diagram" SVG (simple)
- Generate simple SVGs/gradients locally (no external images)

### 4. Service Cards (2 columns desktop)
Each card contains:
- Icon
- 1-liner description
- "Typical outcomes" (2 bullets)
- Stack tags (small)
Keep scannable.

### 5. How I Work → Horizontal Stepper
Convert to 3-step horizontal stepper:
- Number + icon
- Title
- One sentence
- Subtle connector line between steps

### 6. About Page Visual Anchors
Must NOT be a wall of text. Add:
- "Now" panel (location, focus, availability)
- "Focus areas" 2x2 tile grid with icons
- "Principles" row (3 chips)
- Experience timeline with icons and better spacing

### 7. Header Branding
Replace "Fahad Hussain" text with monogram logo:
- Rounded square with "FH"
- Subtle border and glow
- Accessible: includes sr-only "Home"
Keep nav items and CTA.

### 8. Easter Egg (ONE only)
Choose one:
- **Option A:** Footer command snippet that copies on click (e.g., "curl /hello")
- **Option B:** "System Status: Operational" chip with tooltip joke
Implement cleanly, tastefully.

### 9. Contrast & Surfaces
- Increase contrast between --bg and --panel
- Panel should be visibly distinct from background
- Use --panel-2 for elevated/hover states

---

## Content Rules (CRITICAL)

- Remove vague marketing claims (e.g., "millions of transactions") unless backed by public data
- Use concrete, believable engineering outcomes:
  - Wallet ledger & transaction lifecycle
  - Multi-gateway payment integrations + webhook reconciliation
  - Event-driven processing (RabbitMQ / BullMQ)
  - AWS EKS deployments + CI/CD pipelines
  - Elasticsearch indexing & performance improvements
  - System migrations & re-architecture
- Tone must be calm, confident, and technical — not salesy

---

## Typography
- Sans: Inter (or similar)
- Mono (optional for tags): system mono stack

## UI Rules
- Rounded corners: 12–16px
- Subtle borders, soft shadows
- Small hover lift (2px) on cards
- Minimal animation

---

## Pages
- / (Home)
- /work (Case study index)
- /work/[slug] (Case study detail)
- /blog (Blog index)
- /blog/[slug] (Blog detail)
- /about
- /contact
- /privacy (optional)

---

## Homepage Sections

### 1. Hero
**Headline:**
"I build payment systems and internal platforms that survive production."

**Subheadline:**
"Senior Software Engineer / Tech Lead specializing in fintech backends, payments, cloud infrastructure, and system architecture."

**CTAs:**
- Primary: "View Selected Work" → /work
- Secondary (outline): "Get in Touch" → /contact

Visual: Subtle grid/noise + gradient glow (ONLY place for decorative effects)

### 2. Proof Tiles (below hero)
2x2 grid of proof tiles (NOT bullet row). Each tile:
- Icon (outline style)
- Title
- Supporting line

Tiles:
- **Payments & reconciliation** → "Webhook-safe flows, recovery paths, traceability"
- **Wallets & ledgers** → "Balance correctness, lifecycle states, auditability"
- **Event-driven services** → "Queues, workers, idempotency, retries"
- **AWS / K8s / CI/CD** → "Deploy safely, monitor, iterate"

### 3. Featured Case Studies (3 cards)
These are PLACEHOLDERS only. Real case studies will be loaded from Sanity later.

Card structure:
- Title
- One-line problem
- One-line outcome
- Stack tags
- Link: "View case study"

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

### 4. Services (4 cards, 2 columns)
Each card: Icon + 1-liner + Typical outcomes (2 bullets) + Stack tags

- **Architecture & Re-Architecture**
  - "Breaking down legacy systems into scalable, maintainable architectures."
  - Outcomes: "Faster deployments, reduced coupling", "Clear migration paths"
  - Stack: System Design, Microservices

- **Backend APIs & Integrations**
  - "Designing robust APIs and integrating external services safely."
  - Outcomes: "Reliable third-party integrations", "Clean API contracts"
  - Stack: REST, GraphQL, Webhooks

- **Payment Systems**
  - "Wallets, gateways, webhooks, reconciliation, and failure-safe flows."
  - Outcomes: "Zero missed transactions", "Full audit trails"
  - Stack: Payments, Ledgers, Queues

- **Cloud & DevOps**
  - "Dockerized deployments, Kubernetes, CI/CD, and monitoring."
  - Outcomes: "Safe, repeatable deploys", "Production observability"
  - Stack: AWS, K8s, Docker

### 5. How I Work (Horizontal Stepper)
3-step horizontal stepper with connecting line and icons:

1. **Understand** (icon: magnifying glass)
   - "Map the system, identify constraints, clarify requirements."

2. **Design** (icon: blueprint/layers)
   - "Build for failure, scale, and observability."

3. **Ship** (icon: rocket)
   - "Deploy incrementally, monitor, iterate."

Visual: Number badges, icons, connector line between steps.

### 6. Latest Writing
If no blog posts exist yet, show 3 "Coming Soon" cards with titles:
- "Designing Payment Systems That Don't Lose Money"
- "Event-Driven Architectures in Real Fintech Products"
- "Lessons from Re-Architecting Legacy Systems"

Do NOT show "No posts yet".

### 7. Contact CTA
"Let's discuss your next project" + button

---

## About Page

### Visual Structure (NOT a wall of text)

#### "Now" Panel (right sidebar or top card)
- Location: Dubai, UAE
- Focus: Fintech infrastructure
- Availability: Open to consulting / contract work

#### Intro (4-5 lines)
I'm a senior software engineer and technical lead based in Dubai, working primarily in fintech and financial platforms.

My work focuses on designing and operating backend systems where correctness, reliability, and performance actually matter — payments, wallets, transaction processing, internal platforms, and supporting infrastructure.

#### Focus Areas (2x2 Grid with Icons)
- **Payment Systems** (icon: credit card) → "Gateways, reconciliation, failure handling"
- **Backend Architecture** (icon: layers) → "APIs, services, data flows"
- **Event-Driven Systems** (icon: arrows) → "Queues, workers, async processing"
- **Cloud Infrastructure** (icon: cloud) → "AWS, Kubernetes, CI/CD"

#### Principles (3 chips row)
- "Clarity over cleverness"
- "Incremental over rewrite"
- "Production over assumptions"

#### Experience Timeline
Timeline cards with icons and better spacing. Keep bullet points factual and verifiable.

---

## Sanity Content Models

### post
- title: string
- slug: slug
- excerpt: text
- coverImage: image
- publishedAt: datetime
- author: string
- categories: array
- body: portable text
- seo: { metaTitle, metaDescription, ogImage, canonicalUrl }

### caseStudy
- title: string
- slug: slug
- summary: text
- problem: text
- solution: text
- outcome: text (NEW - one-line outcome)
- impact: string[]
- stack: string[]
- role: string
- coverImage: image
- featured: boolean
- publishedAt: datetime
- body: portable text (optional)
- seo: { metaTitle, metaDescription, ogImage, canonicalUrl }

### siteSettings
- siteTitle
- siteDescription
- socialLinks { github, linkedin, email }
- defaultOgImage

---

## Data & Rendering
- Fetch content from Sanity using GROQ at build-time.
- Generate routes for /blog/[slug] and /work/[slug] based on slugs.
- Use Sanity Image URL builder for responsive images.
- Prefer public read (no token); use token only if required.
- Featured case studies and blog posts must come from Sanity.
- Homepage uses placeholders only if Sanity has no content.

---

## SEO
- Unique title & meta description per page
- OG/Twitter meta tags
- Canonical URLs
- sitemap.xml + robots.txt
- RSS feed (/rss.xml)
- JSON-LD: WebSite on home, BlogPosting on blog posts

---

## Contact (No Backend)
Use Netlify Forms:
- name, email, message
- hidden form-name field
- Provide mailto fallback

---

## Deployment (Netlify)
- Build command: `npm run build -w apps/web`
- Publish directory: `apps/web/dist`
- Env vars for web:
  - SANITY_PROJECT_ID
  - SANITY_DATASET
  - SANITY_API_VERSION
  - SITE_URL
- Optional build hook:
  - Trigger rebuild on Sanity publish

---

## Repo Structure (recommended)
- apps/
  - web/      (Astro)
  - studio/   (Sanity Studio)
- packages/   (optional shared utilities)

---

## Deliverables
- Working Astro site with theme toggle
- Sanity studio with schemas
- Sample content (2 posts, 2 case studies)
- README with setup steps + env examples


flowchart LR
  U[Visitor / Google] --> CDN[Netlify CDN]
  CDN --> WEB[Astro Site (Static HTML)]
  WEB -->|Build-time fetch (GROQ)| SANITY[Sanity Content Lake]
  SANITY --> STUDIO[Sanity Studio (Editors)]
  STUDIO -->|Publish| SANITY
  SANITY -->|Webhook (optional)| NETLIFY[Netlify Build Hook]
  NETLIFY -->|Build & Deploy| WEB

  U -->|Contact Form Submit| NF[Netlify Forms]
  NF -->|Email/Notifications| YOU[(You)]
