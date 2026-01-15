import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 2,
      description: 'Used for SEO and social sharing',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'defaultOgImage',
      title: 'Default OG Image',
      type: 'image',
      description: 'Default image for social sharing when no specific image is set',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
    },
  },
});
