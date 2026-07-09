import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services/chimney-sweep';

export const metadata: Metadata = {
  title: "Chimney Sweep Waco TX | Creosote Cleaning | EmberStack Chimney & Fireplace",
  description: "CSIA-certified chimney sweeping in Waco and Central Texas. Creosote removal, safer draft, flat-rate pricing, Clean Sweep Guarantee · Fully Insured.",
  keywords: [
    "chimney sweep Waco TX",
    "chimney cleaning Waco",
    "creosote removal Central Texas",
    "fireplace sweep Waco",
    "EmberStack Chimney & Fireplace",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Chimney Sweep Waco TX | EmberStack Chimney & Fireplace",
    description: "CSIA-certified chimney sweeping in Waco and Central Texas. Creosote removal, safer draft, flat-rate pricing.",
    url,
    siteName: "EmberStack Chimney & Fireplace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep Waco TX | EmberStack Chimney & Fireplace",
    description: "CSIA-certified chimney sweeping in Waco and Central Texas.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Sweep",
  description: "CSIA-certified chimney sweeping and creosote removal for Waco and Central Texas homes.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "EmberStack Chimney & Fireplace",
    url: BASE_URL,
    telephone: "+12548404040",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1500 N 15th St",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Chimney Sweep",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
