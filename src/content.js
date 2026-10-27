/* All the site's copy that comes in lists, grouped by page. Edit wording
   here; the components only lay it out.

   The site's message: Xspace doesn't just show you property. It helps you
   understand it, verify it, experience it and make a better decision.

   Keep claims honest. Partner rules forbid fake urgency, "guaranteed
   returns" and unconfirmed promises, and verification is always worded as
   "relevant information, where applicable", never as a legal guarantee.

   Photos are representative images, not specific listings: Unsplash stock
   in public/images, and scenes cropped from the design mockups in
   public/images/mock. The pages say so next to them. */

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

/* Header links to the sections of the home page, in page order. */
export const SECTION_LINKS = [
  ['why', 'Why Xspace'],
  ['booking', '3 Booking Modes'],
  ['journey', 'The 9-Step Journey'],
  ['studio', 'Xspace Studio'],
  ['listings', 'Sample Listings'],
  ['about', 'About Us'],
  ['clients', 'What Clients Say'],
];

/* 01: Why choose Xspace. `visual` picks the illustration in the card;
   `to` links to a page or a #section, `intent` opens the enquiry form. */
export const WHY_CARDS = [
  { icon: 'search', title: 'Discover', text: 'Find properties that match your needs across West Hyderabad.', visual: 'photo', img: '/images/mock/why-discover.webp', to: '/property' },
  { icon: 'shield', title: 'Verify', text: 'RERA, HMDA, approvals, developer details and project status, reviewed where applicable, all in one place.', visual: 'checks', to: '/verification' },
  { icon: 'doc', title: 'Know before you visit', text: 'Understand the project, location, construction status, availability and more with detailed content.', visual: 'photo', img: '/images/mock/why-know.webp', to: '/studio' },
  { icon: 'bars', title: 'Compare & shortlist', text: 'Compare projects on price, location, configuration, amenities, developer and more.', visual: 'table', to: '#listings' },
  { icon: 'calendar', title: 'Visit only what matters', text: 'Book site visits with our team only for shortlisted options. Save time, effort and days of unnecessary visits.', visual: 'photo', img: '/images/mock/why-visit.webp', intent: 'Book a site visit' },
];
export const WHY_CHECKS = ['RERA', 'HMDA', 'Approvals', 'Developer'];

/* Facts about how Xspace works, not performance claims. Add real client
   numbers here only once they can be backed up. */
export const STATS = [
  ['9', 'Steps from discovery to after-deal'],
  ['7', 'Growth corridors in West Hyderabad'],
  ['24 hrs', 'For a free, personal shortlist'],
  ['360°', 'Project walkthroughs & location insights'],
  ['One', 'Team from discovery to deal'],
];

/* 02: Three ways to book time with the team. `mode` is the value the
   booking form records (BOOKING_MODES in config.js). The office address is
   confirmed on the call, not printed here. */
export const BOOKING_LEAD = "We don't force you into site offices. Connect with our real-estate advisors through whichever medium fits your schedule best.";
export const BOOKING_CARDS = [
  {
    mode: 'Home visit', icon: 'home', title: 'Home visit', cta: 'Book home visit',
    text: 'Our team brings the Xspace digital studio to your home. Review 360° tours, RERA and approval documents, and floor plans on our tablets with your family.',
  },
  {
    mode: 'Office lounge', icon: 'building', title: 'Office lounge', cta: 'Book office lounge', featured: true,
    text: 'Visit our discovery lounge. Compare projects on multiple screens, explore drone maps and go through developer records with an advisor.',
  },
  {
    mode: 'Virtual / Zoom call', icon: 'play', title: 'Virtual / Zoom call', cta: 'Book Zoom call',
    text: 'Perfect for NRIs and busy professionals. Join a 1-on-1 screen-share session to filter, compare and shortlist options across Neopolis, Tellapur, Narsingi and more.',
  },
];

