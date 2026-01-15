import { toHTML } from '@portabletext/to-html';
import type { PortableTextHtmlComponents } from '@portabletext/to-html';
import { urlFor } from './image';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const components: Partial<PortableTextHtmlComponents> = {
  types: {
    image: ({ value }) => {
      const url = urlFor(value)?.width(800).url();
      return url
        ? `<img src="${url}" alt="${value.alt || ''}" class="rounded-lg my-6" loading="lazy" />`
        : '';
    },
    code: ({ value }) => {
      return `<pre class="bg-panel border border-border rounded-lg p-4 overflow-x-auto my-6"><code class="font-mono text-sm">${escapeHtml(value.code)}</code></pre>`;
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || '';
      const rel = href.startsWith('/') ? '' : 'rel="noopener noreferrer"';
      const target = href.startsWith('/') ? '' : 'target="_blank"';
      return `<a href="${href}" ${rel} ${target} class="text-primary hover:underline">${children}</a>`;
    },
    code: ({ children }) => {
      return `<code class="bg-panel px-1.5 py-0.5 rounded font-mono text-sm">${children}</code>`;
    },
  },
  block: {
    h1: ({ children }) => `<h1 class="text-3xl font-bold mt-8 mb-4">${children}</h1>`,
    h2: ({ children }) => `<h2 class="text-2xl font-bold mt-8 mb-4">${children}</h2>`,
    h3: ({ children }) => `<h3 class="text-xl font-bold mt-6 mb-3">${children}</h3>`,
    h4: ({ children }) => `<h4 class="text-lg font-bold mt-6 mb-3">${children}</h4>`,
    normal: ({ children }) => `<p class="mb-4 leading-relaxed">${children}</p>`,
    blockquote: ({ children }) =>
      `<blockquote class="border-l-4 border-primary pl-4 my-6 italic text-muted">${children}</blockquote>`,
  },
  list: {
    bullet: ({ children }) => `<ul class="list-disc list-inside mb-4 space-y-2">${children}</ul>`,
    number: ({ children }) => `<ol class="list-decimal list-inside mb-4 space-y-2">${children}</ol>`,
  },
  listItem: {
    bullet: ({ children }) => `<li>${children}</li>`,
    number: ({ children }) => `<li>${children}</li>`,
  },
};

export function renderPortableText(content: any[]): string {
  if (!content) return '';
  return toHTML(content, { components });
}
