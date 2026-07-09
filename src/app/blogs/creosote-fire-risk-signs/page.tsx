'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faFire, faExclamationTriangle, faShieldHalved, faSmog, faEye, faBan, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Creosote is the tar-like byproduct of incomplete combustion. In a chimney, it can progress from flaky soot to a hard, glazed coating that fuels chimney fires. Knowing the warning signs helps Waco homeowners act before a scare becomes an emergency.",
  },
  {
    type: 'cards',
    heading: 'Warning Signs of Dangerous Creosote',
    cards: [
      { icon: faEye, title: 'Shiny black glaze in the flue', body: 'Stage 3 creosote looks like hardened tar. It is the most dangerous and usually needs specialized removal — not a casual brush pass.' },
      { icon: faSmog, title: 'Strong smoke or chemical odors', body: 'Persistent smells, especially on humid days, can signal buildup or poor draft related to deposits.' },
      { icon: faFire, title: 'Lazy smoke that won\'t draw', body: 'Smoke spilling into the room or lingering in the firebox often means restriction or draft problems.' },
      { icon: faExclamationTriangle, title: 'Flakes or chunks in the firebox', body: 'Fallen creosote debris is a clue the upper flue is shedding deposits that need professional cleaning.' },
      { icon: faBan, title: 'Do not keep burning \"just a little\"', body: 'Continuing to burn over heavy creosote raises chimney-fire risk dramatically.' },
      { icon: faHouseChimney, title: 'Recent change in burn habits', body: 'Switching wood types, longer overnight burns, or a new stove insert can accelerate buildup.' },
      { icon: faShieldHalved, title: 'Annual inspections catch it early', body: 'CSIA-minded inspections identify creosote stage before it becomes a glazed hazard.' },
    ],
  },
  {
    type: 'table',
    heading: 'Creosote Stages at a Glance',
    tableHeaders: ['Stage', 'Appearance', 'Risk Level', 'Typical Response'],
    tableRows: [
      ['Stage 1', 'Sooty, dusty flakes', 'Lower', 'Standard professional sweep'],
      ['Stage 2', 'Crunchy, tarry pellets', 'Moderate–High', 'Thorough sweep; inspect for damage'],
      ['Stage 3', 'Hard glossy glaze', 'Highest', 'Specialized removal + inspection'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you suspect Stage 2 or Stage 3 creosote, stop burning and call EmberStack at (254) 840-4040. We'll inspect, quote flat-rate, and clean safely — Clean Sweep Guarantee · Fully Insured.",
  },
  {
    type: 'tips',
    heading: 'Reduce Creosote Between Sweeps',
    items: [
      'Burn seasoned hardwood when possible',
      'Avoid smothering fires that produce heavy smoke',
      'Maintain good draft with a working damper and clear cap',
      'Schedule sweeps before heavy burn season',
      'Never use DIY chemical \"fixes\" as a substitute for professional cleaning',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Creosote Fire Risk: Warning Signs Every Homeowner Should Know"
        description="Glossy black buildup, lazy smoke, and strong odors are red flags. Learn the stages of creosote and when to call a CSIA-certified sweep in Central Texas."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Creosote fire risk signs for chimney safety in Waco TX"
        category="Safety"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Worried About Creosote?"
        body="Get a professional inspection and sweep from EmberStack Chimney & Fireplace — CSIA-certified crews, flat-rate pricing."
        buttonText="Book a Safety Sweep"
        buttonHref="/services/chimney-sweep"
      />
      <NewsletterSignup variant={1} spot="creosote-fire-risk-signs-blog" />
    </>
  );
}
