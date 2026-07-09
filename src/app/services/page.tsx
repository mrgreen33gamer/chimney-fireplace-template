// EmberStack Chimney & Fireplace — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faFire, faHammer, faHome, faShieldHalved, faWind, faClipboardCheck,
  faTrophy, faChartLine, faClock, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faFire,           title: "Chimney Sweep", body: "Creosote removal, soot cleanup, and safer draft for wood and gas systems — most homes completed in one visit.", link: "/services/chimney-sweep" },
    { icon: faHammer,         title: "Chimney Repair", body: "Crown, flashing, masonry, and liner repairs that stop leaks and restore structural integrity.", link: "/services/chimney-repair" },
    { icon: faHome,           title: "Fireplace Installation", body: "Wood, gas, and insert installations with proper venting, clearances, and clean finishes.", link: "/services/fireplace-install" },
    { icon: faShieldHalved,   title: "Caps & Dampers", body: "Chimney caps, spark arrestors, and dampers that block animals, rain, and energy loss.", link: "/services/cap-damper" },
    { icon: faWind,           title: "Dryer Vent Cleaning", body: "Full-run dryer vent cleaning to reduce fire risk and restore drying efficiency.", link: "/services/dryer-vent" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Level 1–2 chimney inspections with photos and clear, prioritized recommendations.", link: "/services/annual-inspection" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we sweep, repair, or install. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved,   title: "CSIA-Certified Sweeps",  description: "Every tech is CSIA-certified, bonded, and insured. No unlicensed freelancers on your chimney." },
    { icon: faUsers,          title: "Locally Owned Since 2006", description: "Founded in Waco by Hank Collier. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Inspect On-Site", description: "A CSIA-certified tech inspects the chimney and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Right, Guaranteed", description: "Quality workmanship, clean job sites, Clean Sweep Guarantee · Fully Insured.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 7500, label: "Chimneys serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 20,   label: "Years of local chimney experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does chimney service cost in Waco?", answer: "Most chimney sweeps range from $150–$350. Repairs vary by scope. Fireplace installs depend on fuel type and venting. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on masonry and prefab chimneys?", answer: "Yes — masonry flues, prefab systems, wood fireplaces, gas fireplaces, and many inserts." },
    { question: "What does an annual inspection include?", answer: "A Level 1 or Level 2 inspection of readily accessible components, photo notes, and prioritized recommendations. Sweeping is separate when needed." },
    { question: "Do you offer emergency service?", answer: "Yes — same-day and priority chimney service is available for smoke issues, animal intrusion, and active leaks. Call (254) 840-4040." },
    { question: "Are you bonded and insured?", answer: "Yes — EmberStack Chimney & Fireplace is bonded and insured with CSIA-certified sweeps." },
    { question: "What is the Clean Sweep Guarantee?", answer: "We stand behind our workmanship. If our work falls short of what we promised, we return to make it right." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Chimney & Fireplace Services for Waco & Central Texas"
        subtitle="Sweeps, repairs, fireplace installs, caps & dampers, dryer vents, and annual inspections — done right, priced upfront, backed by a Clean Sweep Guarantee · Fully Insured."
      />

      <TrustBar headline="7,500+ Central Texas chimneys serviced by EmberStack Chimney & Fireplace" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose EmberStack" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Chimney Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Chimney Service Today?"
        subline="Same-day appointments available. Flat-rate pricing. Clean Sweep Guarantee · Fully Insured."
        primaryText="Call (254) 840-4040"
        primaryLink="tel:+12548404040"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
