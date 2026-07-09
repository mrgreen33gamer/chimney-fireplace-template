'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faFire, faCalendarCheck, faShieldHalved, faWind, faClock, faHouseChimney, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas burn seasons are shorter than northern winters, but that does not mean chimneys stay clean. Creosote builds whenever you burn wood — and even light use leaves residue that can ignite. Here's a practical schedule for Waco-area homeowners deciding how often to sweep.",
  },
  {
    type: 'cards',
    heading: 'How Often to Sweep — Quick Rules',
    cards: [
      { icon: faFire, title: 'Wood-burning: at least yearly', body: 'If you burn regularly from fall through early spring, schedule a professional sweep once a year before the first big fire.' },
      { icon: faCalendarCheck, title: 'Heavy use: every 50–70 fires', body: 'Weekend fires, softwood, or long burns can create Stage 2 creosote faster. More use = more frequent sweeps.' },
      { icon: faWind, title: 'Gas fireplaces still need checks', body: 'Gas produces little creosote but still needs vent, glass, and seal inspections — typically annually.' },
      { icon: faExclamationTriangle, title: 'After a chimney fire or storm', body: 'Any suspected chimney fire, lightning, or major storm damage warrants an inspection before the next burn.' },
      { icon: faHouseChimney, title: 'New-to-you home', body: 'Buying a house with a fireplace? Get a Level 2 inspection before you light anything — previous owners may have skipped years of care.' },
      { icon: faClock, title: 'Off-season is smart', body: 'Book sweeps in late summer or early fall before burn-season calendars fill up across Waco, Hewitt, and Woodway.' },
      { icon: faShieldHalved, title: 'CSIA-minded care', body: 'A certified sweep removes more than ash — they evaluate creosote stage, draft, and obvious damage while they work.' },
    ],
  },
  {
    type: 'table',
    heading: 'Suggested Sweep Schedule for Central Texas',
    tableHeaders: ['Usage Pattern', 'Recommended Service', 'Best Timing'],
    tableRows: [
      ['Occasional wood fires (few per month)', 'Annual sweep + inspection', 'September–October'],
      ['Frequent weekend fires', '1–2 sweeps per season', 'Mid-season check + spring clean'],
      ['Gas fireplace only', 'Annual inspection', 'Anytime; before holiday use'],
      ['Rental / short-term property', 'Inspect each turnover season', 'Before peak guest months'],
      ['After chimney fire or animal nest', 'Inspect + clean immediately', 'Before next fire'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you see shiny black creosote, smell strong smoke odors indoors, or notice lazy smoke that won't draw, stop burning and call (254) 840-4040. EmberStack Chimney & Fireplace offers flat-rate sweeps across Central Texas.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Count roughly how often you burn each season',
      'Look for creosote flakes, staining, or strong odors',
      'Schedule an annual sweep before the first cold front',
      'Ask for photo notes if you want a record for insurance',
      'Pair inspection with cap/damper checks when the tech is already on site',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Sweep a Chimney in Texas?"
        description="Burn season, creosote buildup, and Central Texas weather all affect sweep frequency. Here is a practical schedule for wood and gas fireplaces in the Waco area."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="How often to sweep a chimney in Texas — Waco homeowner guide"
        category="Maintenance"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for This Season's Sweep?"
        body="Book a CSIA-certified chimney sweep with EmberStack Chimney & Fireplace — flat-rate pricing and Clean Sweep Guarantee."
        buttonText="Schedule a Chimney Sweep"
        buttonHref="/services/chimney-sweep"
      />
      <NewsletterSignup variant={1} spot="how-often-sweep-chimney-texas-blog" />
    </>
  );
}
