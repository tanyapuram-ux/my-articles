export const featuredPublications = [
  { name: 'Entrepreneurship Handbook', mark: 'EH', audience: '445K followers', description: 'A resource for entrepreneurs building and growing companies.', articles: 6, href: 'https://ehandbook.com/about', image: '/logos/eh.png', background: '#071f1d' },
  { name: 'Towards AI', mark: 'TA', audience: '149K followers', description: 'A publication covering artificial intelligence, technology, and innovation.', articles: 12, href: 'https://pub.towardsai.net/', image: '/logos/tai-square.png', background: '#24aade', continuous: true },
  { name: 'Investor\'s Handbook', mark: 'IH', audience: '30K followers', description: 'A publication focused on investing, markets, and financial ideas.', articles: 4, href: 'https://medium.com/the-investors-handbook', image: '/logos/ih.png', background: '#f5f3ef' },
  { name: 'CEO & Founder of Tart', mark: 'T', audience: '', description: 'A founder-led beverage brand spotlighting product, storytelling, and community.', articles: 1, href: 'https://drinktart.com/pages/press', image: '/logos/tart.jpg', background: '#d85b39', continuous: true },
  { name: 'Startup Stash', mark: 'SS', audience: '200K/mo', description: 'A startup discovery platform with a large monthly audience of founders and operators.', articles: 0, href: 'https://startupstash.com/', image: '/logos/sus.png', background: '#f5f3ef' },
  { name: 'LinkedIn', mark: 'in', audience: '', description: 'A profile featuring founder insights, professional milestones, and thought leadership.', articles: 8, href: 'https://www.linkedin.com/in/tanya-puram/recent-activity/all/', image: '/logos/li.webp', background: '#0b66c2' },
] as const;

export const featuredCompanies = [
  { name: 'Founder communities', mark: 'FC', relationship: 'Contributor', description: 'Shared essays and conversations with builders shaping the next generation of companies.' },
  { name: 'Technology platforms', mark: 'TP', relationship: 'Independent voice', description: 'Ideas on practical technology, AI, and the systems changing how teams work.' },
  { name: 'Creator networks', mark: 'CN', relationship: 'Community member', description: 'A growing network of writers, founders, and curious people passing ideas forward.' },
] as const;

export const mediaMentions = [
  { source: 'Medium Staff Picks', date: 'May 2026', href: 'https://medium.com/' },
  { source: 'Founder community roundup', date: 'March 2026', href: 'https://www.linkedin.com/' },
  { source: 'The Startup newsletter', date: 'January 2026', href: 'https://medium.com/swlh' },
] as const;

export const featuredStats = {
  combinedReach: '1.5M+',
  publicationsFeatured: 8,
  articlesPublished: 14,
  topPublication: 'The Startup',
};