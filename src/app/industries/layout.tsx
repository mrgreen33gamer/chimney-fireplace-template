import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Property Management, Historic Homes & Commercial | EmberStack Chimney & Fireplace",
  description:
    "EmberStack Chimney & Fireplace serves property management companies, homebuilders & remodelers, and commercial facilities across Waco and Central Texas with chimney repair, installation, and maintenance.",
  keywords: [
    "chimney property management Waco",
    "homebuilder chimneys and fireplaces Texas",
    "commercial chimneys and fireplaces Waco TX",
    "multi-unit chimney service",
    "EmberStack Chimney & Fireplace industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | EmberStack Chimney & Fireplace",
    description: "Chimney and fireplace programs for property managers, homebuilders, and commercial facilities in Central Texas.",
    url,
    siteName: "EmberStack Chimney & Fireplace",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