/* 03: The 9-step client journey */
export const JOURNEY = [
  { title: 'Discover', text: "Find Xspace through social channels, Studio content or referrals. You don't start by driving to a site; you start by exploring digitally." },
  { title: 'Explore', text: 'Access unvarnished project details, drone videos, price ranges, configurations, amenities and floor plans to rule out unsuitable options early.' },
  { title: 'Verify', text: 'Know before you visit. Check RERA registration, HMDA approvals, developer delivery records, documents and the latest inventory status we hold.' },
  { title: 'Shortlist', text: 'Narrow down your options. Instead of 20 random site visits, for example, you shortlist 5 options digitally and visit only 2.' },
  { title: 'Compare', text: 'Compare shortlisted options side by side on price per sq. ft, layout efficiency, possession dates, connectivity and rental potential.' },
  { title: 'Experience (Visit)', text: 'Now you visit. The physical site visit becomes the <b>final validation</b>, not the first step. Coordinated with an Xspace rep.' },
  { title: 'Decide', text: 'Clear every final technical, commercial and legal question with our team before committing any booking token.' },
  { title: 'Deal', text: 'Xspace manages negotiation coordination, agreement documentation, developer alignment and transparent payment schedules.' },
  { title: 'After deal', text: 'We stay with you: handover tracking, construction updates, resale assistance and ongoing property support.' },
];

/* 05: Sample listings. They show what an Xspace shortlist looks like, not
   live inventory, and the page says so. `type` and `area` pre-fill the
   enquiry form, so they must match PROPERTY_OPTIONS / AREA_OPTIONS. */
export const LISTING_FILTERS = ['All', 'Apartments', 'Villas & houses', 'Commercial'];
export const LISTING_FACTS = ['Location', 'Property type', 'Configuration', 'Possession', 'Studio content', 'Verification', 'Good for', 'Price'];
export const SAMPLE_LISTINGS = [
  {
    id: 'l1', title: 'Gated community apartment', category: 'Apartments', img: '/images/type-apartments.webp',
    type: 'Gated Community Apartments', area: 'Narsingi',
    facts: ['Narsingi', 'Gated community', '2 & 3 BHK', 'Under construction', 'Walkthrough + drone', 'RERA, approvals', 'Families', 'Shared on request'],
  },
  {
    id: 'l2', title: 'Villa community', category: 'Villas & houses', img: '/images/type-villa.webp',
    type: 'Villa', area: 'Tellapur',
    facts: ['Tellapur', 'Villa', '4 BHK', 'Ready to move', 'Walkthrough + 360°', 'Approvals, title', 'Families, space', 'Shared on request'],
  },
  {
    id: 'l3', title: 'High-rise residences', category: 'Apartments', img: '/images/type-highrise.webp',
    type: 'Gated Community High-Rise', area: 'Neopolis',
    facts: ['Neopolis', 'High-rise', '3 & 4 BHK', 'Under construction', 'Drone + location film', 'RERA, HMDA', 'Close to work', 'Shared on request'],
  },
  {
    id: 'l4', title: 'Ready-to-move apartment', category: 'Apartments', img: '/images/hero-community.webp',
    type: 'Gated Community Apartments', area: 'Gachibowli',
    facts: ['Gachibowli', 'Gated community', '2 BHK', 'Ready to move', 'Walkthrough video', 'RERA, OC status', 'First home, rental', 'Shared on request'],
  },
  {
    id: 'l5', title: 'Independent house', category: 'Villas & houses', img: '/images/type-house.webp',
    type: 'Independent House', area: 'Nallagandla',
    facts: ['Nallagandla', 'Independent house', '3 & 4 BHK', 'Ready to move', 'Walkthrough video', 'Title, approvals', 'Families, parents', 'Shared on request'],
  },
  {
    id: 'l6', title: 'Office space', category: 'Commercial', img: '/images/type-office.webp',
    type: 'Office Space', area: 'Financial District',
    facts: ['Financial District', 'Office space', 'Bare shell / fitted', 'Ready to move', 'Walkthrough video', 'Title, commercial use', 'Growing teams', 'Shared on request'],
  },
];

