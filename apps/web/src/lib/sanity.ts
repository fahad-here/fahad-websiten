import { createClient } from '@sanity/client';
import type { Post, CaseStudy, SiteSettings } from '../types';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true,
});

// GROQ Queries
const postFields = `
  _id,
  _type,
  title,
  slug,
  excerpt,
  coverImage,
  publishedAt,
  author,
  categories,
  readingTime,
  body,
  seo
`;

const caseStudyFields = `
  _id,
  _type,
  title,
  slug,
  summary,
  problem,
  solution,
  impact,
  stack,
  role,
  coverImage,
  body,
  featured,
  publishedAt,
  seo
`;

// Posts
export async function getAllPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {${postFields}}`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {${postFields}}`,
    { slug }
  );
}

export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit] {${postFields}}`,
    { limit: limit - 1 }
  );
}

// Case Studies
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {${caseStudyFields}}`
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {${caseStudyFields}}`,
    { slug }
  );
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  return client.fetch(
    `*[_type == "caseStudy" && featured == true] | order(publishedAt desc) {${caseStudyFields}}`
  );
}

// Site Settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      _id,
      _type,
      siteTitle,
      siteDescription,
      socialLinks,
      defaultOgImage
    }`
  );
}
