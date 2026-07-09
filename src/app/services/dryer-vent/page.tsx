// EmberStack Chimney & Fireplace — Dryer Vent Cleaning Service Page
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
  faWind, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faFire, faHammer, faHome,
  faTrophy, faChartLine, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function DryerVentPage() {

  const expectations = [
    { icon: faSearch, title: "Full-Run Assessment", description: "We evaluate from dryer outlet to exterior termination — not just the first few feet of hose." },
    { icon: faFileContract, title: "Flat-Rate Cleaning", description: "Clear price before we start. Long or complex runs quoted honestly up front." },
    { icon: faCheckCircle, title: "Rotary Brush + Vacuum", description: "Lint removed from the duct path; exterior vent checked for flaps and bird guards." },
    { icon: faShieldHalved, title: "Clean Sweep Guarantee · Fully Insured", description: "Fire-risk reduction work backed by insured professionals." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Faster Dry Times", description: "Restricted vents make dryers overwork. Cleaning restores airflow and efficiency." },
    { icon: faWind, title: "Household Fire Prevention", description: "Lint is highly combustible. Regular cleaning is one of the highest-ROI safety tasks in a home." },
    { icon: faShieldHalved, title: "Residential & Multi-Unit", description: "Houses, townhomes, and property-management portfolios welcome." },
  ];

  const processSteps = [
    { number: 1, title: "Book Service", description: "Phone, text, or form — often same-week availability.", icon: faHeadset },
    { number: 2, title: "Inspect Path", description: "Locate the vent run and exterior termination.", icon: faSearch },
    { number: 3, title: "Clean Thoroughly", description: "Brush and vacuum the duct; clear the outdoor hood.", icon: faFileContract },
    { number: 4, title: "Verify Airflow", description: "Confirm improved flow and share maintenance tips.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 7500, label: "Homes & chimneys serviced", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 20, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Same-week dryer vent cleaning across town.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Regular residential route coverage.", badge: "" },
    { town: "Woodway", benefit: "Long-run vents cleaned carefully and completely.", badge: "" },
    { town: "Temple", benefit: "Bell County dryer vent service available.", badge: "" },
    { town: "Killeen", benefit: "Houses and multi-unit properties welcome.", badge: "" },
    { town: "China Spring", benefit: "Rural homes — no mystery trip fees after booking.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full duct cleaning", us: "✅ Dryer to exterior", others: "❌ Hose only" },
    { feature: "Flat-rate pricing", us: "✅ Written", others: "❌ Upsell mid-job" },
    { feature: "Exterior vent check", us: "✅ Included", others: "❌ Skipped" },
    { feature: "Insured technicians", us: "✅ Always", others: "❌ Varies" },
    { feature: "Multi-unit experience", us: "✅ Yes", others: "❌ Residential only" },
  ];

  const faq = [
    { question: "How often should dryer vents be cleaned?", answer: "Most homes benefit from cleaning every 1–2 years. Large families, long duct runs, or pets that shed heavily may need annual service." },
    { question: "What are signs my dryer vent is clogged?", answer: "Clothes take multiple cycles, the dryer exterior is very hot, burning smells, or little airflow at the outdoor vent." },
    { question: "Do you disconnect the dryer?", answer: "Yes when needed — we carefully move/reconnect the unit and check the transition hose for crush damage or lint traps." },
    { question: "Can you clean condo or apartment vents?", answer: "Often yes for property managers and owners, depending on access and duct routing. Call to discuss your building." },
    { question: "Is dryer vent cleaning messy?", answer: "We contain dust with vacuum systems. Some lint is inevitable on heavy jobs, but we clean the work area before leaving." },
    { question: "How much does dryer vent cleaning cost?", answer: "Most single-family homes fall in a predictable flat-rate range; complex multi-story or concealed runs may cost more after assessment." },
  ];

  const crossServices = [
    { icon: faFire, title: "Chimney Sweep", body: "Another critical household fire-safety service.", link: "/services/chimney-sweep" },
    { icon: faHammer, title: "Chimney Repair", body: "Structural chimney issues handled by the same team.", link: "/services/chimney-repair" },
    { icon: faHome, title: "Fireplace Installation", body: "Safe hearth upgrades for your living space.", link: "/services/fireplace-install" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Documented safety checks for chimneys too.", link: "/services/annual-inspection" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Dryer Vent Cleaning" },
      ]} />
      <SectionIntro
        title="Dryer Vent Cleaning in Waco, TX"
        subtitle="Full-run dryer vent cleaning that restores airflow, shortens dry times, and reduces household fire risk — flat-rate and fully insured."
      />
      <TrustBar headline="EmberStack — chimney pros who also keep dryer vents clear" />
      <WhatToExpect expectations={expectations} sectionTitle="What to Expect" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Clean Dryer Vents" />
      <ProcessTimeline steps={processSteps} />
      <ImpactMetrics metrics={metrics} title="Trusted Locally" cityName="Waco" />
      <ValueComparison rows={comparisonRows} title="EmberStack vs. Quick Fixes" />
      <GuaranteeSection />
      <Testimonials testimonials={reviews} title="Dryer Vent Reviews" />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Service Areas" />
      <FAQ cityName="Waco" faq={faq} title="Dryer Vent FAQs" />
      <ServiceCardComponent cards={crossServices} heading="Related Services" />
      <CTABanner headline="Clothes Taking Forever to Dry?" subline="Call (254) 840-4040 to schedule dryer vent cleaning." />
      <Variant4 title="Book Dryer Vent Cleaning" cityName="Waco" slug="dryer-vent" spot="service-dryer-vent" formVariant={4} />
    </main>
  );
}
