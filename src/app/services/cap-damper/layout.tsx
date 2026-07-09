import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services/cap-damper';

export const metadata: Metadata = {
  title: "Chimney Caps & Dampers Waco TX | EmberStack Chimney & Fireplace",
  description: "Chimney caps, spark arrestors, and dampers in Waco and Central Texas. Stop animals, rain, and energy loss — CSIA-certified install.",
  keywords: ["chimney cap Waco TX", "chimney damper installation", "spark arrestor Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Caps & Dampers Waco TX | EmberStack Chimney & Fireplace",
    description: "Chimney caps and dampers installed right across Central Texas.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Caps & Dampers",
  description: "Chimney cap and damper installation in Waco and Central Texas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "EmberStack Chimney & Fireplace",
    url: BASE_URL,
    telephone: "+12548404040",
  },
  serviceType: "Caps & Dampers",
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
