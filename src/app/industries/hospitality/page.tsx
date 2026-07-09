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
  faHotel, faClock, faUsers, faFireExtinguisher,
  faSearch, faHeadset, faFileContract, faCheckCircle,
  faFire, faHammer, faHome, faWind, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function HospitalityPage() {
  const painPoints = [
    { icon: faHotel, problem: "Guest-facing fireplaces must look and work perfectly", consequence: "Smoky lobbies and dead fireplaces kill reviews overnight." },
    { icon: faClock, problem: "Service windows are tight", consequence: "Work has to happen around check-ins, events, and peak seasons." },
    { icon: faUsers, problem: "Multiple fireplaces, one facilities team", consequence: "Without a program, maintenance falls through the cracks." },
    { icon: faFireExtinguisher, problem: "Fire risk is non-negotiable", consequence: "Creosote, clogged dryer vents, and failed caps are liability issues." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Off-Peak Scheduling", description: "Early, late, or mid-week windows that protect the guest experience." },
    { icon: faHotel, title: "Multi-Unit Programs", description: "Sweeps, inspections, and dryer vents across rooms, suites, and common areas." },
    { icon: faFireExtinguisher, title: "Safety Documentation", description: "Photo reports facilities and ownership can keep on file." },
  ];

  const processSteps = [
    { number: 1, title: "Site Walk", description: "Inventory fireplaces, chimneys, and dryer vents.", icon: faSearch },
    { number: 2, title: "Service Plan", description: "Frequency, seasonal prep, and emergency response.", icon: faFileContract },
    { number: 3, title: "Quiet Execution", description: "Low-disruption work with clear communication.", icon: faHeadset },
    { number: 4, title: "Reporting", description: "Findings and next-visit recommendations.", icon: faCheckCircle },
  ];

  const crossServices = [
    { icon: faFire, title: "Chimney Sweep", body: "Keep guest fireplaces clean and drafty.", link: "/services/chimney-sweep" },
    { icon: faHome, title: "Fireplace Installation", body: "Upgrade lobby or suite units that underperform.", link: "/services/fireplace-install" },
    { icon: faWind, title: "Dryer Vent Cleaning", body: "Laundry rooms and suite dryers cleared safely.", link: "/services/dryer-vent" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Documented safety checks for ownership.", link: "/services/annual-inspection" },
  ];

  const faq = [
    { question: "Do you service hotels, B&Bs, and lodges?", answer: "Yes — hospitality and lodging properties with guest-facing or back-of-house fireplaces and dryer systems." },
    { question: "Can you work outside guest hours?", answer: "Often yes. We'll plan around check-in peaks and event calendars." },
    { question: "Do you provide documentation for ownership or insurers?", answer: "Yes — photo notes and service records are standard." },
    { question: "Can you handle multiple properties?", answer: "Yes — multi-site hospitality groups can run on a shared schedule and contact." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Hospitality & Lodging" },
      ]} />
      <SectionIntro
        title="Chimney & Fireplace Service for Hospitality"
        subtitle="Guest-ready fireplaces, safer dryer vents, and documented inspections for hotels, B&Bs, and lodging properties across Central Texas."
      />
      <TrustBar headline="Facilities teams call EmberStack when uptime and reviews matter" />
      <IndustryPainPoints industry="Hospitality" painPoints={painPoints} />
      <WhyChooseUs cityName="Central Texas" features={whyFeatures} title="Built for Lodging Operations" />
      <ProcessTimeline steps={processSteps} />
      <ServiceCardComponent cards={crossServices} heading="Services Hospitality Teams Book" />
      <FAQ cityName="Waco" faq={faq} title="Hospitality FAQs" />
      <Variant4 title="Request a Hospitality Program Quote" cityName="Waco" slug="hospitality" spot="industry-hospitality" formVariant={4} />
      <CTABanner
        headline="Keep Guest Fireplaces Ready"
        subline="Call (254) 840-4040 for off-peak service windows and portfolio pricing."
      />
    </main>
  );
}
