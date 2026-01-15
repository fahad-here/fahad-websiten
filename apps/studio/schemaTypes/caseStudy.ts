import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 2,
      description: 'A brief one-liner about the project',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'problem',
      title: 'Problem',
      type: 'text',
      rows: 4,
      description: 'What challenge was the client facing?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 4,
      description: 'How did you solve it?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome (One-liner)',
      type: 'text',
      rows: 2,
      description: 'A brief one-line outcome for card display (e.g., "Built a unified payment layer with queue-based processing")',
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key metrics and outcomes (e.g., "50% faster performance")',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Technologies used in this project',
    }),
    defineField({
      name: 'role',
      title: 'Your Role',
      type: 'string',
      description: 'e.g., Lead Engineer, Architect, Full-Stack Developer',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this case study on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Extended Content',
      type: 'array',
      description: 'Optional detailed write-up',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      featured: 'featured',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, featured, media } = selection;
      return {
        title,
        subtitle: featured ? 'Featured' : '',
        media,
      };
    },
  },
});
