export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  canonicalUrl?: string;
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage?: SanityImage;
  publishedAt: string;
  author: string;
  categories: string[];
  readingTime?: number;
  body: any[]; // Portable Text
  seo?: SEO;
}

export interface CaseStudy {
  _id: string;
  _type: 'caseStudy';
  title: string;
  slug: { current: string };
  summary: string;
  problem: string;
  solution: string;
  outcome?: string; // One-line outcome for cards
  impact: string[];
  stack: string[];
  role: string;
  coverImage?: SanityImage;
  body?: any[]; // Portable Text
  featured: boolean;
  publishedAt: string;
  seo?: SEO;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteTitle: string;
  siteDescription: string;
  socialLinks: SocialLinks;
  defaultOgImage?: SanityImage;
}
