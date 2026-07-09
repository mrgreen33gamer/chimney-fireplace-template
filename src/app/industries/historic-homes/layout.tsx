import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = `${BASE_URL}/industries/historic-homes`;

export const metadata: Metadata = {
  title: "Chimney Care for Historic Homes | EmberStack Waco TX",
  description: "Preservation-minded chimney repairs, sweeps, and fireplace upgrades for historic homes in Waco and Central Texas.",
  keywords: ["historic home chimney repair Waco", "masonry chimney restoration", "old fireplace insert Texas", "EmberStack Chimney & Fireplace"],
  alternates: { canonical: url },
  openGraph: {
    title: "Chimney Care for Historic Homes | EmberStack",
    description: "Preservation-minded chimney service for older Central Texas homes.",
    url, siteName: "EmberStack Chimney & Fireplace", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
