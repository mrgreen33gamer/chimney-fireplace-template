import type { Metadata } from "next";
import { getPostBySlug } from '&/blog-posts';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const slug = 'creosote-fire-risk-signs';
const post = getPostBySlug(slug);
const url = `${BASE_URL}/blogs/${slug}`;

export const metadata: Metadata = {
  title: post ? `${post.title} | EmberStack Chimney & Fireplace` : 'Creosote Fire Risk Signs | EmberStack',
  description: post?.excerpt ?? 'Chimney safety tips from EmberStack Chimney & Fireplace in Waco, TX.',
  keywords: [post?.category ?? 'chimney', 'creosote', 'Waco TX', 'EmberStack Chimney & Fireplace'],
  alternates: { canonical: url },
  openGraph: {
    title: post?.title ?? 'Creosote Fire Risk Signs',
    description: post?.excerpt ?? '',
    url, siteName: 'EmberStack Chimney & Fireplace', locale: 'en_US', type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
