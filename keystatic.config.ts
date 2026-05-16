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
    settings: collection({
      label: 'Site Settings',
      slugField: 'key',
      path: 'src/content/settings/**',
      format: { contentField: 'content' },
      schema: {
        key: fields.slug({ name: { label: 'Settings Key' } }),
        // ── Campaign Info ──
        campaignName: fields.text({
          label: 'Campaign Name',
          defaultValue: 'Bill Llia for Governor',
        }),
        campaignSlogan: fields.text({
          label: 'Campaign Slogan',
          defaultValue: 'Service with integrity. Leadership with heart.',
        }),

        // ── Hero Section ──
        heroTitle: fields.text({
          label: 'Hero Title',
          defaultValue: 'The Leader Nairobi County Deserves',
        }),
        heroSubtitle: fields.text({
          label: 'Hero Subtitle',
          multiline: true,
          defaultValue:
            'Bill Llia is running for Governor to bring accessible healthcare, quality education, and sustainable economic growth to Nairobi County.',
        }),
        heroStats: fields.array(
          fields.object({
            value: fields.text({ label: 'Stat Value', defaultValue: '12+' }),
            label: fields.text({ label: 'Stat Label', defaultValue: 'Years Service' }),
          }),
          { label: 'Hero Stats', itemLabel: (props) => props.fields.value.value ?? '' }
        ),

        // ── CTA Section ──
        ctaTitle: fields.text({
          label: 'CTA Title',
          defaultValue: 'The Change Starts With You',
        }),
        ctaDescription: fields.text({
          label: 'CTA Description',
          multiline: true,
          defaultValue:
            'This campaign is powered by people who believe in a better Nairobi County.',
        }),
        ctaPrimaryText: fields.text({ label: 'CTA Primary Button', defaultValue: 'Volunteer With Us' }),
        ctaPrimaryHref: fields.text({ label: 'CTA Primary Link', defaultValue: '/contact' }),
        ctaSecondaryText: fields.text({ label: 'CTA Secondary Button', defaultValue: 'Learn More About Bill' }),
        ctaSecondaryHref: fields.text({ label: 'CTA Secondary Link', defaultValue: '/about' }),

        // ── Contact Info ──
        contactEmail: fields.text({ label: 'Contact Email', defaultValue: 'info@billllia.com' }),
        contactPhone: fields.text({ label: 'Contact Phone', defaultValue: '+254 741 105 077' }),
        contactAddress: fields.text({ label: 'Address', defaultValue: 'Nairobi County, Kenya' }),
        facebookUrl: fields.url({ label: 'Facebook URL', defaultValue: 'https://facebook.com/billllia' }),
        twitterUrl: fields.url({ label: 'Twitter/X URL', defaultValue: 'https://twitter.com/billllia' }),
        instagramUrl: fields.url({ label: 'Instagram URL', defaultValue: 'https://instagram.com/billllia' }),

        // ── SEO Defaults ──
        defaultSeoTitle: fields.text({
          label: 'Default SEO Title',
          defaultValue: 'Bill Llia for Governor - Nairobi County',
        }),
        defaultSeoDescription: fields.text({
          label: 'Default SEO Description',
          multiline: true,
          defaultValue:
            'Bill Llia is running for Governor to bring real healthcare, education, and economic opportunity to Nairobi County.',
        }),

        // ── Petition ──
        petitionGoal: fields.number({ label: 'Petition Goal', defaultValue: 1000 }),
        petitionTitle: fields.text({
          label: 'Petition Hero Title',
          defaultValue: 'We Deserve Better Leadership',
        }),
        petitionDescription: fields.text({
          label: 'Petition Hero Description',
          multiline: true,
          defaultValue:
            'Nairobi County deserves a leader who brings real solutions, not empty promises.',
        }),

        // ── About Page ──
        aboutTagline: fields.text({
          label: 'About Tagline',
          defaultValue:
            'A community servant, healthcare advocate, and candidate for Governor committed to building a better Nairobi County.',
        }),
        aboutQuote: fields.text({
          label: 'About Quote',
          defaultValue: '"Service with integrity. Leadership with heart."',
        }),

        // ── Footer ──
        paidForBy: fields.text({
          label: 'Paid For By Text',
          defaultValue: 'Paid for by the Bill Llia for Governor Campaign.',
        }),

        // ── Markdoc content for About bio & Why Running ──
        content: fields.markdoc({
          label: 'About Page Content (bio + why running)',
          description:
            'Use ## Bio, ## Why Running, and ## Journey headings to section the about page content.',
        }),
      },
    }),

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
        content: fields.markdoc({
          label: 'Description',
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
        content: fields.markdoc({
          label: 'Content',
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
        subtitle: fields.text({
          label: 'Card Subtitle',
          description: 'Short description shown on feature cards',
          multiline: true,
        }),
        icon: fields.select({
          label: 'Card Icon',
          options: [
            { label: 'Healthcare', value: 'healthcare' },
            { label: 'Education', value: 'education' },
            { label: 'Economy', value: 'economy' },
            { label: 'Infrastructure', value: 'infrastructure' },
          ],
          defaultValue: 'healthcare',
        }),
        features: fields.array(fields.text({ label: 'Feature' }), {
          label: 'Feature Bullet Points',
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({
          label: 'Full Content',
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
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});
