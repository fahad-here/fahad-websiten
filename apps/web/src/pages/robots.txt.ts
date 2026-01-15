import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const siteUrl = context.site || 'https://fahadhussain.dev';

  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
