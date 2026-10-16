/* All the page's copy that comes in lists. Edit wording here; the
   components only lay it out. Every claim here is one the business already
   delivers. Partner rules forbid fake urgency, so keep it that way. */

export const TICKER = [
  'Apartments', 'Villas', 'Independent houses', 'High-rise residences', 'Office space',
  'Commercial buildings', 'Retail & showrooms', 'Warehouses', 'Land & plots',
];

export const OFFERS = [
  {
    icon: 'bolt', title: 'A shortlist in 24 hours', intent: 'Free 24-hour shortlist', cta: 'Get my shortlist',
    text: 'Tell us your budget, area and must-haves. Within a day you get a short list of verified homes that match, with prices, sizes and possession dates.',
  },
  {
    icon: 'shield', title: 'Checked before you see it', intent: 'Document check', cta: 'Ask about a property',
    text: 'We check the survey number, approvals, title status and RERA registration before a property reaches your shortlist. If it fails a check, you never see it.',
  },
  {
    icon: 'play', title: 'Video walkthroughs', intent: 'Video walkthrough', cta: 'Send me walkthroughs',
    text: 'Our in-house studio films the projects we list. Watch the walkthrough and the floor plan before you spend a Saturday driving to a site.',
  },
  {
    icon: 'route', title: 'Site visits planned for you', intent: 'Book a site visit', cta: 'Plan my visit',
    text: "We plan one visit day across the projects you like, confirm each site the day before, and walk you through them. Can't make it? We can do the visit live on a video call.",
  },
];

export const STEPS = [
  { title: 'Tell us what you need', text: 'A short call or WhatsApp chat about your budget, area, home size and timeline.', when: '10 minutes' },
  { title: 'Get your shortlist', text: 'Verified homes that fit your brief, with RERA numbers, floor plans, brochures and videos.', when: 'Within 24 hours' },
  { title: 'Visit what you like', text: 'One planned visit day, in person or by video call. Tell us what you liked and we refine the list.', when: 'When it suits you' },
  { title: 'Close with confidence', text: 'Your advisor helps with the negotiation, home loan coordination and paperwork until registration.', when: 'One advisor throughout' },
];

/* Photos are representative stock images (Unsplash, public/images), not
   specific listings. The page says so next to them. */
export const HERO_SLIDES = [
  { src: '/images/hero-villa.webp', label: 'Villa living' },
  { src: '/images/hero-community.webp', label: 'Gated communities' },
  { src: '/images/hero-house.webp', label: 'Independent homes' },
  { src: '/images/hero-commercial.webp', label: 'Offices & commercial' },
];

export const HERO_STATS = [
  ['100%', 'of homes we show are verified first'],
  ['24h', 'to your personalised shortlist'],
  ['1', 'dedicated advisor, start to finish'],
  ['₹0', 'for shortlist, walkthroughs and visits'],
];

export const PROPERTY_TYPES = [
  { title: 'Gated apartments', text: 'Clubhouse, pool, security and kids who make friends downstairs.', intent: 'Gated Community Apartments', img: '/images/type-apartments.webp' },
  { title: 'High-rise residences', text: 'Skyline views and premium towers close to work.', intent: 'Gated Community High-Rise', img: '/images/type-highrise.webp' },
  { title: 'Villas', text: 'Room to grow, a garden to play in, and gated villa communities.', intent: 'Villa', img: '/images/type-villa.webp' },
  { title: 'Independent houses', text: 'Your own plot, your own design, your own rules.', intent: 'Independent House', img: '/images/type-house.webp' },
  { title: 'Office space', text: 'From a ten-seat studio to a full floor, bare shell or ready to move in.', intent: 'Office Space', img: '/images/type-office.webp' },
  { title: 'Commercial buildings', text: 'Whole buildings and floors for owners, businesses and investors.', intent: 'Commercial Building', img: '/images/type-building.webp' },
  { title: 'Warehouses & industrial', text: 'Godowns, industrial units and open plots with good road access.', intent: 'Warehouse / Industrial', img: '/images/type-industrial.webp' },
  { title: 'Land & plots', text: 'Build what you imagined, on land with clear title.', intent: 'Land', img: '/images/type-land.webp' },
];

/* "For business": everything that isn't a home. */
export const BUSINESS_TYPES = [
  { icon: 'building', title: 'Office space', text: 'Plug-and-play or bare shell, near the Financial District and IT corridor.' },
  { icon: 'layers', title: 'Commercial buildings', text: 'Entire buildings and floors to own, occupy or lease out.' },
  { icon: 'store', title: 'Retail & showrooms', text: 'Street-facing shops and showrooms where your customers already are.' },
  { icon: 'box', title: 'Warehouses & industrial', text: 'Godowns, units and open industrial plots with truck access.' },
];
export const BUSINESS_CHECKS = ['Clear title', 'Building approvals', 'Commercial-use permissions', 'RERA, where it applies'];

/* What families tell us matters. Picked in the hero finder and carried
   into the enquiry so the advisor sees it. */
export const FAMILY_NEEDS = [
  { icon: 'school', title: 'Good schools nearby', text: 'We look at which schools are close by and how long the school run would take.' },
  { icon: 'tree', title: 'Parks & play areas', text: 'Open space, play areas and a safe place for kids to cycle.' },
  { icon: 'lock', title: 'Safe, gated living', text: 'Security, CCTV and a community you feel good about.' },
  { icon: 'hospital', title: 'Hospitals close by', text: 'Emergency care and everyday clinics within easy reach.' },
  { icon: 'car', title: 'An easy commute', text: 'Shorter drives to the Financial District, Gachibowli or wherever you work.' },
  { icon: 'users', title: 'Space for parents', text: 'Ground-floor bedrooms, lifts and room for three generations.' },
];
export const FINDER_NEEDS = ['Schools nearby', 'Play areas', 'Gated & secure', 'Near hospitals', 'Short commute', 'Space for parents'];

