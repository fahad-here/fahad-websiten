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
    const { slug, type, action } = body;

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

    if (action !== 'like' && action !== 'unlike') {
      return new Response(JSON.stringify({ error: 'Invalid action' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Find the document by slug
    const query = `*[_type == $type && slug.current == $slug][0]{ _id, likes }`;
    const document = await client.fetch(query, { type, slug });

    if (!document) {
      return new Response(JSON.stringify({ error: 'Document not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Increment or decrement likes
    const currentLikes = document.likes || 0;
    const newLikes = action === 'like'
      ? currentLikes + 1
      : Math.max(0, currentLikes - 1);

    await client.patch(document._id).set({ likes: newLikes }).commit();

    return new Response(JSON.stringify({ likes: newLikes }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating like:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const prerender = false;
