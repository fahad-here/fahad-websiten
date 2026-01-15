import type { APIRoute } from 'astro';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: import.meta.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { slug, type } = body;

    if (!slug || !type) {
      return new Response(JSON.stringify({ error: 'Missing slug or type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (type !== 'post' && type !== 'caseStudy') {
      return new Response(JSON.stringify({ error: 'Invalid type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Find the document by slug
    const query = `*[_type == $type && slug.current == $slug][0]{ _id, views }`;
    const document = await client.fetch(query, { type, slug });

    if (!document) {
      return new Response(JSON.stringify({ error: 'Document not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Increment views
    const currentViews = document.views || 0;
    const newViews = currentViews + 1;

    await client.patch(document._id).set({ views: newViews }).commit();

    return new Response(JSON.stringify({ views: newViews }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error incrementing view:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const prerender = false;
