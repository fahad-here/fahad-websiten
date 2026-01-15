You are an expert full-stack engineer. Build a production-ready personal website using Astro + Sanity with a premium fintech-inspired design (Option A: dark navy base with cyan/teal accent), supporting BOTH dark and light mode.

GOAL
- A fast, SEO-friendly portfolio + blog site that generates inbound leads.
- No custom backend. Use Netlify for hosting. Use Sanity as headless CMS for blog + optional case studies.
- Provide clean code, good structure, and excellent Lighthouse performance.

TECH STACK
- Astro (latest stable) for the site
- Sanity (latest stable) for CMS
- TypeScript
- TailwindCSS for styling (preferred) OR vanilla CSS with design tokens (if you strongly prefer)
- Deployed on Netlify

SITE PAGES / ROUTES
1) Home: /
2) Work (selected case studies listing): /work
3) Case study detail: /work/[slug]
4) Blog index: /blog
5) Blog post: /blog/[slug]
6) About: /about
7) Contact: /contact
8) Legal (optional): /privacy

HOME PAGE SECTIONS (in order)
- Hero: headline + subheadline + CTAs (View Work, Contact)
- Credibility strip: “Systems I build” + quick tags (FinTech, SaaS, Payments, Cloud)
- Selected Work grid: 3–6 case study cards
- Services: 4 cards (Architecture/Re-architecture, Backend/APIs & Integrations, Cloud/DevOps, Performance & Stability)
- Tech toolbox: grouped badges (Backend, Frontend, Infra, Data)
- Latest writing: 3 latest blog posts
- Contact CTA: short copy + link to contact page

DESIGN / THEME (Option A)
- Minimal, premium “fintech lead” look
- Dark mode default with a toggle; light mode clean and bright
- Colors (use as tokens / CSS variables):
  - --bg: #070B14 (dark navy)
  - --panel: #0B1220
  - --text: #EAF0FF
  - --muted: #9AA6C2
  - --border: rgba(255,255,255,0.08)
  - --accent: #22D3EE (cyan/teal)
  - Light equivalents:
    - --bg: #F7FAFF
    - --panel: #FFFFFF
    - --text: #0B1220
    - --muted: #51607A
    - --border: rgba(11,18,32,0.10)
    - --accent: #0891B2
- Typography:
  - Use a modern sans (e.g., Inter) and optional mono for tags/metrics (e.g., ui-monospace stack)
- UI:
  - Rounded corners (12–16px), subtle shadows, soft borders
  - Micro-interactions: hover lift (2px), subtle glow on accent
  - Avoid heavy animations
- Components:
  - Navbar with active states, theme toggle, and CTA button “Contact”
  - Footer with social links + copyright
  - Cards: WorkCard, ServiceCard, PostCard, Badge, SectionHeader

CONTENT MODEL (Sanity)
Create Sanity schemas for:
1) post
  - title (string)
  - slug (slug from title)
  - excerpt (text)
  - coverImage (image)
  - publishedAt (datetime)
  - author (string)
  - categories (array of strings or references)
  - readingTime (number optional)
  - body (portable text)
  - seo (object): metaTitle, metaDescription, ogImage, canonicalUrl (optional)
2) caseStudy
  - title
  - slug
  - summary (short text)
  - problem (text)
  - solution (text)
  - impact (array of bullet strings)
  - stack (array of strings)
  - role (string)
  - coverImage (image)
  - body (portable text optional)
  - featured (boolean)
  - publishedAt (datetime)
  - seo (same as above)
3) siteSettings
  - siteTitle
  - siteDescription
  - socialLinks (github, linkedin, email)
  - defaultOgImage

DATA FETCHING
- Astro should fetch posts/case studies from Sanity via GROQ.
- Use environment variables for Sanity projectId, dataset, apiVersion, and read token only if needed (prefer public read).
- Generate dynamic routes for /blog/[slug] and /work/[slug].
- Add pagination to /blog if easy (optional).

SEO REQUIREMENTS
- Per-page <title> + meta description
- OpenGraph + Twitter meta
- Canonical URLs for posts
- sitemap.xml and robots.txt
- RSS feed for blog
- JSON-LD structured data for BlogPosting on post pages and WebSite on home (basic)

PERFORMANCE REQUIREMENTS
- Minimal client-side JS; only hydrate theme toggle and any tiny interactive widgets.
- Use responsive images; prefer Sanity image URL builder for sizing.
- Ensure excellent Lighthouse scores.

CONTACT
- Create a contact page with:
  - A simple form (name, email, message)
  - Netlify form attributes so it works without a backend (include a hidden form-name field).
  - Add a fallback mailto link.

PROJECT OUTPUTS
- Provide the full project scaffold in a repository-like structure:
  - /apps/web (Astro site)
  - /apps/studio (Sanity studio)
  - /packages (optional shared)
- Include:
  - README with setup steps
  - .env.example for web and studio
  - Netlify deployment notes (build command, publish directory)
  - A small sample dataset (example posts + case studies) or seed instructions.

IMPLEMENTATION DETAILS
- Use TypeScript types for Post and CaseStudy
- Make components clean and reusable
- Provide sensible defaults and placeholder content for portfolio
- Keep copy natural (not AI-ish), concise, professional

Start by generating:
1) Project structure
2) Sanity schemas
3) Astro pages + components
4) Theme tokens + dark/light toggle
5) Sanity GROQ queries + data utilities
6) SEO utilities (meta, og, sitemap, rss)
7) Netlify form integration

Deliver code files with explanations only where necessary.
