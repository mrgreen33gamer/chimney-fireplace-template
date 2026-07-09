// EmberStack Chimney & Fireplace — Chimney Sweep Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faFire, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faHammer, faHome, faWind,
  faTrophy, faChartLine, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ChimneySweepPage() {

  const expectations = [
    { icon: faSearch,       title: "Thorough Flue Inspection", description: "We assess creosote stage, draft, and visible damage before sweeping — so you know exactly what we're cleaning and why." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start", description: "You get a written price before any work begins. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Contained, Clean Sweep", description: "Drop cloths, sealed openings, and HEPA-minded cleanup — your living room stays livable." },
    { icon: faShieldHalved, title: "Clean Sweep Guarantee · Fully Insured", description: "Every sweep is backed by our workmanship standard. If our work falls short, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Seasonal Scheduling That Fits", description: "Book before burn season or mid-winter. Same-day openings are often available for urgent smoke or odor issues." },
    { icon: faFire,         title: "Wood & Gas Chimneys", description: "Masonry flues, prefab chimneys, and gas vents — we know the differences and clean accordingly." },
    { icon: faShieldHalved, title: "CSIA-Certified Sweeps", description: "Every tech is CSIA-certified. You're never dealing with an unlicensed subcontractor on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule you in — often same-week during burn season.", icon: faHeadset },
    { number: 2, title: "Sweep Arrives", description: "On time, in uniform, with proper brushes, rods, and containment gear.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Sweep & Report", description: "Flue cleaned, debris removed, findings explained with recommendations if needed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 7500, label: "Chimneys serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available sweeps.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full chimney sweep coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-week chimney service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full chimney service coverage for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "Clean Sweep Guarantee · Fully Insured", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "CSIA-certified sweeps", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Living-room protection & cleanup", us: "✅ Standard practice", others: "❌ Inconsistent" },
    { feature: "Photo notes & clear recommendations", us: "✅ Included", others: "❌ Often skipped" },
  ];

  const faq = [
    { question: "How much does a chimney sweep cost in Waco?", answer: "Most residential chimney sweeps range from $150–$350 depending on flue type, access, and creosote condition. Heavy Stage 2–3 creosote or multi-flue homes may cost more — we quote flat-rate before starting." },
    { question: "How often should I schedule a chimney sweep?", answer: "At least once per year for wood-burning fireplaces, ideally before burn season. High-use homes or those burning softwood may need more frequent service. Gas units still need periodic inspection." },
    { question: "Will there be soot in my house?", answer: "We contain the work area with drop cloths and seals. Occasional fine dust is possible on heavy jobs, but we clean thoroughly before we leave." },
    { question: "Do you sweep prefab and metal chimneys?", answer: "Yes — masonry, prefab, and many metal flue systems. We'll confirm the right brushes and methods for your system on arrival." },
    { question: "What if you find damage during the sweep?", answer: "We'll show you photos, explain the risk in plain English, and quote any recommended repairs separately. No pressure to decide on the spot." },
    { question: "Can you clean the fireplace firebox too?", answer: "Yes — glass, firebox, and smoke shelf cleaning are commonly included or available as add-ons depending on condition." },
  ];

  const crossServices = [
    { icon: faHammer,          title: "Chimney Repair", body: "Crowns, flashing, liners, and masonry repaired right.", link: "/services/chimney-repair" },
    { icon: faHome,            title: "Fireplace Installation", body: "Wood, gas, and insert installs done clean.", link: "/services/fireplace-install" },
    { icon: faShieldHalved,    title: "Caps & Dampers", body: "Caps and dampers that keep rain and animals out.", link: "/services/cap-damper" },
    { icon: faClipboardCheck,  title: "Annual Inspections", body: "Documented safety checks before every burn season.", link: "/services/annual-inspection" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Chimney Sweep" },
      ]} />

      <SectionIntro
        title="Chimney Sweep in Waco, TX"
        subtitle="CSIA-certified chimney sweeping for wood and gas systems — creosote removal, safer draft, and a cleaner burn season across Central Texas."
      />

      <TrustBar headline="Waco homeowners book EmberStack for thorough, clean chimney sweeps" />

      <WhatToExpect expectations={expectations} sectionTitle="What to Expect from a Professional Sweep" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Choose EmberStack for Chimney Sweeping" />
      <ProcessTimeline steps={processSteps} />
      <ImpactMetrics metrics={metrics} title="Trusted Across Central Texas" cityName="Waco" />
      <ValueComparison rows={comparisonRows} title="EmberStack vs. Typical Sweep Services" />
      <GuaranteeSection />
      <Testimonials testimonials={reviews} title="Chimney Sweep Reviews" />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Chimney Sweep Service Areas" />
      <FAQ cityName="Waco" faq={faq} title="Chimney Sweep FAQs" />
      <ServiceCardComponent cards={crossServices} heading="Related Services" />
      <CTABanner
        headline="Ready for a Cleaner, Safer Chimney?"
        subline="Call (254) 840-4040 — same-week sweeps available across Central Texas."
      />
      <Variant4 title="Book a Chimney Sweep" cityName="Waco" slug="chimney-sweep" spot="service-chimney-sweep" formVariant={4} />
    </main>
  );
}
