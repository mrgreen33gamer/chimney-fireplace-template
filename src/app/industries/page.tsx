"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A property manager, a historic-home owner, and a hospitality facilities lead all work differently. Before we quote, we learn your access process, budget cycle, and downtime constraints.",
    },
    {
      icon: faShieldHalved,
      title: "CSIA-Certified, Bonded & Insured",
      description: "We're based in Waco, TX with CSIA-certified sweeps and full insurance — the documentation multi-unit, hospitality, and specialty residential projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Sweep, Repair & Install — One Vendor",
      description: "Whether your project needs multi-unit make-ready, historic masonry repair, or guest-facing fireplace service — we handle it under one roof.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 200,  label: "Commercial and multi-unit projects completed",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 20,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving PM, historic homes, and hospitality clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Lodging and multi-unit properties across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments, hotels, and light commercial facilities.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban properties.", badge: "" },
    { town: "Woodway", benefit: "Premium homes and professional offices.", badge: "" },
    { town: "McGregor", benefit: "Rural estates and corridor properties.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 20+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "CSIA-certified commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Clean Sweep Guarantee · Fully Insured", us: "✅ On every job", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does EmberStack Chimney & Fireplace work with?",
      answer: "We have dedicated experience with property management companies, historic homes, and hospitality & lodging — in addition to standard residential chimney and fireplace services.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around access rules, downtime windows, CapEx cycles, and guest calendars — not a generic residential quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-property or multi-building portfolios?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling with a single dedicated point of contact.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll recommend the approach that fits — no pressure.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Chimney and fireplace programs built for how your organization actually works — turnovers, guest calendars, and preservation constraints, not a generic residential quote."
      />
      <TrustBar headline="Trusted by property managers, historic-home owners, and hospitality teams since 2006" />
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly what we build for organizations like yours."
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Central Texas" features={whyFeatures} title="Built for Organizations, Not Just Homes" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries" title="B2B Coverage Across Central Texas" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Talk to Our B2B Team" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need a Chimney Partner for Your Organization?"
        subline="Property management, historic homes, and hospitality — flat-rate pricing, COIs on request."
        primaryText="Call (254) 840-4040"
        primaryLink="tel:+12548404040"
        secondaryText="Request a Proposal"
        secondaryLink="/contact"
      />
    </main>
  );
}
