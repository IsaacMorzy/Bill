import { config, fields, collection } from '@keystatic/core';

const storageMode = (process.env.KEYSTATIC_STORAGE_MODE as 'github' | 'local') ?? 'local';
const repoOwner = process.env.KEYSTATIC_REPO_OWNER ?? 'IsaacMorzy';
const repoName = process.env.KEYSTATIC_REPO_NAME ?? 'Bill';

export default config({
  storage:
    storageMode === 'github'
      ? { kind: 'github', repo: `${repoOwner}/${repoName}` }
      : { kind: 'local' },

  collections: {
    demands: collection({
      label: 'Demands',
      slugField: 'title',
      path: 'src/content/demands/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Demand Title' } }),
        order: fields.number({
          label: 'Display Order',
          description: 'Lower numbers appear first on the page',
        }),
        icon: fields.text({
          label: 'Icon Name',
          description: 'Lucide icon name (e.g., "scale", "heart", "globe")',
        }),
        content: fields.document({
          label: 'Description',
          formatting: true,
          links: true,
        }),
      },
    }),

    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Post Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
          description: 'Short summary for cards and previews',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          images: true,
        }),
      },
    }),

    platform: collection({
      label: 'Platform & Bio',
      slugField: 'title',
      path: 'src/content/platform/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Section Title' } }),
        order: fields.number({
          label: 'Display Order',
          description: 'Lower numbers appear first',
        }),
        sectionType: fields.select({
          label: 'Section Type',
          options: [
            { label: 'Bio / About', value: 'bio' },
            { label: 'Platform Statement', value: 'platform' },
            { label: 'Policy Area', value: 'policy' },
          ],
          defaultValue: 'policy',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          images: true,
        }),
      },
    }),

    press: collection({
      label: 'Press Releases',
      slugField: 'title',
      path: 'src/content/press/**',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        source: fields.text({ label: 'Source / Outlet' }),
        sourceUrl: fields.url({ label: 'Original Link' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
