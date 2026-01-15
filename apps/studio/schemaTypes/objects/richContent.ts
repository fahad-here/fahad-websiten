import { defineType, defineArrayMember } from 'sanity';

/**
 * Shared Portable Text type for blog posts and case studies.
 * Supports headings, lists, links, inline code, images, code blocks, callouts, and dividers.
 */
export default defineType({
  name: 'richContent',
  title: 'Rich Content',
  type: 'array',
  of: [
    // Standard block
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
          { title: 'Inline Code', value: 'code' },
          { title: 'Strikethrough', value: 'strike' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                    allowRelative: true,
                  }),
              },
              {
                name: 'openInNewTab',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: false,
              },
            ],
          },
        ],
      },
    }),

    // Image block with caption
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Optional caption displayed below the image',
        },
      ],
    }),

    // Code block with syntax highlighting support
    defineArrayMember({
      name: 'codeBlock',
      type: 'object',
      title: 'Code Block',
      icon: () => '💻',
      fields: [
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          initialValue: 'text',
          options: {
            list: [
              { title: 'Plain Text', value: 'text' },
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'JSX', value: 'jsx' },
              { title: 'TSX', value: 'tsx' },
              { title: 'Python', value: 'python' },
              { title: 'Bash / Shell', value: 'bash' },
              { title: 'SQL', value: 'sql' },
              { title: 'JSON', value: 'json' },
              { title: 'YAML', value: 'yaml' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Go', value: 'go' },
              { title: 'Rust', value: 'rust' },
              { title: 'Ruby', value: 'ruby' },
              { title: 'PHP', value: 'php' },
              { title: 'Java', value: 'java' },
              { title: 'C#', value: 'csharp' },
              { title: 'Dockerfile', value: 'dockerfile' },
              { title: 'GraphQL', value: 'graphql' },
              { title: 'Markdown', value: 'markdown' },
            ],
          },
        },
        {
          name: 'filename',
          type: 'string',
          title: 'Filename',
          description: 'Optional filename to display (e.g., "server.ts")',
        },
        {
          name: 'code',
          type: 'text',
          title: 'Code',
          rows: 15,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'highlightLines',
          type: 'string',
          title: 'Highlight Lines',
          description: 'Lines to highlight (e.g., "1,3-5,10")',
          validation: (Rule) =>
            Rule.regex(/^[\d,\-\s]*$/, {
              name: 'highlightLines',
              invert: false,
            }).error('Only numbers, commas, and hyphens allowed (e.g., "1,3-5,10")'),
        },
        {
          name: 'showLineNumbers',
          type: 'boolean',
          title: 'Show Line Numbers',
          description: 'Display line numbers in the code block',
          initialValue: true,
        },
      ],
      preview: {
        select: {
          language: 'language',
          filename: 'filename',
          code: 'code',
        },
        prepare({ language, filename, code }) {
          const title = filename || `${language || 'text'} code block`;
          const subtitle = code ? code.slice(0, 50) + '...' : '';
          return { title, subtitle };
        },
      },
    }),

    // Callout block for tips, warnings, etc.
    defineArrayMember({
      name: 'callout',
      type: 'object',
      title: 'Callout',
      icon: () => '💡',
      fields: [
        {
          name: 'tone',
          type: 'string',
          title: 'Tone',
          initialValue: 'info',
          options: {
            list: [
              { title: 'Info', value: 'info' },
              { title: 'Success', value: 'success' },
              { title: 'Warning', value: 'warning' },
              { title: 'Danger', value: 'danger' },
            ],
            layout: 'radio',
          },
        },
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          description: 'Optional title for the callout',
        },
        {
          name: 'body',
          title: 'Body',
          type: 'array',
          validation: (Rule) => Rule.required(),
          of: [
            {
              type: 'block',
              styles: [{ title: 'Normal', value: 'normal' }],
              lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                  { title: 'Inline Code', value: 'code' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'Link',
                    fields: [
                      {
                        name: 'href',
                        type: 'url',
                        title: 'URL',
                        validation: (Rule) =>
                          Rule.uri({
                            scheme: ['http', 'https', 'mailto', 'tel'],
                            allowRelative: true,
                          }),
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          tone: 'tone',
          title: 'title',
          body: 'body',
        },
        prepare({ tone, title, body }) {
          const toneIcons: Record<string, string> = {
            info: 'ℹ️',
            success: '✅',
            warning: '⚠️',
            danger: '🚨',
          };
          const icon = toneIcons[tone as string] || 'ℹ️';
          // Extract text from Portable Text for preview
          const bodyText =
            body && Array.isArray(body)
              ? body
                  .filter((block: any) => block._type === 'block')
                  .map((block: any) =>
                    block.children?.map((child: any) => child.text || '').join('')
                  )
                  .join(' ')
              : '';
          return {
            title: `${icon} ${title || tone?.charAt(0).toUpperCase() + tone?.slice(1) || 'Info'}`,
            subtitle: bodyText ? bodyText.slice(0, 60) + '...' : '',
          };
        },
      },
    }),

    // Divider for section breaks
    defineArrayMember({
      name: 'divider',
      type: 'object',
      title: 'Divider',
      icon: () => '―',
      fields: [
        {
          name: 'style',
          type: 'string',
          title: 'Style',
          initialValue: 'default',
          options: {
            list: [
              { title: 'Default', value: 'default' },
              { title: 'Dots', value: 'dots' },
              { title: 'Space', value: 'space' },
            ],
          },
        },
      ],
      preview: {
        prepare() {
          return { title: '── Section Divider ──' };
        },
      },
    }),
  ],
});
