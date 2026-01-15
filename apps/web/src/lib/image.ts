import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';
import type { SanityImage } from '../types';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage | undefined) {
  if (!source) return null;
  return builder.image(source);
}

export function getImageUrl(
  source: SanityImage | undefined,
  options?: { width?: number; height?: number; quality?: number }
): string | null {
  if (!source) return null;

  let img = builder.image(source);

  if (options?.width) img = img.width(options.width);
  if (options?.height) img = img.height(options.height);
  if (options?.quality) img = img.quality(options.quality);

  return img.url();
}
