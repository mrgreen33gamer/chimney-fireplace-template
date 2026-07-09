// src/app/layout.tsx
// EmberStack Chimney & Fireplace — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Abril_Fatface, Cabin, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Abril_Fatface({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Cabin({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Libre_Baskerville({
  weight: ["400","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.emberstackchimney.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1c1008" },
    { media: "(prefers-color-scheme: dark)",  color: "#1c1008" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "EmberStack Chimney & Fireplace | Chimney Sweep · Repair · Fireplace Install — Waco, TX",
    template: "%s | EmberStack Chimney & Fireplace",
  },
  description:
    "EmberStack Chimney & Fireplace is a Waco, TX chimney and fireplace company offering chimney sweeps, chimney repair, fireplace installation, caps & dampers, dryer vent cleaning, and annual inspections for Central Texas homes and businesses. CSIA-certified, bonded & insured.",
  keywords: [
    "EmberStack Chimney & Fireplace",
    "chimney repair Waco TX",
    "chimney sweep Waco Texas",
    "chimney installation Waco",
    "fireplace installation Central Texas",
    "dryer vent cleaning Waco TX",
    "chimney and fireplace company Hewitt TX",
    "chimney repair Waco",
    "emergency chimney repair Waco",
  ],
  authors: [{ name: "EmberStack Chimney & Fireplace", url: BASE_URL }],
  creator: "EmberStack Chimney & Fireplace",
  publisher: "EmberStack Chimney & Fireplace",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "EmberStack Chimney & Fireplace | Chimney Sweep · Repair · Fireplace Install — Waco, TX",
    description:
      "Waco-based chimney and fireplace company for sweeps, repairs, fireplace installs, caps & dampers, dryer vents, and annual inspections across Central Texas. CSIA-certified & insured. Clean Sweep Guarantee.",
    url: BASE_URL,
    siteName: "EmberStack Chimney & Fireplace",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "EmberStack Chimney & Fireplace — Waco TX Chimney Sweep & Installation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmberStack Chimney & Fireplace | Waco TX Chimney Pros",
    description:
      "Chimney sweep, repair, fireplace installation & more for Central Texas. CSIA-certified & insured — Clean Sweep Guarantee.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "EmberStack Chimney & Fireplace",
  alternateName: "EmberStack Chimney & Fireplace Waco",
  description:
    "Residential and commercial chimney and fireplace services in Waco and Central Texas — chimney sweep, chimney repair, fireplace installation, caps & dampers, dryer vent cleaning, and annual inspections. CSIA-certified sweeps, bonded & insured, Clean Sweep Guarantee · Fully Insured.",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chimney & Fireplace Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney Sweep" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chimney Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fireplace Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Caps & Dampers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Inspections" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dryer Vent Cleaning" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/emberstackchimney",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#c2410c" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1c1008",
                }}
              >
                <PulseLoader size={50} color="#c2410c" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
