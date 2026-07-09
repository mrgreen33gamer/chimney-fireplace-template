// EmberStack Chimney & Fireplace — Fireplace Installation Service Page
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
  faHome, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faFire, faHammer, faWind,
  faTrophy, faChartLine, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function FireplaceInstallPage() {

  const expectations = [
    { icon: faSearch,       title: "Site Measure & Fit Check", description: "We confirm clearances, venting path, gas availability, and hearth requirements before recommending a unit." },
    { icon: faFileContract, title: "Itemized Flat-Rate Install", description: "Equipment, venting, labor, and finish work quoted upfront — no surprise change orders mid-install." },
    { icon: faCheckCircle,  title: "Code-Conscious Installation", description: "Proper venting, clearances, and manufacturer requirements followed for safe operation." },
    { icon: faShieldHalved, title: "Clean Sweep Guarantee · Fully Insured", description: "Install workmanship backed by our guarantee and full insurance." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Wood, Gas & Inserts", description: "From traditional wood-burning setups to efficient gas inserts that transform an old masonry opening." },
    { icon: faHome,         title: "Finish That Matches Your Home", description: "Trim, surround, and clean-up standards that respect your living space." },
    { icon: faShieldHalved, title: "CSIA-Certified Installers", description: "Safety and venting first — aesthetics follow correct installation." },
  ];

  const processSteps = [
    { number: 1, title: "Consult", description: "Goals, fuel type, style, and budget — we narrow options that actually fit your home.", icon: faHeadset },
    { number: 2, title: "Measure & Quote", description: "On-site measurements and a written flat-rate proposal.", icon: faSearch },
    { number: 3, title: "Install Day", description: "Protect floors, set unit, complete venting, and commission the system.", icon: faFileContract },
    { number: 4, title: "Walkthrough", description: "Operation demo, maintenance tips, and warranty paperwork.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 7500, label: "Chimneys & fireplaces serviced", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years of local install experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Showroom-free consults at your home — no pressure sales floor.", badge: "Home Base" },
    { town: "Woodway", benefit: "Premium installs for Woodway remodels and new living rooms.", badge: "" },
    { town: "Hewitt", benefit: "Insert and gas fireplace installs on a reliable schedule.", badge: "" },
    { town: "Temple", benefit: "Full fireplace installation coverage for Bell County.", badge: "" },
    { town: "China Spring", benefit: "Rural installs with clear travel communication.", badge: "" },
    { town: "Killeen", benefit: "Gas and wood options for Killeen-area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate install quote", us: "✅ Written", others: "❌ Ballpark only" },
    { feature: "Venting & clearance checks", us: "✅ Required", others: "❌ Sometimes skipped" },
    { feature: "CSIA-certified crew", us: "✅ Always", others: "❌ Varies" },
    { feature: "Living-space protection", us: "✅ Standard", others: "❌ Inconsistent" },
    { feature: "Post-install walkthrough", us: "✅ Included", others: "❌ Rare" },
  ];

  const faq = [
    { question: "How much does fireplace installation cost in Waco?", answer: "Costs vary widely by fuel type, venting path, and finish work. Gas inserts into existing openings are often more affordable than full new builds. We provide a flat-rate quote after measuring your space." },
    { question: "Can you install a gas insert in my old wood fireplace?", answer: "Often yes, if the opening, chimney, and gas line situation allow. We'll confirm liner/vent requirements and whether a full reline is needed." },
    { question: "Do I need a permit?", answer: "Requirements depend on city and project type. We'll advise based on your address and scope so you're not guessing." },
    { question: "How long does installation take?", answer: "Many insert installs complete in one day. Complex venting or surround rebuilds may take longer — timelines are in your quote." },
    { question: "Wood or gas — which should I choose?", answer: "Wood offers classic ambiance; gas offers convenience and cleaner operation. We'll compare fuel cost, maintenance, and lifestyle fit honestly." },
    { question: "Do you remove the old fireplace equipment?", answer: "Yes — safe removal and disposal of old inserts or components is typically included when replacing a system." },
  ];

  const crossServices = [
    { icon: faFire, title: "Chimney Sweep", body: "Clean flues before or after install work.", link: "/services/chimney-sweep" },
    { icon: faHammer, title: "Chimney Repair", body: "Fix crowns and liners that affect new installs.", link: "/services/chimney-repair" },
    { icon: faShieldHalved, title: "Caps & Dampers", body: "Proper termination and draft control.", link: "/services/cap-damper" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Keep new systems safe year after year.", link: "/services/annual-inspection" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Fireplace Installation" },
      ]} />
      <SectionIntro
        title="Fireplace Installation in Waco, TX"
        subtitle="Wood, gas, and insert installations with proper venting, clean finishes, and flat-rate pricing — CSIA-certified crews across Central Texas."
      />
      <TrustBar headline="Homeowners choose EmberStack for fireplace installs done right" />
      <WhatToExpect expectations={expectations} sectionTitle="What to Expect from Installation" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Install with EmberStack" />
      <ProcessTimeline steps={processSteps} />
      <ImpactMetrics metrics={metrics} title="Install Experience" cityName="Waco" />
      <ValueComparison rows={comparisonRows} title="EmberStack vs. Typical Installers" />
      <GuaranteeSection />
      <Testimonials testimonials={reviews} title="Fireplace Installation Reviews" />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Installation Service Areas" />
      <FAQ cityName="Waco" faq={faq} title="Fireplace Installation FAQs" />
      <ServiceCardComponent cards={crossServices} heading="Related Services" />
      <CTABanner headline="Planning a New Fireplace?" subline="Call (254) 840-4040 for a free on-site measure and flat-rate install quote." />
      <Variant4 title="Request Fireplace Install Quote" cityName="Waco" slug="fireplace-install" spot="service-fireplace-install" formVariant={4} />
    </main>
  );
}
