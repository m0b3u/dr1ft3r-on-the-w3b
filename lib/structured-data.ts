import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/cyberdr1ft3r',
    },
    publisher: {
      '@type': 'Person',
      name: 'Cyber Drifter',
      url: 'https://cyberdr1ft3r.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CyberDr1ft3r',
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Ali Boughlalah.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Cyber Drifter',
      url: 'https://github.com/cyberdr1ft3r',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cyber Drifter',
    url: 'https://cyberdr1ft3r.com',
    image: 'https://cyberdr1ft3r.com/og-default.png',
    sameAs: [
      'https://github.com/cyberdr1ft3r',
      'https://x.com/cyberdr1ft3r',
      'https://linkedin.com/in/TODO_LINKEDIN',
    ],
    jobTitle: 'Security Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'CyberDr1ft3r',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
