// EmberStack Chimney & Fireplace — Caps & Dampers Service Page
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
  faShieldHalved, faSearch, faCheckCircle, faClock,
  faHeadset, faFileContract, faFire, faHammer, faHome,
  faTrophy, faChartLine, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function CapDamperPage() {

  const expectations = [
    { icon: faSearch, title: "Flue & Termination Check", description: "We measure the flue, inspect the crown, and recommend a cap/damper that actually fits and lasts." },
    { icon: faFileContract, title: "Flat-Rate Parts & Labor", description: "Cap, spark arrestor, damper, and install labor quoted before work begins." },
    { icon: faCheckCircle, title: "Secure, Weatherproof Fit", description: "Proper fastening and sealing so rain and animals stay out without crushing draft." },
    { icon: faShieldHalved, title: "Clean Sweep Guarantee · Fully Insured", description: "Installation workmanship backed by our guarantee." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Animal & Rain Problems Solved", description: "Critters, nests, and water entry are among the most common chimney calls we fix with the right cap." },
    { icon: faShieldHalved, title: "Dampers That Seal", description: "Top-seal and throat dampers that reduce energy loss and odors when the fireplace is idle." },
    { icon: faCheckCircle, title: "CSIA-Guided Selection", description: "Screen mesh, materials, and sizing chosen for safety and longevity — not the cheapest box store cap." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Tell us about animals, rain, or draft issues.", icon: faHeadset },
    { number: 2, title: "Measure & Inspect", description: "We confirm flue size, crown condition, and damper type.", icon: faSearch },
    { number: 3, title: "Quote", description: "Flat-rate options for cap, damper, or both.", icon: faFileContract },
    { number: 4, title: "Install", description: "Secure install and function check before we leave.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 7500, label: "Chimneys serviced", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years local experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest scheduling for animal and rain intrusion fixes.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Cap and damper installs on regular routes.", badge: "" },
    { town: "Woodway", benefit: "Premium stainless caps for Woodway homes.", badge: "" },
    { town: "Temple", benefit: "Full coverage for Bell County chimneys.", badge: "" },
    { town: "Bellmead", benefit: "Quick turnaround for common multi-flue needs.", badge: "" },
    { town: "McGregor", benefit: "Rural chimney protection installs.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Correct flue sizing", us: "✅ Measured", others: "❌ Guessed" },
    { feature: "Stainless / durable materials", us: "✅ Preferred", others: "❌ Thin galvanized" },
    { feature: "Damper seal quality", us: "✅ Top-seal options", others: "❌ Throat only" },
    { feature: "Flat-rate install", us: "✅ Written", others: "❌ Vague" },
    { feature: "CSIA-certified tech", us: "✅ Always", others: "❌ Maybe" },
  ];

  const faq = [
    { question: "Do I need a chimney cap?", answer: "Almost every chimney benefits from a properly sized cap with spark arrestor. It blocks animals, leaves, and rain while reducing ember escape risk." },
    { question: "What's the difference between throat and top-seal dampers?", answer: "Throat dampers sit near the firebox; top-seal dampers close at the top of the flue and often seal better against heat loss and odors. We'll recommend based on your system." },
    { question: "Animals are in my chimney — can a cap fix that?", answer: "Yes after safe removal of nests/animals and a flue clean if needed. We then install a secured cap so they don't return." },
    { question: "Will a cap hurt my draft?", answer: "A correctly sized cap should not ruin draft. Undersized or clogged screens can — we size and maintain properly." },
    { question: "How much do caps and dampers cost?", answer: "Simple residential caps often start a few hundred dollars installed; specialty multi-flue or custom chase covers cost more. Flat-rate after measure." },
    { question: "Can you replace a rusty chase cover?", answer: "Yes — metal chase covers are a common repair/replacement we handle with proper pitch and sealing." },
  ];

  const crossServices = [
    { icon: faFire, title: "Chimney Sweep", body: "Clean out nests and debris before capping.", link: "/services/chimney-sweep" },
    { icon: faHammer, title: "Chimney Repair", body: "Crown repairs that make caps last longer.", link: "/services/chimney-repair" },
    { icon: faHome, title: "Fireplace Installation", body: "New systems with proper termination.", link: "/services/fireplace-install" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Catch failed caps before the next storm.", link: "/services/annual-inspection" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Caps & Dampers" },
      ]} />
      <SectionIntro
        title="Chimney Caps & Dampers in Waco, TX"
        subtitle="Stop animals, rain, and energy loss with properly sized caps, spark arrestors, and damper systems — installed by CSIA-certified techs."
      />
      <TrustBar headline="Protect the flue — EmberStack caps & dampers done right" />
      <WhatToExpect expectations={expectations} sectionTitle="What to Expect" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Caps & Dampers Matter" />
      <ProcessTimeline steps={processSteps} />
      <ImpactMetrics metrics={metrics} title="Local Experience" cityName="Waco" />
      <ValueComparison rows={comparisonRows} title="EmberStack vs. Big-Box Caps" />
      <GuaranteeSection />
      <Testimonials testimonials={reviews} title="Caps & Dampers Reviews" />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Service Areas" />
      <FAQ cityName="Waco" faq={faq} title="Caps & Dampers FAQs" />
      <ServiceCardComponent cards={crossServices} heading="Related Services" />
      <CTABanner headline="Need a Cap or Damper?" subline="Call (254) 840-4040 for a flat-rate measure and install." />
      <Variant4 title="Request Caps & Dampers Service" cityName="Waco" slug="cap-damper" spot="service-cap-damper" formVariant={4} />
    </main>
  );
}
