import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services/annual-inspection';

export const metadata: Metadata = {
  title: "Annual Chimney Inspection Waco TX | Level 1–2 | EmberStack",
  description: "Annual chimney inspections in Waco and Central Texas. Level 1–2 checks with photos, flat-rate pricing, CSIA-certified sweeps.",
  keywords: ["chimney inspection Waco TX", "Level 2 chimney inspection", "annual fireplace inspection Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Annual Chimney Inspections Waco TX | EmberStack Chimney & Fireplace",
    description: "Level 1–2 chimney inspections with photo documentation for Central Texas homes.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Annual Inspections",
  description: "Level 1–2 chimney inspections in Waco and Central Texas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "EmberStack Chimney & Fireplace",
    url: BASE_URL,
    telephone: "+12548404040",
  },
  serviceType: "Annual Inspections",
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
