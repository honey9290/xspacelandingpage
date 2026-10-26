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

/* Form options. Each property option maps onto a type or sub-type in
   PROPERTY_TYPES in the portal's server/src/leadStatus.js (office space and
   shops are Commercial sub-types; warehouses are Industrial), so a website
   lead files cleanly in the CRM. */
export const PROPERTY_OPTIONS = [
  '2 BHK', '3 BHK', '4+ BHK', 'Villa', 'Independent House',
  'Gated Community Apartments', 'Gated Community High-Rise', 'Semi-Gated / Standalone',
  'Office Space', 'Commercial Building', 'Retail Shop / Showroom', 'Warehouse / Industrial',
  'Land',
];
export const AREA_OPTIONS = [
  'Neopolis', 'Narsingi', 'Financial District', 'Gachibowli', 'Tellapur', 'Nallagandla', 'Kollur',
  'Open to suggestions',
];
export const BUDGET_OPTIONS = ['Under ₹75 L', '₹75 L – 1.2 Cr', '₹1.2 – 2 Cr', '₹2 – 3.5 Cr', '₹3.5 Cr +'];
export const TIMELINE_OPTIONS = ['Immediately', 'Within 3 months', '3–6 months', 'Just exploring'];

/* What the enquiry form says for each way in: [title, subtitle, button].
   Partner intents add a fourth item, the label of a free-text field that
   replaces the property questions (a developer has no budget to pick). */
export const DEFAULT_INTENT = 'Find your property';
export const INTENT_COPY = {
  [DEFAULT_INTENT]: ["Tell us what you're looking for", 'Share your budget, location and purpose. The Xspace team will come back with options that fit. No spam.', 'Find my property'],
  'Free 24-hour shortlist': ["Tell us what you're looking for", 'We will call you back with a shortlist that fits, within 24 hours. No spam.', 'Get my free shortlist'],
  'Talk to Xspace': ['Talk to Xspace', 'Leave your number and someone from the Xspace team will call you back.', 'Call me back'],
  'View verification': ["View a project's verification", "Tell us the project you're considering. We'll share the verification information we hold, with its status and the date it was checked.", 'Request verification details'],
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
