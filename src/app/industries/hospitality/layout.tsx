import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/industries/hospitality`;

export const metadata: Metadata = {
  title: "Chimney & Fireplace Service for Hospitality | EmberStack Waco TX",
  description: "Guest-ready fireplaces, dryer vents, and inspections for hotels, B&Bs, and lodging across Waco and Central Texas.",
  keywords: ["hotel fireplace service Waco", "hospitality chimney sweep", "lodging dryer vent cleaning Texas", "EmberStack Chimney & Fireplace"],
  alternates: { canonical: url },
  openGraph: {
    title: "Hospitality Chimney Service | EmberStack",
    description: "Fireplace and dryer-vent programs for Central Texas lodging.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
