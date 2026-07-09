import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services/fireplace-install';

export const metadata: Metadata = {
  title: "Fireplace Installation Waco TX | Wood, Gas & Inserts | EmberStack",
  description: "Fireplace installation in Waco and Central Texas — wood, gas, and inserts with proper venting. Flat-rate quotes, CSIA-certified crews.",
  keywords: ["fireplace installation Waco TX", "gas insert Waco", "wood fireplace install Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Fireplace Installation Waco TX | EmberStack Chimney & Fireplace",
    description: "Wood, gas, and insert fireplace installation for Central Texas homes.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Installation",
  description: "Wood, gas, and insert fireplace installation in Waco and Central Texas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "EmberStack Chimney & Fireplace",
    url: BASE_URL,
    telephone: "+12548404040",
  },
  serviceType: "Fireplace Installation",
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
