import type { Metadata } from "next";
import { getPostBySlug } from '&/blog-posts';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const slug = 'gas-vs-wood-fireplace-costs';
const post = getPostBySlug(slug);
const url = `${BASE_URL}/blogs/${slug}`;

export const metadata: Metadata = {
  title: post ? `${post.title} | EmberStack Chimney & Fireplace` : 'Gas vs. Wood Fireplace Costs | EmberStack',
  description: post?.excerpt ?? 'Fireplace cost guide from EmberStack Chimney & Fireplace in Waco, TX.',
  keywords: [post?.category ?? 'fireplace', 'gas vs wood', 'Waco TX', 'EmberStack Chimney & Fireplace'],
  alternates: { canonical: url },
  openGraph: {
    title: post?.title ?? 'Gas vs. Wood Fireplace Costs',
    description: post?.excerpt ?? '',
    url, siteName: 'EmberStack Chimney & Fireplace', locale: 'en_US', type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
