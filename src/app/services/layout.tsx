import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.emberstackchimney.com';
const url = BASE_URL + '/services';

export const metadata: Metadata = {
  title: "Chimney & Fireplace Services | Sweep, Repair, Install | EmberStack",
  description:
    "EmberStack Chimney & Fireplace offers chimney sweep, chimney repair, fireplace installation, caps & dampers, dryer vent cleaning, and annual inspections for Waco and Central Texas. CSIA-certified, Clean Sweep Guarantee · Fully Insured.",
  keywords: [
    "chimney services Waco TX",
    "chimney sweep Waco",
    "fireplace installation Central Texas",
    "dryer vent cleaning Waco",
    "EmberStack Chimney & Fireplace",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Chimney & Fireplace Services | EmberStack Chimney & Fireplace",
    description:
      "Sweep, repair, fireplace install, caps & dampers, dryer vents, and inspections for Waco and Central Texas. CSIA-certified, Clean Sweep Guarantee · Fully Insured.",
    url,
    siteName: "EmberStack Chimney & Fireplace",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney & Fireplace Services | EmberStack",
    description: "Sweep, repair, install & more for Central Texas. CSIA-certified.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
