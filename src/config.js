/* ============================================================
   EDIT THESE before going live. Every contact link on the page reads
   from here; nothing else hard-codes a number or address.
   ============================================================ */
export const CONFIG = {
  phone: '', // e.g. '+919876543210' (call buttons + WhatsApp)
  whatsapp: '+919666263009', // defaults to phone if left empty
  email: '', // e.g. 'hello@xspace.co'
  reraAgentNo: '', // TG RERA agent registration number, shown in the footer
  /* Optional: a URL that accepts a JSON POST of the enquiry (your API, a
     Google Apps Script, Formspree…). Left empty, enquiries go to WhatsApp. */
  enquiryEndpoint: 'https://portal.xspaceandco.com/api/public/enquiry',
  /* Footer social links. Each one shows only once its URL is filled in. */
  social: {
    instagram: '',
    youtube: '',
    linkedin: '',
  },
};

/* Form options. The "Looking for" list is the portal CRM's own list of
   property types and sub-types (PROPERTY_TYPES in the portal's
   server/src/leadStatus.js), grouped the same way. The portal's enquiry
   route files the ones it already knows (Villa, Independent House, the gated
   types, Office Space, Land) under their type; the rest reach the lead's
   notes as "Looking for: …". */
export const PROPERTY_GROUPS = [
  ['Residential', [
    'Standalone', 'Villa', 'Independent House', 'Semi-Gated Apartments',
    'Gated Community Apartments', 'Gated Community High-Rise',
  ]],
  ['Land', ['Land']],
  ['Commercial', ['Office Space', 'Shops']],
  ['Industrial', ['Open Plot', 'Godown', 'Industry']],
];
export const PROPERTY_OPTIONS = PROPERTY_GROUPS.flatMap(([, options]) => options);

/* What "configuration" means for each group, as in the CRM's new-client
   form: bedrooms for a home, acres for land, square feet for the rest. */
export const BHK_OPTIONS = ['1 BHK', '2 BHK', '2.5 BHK', '3 BHK', '3.5 BHK', '4 BHK', '4+ BHK'];
const CONFIG_KINDS = { Residential: 'bhk', Land: 'acres', Commercial: 'sft', Industrial: 'sft' };
export function configKindFor(type) {
  const group = PROPERTY_GROUPS.find(([, options]) => options.includes(type));
  return group ? CONFIG_KINDS[group[0]] : 'bhk';
}
export const AREA_OPTIONS = [
  'Neopolis', 'Narsingi', 'Financial District', 'Gachibowli', 'Tellapur', 'Nallagandla', 'Kollur',
  'Open to suggestions',
];
export const BUDGET_OPTIONS = ['Under ₹75 L', '₹75 L – 1.2 Cr', '₹1.2 – 2 Cr', '₹2 – 3.5 Cr', '₹3.5 Cr +'];
export const TIMELINE_OPTIONS = ['Immediately', 'Within 3 months', '3–6 months', 'Just exploring'];

/* Booking form: how to meet (BOOKING_CARDS in content.js describes each)
   and when. */
export const BOOKING_INTENT = 'Book appointment';
export const BOOKING_MODES = ['Home visit', 'Office lounge', 'Virtual / Zoom call'];
export const TIME_SLOTS = ['Morning (10 AM – 1 PM)', 'Afternoon (1 – 5 PM)', 'Evening (5 – 8 PM)'];

/* What the enquiry form says for each way in: [title, subtitle, button].
   Partner intents add a fourth item, the label of a free-text field that
   replaces the property questions (a developer has no budget to pick). */
export const DEFAULT_INTENT = 'Find your property';
export const INTENT_COPY = {
  [DEFAULT_INTENT]: ["Tell us what you're looking for", 'Share your budget, location and purpose. The Xspace team will come back with options that fit. No spam.', 'Find my property'],
  'Free 24-hour shortlist': ["Tell us what you're looking for", 'We will call you back with a shortlist that fits, within 24 hours. No spam.', 'Get my free shortlist'],
  'Talk to Xspace': ['Talk to Xspace', 'Leave your number and someone from the Xspace team will call you back.', 'Call me back'],
  'View verification': ["View a project's verification", "Tell us the project you're considering. We'll share the verification information we hold, with its status and the date it was checked.", 'Request verification details'],
  [BOOKING_INTENT]: ['Book an appointment', 'Choose how you would like to meet and when suits you. The Xspace team will confirm the slot with you.', 'Request appointment'],
  'Book a site visit': ['Plan a site visit', "Tell us what you've shortlisted. We coordinate the visit and walk you through it.", 'Plan my visit'],
  'Video walkthrough': ['Get project content', 'Walkthroughs, videos and location content for the projects you are considering, sent to your WhatsApp.', 'Send me content'],
  'Request a call back': ['Request a call back', 'Leave your number and the Xspace team will call you back.', 'Call me back'],
  'Chat with an advisor': ['Talk to the Xspace team', 'Share a few details and we will reach out on WhatsApp.', 'Contact me'],
  'Business space': ['Find space for your business', "Tell us your team size, budget and preferred area. We'll shortlist offices and commercial property that fit.", 'Find my space'],
  'Homes in my budget': ['Homes in your budget', 'We will send you homes that fit the budget you just worked out.', 'Show me homes'],
  'Partner with Xspace': ['Partner with Xspace', 'Tell us about your project. Our team will get in touch to talk about onboarding, marketing and site visits.', 'Send', 'Company and project'],
  'Become a Realtor Partner': ['Become a Realtor Partner', 'You bring the property experience. Tell us where you work and we will take it from there.', 'Send', 'Areas you work in (and RERA agent no., if any)'],
  'Become a Creator Partner': ['Become a Creator Partner', 'Bring property and location stories to your audience. Tell us where we can see your work.', 'Send', 'Instagram / YouTube handle'],
};
