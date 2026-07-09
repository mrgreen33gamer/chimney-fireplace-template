import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Chimney Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | EmberStack Chimney & Fireplace',
  description:
    'EmberStack Chimney & Fireplace serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, Clean Sweep Guarantee · Fully Insured.',
  keywords: [
    'chimney service areas Central Texas',
    'chimney repair Waco TX',
    'chimney technician Hewitt TX',
    'chimney technician Killeen TX',
    'chimney technician Temple TX',
    'EmberStack Chimney & Fireplace service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Chimney Service Areas | EmberStack Chimney & Fireplace — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate chimney repair, chimney repair repair, and installation. Same-day service available.',
    url,
    siteName: 'EmberStack Chimney & Fireplace',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chimney Service Areas | EmberStack Chimney & Fireplace — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — CSIA-certified chimney service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
