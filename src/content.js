/* All the site's copy that comes in lists, grouped by page. Edit wording
   here; the components only lay it out.

   The site's message: Xspace doesn't just show you property. It helps you
   understand it, verify it, experience it and make a better decision.

   Keep claims honest. Partner rules forbid fake urgency, "guaranteed
   returns" and unconfirmed promises, and verification is always worded as
   "relevant information, where applicable", never as a legal guarantee.

   Photos are representative stock images (Unsplash, public/images), not
   specific listings. The pages say so next to them. */

/* ---------- Header / footer ---------- */
export const NAV_LINKS = [
  ['/property', 'Property'],
  ['/projects', 'Projects'],
  ['/verification', 'Verification'],
  ['/studio', 'Studio'],
  ['/partners', 'Partners'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

export const FOOTER_AUDIENCES = [
  ['/property', 'Buyers'],
  ['/partners#developers', 'Developers'],
  ['/partners#realtors', 'Realtor Partners'],
  ['/partners#creators', 'Creator Partners'],
];

/* ---------- Home ---------- */
export const HOME_SLIDES = [
  { src: '/images/hero-villa.webp', label: 'Villa living' },
  { src: '/images/hero-commercial.webp', label: 'Offices & commercial' },
  { src: '/images/hero-community.webp', label: 'Gated communities' },
];

export const PATHS = [
  {
    to: '/residential', kicker: 'Residential', title: 'A home for your family',
    text: 'Apartments, villas and independent houses, shortlisted around schools, commute and family life.',
    img: '/images/type-villa.webp',
  },
  {
    to: '/commercial', kicker: 'Commercial', title: 'Space for your business',
    text: 'Offices, commercial buildings, showrooms, warehouses and land.',
    img: '/images/type-building.webp',
  },
];

/* 01: Why Xspace */
export const PILLARS = [
  { icon: 'search', title: 'Discover', text: 'Find properties and projects that match your requirements.' },
  { icon: 'compass', title: 'Understand', text: 'Explore the project, location, specifications, amenities and available information.' },
  { icon: 'shield', title: 'Verify', text: 'Review relevant project information against applicable official sources.' },
  { icon: 'eye', title: 'Experience', text: 'See the property through detailed content, project presentations and site visits.' },
  { icon: 'scale', title: 'Decide', text: 'Compare your options and move forward with confidence.' },
];

/* 02: What we do. `to` links to a page; `intent` opens the enquiry form. */
export const SERVICES = [
  { icon: 'search', title: 'Property discovery', text: 'Find properties based on your budget, location, requirements and purpose.', to: '/property', cta: 'Find your property' },
  { icon: 'megaphone', title: 'Project marketing', text: 'We work with developers and property owners to present their projects to the right audience.', to: '/partners#developers', cta: 'For developers' },
  { icon: 'users', title: 'Property consulting', text: 'Our team helps you understand, compare and evaluate suitable opportunities.', intent: 'Talk to Xspace', cta: 'Talk to our team' },
  { icon: 'shield', title: 'Project verification', text: 'We organise relevant project information and review available details from applicable official sources.', to: '/verification', cta: 'How verification works' },
  { icon: 'route', title: 'Site visits', text: "Once you've shortlisted a property, we coordinate the site visit experience.", intent: 'Book a site visit', cta: 'Plan a visit' },
  { icon: 'play', title: 'Property content', text: 'Our Studio and Creator Partners make projects and locations easier to understand through visual content.', to: '/studio', cta: 'Xspace Studio' },
  { icon: 'chip', title: 'Technology', text: "Our private internal platform connects Xspace's teams, inventory, CRM, verification, site visits and operations.", to: '/about#technology', cta: 'Behind the scenes' },
];

/* 03 and 11: the connected journeys, shown as a chain */
export const DIFFERENCE_CHAIN = ['Discover', 'Shortlist', 'Verify', 'Experience', 'Decide'];

/* 05: Your property journey */
export const JOURNEY = [
  { icon: 'search', title: 'Discover', text: "Tell us what you're looking for." },
  { icon: 'compass', title: 'Understand', text: 'We identify projects and properties that fit your requirements.' },
  { icon: 'list', title: 'Shortlist', text: 'Explore the options that make sense for you.' },
  { icon: 'shield', title: 'Verify', text: 'Review available project and verification information.' },
  { icon: 'eye', title: 'Experience', text: 'Explore the project through content and visit it in person.' },
  { icon: 'scale', title: 'Decide', text: 'Compare your options and make your decision.' },
  { icon: 'key', title: 'Complete', text: 'Xspace supports the transaction and coordinates the journey through closure and handover.' },
  { icon: 'share', title: 'Refer', text: "A good experience can become someone else's starting point." },
];

/* ---------- Property (06: find what fits you) ---------- */
export const PROPERTY_FINDER = [
  { label: 'Location', options: ['Neopolis', 'Narsingi', 'Financial District', 'Gachibowli', 'Tellapur', 'Nallagandla', 'Kollur'], field: 'area' },
  { label: 'Property type', options: ['Gated Community Apartments', 'Villa', 'Independent House', 'Office Space', 'Retail Shop / Showroom', 'Land'], field: 'type' },
  { label: 'Configuration', options: ['2 BHK', '3 BHK', '4+ BHK'], field: 'note', prefix: 'Configuration' },
  { label: 'Budget', options: ['Under ₹75 L', '₹75 L – 1.2 Cr', '₹1.2 – 2 Cr', '₹2 – 3.5 Cr', '₹3.5 Cr +'], field: 'budget' },
  { label: 'Purpose', options: ['To live in', 'To invest', 'For my business'], field: 'note', prefix: 'Purpose' },
];

/* ---------- Projects (06: West Hyderabad) ---------- */
export const AREAS = [
  { name: 'Neopolis', text: 'A planned layout beside the Financial District, where large mixed-use and high-rise projects are coming up.', tags: ['High-rise', 'Mixed-use'] },
  { name: 'Narsingi', text: 'Right on the ORR, with gated apartments and villas close to the IT corridor.', tags: ['Apartments', 'Villas', 'ORR'] },
  { name: 'Financial District', text: 'One of the city\'s main office hubs, with homes and workspaces a short drive from each other.', tags: ['Offices', 'Apartments'] },
  { name: 'Gachibowli', text: 'The IT hub: ready-to-move apartments, office space and retail close to work.', tags: ['Ready to move', 'Office space'] },
  { name: 'Tellapur', text: 'Quieter and greener, with villa communities and newer gated projects.', tags: ['Villas', 'Gated', 'Family'] },
  { name: 'Nallagandla', text: 'An established neighbourhood with schools, hospitals and daily needs close by.', tags: ['Established', 'Schools'] },
  { name: 'Kollur', text: 'Further out along the ORR, with newer residential projects and larger layouts.', tags: ['New projects', 'ORR'] },
];

/* Corridor map pins, in the 400×190 map's own coordinates. Placed from each
   area's rough latitude and longitude: schematic, not to scale. */
export const MAP_PINS = [
  { area: 'Kollur', x: 96, y: 40, lx: 78, ly: 60 },
  { area: 'Tellapur', x: 194, y: 34, lx: 170, ly: 54 },
  { area: 'Nallagandla', x: 259, y: 34, lx: 230, ly: 22 },
  { area: 'Gachibowli', x: 346, y: 75, lx: 298, ly: 64 },
  { area: 'Financial District', x: 325, y: 109, lx: 222, ly: 106 },
  { area: 'Neopolis', x: 270, y: 129, lx: 216, ly: 133 },
  { area: 'Narsingi', x: 357, y: 152, lx: 330, ly: 174 },
];

/* ---------- Verification (04: know before you own) ---------- */
export const EXPLORE_LIST = [
  'Project information', 'Developer details', 'Location', 'Configuration', 'Amenities',
  'Available inventory', 'Pricing information', 'Relevant verification information', 'Visual content', 'Project walkthroughs',
];

export const VERIFICATION_NOTE = 'Xspace verification is intended to support informed decision-making and does not replace independent legal or professional due diligence.';

export const VERIFICATION_FAQS = [
  ['What does Xspace verification cover?', 'Where it applies, we review relevant project information, such as RERA registration and approvals, against the official sources that cover it. We record what we checked, the status we found and the date we checked it.'],
  ['Is verification a legal opinion?', 'No. It is there to help you make an informed decision. For a purchase, we recommend your own legal and professional due diligence as well.'],
  ['Can I see the verification for a project I am considering?', 'Yes. Tell us the project and we will share the verification information we hold, with its status and date.'],
  ['What if something changes after a project was checked?', 'Information changes over time, which is why every record carries the date it was checked. If we learn of a change that affects you, we tell you.'],
];

/* ---------- Studio (07) ---------- */
export const STUDIO_FORMATS = [
  { icon: 'play', title: 'Project walkthroughs', text: 'Walk through the project, the units and the common areas before you go.' },
  { icon: 'film', title: 'Property videos', text: 'Clear, honest video of the property itself, not just the brochure renders.' },
  { icon: 'drone', title: 'Drone content', text: 'See the site, its surroundings and its access from above.' },
  { icon: 'orbit', title: '360° experiences', text: 'Look around a space at your own pace, from wherever you are.' },
  { icon: 'pin', title: 'Location content', text: 'The neighbourhood around a project: roads, schools, hospitals and daily needs.' },
  { icon: 'book', title: 'Educational content', text: 'Plain-language explainers on buying property, from approvals to handover.' },
];

/* ---------- Partners (09–12) ---------- */
export const ECOSYSTEM = [
  { icon: 'home', title: 'Buyers', text: 'People looking to discover, evaluate and own property.', to: '/property' },
  { icon: 'building', title: 'Developers & property owners', text: 'Projects and properties entering the Xspace ecosystem.', to: '#developers' },
  { icon: 'users', title: 'Realtor Partners', text: 'On-ground property professionals supporting listings and site visits.', to: '#realtors' },
  { icon: 'film', title: 'Content creators', text: 'Creators bringing property and location stories to their audiences.', to: '#creators' },
  { icon: 'play', title: 'Xspace Studio', text: 'Our in-house media and content team.', to: '/studio' },
  { icon: 'xspace', title: 'Xspace', text: 'The team connecting everything together.', to: '/about' },
];

export const DEVELOPER_SERVICES = [
  'Project onboarding', 'Property marketing', 'Content & media', 'Lead generation',
  'Customer coordination', 'Site visits', 'Digital presence',
];

export const REALTOR_FOCUS = [
  { icon: 'layers', title: 'Listings', text: 'Bring the properties and projects you know into the Xspace ecosystem.' },
  { icon: 'route', title: 'Site visits', text: 'Walk customers through the properties on the ground.' },
];
export const REALTOR_CHAIN = ['CRM', 'Requirement', 'Shortlist', 'Follow-up', 'Closure', 'Handover'];

export const CREATOR_FORMATS = [
  'Property content', 'Project walkthroughs', 'Location stories',
  'Educational content', 'Real-estate insights', 'Campaign content',
];

/* ---------- About (08, 13, 14) ---------- */
export const PORTAL_MODULES = [
  { icon: 'users', title: 'CRM', text: 'Customer & lead management' },
  { icon: 'layers', title: 'Inventory', text: 'Projects & property information' },
  { icon: 'shield', title: 'Verification', text: 'Project verification workflows' },
  { icon: 'calendar', title: 'Site visits', text: 'Scheduling & coordination' },
  { icon: 'share', title: 'Partners', text: 'Realtor & Creator Partner management' },
  { icon: 'route', title: 'Operations', text: 'Follow-ups, closures, commissions & handover' },
];

export const TRUST = [
  { icon: 'eye', title: 'Transparency', text: 'Clear information and communication throughout the journey.' },
  { icon: 'shield', title: 'Verification', text: 'Relevant information reviewed against applicable sources.' },
  { icon: 'play', title: 'Experience', text: 'Visual content and site visits designed to help you understand the property.' },
  { icon: 'users', title: 'People', text: 'A connected network of Xspace teams, Realtors and Creators.' },
  { icon: 'chip', title: 'Technology', text: 'Systems built to keep the journey organised behind the scenes.' },
];

export const GENERAL_FAQS = [
  ['Do I pay anything to explore properties or visit a site?', 'No. Discovering properties, seeing our content and visiting a site with us is free. If any fee applies when you close a deal, we explain it before you commit to anything.'],
  ['Will I get calls from lots of different agents?', 'No. Your journey is coordinated by the Xspace team. Your details stay inside Xspace and are never sold or shared.'],
  ['Do you promise returns on investment property?', 'No. We share the information we have and help you compare options, but we never promise returns or use pressure to close.'],
  ['Can I list my property or project with you?', 'Yes. Developers and property owners can bring projects into the Xspace ecosystem. See the Partners page or talk to us.'],
];

/* ---------- Residential ---------- */
export const RES_SLIDES = [
  { src: '/images/hero-community.webp', label: 'Gated communities' },
  { src: '/images/hero-villa.webp', label: 'Villa living' },
  { src: '/images/hero-house.webp', label: 'Independent homes' },
];

export const RES_TYPES = [
  { title: 'Gated apartments', text: 'Clubhouse, pool, security and kids who make friends downstairs.', intent: 'Gated Community Apartments', img: '/images/type-apartments.webp' },
  { title: 'High-rise residences', text: 'Skyline views and premium towers close to work.', intent: 'Gated Community High-Rise', img: '/images/type-highrise.webp' },
  { title: 'Villas', text: 'Room to grow, a garden to play in, and gated villa communities.', intent: 'Villa', img: '/images/type-villa.webp' },
  { title: 'Independent houses', text: 'Your own plot, your own design, your own rules.', intent: 'Independent House', img: '/images/type-house.webp' },
];

/* What families tell us matters. Picked in the finder and carried into the
   enquiry so the advisor sees it. */
export const FAMILY_NEEDS = [
  { icon: 'school', title: 'Good schools nearby', text: 'We look at which schools are close by and how long the school run would take.' },
  { icon: 'tree', title: 'Parks & play areas', text: 'Open space, play areas and a safe place for kids to cycle.' },
  { icon: 'lock', title: 'Safe, gated living', text: 'Security, CCTV and a community you feel good about.' },
  { icon: 'hospital', title: 'Hospitals close by', text: 'Emergency care and everyday clinics within easy reach.' },
  { icon: 'car', title: 'An easy commute', text: 'Shorter drives to the Financial District, Gachibowli or wherever you work.' },
  { icon: 'users', title: 'Space for parents', text: 'Ground-floor bedrooms, lifts and room for three generations.' },
];

export const RES_FINDER = [
  { label: 'Where', options: ['Narsingi', 'Tellapur', 'Gachibowli', 'Nallagandla', 'Open to suggestions'], field: 'area' },
  { label: 'What kind of home', options: ['2 BHK', '3 BHK', '4+ BHK', 'Villa', 'Independent House'], field: 'type' },
  { label: 'What matters to your family', options: ['Schools nearby', 'Play areas', 'Gated & secure', 'Near hospitals', 'Short commute', 'Space for parents'], field: 'note', multi: true, prefix: 'Family priorities' },
];

export const RES_FAQS = [
  ['We are buying for the whole family. Can you shortlist around schools and parents?', 'Yes, that is how we work. Tell us the schools you are considering, where each of you works, and whether parents will live with you. We shortlist homes around that, not just around a budget.'],
  ['Do you help with home loans?', 'We help you understand what you can borrow, show you bank-approved projects, and coordinate with your lender. The loan itself is approved by the bank.'],
  ['I live outside Hyderabad or abroad. Can you still help?', "Yes. Many buyers start with our video walkthroughs and a live video-call site visit. We can coordinate the paperwork remotely and plan an in-person visit for when you're in town."],
  ['Are under-construction projects RERA registered?', 'Every RERA-registered project we show comes with its registration number upfront, so you can check it yourself on the TG RERA portal.'],
];

/* ---------- Commercial ---------- */
export const COM_SLIDES = [
  { src: '/images/hero-commercial.webp', label: 'Commercial buildings' },
  { src: '/images/biz-office.webp', label: 'Office space' },
];

export const COM_TYPES = [
  { title: 'Office space', text: 'From a ten-seat studio to a full floor, bare shell or ready to move in.', intent: 'Office Space', img: '/images/type-office.webp' },
  { title: 'Commercial buildings', text: 'Whole buildings and floors, plus street-facing shops and showrooms.', intent: 'Commercial Building', img: '/images/type-building.webp' },
  { title: 'Warehouses & industrial', text: 'Godowns, industrial units and open plots with good road access.', intent: 'Warehouse / Industrial', img: '/images/type-industrial.webp' },
  { title: 'Land & plots', text: 'Acreage and plots to build on or hold, with clear title.', intent: 'Land', img: '/images/type-land.webp' },
];

export const BUSINESS_HELP = [
  { icon: 'building', title: 'Matched to how you work', text: 'Team size, parking, power backup, client access: we shortlist around your operations, not just a rate per sq ft.' },
  { icon: 'layers', title: 'Owners and investors', text: 'Whole buildings and floors to own and occupy, with the documents a lender or partner will ask for.' },
  { icon: 'store', title: 'Retail that gets seen', text: 'Street-facing shops and showrooms where your customers already walk past.' },
  { icon: 'box', title: 'Logistics-ready', text: 'Warehouses and industrial land with the road access and approvals your operations need.' },
];
export const BUSINESS_CHECKS = ['Clear title', 'Building approvals', 'Commercial-use permissions', 'RERA, where it applies'];

export const COM_FINDER = [
  { label: 'What do you need', options: ['Office Space', 'Commercial Building', 'Retail Shop / Showroom', 'Warehouse / Industrial', 'Land'], field: 'type' },
  { label: 'Where', options: ['Financial District', 'Neopolis', 'Gachibowli', 'Narsingi', 'Open to suggestions'], field: 'area' },
  { label: 'Team size', options: ['Under 10', '10–50', '50–200', '200+'], field: 'note', prefix: 'Team size' },
];

export const COM_FAQS = [
  ['What do you check on a commercial property?', 'Clear title, building approvals and permission for commercial use, plus RERA registration where the project falls under it. If a property fails a check, it does not reach your shortlist.'],
  ['Can you find a whole building or floor for my company?', 'Yes. Tell us your headcount, budget and preferred area, and we shortlist floors and whole buildings that fit, with the documents you will need.'],
  ['Do you deal in warehouses and industrial land?', 'Yes. Godowns, industrial units and open industrial plots, with road access and approvals checked before you visit.'],
  ['We are investors, not occupiers. Can you help?', 'Yes. We help owners and investors buy commercial buildings and land, and we are honest about what we know. We never promise returns.'],
];

/* ---------- Closing form, per page ---------- */
export const CTA = {
  home: {
    kicker: '15 — Know before you own',
    title: ['Know before ', 'you own.'],
    lead: "Discover. Verify. Experience. Decide. Your next property decision starts with understanding what you're choosing.",
    intent: 'Find your property',
    points: [
      ['Discover', ' properties and projects that fit your requirements'],
      ['Verify', ' relevant project information against applicable sources'],
      ['Experience', ' the project through content and a site visit'],
      ['Decide', ' with the Xspace team coordinating the journey around you'],
    ],
  },
  property: {
    kicker: 'Find your property',
    title: ['Tell us what ', "you're looking for."],
    intent: 'Find your property',
    points: [
      ['Matched to you', ': budget, location, requirements and purpose'],
      ['Verification information', ' shared where it applies'],
      ['Content first', ', so you visit with purpose'],
      ['No spam, no pressure.', ' Your number stays with us.'],
    ],
  },
  verification: {
    kicker: 'View verification',
    title: ['Verify before ', 'you visit.'],
    intent: 'View verification',
    points: [
      ['Tell us the project', " you're considering"],
      ['We share what we hold', ': the information reviewed, its status and date'],
      ['Plain language', ', with sources named'],
      ['No pressure.', ' Take it to your own advisor too.'],
    ],
  },
  residential: {
    title: ["Let's find your family's ", 'dream home.'],
    points: [
      ['Shortlisted around your family', ': schools, commute, space for parents'],
      ['Checked first', ': documents, approvals and RERA'],
      ['Video walkthroughs', ' before you take the kids on a site visit'],
      ['No spam, no pressure.', ' Your number stays with us.'],
    ],
  },
  commercial: {
    title: ['Find the right space ', 'for your business.'],
    intent: 'Business space',
    points: [
      ['Within 24 hours', ': offices and commercial property that fit your brief'],
      ['Checked first', ': title, approvals and commercial-use permissions'],
      ['One advisor', ' through negotiation and paperwork'],
      ['Confidential.', ' Your requirement is never shared.'],
    ],
  },
};
