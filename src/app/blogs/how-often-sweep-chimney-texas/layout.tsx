import type { Metadata } from "next";
import { getPostBySlug } from '&/blog-posts';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const slug = 'how-often-sweep-chimney-texas';
const post = getPostBySlug(slug);
const url = `${BASE_URL}/blogs/${slug}`;

export const metadata: Metadata = {
  title: post ? `${post.title} | EmberStack Chimney & Fireplace` : 'How Often Should You Sweep a Chimney in Texas? | EmberStack',
  description: post?.excerpt ?? 'Chimney and fireplace tips from EmberStack Chimney & Fireplace in Waco, TX.',
  keywords: [post?.category ?? 'chimney', 'Waco TX', 'EmberStack Chimney & Fireplace', 'Central Texas'],
  alternates: { canonical: url },
  openGraph: {
    title: post?.title ?? 'How Often Should You Sweep a Chimney in Texas?',
    description: post?.excerpt ?? '',
    url, siteName: 'EmberStack Chimney & Fireplace', locale: 'en_US', type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
