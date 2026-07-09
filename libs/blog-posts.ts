// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-often-sweep-chimney-texas',
    title:    'How Often Should You Sweep a Chimney in Texas?',
    excerpt:  'Burn season, creosote buildup, and Central Texas weather all affect sweep frequency. Here is a practical schedule for wood and gas fireplaces in the Waco area.',
    category: 'Maintenance',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'How often to sweep a chimney in Texas — Waco homeowner guide',
    featured: true,
  },
  {
    slug:     'creosote-fire-risk-signs',
    title:    'Creosote Fire Risk: Warning Signs Every Homeowner Should Know',
    excerpt:  'Glossy black buildup, lazy smoke, and strong odors are red flags. Learn the stages of creosote and when to call a CSIA-certified sweep in Central Texas.',
    category: 'Safety',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Creosote fire risk signs for chimney safety in Waco TX',
  },
  {
    slug:     'gas-vs-wood-fireplace-costs',
    title:    'Gas vs. Wood Fireplace Costs in Central Texas',
    excerpt:  'Installation, fuel, maintenance, and long-term ownership — an honest cost comparison for Waco-area homeowners choosing between gas and wood.',
    category: 'Installation',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Gas vs wood fireplace cost comparison for Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
