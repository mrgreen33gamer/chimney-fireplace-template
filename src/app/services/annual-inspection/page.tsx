// EmberStack Chimney & Fireplace — Annual Inspections Service Page
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
  faClipboardCheck, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faFire, faHammer, faHome,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function AnnualInspectionPage() {

  const expectations = [
    { icon: faSearch, title: "Level-Appropriate Inspection", description: "Level 1 or Level 2 scope explained clearly — what we check and what tools we use." },
    { icon: faFileContract, title: "Flat-Rate Inspection Fee", description: "Know the price before we climb the roof or open the firebox." },
    { icon: faCheckCircle, title: "Photo Documentation", description: "See creosote, cracks, caps, and liners with notes you can keep for insurance or real estate." },
    { icon: faShieldHalved, title: "Clean Sweep Guarantee · Fully Insured", description: "Honest findings from insured, CSIA-certified professionals." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Before Burn Season", description: "Schedule inspections early so repairs don't delay your first fire." },
    { icon: faClipboardCheck, title: "Real Estate & Peace of Mind", description: "Pre-purchase and annual safety inspections for buyers, sellers, and long-time owners." },
    { icon: faShieldHalved, title: "Actionable Priorities", description: "We rank issues: fix now, plan soon, or monitor — no fear-based upsells." },
  ];

  const processSteps = [
    { number: 1, title: "Schedule", description: "Book online or by phone — weekday and limited Saturday slots.", icon: faHeadset },
    { number: 2, title: "Inspect", description: "Interior appliance, connector, and accessible chimney components.", icon: faSearch },
    { number: 3, title: "Document", description: "Photos and plain-English findings.", icon: faFileContract },
    { number: 4, title: "Recommend", description: "Optional sweep or repair quotes only if needed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 7500, label: "Chimneys serviced", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years of local inspections", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest booking for pre-season inspections.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Annual routes for neighborhood homes.", badge: "" },
    { town: "Woodway", benefit: "Detailed inspections for larger masonry systems.", badge: "" },
    { town: "Temple", benefit: "Bell County inspection coverage.", badge: "" },
    { town: "Killeen", benefit: "Pre-listing and homeowner inspections available.", badge: "" },
    { town: "McGregor", benefit: "Rural chimney inspection appointments.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "CSIA-aligned methods", us: "✅ Yes", others: "❌ Inconsistent" },
    { feature: "Photo documentation", us: "✅ Included", others: "❌ Verbal only" },
    { feature: "Flat-rate fee", us: "✅ Clear", others: "❌ Vague" },
    { feature: "Honest priority ranking", us: "✅ Standard", others: "❌ Upsell-heavy" },
    { feature: "Same-team repairs if needed", us: "✅ Available", others: "❌ Referral chase" },
  ];

  const faq = [
    { question: "What's the difference between Level 1 and Level 2 inspections?", answer: "Level 1 is a basic readily-accessible inspection for routine annual service. Level 2 is more thorough (often with camera) when the system changed, after an event, or for real estate transactions." },
    { question: "How often should I get a chimney inspection?", answer: "At least annually for wood-burning systems, and whenever you buy a home, after a chimney fire/storm, or before installing a new appliance." },
    { question: "Do gas fireplaces need inspections?", answer: "Yes. Venting, seals, glass, and safety devices should be checked periodically even without heavy creosote." },
    { question: "Will you always recommend a sweep?", answer: "Only when creosote or debris warrants it. Clean systems get a clean bill of health — not an automatic upsell." },
    { question: "Can I get a report for my realtor or insurer?", answer: "Yes — photo notes and written findings are part of our inspection process." },
    { question: "How long does an inspection take?", answer: "Most Level 1 visits complete within an hour depending on access and number of flues. Level 2 takes longer." },
  ];

  const crossServices = [
    { icon: faFire, title: "Chimney Sweep", body: "Schedule sweep + inspection together before winter.", link: "/services/chimney-sweep" },
    { icon: faHammer, title: "Chimney Repair", body: "Fix issues found during inspection.", link: "/services/chimney-repair" },
    { icon: faHome, title: "Fireplace Installation", body: "Upgrade systems that are past safe service life.", link: "/services/fireplace-install" },
    { icon: faShieldHalved, title: "Caps & Dampers", body: "Protect flues flagged during inspection.", link: "/services/cap-damper" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Annual Inspections" },
      ]} />
      <SectionIntro
        title="Annual Chimney Inspections in Waco, TX"
        subtitle="CSIA-minded Level 1–2 chimney inspections with photos, flat-rate pricing, and honest priorities — before every burn season."
      />
      <TrustBar headline="Know your chimney is ready — inspect with EmberStack" />
      <WhatToExpect expectations={expectations} sectionTitle="What to Expect" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Annual Inspections Matter" />
      <ProcessTimeline steps={processSteps} />
      <ImpactMetrics metrics={metrics} title="Local Trust" cityName="Waco" />
      <ValueComparison rows={comparisonRows} title="EmberStack vs. Glance-and-Go Inspections" />
      <GuaranteeSection />
      <Testimonials testimonials={reviews} title="Inspection Reviews" />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Service Areas" />
      <FAQ cityName="Waco" faq={faq} title="Inspection FAQs" />
      <ServiceCardComponent cards={crossServices} heading="Related Services" />
      <CTABanner headline="Book Your Annual Chimney Inspection" subline="Call (254) 840-4040 — openings available before burn season fills up." />
      <Variant4 title="Schedule an Inspection" cityName="Waco" slug="annual-inspection" spot="service-annual-inspection" formVariant={4} />
    </main>
  );
}