export const AREAS = [
  { name: 'Kokapet', coord: '17.39° N · 78.33° E', text: 'High-rise gated communities near the Financial District, with fast ORR access.', tags: ['High-rise', 'Gated', '3–4 BHK'] },
  { name: 'Narsingi', coord: '17.38° N · 78.36° E', text: 'Right on the ORR, with gated apartments and villas close to the IT corridor.', tags: ['Apartments', 'Villas', 'ORR'] },
  { name: 'Tellapur', coord: '17.47° N · 78.27° E', text: 'Quieter and greener, with villa communities and newer gated projects.', tags: ['Villas', 'Gated', 'Family'] },
  { name: 'Gachibowli', coord: '17.44° N · 78.35° E', text: 'The IT hub, with ready-to-move apartments within walking distance of work.', tags: ['Ready to move', 'IT corridor'] },
  { name: 'Nallagandla', coord: '17.48° N · 78.31° E', text: 'An established neighbourhood with schools, hospitals and daily needs close by.', tags: ['Established', 'Schools'] },
  { name: 'Shankarpally', coord: '17.45° N · 78.13° E', text: "Land and plots for long-term buyers. Every parcel's title is checked first.", tags: ['Land', 'Plots', 'Acreage'], cta: 'See land in Shankarpally' },
];

/* Corridor map pins, in the 400×190 map's own coordinates (schematic, not to scale). */
export const MAP_PINS = [
  { area: 'Shankarpally', x: 42, y: 132, lx: 22, ly: 118 },
  { area: 'Tellapur', x: 128, y: 78, lx: 106, ly: 64 },
  { area: 'Narsingi', x: 222, y: 142, lx: 200, ly: 166 },
  { area: 'Kokapet', x: 252, y: 96, lx: 262, ly: 100 },
  { area: 'Gachibowli', x: 320, y: 44, lx: 296, ly: 30 },
];

export const FINDER_AREAS = ['Kokapet', 'Narsingi', 'Tellapur', 'Gachibowli', 'Open to suggestions'];
export const FINDER_TYPES = [
  { label: '2 BHK' }, { label: '3 BHK' }, { label: '4+ BHK' }, { label: 'Villa' },
  { label: 'Office', value: 'Office Space' }, { label: 'Commercial', value: 'Commercial Building' },
  { label: 'Land / Plot', value: 'Land' },
];

export const COMPARE = [
  ['Property verification', "Often after you've visited", 'Before it reaches your shortlist'],
  ['RERA registration', 'You ask, they check', 'Quoted upfront on every RERA project'],
  ['Seeing the property', 'Photos, then a long drive', 'Studio-shot video walkthroughs first'],
  ['Who calls you', 'Ten different agents', 'One dedicated advisor'],
  ['Your phone number', 'Shared, then spam', 'Never shared, never broadcast'],
  ['Pressure tactics', '"Only one unit left!"', "Honest facts. You decide when you're ready."],
];

export const PLEDGES = [
  { icon: 'shield', title: 'Only verified inventory', text: 'We pitch a property only after it passes verification. If something changes, such as the price, availability or a legal issue, we tell you the same day.' },
  { icon: 'doc', title: 'No false promises', text: 'We never quote a price, discount, possession date or approval that hasn\'t been confirmed. We never claim "guaranteed returns" and never use fake urgency.' },
  { icon: 'phone', title: 'Your data stays private', text: 'Your name, number and requirements are used only to find your home. We never add you to a broadcast list without your consent.' },
];

export const FAQS = [
  ['We are buying for the whole family. Can you shortlist around schools and parents?', 'Yes, that is how we work. Tell us the schools you are considering, where each of you works, and whether parents will live with you. We shortlist homes around that, not just around a budget.'],
  ['Do I pay anything for the shortlist or site visits?', 'No. The shortlist, video walkthroughs and site visits are free. Your advisor will explain any fees for closing a deal before you commit to anything.'],
  ['What does "verified" actually mean?', "Before we list a property, we check its survey number, approvals, title status and, where it applies, its TG RERA registration. Listings with incomplete documents are not verified, and we don't show them to you."],
  ['I live outside Hyderabad or abroad. Can you still help?', "Yes. Many buyers start with our video walkthroughs and a live video-call site visit. We can coordinate the paperwork remotely and plan an in-person visit for when you're in town."],
  ['Will I get calls from lots of different agents?', 'No. You get one advisor. Your details stay inside Xspace and are never sold or shared.'],
  ['Do you help with home loans?', 'We help you understand what you can borrow, show you bank-approved projects, and coordinate with your lender. The loan itself is approved by the bank.'],
  ['Do you also deal in offices and commercial property?', 'Yes. We deal in office space, whole commercial buildings, retail shops and showrooms, warehouses and land, as well as homes. Business property goes through the same checks: title, approvals and permission for commercial use.'],
  ['Can I sell or list my property with you?', 'Yes. Share the property details and documents with us. Once it passes verification, we present it to buyers looking for that kind of home.'],
];

export const CTA_POINTS = [
  ['Within 24 hours', ': homes that match your budget and area'],
  ['Checked first', ': documents, approvals and RERA'],
  ['Video walkthroughs', ' so you only visit the homes you really like'],
  ['No spam, no pressure.', ' Your number stays with us.'],
];
