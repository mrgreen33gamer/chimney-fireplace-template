import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/industries/property-management`;

export const metadata: Metadata = {
  title: "Chimney Services for Property Management | EmberStack Waco TX",
  description: "Multi-unit chimney sweeps, repairs, dryer vents, and inspections for property managers across Waco and Central Texas. COIs available, volume pricing.",
  keywords: ["property management chimney service Waco", "apartment chimney sweep", "multi-unit dryer vent cleaning Texas", "EmberStack Chimney & Fireplace"],
  alternates: { canonical: url },
  openGraph: {
    title: "Chimney Services for Property Management | EmberStack",
    description: "Portfolio-wide chimney and dryer-vent service for property managers in Central Texas.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
