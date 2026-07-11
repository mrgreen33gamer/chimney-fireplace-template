// EmberStack Chimney & Fireplace — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faFire, faHammer, faHome, faShieldHalved, faWind, faClipboardCheck,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faFire,
      title: "Chimney Sweep",
      body: "Professional sweeping to remove creosote, soot, and debris. Safer fires, better draft, and a cleaner flue — most homes done in a single visit.",
      link: "/services/chimney-sweep",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faHammer,
      title: "Chimney Repair",
      body: "Crown, flashing, masonry, liner, and smoke-chamber repairs that stop leaks and restore structural integrity for Central Texas weather.",
      link: "/services/chimney-repair",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faHome,
      title: "Fireplace Installation",
      body: "Wood, gas, and insert installations sized for your home — clean finishes, proper venting, and code-compliant setup from start to finish.",
      link: "/services/fireplace-install",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faShieldHalved,
      title: "Caps & Dampers",
      body: "Chimney caps, spark arrestors, and damper systems that block animals, rain, and downdrafts while protecting the flue long-term.",
      link: "/services/cap-damper",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faWind,
      title: "Dryer Vent Cleaning",
      body: "Full dryer vent cleaning to cut fire risk, restore drying efficiency, and clear lint buildup from the drum to the exterior termination.",
      link: "/services/dryer-vent",
      image: "/pages/home/welcome/before.jpg",
    },
    {
      icon: faClipboardCheck,
      title: "Annual Inspections",
      body: "Level 1–2 chimney inspections with photo documentation so you know exactly what is safe, what needs attention, and what can wait.",
      link: "/services/annual-inspection",
      image: "/pages/home/welcome/after.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 7500, label: "Chimneys serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 20,   label: "Years of local chimney experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we sweep, repair, or install. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "CSIA-Certified Sweeps",
      description: "Every tech is CSIA-certified, bonded, and insured. No unlicensed freelancers working alone on your chimney.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2006",
      description: "We're not a franchise. EmberStack Chimney & Fireplace was founded in Waco by Hank Collier. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Inspect On-Site",
      description: "A CSIA-certified sweep inspects the chimney or fireplace, explains findings in plain English, and shows options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Guaranteed",
      description: "Quality workmanship, thorough cleanup, Clean Sweep Guarantee · Fully Insured. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Chimney Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths down, hearth protected, soot contained. Your home left cleaner than when we arrived.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Safety-First Standards",
      description: "CSIA methods, proper PPE, and photo documentation so you know your flue is safe for the next burn season.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available sweeps in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and estates.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full chimney & fireplace service for Bell County homes.", badge: "" },
  ];

  const faq = [
    {
      question: "How often should I have my chimney swept in Texas?",
      answer: "Most wood-burning chimneys need a sweep at least once a year — ideally before burn season. Heavy use, softwoods, or visible creosote may require more frequent service. Gas fireplaces still need annual inspection for venting and safety.",
    },
    {
      question: "Do you offer same-day chimney service in Waco?",
      answer: "Yes. We dispatch from Waco and often have same-day or next-day openings for sweeps, inspections, and urgent repairs. Call (254) 840-4040 for availability.",
    },
    {
      question: "What is the Clean Sweep Guarantee?",
      answer: "We stand behind our workmanship. If our sweep or repair work fails to meet the standard we promised, we return to make it right — fully insured, no runaround.",
    },
    {
      question: "Can you install a gas fireplace insert?",
      answer: "Yes. We install wood, gas, and insert systems with proper venting, clearances, and finish work. You'll get a flat-rate quote before we start.",
    },
    {
      question: "Do you clean dryer vents too?",
      answer: "Yes — dryer vent cleaning is one of our core services. Lint buildup is a leading household fire risk; we clear the full run from dryer to exterior.",
    },
    {
      question: "Are your technicians CSIA-certified?",
      answer: "Yes. EmberStack sweeps are CSIA-certified, bonded, and insured. No unlicensed subcontractors working alone on your home.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="Central Texas trusts EmberStack for safe chimneys and fireplaces" />
      <ImpactMetrics metrics={metrics} title="Numbers That Matter" cityName="Waco" />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose EmberStack" />
      <ServiceCardComponent
        cards={services}
        heading="Chimney & Fireplace Services"
        subheading="From annual sweeps to full fireplace installs — flat-rate pricing, CSIA-certified crews, Clean Sweep Guarantee."
      />
      <GuaranteeSection />
      <ProcessTimeline steps={processSteps} />
      <Testimonials testimonials={reviews} title="What Central Texas Homeowners Say" />
      <CTABanner
        secondaryLink="/contact"
        secondaryText="Book Inspection"
        primaryLink="tel:+12548404040"
        primaryText="Call (254) 840-4040"
        headline="Safer Fires. Cleaner Chimneys."
        subline="Inspections, sweeps, caps, and fireplace repair — CSIA-minded crews for Central Texas homes."
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <LocalServiceAreas areas={localAreas} cityName="Waco" title="Service Areas" />
      <WhatToExpect expectations={expectations} sectionTitle="What to Expect on Service Day" />
      <FAQ cityName="Waco" faq={faq} />
      <BlogPreviewGrid />
      <Variant4
        title="Request Chimney Service"
        cityName="Waco"
        slug="home"
        spot="homepage-form"
        formVariant={4}
      />
    </main>
  );
}
