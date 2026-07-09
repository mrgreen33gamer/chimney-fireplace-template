'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faFire, faDollarSign, faWrench, faLeaf, faClock, faHouseChimney, faBalanceScale } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Choosing between gas and wood in Central Texas is about more than ambiance. Installation path, fuel, maintenance, and how often you'll actually use the fireplace all change the long-term cost. Here's an honest comparison for Waco-area homeowners.",
  },
  {
    type: 'cards',
    heading: 'Cost Drivers That Matter',
    cards: [
      { icon: faDollarSign, title: 'Install complexity', body: 'Gas inserts into existing openings are often more affordable than full new builds. Wood systems may need liners, hearths, and clearances that add cost.' },
      { icon: faFire, title: 'Fuel over time', body: 'Wood can feel \"free\" if you have a supply — until you count time, storage, and seasoned product. Gas is metered but convenient.' },
      { icon: faWrench, title: 'Maintenance cadence', body: 'Wood needs regular sweeping and more inspection attention. Gas still needs annual safety checks but produces little creosote.' },
      { icon: faClock, title: 'Daily convenience', body: 'Gas wins for flip-of-a-switch heat. Wood wins for ritual and crackle — if you enjoy the work.' },
      { icon: faLeaf, title: 'Indoor air & smoke', body: 'Wood introduces more particulate and odor management. Gas is cleaner at the appliance but still needs correct venting.' },
      { icon: faHouseChimney, title: 'Existing chimney condition', body: 'A damaged flue can force liner work for either fuel type — inspect first so quotes are real.' },
      { icon: faBalanceScale, title: 'Resale preferences', body: 'Some buyers love wood; others want gas convenience. Local real-estate trends in Waco vary by neighborhood.' },
    ],
  },
  {
    type: 'table',
    heading: 'Gas vs. Wood — Ownership Snapshot',
    tableHeaders: ['Factor', 'Gas Fireplace', 'Wood Fireplace'],
    tableRows: [
      ['Typical install path', 'Insert or vented unit', 'Open wood or wood insert'],
      ['Fuel cost', 'Utility bill', 'Wood purchase/time'],
      ['Sweep frequency', 'Lower creosote needs', 'At least yearly'],
      ['Convenience', 'High', 'Lower'],
      ['Ambiance', 'Steady flame', 'Classic crackle'],
      ['Best for', 'Daily easy heat', 'Occasional traditional fires'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Get a site measure before comparing online prices. Venting path and chimney condition drive more of the bill than the unit sticker. EmberStack provides flat-rate install quotes at (254) 840-4040.",
  },
  {
    type: 'tips',
    heading: 'How To Decide',
    items: [
      'List how many nights you actually want a fire each year',
      'Inspect the existing chimney before buying equipment',
      'Compare install + 5-year fuel + maintenance — not just unit price',
      'Ask about insert options that keep your masonry opening',
      'Request a written flat-rate proposal with venting included',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Gas vs. Wood Fireplace Costs in Central Texas"
        description="Installation, fuel, maintenance, and long-term ownership — an honest cost comparison for Waco-area homeowners choosing between gas and wood."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Gas vs wood fireplace cost comparison for Central Texas"
        category="Installation"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Planning a Fireplace Upgrade?"
        body="Get a free on-site measure and flat-rate install quote from EmberStack Chimney & Fireplace."
        buttonText="Request Install Quote"
        buttonHref="/services/fireplace-install"
      />
      <NewsletterSignup variant={1} spot="gas-vs-wood-fireplace-costs-blog" />
    </>
  );
}
