import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services/dryer-vent';

export const metadata: Metadata = {
  title: "Dryer Vent Cleaning Waco TX | EmberStack Chimney & Fireplace",
  description: "Full-run dryer vent cleaning in Waco and Central Texas. Reduce fire risk, restore airflow, flat-rate pricing, fully insured.",
  keywords: ["dryer vent cleaning Waco TX", "lint removal dryer vent", "dryer fire prevention Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Dryer Vent Cleaning Waco TX | EmberStack Chimney & Fireplace",
    description: "Full-run dryer vent cleaning for safer, more efficient dryers.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dryer Vent Cleaning",
  description: "Full-run dryer vent cleaning in Waco and Central Texas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "EmberStack Chimney & Fireplace",
    url: BASE_URL,
    telephone: "+12548404040",
  },
  serviceType: "Dryer Vent Cleaning",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