/* 06: About us */
export const TRADITIONAL_WAY = [
  { icon: 'car', title: 'Visit multiple properties', text: 'Spend days in travel', img: '/images/mock/trad-1.webp' },
  { icon: 'list', title: 'Compare on memory', text: 'Hard to keep track', img: '/images/mock/trad-2.webp' },
  { icon: 'doc', title: 'Uncertainty in documentation', text: 'RERA, approvals, title and more', img: '/images/mock/trad-3.webp' },
  { icon: 'help', title: "Still not sure if it's the right one", text: 'Even after all the effort', img: '/images/mock/trad-4.webp' },
];
export const XSPACE_WAY = [
  { icon: 'search', title: 'Discover right projects', text: 'Based on your needs and budget', img: '/images/mock/way-1.webp' },
  { icon: 'shield', title: 'Verify key information', text: 'RERA, HMDA, approvals, developer details', img: '/images/mock/way-2.webp' },
  { icon: 'play', title: 'Explore in depth', text: 'Walkthroughs, drone views, 360° tours and location insights', img: '/images/mock/way-3.webp' },
  { icon: 'bars', title: 'Compare and shortlist', text: 'Everything in one place', img: '/images/mock/way-4.webp' },
  { icon: 'calendar', title: 'Visit only what matters', text: 'Save time and effort', img: '/images/mock/way-5.webp' },
];
export const STORY_FEATURES = [
  { icon: 'shield', title: 'Verified information', text: 'RERA, HMDA, approvals and developer details, where applicable.' },
  { icon: 'film', title: 'Immersive content', text: 'Walkthroughs, 360° tours, drone views and location insights.' },
  { icon: 'layers', title: 'All in one place', text: 'Discovery, verification, comparison and consultation, seamlessly.' },
  { icon: 'users', title: 'Expert guidance', text: 'A dedicated team to support you throughout your journey.' },
];

/* 07: What clients say. Add only real reviews, with the client's
   permission, in this shape:
     { quote: '…', name: 'Priya S.', role: 'End User', place: 'Hyderabad', group: 'End Users' }
   `group` must be one of CLIENT_GROUPS. Until there are some, the section
   invites clients to share their experience instead. */
export const CLIENT_GROUPS = ['Home Buyers', 'Investors', 'NRIs', 'End Users', 'Developer Partners'];
export const TESTIMONIALS = [];

/* ---------- Property (06: find what fits you) ---------- */
export const PROPERTY_FINDER = [
  { label: 'Location', options: ['Neopolis', 'Narsingi', 'Financial District', 'Gachibowli', 'Tellapur', 'Nallagandla', 'Kollur'], field: 'area' },
  { label: 'Property type', options: ['Gated Community Apartments', 'Villa', 'Independent House', 'Office Space', 'Shops', 'Land'], field: 'type' },
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
  { icon: 'compass', title: 'Xspace', text: 'The team connecting everything together.', to: '/about' },
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
  { label: 'What kind of home', options: ['Gated Community Apartments', 'Villa', 'Independent House', 'Standalone'], field: 'type' },
  { label: 'Configuration', options: ['2 BHK', '3 BHK', '4+ BHK'], field: 'note', prefix: 'Configuration' },
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
  { title: 'Commercial buildings', text: 'Whole buildings and floors, plus street-facing shops and showrooms.', intent: 'Office Space', img: '/images/type-building.webp' },
  { title: 'Warehouses & industrial', text: 'Godowns, industrial units and open plots with good road access.', intent: 'Godown', img: '/images/type-industrial.webp' },
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
  { label: 'What do you need', options: ['Office Space', 'Shops', 'Open Plot', 'Godown', 'Industry', 'Land'], field: 'type' },
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

/* ---------- Chat box ---------- */
/* Questions the chat box answers on the spot. Anything else goes to the
   team on WhatsApp. */
export const CHAT_TOPICS = [
  ['How does verification work?', VERIFICATION_FAQS[0][1]],
  ['Is it free to explore and visit?', GENERAL_FAQS[0][1]],
  ['Which areas do you cover?', 'We focus on West Hyderabad: Neopolis, Narsingi, Financial District, Gachibowli, Tellapur, Nallagandla and Kollur. Looking somewhere else? Ask us anyway.'],
  ["I live abroad. Can you help?", RES_FAQS[2][1]],
];
