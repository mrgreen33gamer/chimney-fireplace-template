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
  faLandmark, faWater, faHouseChimney, faCamera,
  faSearch, faHeadset, faFileContract, faCheckCircle,
  faFire, faHammer, faHome, faShieldHalved, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function HistoricHomesPage() {
  const painPoints = [
    { icon: faLandmark, problem: "Original masonry needs careful work", consequence: "Aggressive repairs can damage character features and create bigger structural issues." },
    { icon: faWater, problem: "Hidden leaks behind plaster and finishes", consequence: "Failed crowns and flashing quietly destroy interiors for years." },
    { icon: faHouseChimney, problem: "Older flues weren't built for modern use", consequence: "Unsafe creosote loads and missing liners put families at risk." },
    { icon: faCamera, problem: "Documentation for restoration decisions", consequence: "Owners need photos and clear options — not a scare quote." },
  ];

  const whyFeatures = [
    { icon: faLandmark, title: "Respect for Historic Fabric", description: "We prioritize repairs that protect original masonry and period details when possible." },
    { icon: faCamera, title: "Photo-First Diagnosis", description: "See crowns, liners, and smoke chambers before approving work." },
    { icon: faHouseChimney, title: "Safety + Preservation Balance", description: "Modern safety (liners, caps, clearances) without gutting character when it isn't required." },
  ];

  const processSteps = [
    { number: 1, title: "Careful Inspection", description: "Document masonry, liners, dampers, and firebox condition.", icon: faSearch },
    { number: 2, title: "Options Brief", description: "Preserve, repair, or upgrade paths with flat-rate ranges.", icon: faFileContract },
    { number: 3, title: "Phased Work", description: "Stage repairs around living needs and weather.", icon: faHeadset },
    { number: 4, title: "Final Report", description: "What was done and how to maintain the system.", icon: faCheckCircle },
  ];

  const crossServices = [
    { icon: faHammer, title: "Chimney Repair", body: "Crown, flashing, and masonry restoration.", link: "/services/chimney-repair" },
    { icon: faFire, title: "Chimney Sweep", body: "Gentle, contained cleaning for older flues.", link: "/services/chimney-sweep" },
    { icon: faHome, title: "Fireplace Installation", body: "Inserts that modernize without full demolition.", link: "/services/fireplace-install" },
    { icon: faClipboardCheck, title: "Annual Inspections", body: "Track aging systems before failure.", link: "/services/annual-inspection" },
  ];

  const faq = [
    { question: "Do you work on historic Waco homes?", answer: "Yes — older masonry chimneys and period fireplaces are a core specialty, not an afterthought." },
    { question: "Can you install a gas insert in a historic fireplace?", answer: "Often yes, with proper lining and venting. We'll confirm fit and preservation constraints on site." },
    { question: "Will repairs match existing brick?", answer: "We work to blend materials and profiles as closely as practical for the age and condition of the chimney." },
    { question: "Do you coordinate with restoration contractors?", answer: "Yes — we can phase chimney work alongside broader renovation schedules." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Historic Homes" },
      ]} />
      <SectionIntro
        title="Chimney Care for Historic Homes"
        subtitle="Preservation-minded sweeps, repairs, and fireplace upgrades for older masonry systems across Waco and Central Texas."
      />
      <TrustBar headline="Historic-home owners trust EmberStack with irreplaceable chimneys" />
      <IndustryPainPoints industry="Historic Homes" painPoints={painPoints} />
      <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Historic Homes Choose EmberStack" />
      <ProcessTimeline steps={processSteps} />
      <ServiceCardComponent cards={crossServices} heading="Services for Historic Properties" />
      <FAQ cityName="Waco" faq={faq} title="Historic Homes FAQs" />
      <Variant4 title="Request a Historic Home Assessment" cityName="Waco" slug="historic-homes" spot="industry-historic" formVariant={4} />
      <CTABanner
        headline="Protect the Fireplace That Defines Your Home"
        subline="Call (254) 840-4040 for a careful inspection and flat-rate plan."
      />
    </main>
  );
}
