import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts } from '../lib/sanity';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();

  return rss({
    title: 'Fahad Hussain | Blog',
    description: 'Articles on software architecture, fintech systems, and engineering best practices.',
    site: context.site || 'https://fahadhussain.dev',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishedAt),
      description: post.excerpt,
      link: `/blog/${post.slug.current}/`,
      categories: post.categories || [],
      author: post.author || 'Fahad Hussain',
    })),
    customData: `<language>en-us</language>`,
  });
}
