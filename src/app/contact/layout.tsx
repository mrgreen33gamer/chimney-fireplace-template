// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact EmberStack Chimney & Fireplace | Schedule Service in Waco & Central Texas',
  description:
    'Contact EmberStack Chimney & Fireplace to schedule chimney repair, chimney repair repair, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 840-4040.',
  keywords: [
    'contact EmberStack Chimney & Fireplace',
    'chimney service Waco TX',
    'schedule chimney repair Waco',
    'chimney estimate Central Texas',
    'EmberStack Chimney & Fireplace contact',
    '254-840-4040',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact EmberStack Chimney & Fireplace | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, Clean Sweep Guarantee · Fully Insured, CSIA-certified chimney technicians.',
    url,
    siteName: 'EmberStack Chimney & Fireplace',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact EmberStack Chimney & Fireplace | Waco & Central Texas',
    description: 'Schedule chimney service or get a free estimate. Call (254) 840-4040.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
