// EmberStack Chimney & Fireplace — Chimney Repair Service Page
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
  faHammer, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faFire, faHome, faWind,
  faTrophy, faChartLine, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function ChimneyRepairPage() {

  const expectations = [
    { icon: faSearch,       title: "Photo-Documented Diagnosis", description: "Crowns, flashing, liners, and masonry inspected with clear photos so you see what failed and why." },
    { icon: faFileContract, title: "Flat-Rate Repair Quote", description: "Written price before work starts — no hourly surprises when we find the next cracked brick." },
    { icon: faCheckCircle,  title: "Durable, Weather-Ready Fixes", description: "Materials and methods chosen for Central Texas heat, storms, and freeze-thaw cycles." },
    { icon: faShieldHalved, title: "Clean Sweep Guarantee · Fully Insured", description: "Repairs backed by our workmanship standard and full insurance coverage." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Leak & Storm Response", description: "Water intrusion and storm damage don't wait. We prioritize active leaks and unsafe flues." },
    { icon: faHammer,       title: "Masonry, Metal & Prefab", description: "Crown rebuilds, flashing, tuckpointing, liner repairs, and smoke-chamber work." },
    { icon: faShieldHalved, title: "CSIA-Certified Crews", description: "Safety-first repairs that restore structure and draft — not cosmetic band-aids." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Describe the leak, crack, or odor issue — we'll schedule inspection or repair.", icon: faHeadset },
    { number: 2, title: "Inspect & Photo", description: "We document damage at the crown, chase, flashing, and flue.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Options ranked by urgency. You approve before we start.", icon: faFileContract },
    { number: 4, title: "Repair & Verify", description: "Work completed cleanly; final walkthrough of what changed and what to watch.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 7500, label: "Chimneys serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years of local repair experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Fastest response for active leaks and storm damage.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full chimney repair coverage.", badge: "" },
    { town: "Woodway",      benefit: "Masonry and flashing specialists for Woodway homes.", badge: "" },
    { town: "Temple",       benefit: "Bell County repair service with clear scheduling.", badge: "" },
    { town: "McGregor",     benefit: "Rural repairs without the franchise runaround.", badge: "" },
    { town: "Killeen",      benefit: "Structural and liner repairs for Killeen-area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Written flat-rate before work", us: "✅ Always", others: "❌ Time & materials" },
    { feature: "Photo documentation", us: "✅ Standard", others: "❌ Rare" },
    { feature: "CSIA-certified technicians", us: "✅ All jobs", others: "❌ Mixed" },
    { feature: "Clean Sweep Guarantee", us: "✅ Included", others: "❌ Limited" },
    { feature: "Storm & leak prioritization", us: "✅ Yes", others: "❌ Waitlist culture" },
  ];

  const faq = [
    { question: "What chimney repairs do you handle?", answer: "Crown rebuilds and coatings, step and counter flashing, tuckpointing, cracked bricks, damaged liners, smoke-chamber parging, chase covers, and related waterproofing." },
    { question: "How much does chimney repair cost in Waco?", answer: "Minor flashing or small masonry repairs often start a few hundred dollars. Crown rebuilds and liner work vary widely by height and access — we quote flat-rate after inspection." },
    { question: "My chimney is leaking into the attic — can you help?", answer: "Yes. We inspect crown, flashing, and chase covers first, then quote the repair path that actually stops water — not just a temporary sealant smear." },
    { question: "Do you repair prefab chimney systems?", answer: "Many prefab issues are repairable (caps, terminations, joints). Some damaged sections require manufacturer-compatible replacement — we'll tell you which is safer." },
    { question: "Is a cracked crown dangerous?", answer: "Cracks let water into the masonry and can accelerate freeze damage and interior leaks. Addressing crowns early is almost always cheaper than delaying." },
    { question: "Can repairs wait until next year?", answer: "Cosmetic issues sometimes can. Active leaks, failing liners, or unstable masonry should not wait — call us for an honest urgency ranking." },
  ];

  const crossServices = [
    { icon: faFire,           title: "Chimney Sweep", body: "Remove creosote and debris after structural work.", link: "/services/chimney-sweep" },
    { icon: faHome,           title: "Fireplace Installation", body: "New inserts and systems when repair isn't enough.", link: "/services/fireplace-install" },
    { icon: faShieldHalved,   title: "Caps & Dampers", body: "Protect repaired flues from rain and animals.", link: "/services/cap-damper" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Catch small failures before they become leaks.", link: "/services/annual-inspection" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Chimney Repair" },
      ]} />
      <SectionIntro
        title="Chimney Repair in Waco, TX"
        subtitle="Crown, flashing, masonry, and liner repairs that stop leaks and restore safe operation — CSIA-certified, flat-rate, fully insured."
      />
      <TrustBar headline="Central Texas trusts EmberStack for lasting chimney repairs" />
      <WhatToExpect expectations={expectations} sectionTitle="What to Expect from Chimney Repair" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose EmberStack Repair" />
      <ProcessTimeline steps={processSteps} />
      <ImpactMetrics metrics={metrics} title="Repair Experience You Can Measure" cityName="Waco" />
      <ValueComparison rows={comparisonRows} title="EmberStack vs. Typical Repair Bids" />
      <GuaranteeSection />
      <Testimonials testimonials={reviews} title="Chimney Repair Reviews" />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Repair Service Areas" />
      <FAQ cityName="Waco" faq={faq} title="Chimney Repair FAQs" />
      <ServiceCardComponent cards={crossServices} heading="Related Services" />
      <CTABanner headline="Need Chimney Repair Done Right?" subline="Call (254) 840-4040 for a flat-rate inspection and repair quote." />
      <Variant4 title="Request Chimney Repair" cityName="Waco" slug="chimney-repair" spot="service-chimney-repair" formVariant={4} />
    </main>
  );
}
