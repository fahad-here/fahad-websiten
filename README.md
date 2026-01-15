# Fahad Hussain - Personal Website

A premium, fintech-inspired personal website built with Astro, Sanity CMS, and TailwindCSS.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **CMS**: [Sanity](https://www.sanity.io/) - Headless CMS
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Hosting**: [Netlify](https://www.netlify.com/)
- **Language**: TypeScript

## Project Structure

```
fahad-website/
├── apps/
│   ├── web/          # Astro website
│   └── studio/       # Sanity Studio
├── packages/         # Shared utilities (optional)
├── plan/            # Project planning docs
├── netlify.toml     # Netlify configuration
└── package.json     # Workspace root
```

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fahadhussain/fahad-website.git
   cd fahad-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   # Copy example env files
   cp apps/web/.env.example apps/web/.env
   cp apps/studio/.env.example apps/studio/.env
   ```

4. Configure Sanity:
   - Create a new project at [sanity.io/manage](https://www.sanity.io/manage)
   - Copy your project ID to the `.env` files
   - Update `apps/studio/sanity.config.ts` with your project ID

### Development

Run the Astro site:
```bash
npm run dev
```

Run Sanity Studio:
```bash
npm run studio
```

### Building for Production

```bash
npm run build
```

The built site will be in `apps/web/dist/`.

## Sanity Setup

### Import Sample Data

The `apps/studio/sample-data.json` file contains example case studies and blog posts. To import:

1. Install Sanity CLI: `npm install -g @sanity/cli`
2. Navigate to studio: `cd apps/studio`
3. Run: `sanity dataset import sample-data.json production`

### Content Models

- **Post**: Blog articles with portable text body
- **Case Study**: Portfolio pieces with problem/solution/impact
- **Site Settings**: Global configuration (title, description, social links)

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build --workspace=apps/web`
3. Set publish directory: `apps/web/dist`
4. Add environment variables:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET`
   - `PUBLIC_SANITY_API_VERSION`
   - `SITE_URL`

### Sanity Studio

Deploy the studio using:
```bash
cd apps/studio
npx sanity deploy
```

Or host it on Netlify as a separate site.

## Features

- Dark/Light theme toggle
- SEO optimized (meta tags, OG images, sitemap, RSS)
- Responsive design
- Contact form via Netlify Forms
- Blog with portable text
- Case studies/portfolio

## Environment Variables

### Web (`apps/web/.env`)

```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
SITE_URL=https://yourdomain.com
```

### Studio (`apps/studio/.env`)

```
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

## License

MIT
