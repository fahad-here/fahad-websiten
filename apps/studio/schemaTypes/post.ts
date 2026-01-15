import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
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
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the post',
      validation: (Rule) => Rule.required().max(200),
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
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Fahad Hussain',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'richContent',
      description: 'The main content of the blog post',
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
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
      readOnly: true,
      description: 'View count (updated automatically)',
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0,
      readOnly: true,
      description: 'Like count (updated automatically)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, author, media } = selection;
      return {
        title,
        subtitle: author ? `by ${author}` : '',
        media,
      };
    },
  },
});
