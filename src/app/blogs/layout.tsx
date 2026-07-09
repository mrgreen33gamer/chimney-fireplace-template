import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';

export const metadata: Metadata = {
  title: 'Chimney & Fireplace Tips & Insights | EmberStack Chimney & Fireplace Blog',
  description:
    'Chimney safety tips, chimney repair repair guides, and door maintenance advice for Waco and Central Texas homeowners from EmberStack Chimney & Fireplace.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Chimney & Fireplace Tips & Insights | EmberStack Chimney & Fireplace Blog',
    description: 'Practical chimney guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'EmberStack Chimney & Fireplace',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
