import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About EmberStack Chimney & Fireplace — Waco TX Chimney & Fireplace Company Since 2006",
  description:
    "Meet the EmberStack Chimney & Fireplace team. Locally owned and operated in Waco, Texas since 2006. CSIA-certified sweeps, bonded & insured, honest pricing, and a Clean Sweep Guarantee · Fully Insured. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about EmberStack Chimney & Fireplace",
    "Waco chimney and fireplace company",
    "chimney contractor Waco TX",
    "locally owned chimney Waco",
    "CSIA-certified chimney Waco Texas",
    "Hank Collier EmberStack Chimney & Fireplace",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About EmberStack Chimney & Fireplace — Waco TX Chimney & Fireplace Company Since 2006",
    description:
      "Locally owned chimney and fireplace company in Waco, TX. CSIA-certified, flat-rate pricing, Clean Sweep Guarantee · Fully Insured.",
    url,
    siteName: "EmberStack Chimney & Fireplace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EmberStack Chimney & Fireplace — Waco TX Since 2006",
    description: "Locally owned chimney and fireplace company in Waco, TX. CSIA-certified, flat-rate pricing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "EmberStack Chimney & Fireplace",
  url: BASE_URL,
  telephone: "+12548404040",
  email: "hello@emberstackchimney.com",
  foundingDate: "2006",
  founder: {
    "@type": "Person",
    name: "Hank Collier",
    jobTitle: "Owner & Lead Chimney Technician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1500 N 15th St",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76707",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/emberstackchimney",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {children}
    </>
  );
}
