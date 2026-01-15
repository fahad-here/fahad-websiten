import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
// import sitemap from '@astrojs/sitemap';
// TODO: Re-enable sitemap after fixing @astrojs/sitemap bug
// See: https://github.com/withastro/astro/issues - "Cannot read properties of undefined (reading 'reduce')"

const siteUrl = process.env.SITE_URL || 'https://fahadhussain.dev';

export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind(),
    // sitemap({
    //   filter: (page) => !page.includes('['),
    //   customPages: [
    //     `${siteUrl}/`,
    //     `${siteUrl}/about/`,
    //     `${siteUrl}/work/`,
    //     `${siteUrl}/blog/`,
    //     `${siteUrl}/contact/`,
    //   ],
    // }),
  ],
  output: 'hybrid',
  adapter: netlify(),
});
