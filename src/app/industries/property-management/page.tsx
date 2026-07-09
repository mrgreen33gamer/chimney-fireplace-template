"use client";
import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faBuilding, faCalendarAlt, faUsers, faFileInvoiceDollar,
  faSearch, faHeadset, faFileContract, faCheckCircle,
  faFire, faHammer, faShieldHalved, faWind, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementPage() {
  const painPoints = [
    { icon: faBuilding, problem: "Tenant smoke and odor complaints", consequence: "Delayed sweeps and ignored dryer vents turn into emergency tickets and bad reviews." },
    { icon: faCalendarAlt, problem: "Turnovers stack up before lease starts", consequence: "Make-ready fireplaces and dryer vents get skipped until a fire scare or inspection fail." },
    { icon: faUsers, problem: "Different vendors, different quality", consequence: "Inconsistent workmanship across units leaves you managing callbacks instead of occupancy." },
    { icon: faFileInvoiceDollar, problem: "Unpredictable CapEx surprises", consequence: "Reactive crown and liner failures hit budgets without a plan." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Wide Scheduling", description: "Phased sweeps, inspections, and dryer-vent cleans across units and buildings." },
    { icon: faFileInvoiceDollar, title: "Volume Pricing & COIs", description: "Clear rates for multi-unit work and certificates of insurance on request." },
    { icon: faUsers, title: "Tenant-Friendly Access", description: "We coordinate windows so your office isn't fielding angry calls all afternoon." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "We walk units/common fireplaces, document condition, and prioritize risk.", icon: faSearch },
    { number: 2, title: "Program Quote", description: "Flat-rate options for sweeps, repairs, vents, and inspections.", icon: faFileContract },
    { number: 3, title: "Scheduled Execution", description: "Batch work by building with a single point of contact.", icon: faHeadset },
    { number: 4, title: "Report & Follow-Up", description: "Photo notes and recommended CapEx for planning.", icon: faCheckCircle },
  ];

  const crossServices = [
    { icon: faFire, title: "Chimney Sweep", body: "Make-ready and annual sweeps for occupied units.", link: "/services/chimney-sweep" },
    { icon: faHammer, title: "Chimney Repair", body: "Crown, flashing, and liner fixes that stop tickets.", link: "/services/chimney-repair" },
    { icon: faWind, title: "Dryer Vent Cleaning", body: "Portfolio dryer-vent programs that reduce fire risk.", link: "/services/dryer-vent" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Documented safety checks for risk management.", link: "/services/annual-inspection" },
  ];

  const faq = [
    { question: "Do you work with property managers on multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common fireplaces, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you provide COIs?", answer: "Yes. Certificates of insurance are available for property management partners." },
    { question: "Do you handle dryer vents and chimneys together?", answer: "Yes — many portfolios schedule both in the same visit windows to reduce tenant disruption." },
    { question: "How do turnovers work?", answer: "We can batch make-ready sweeps, cap checks, and dryer-vent cleans around your turnover calendar." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro
        title="Chimney Service for Property Management"
        subtitle="Portfolio-wide sweeps, repairs, dryer vents, and inspections for multi-unit and scattered-site properties across Central Texas."
      />
      <TrustBar headline="Property managers call EmberStack when safety tickets stack up" />
      <IndustryPainPoints industry="Property Management" painPoints={painPoints} />
      <WhyChooseUs cityName="Central Texas" features={whyFeatures} title="Built for Portfolios" />
      <ProcessTimeline steps={processSteps} />
      <ServiceCardComponent cards={crossServices} heading="Services Property Managers Use Most" />
      <FAQ cityName="Waco" faq={faq} title="Property Management FAQs" />
      <Variant4 title="Request a Portfolio Quote" cityName="Waco" slug="property-management" spot="industry-pm" formVariant={4} />
      <CTABanner
        headline="Need a Chimney Partner for Your Portfolio?"
        subline="COIs available. Volume pricing. Call (254) 840-4040."
      />
    </main>
  );
}
