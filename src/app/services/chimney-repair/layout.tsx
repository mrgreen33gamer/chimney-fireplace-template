import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services/chimney-repair';

export const metadata: Metadata = {
  title: "Chimney Repair Waco TX | Crown, Flashing & Liner | EmberStack",
  description: "Chimney repair in Waco and Central Texas — crowns, flashing, masonry, and liners. CSIA-certified, flat-rate quotes, Clean Sweep Guarantee · Fully Insured.",
  keywords: ["chimney repair Waco TX", "chimney crown repair", "chimney flashing Waco", "liner repair Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Chimney Repair Waco TX | EmberStack Chimney & Fireplace",
    description: "Crown, flashing, masonry, and liner repairs for Central Texas chimneys.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chimney Repair",
  description: "Chimney crown, flashing, masonry, and liner repairs in Waco and Central Texas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "EmberStack Chimney & Fireplace",
    url: BASE_URL,
    telephone: "+12548404040",
  },
  serviceType: "Chimney Repair",
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
