// libs/local-db/reviews.ts
//
// Static testimonials for EmberStack Chimney & Fireplace — used by Testimonials component,
// homepage, service pages, and JSON-LD aggregateRating via review count.

export interface Review {
  id:       string;
  name:     string;
  location: string;
  rating:   number;
  text:     string;
  date:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    id:       '1',
    name:     'Rachel M.',
    location: 'Waco, TX',
    rating:   5,
    text:     "Our fireplace was smoking into the room every time we lit a fire. EmberStack found a heavy creosote buildup and a damaged damper, swept the flue, and fixed the damper the same visit. Clean Sweep Guarantee and clear pricing. Highly recommend.",
    date:     '2026-06-12',
    service:  'Chimney Sweep',
  },
  {
    id:       '2',
    name:     'Derek T.',
    location: 'Hewitt, TX',
    rating:   5,
    text:     "Called about a cracked chimney crown after a storm. Hank's crew was at our house the next morning, documented everything with photos, and rebuilt the crown without a mess. Fair price and very professional.",
    date:     '2026-05-28',
    service:  'Chimney Repair',
  },
  {
    id:       '3',
    name:     'Amanda K.',
    location: 'Woodway, TX',
    rating:   5,
    text:     "We wanted a gas insert for our old masonry fireplace. EmberStack walked us through options, venting requirements, and finish details — no hard sell. Install looked factory-clean and the house stayed tidy.",
    date:     '2026-05-10',
    service:  'Fireplace Installation',
  },
  {
    id:       '4',
    name:     'James P.',
    location: 'Temple, TX',
    rating:   5,
    text:     "Animals had nested in our chimney. They installed a proper cap and spark arrestor, cleaned the flue, and checked the damper. No more critters, no more rain. Done right the first time.",
    date:     '2026-04-22',
    service:  'Caps & Dampers',
  },
  {
    id:       '5',
    name:     'Sofia R.',
    location: 'China Spring, TX',
    rating:   5,
    text:     "Our dryer was taking forever and the exterior vent was packed with lint. EmberStack cleaned the full run and showed us before/after photos. Clothes dry faster and I feel safer about fire risk.",
    date:     '2026-04-05',
    service:  'Dryer Vent Cleaning',
  },
  {
    id:       '6',
    name:     'Michael B.',
    location: 'Killeen, TX',
    rating:   5,
    text:     "Booked an annual inspection before burn season. They were thorough, CSIA-certified, and explained Level 1 findings in plain English. Scheduling was easy and they showed up on time.",
    date:     '2026-03-18',
    service:  'Annual Inspections',
  },
  {
    id:       '7',
    name:     'Lauren H.',
    location: 'McGregor, TX',
    rating:   5,
    text:     "Creosote was thicker than we expected after years of burning. The sweep was careful, contained the soot, and left our living room spotless. Will use EmberStack every year.",
    date:     '2026-02-27',
    service:  'Chimney Sweep',
  },
  {
    id:       '8',
    name:     'Chris W.',
    location: 'Bellmead, TX',
    rating:   5,
    text:     "Property manager here — EmberStack handles multi-unit fireplace and dryer-vent work for our portfolio. COIs on file, volume pricing, and tenants love the communication.",
    date:     '2026-02-08',
    service:  'Property Management',
  },
];

export default reviews;
