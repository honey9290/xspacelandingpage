/* ============================================================
   EDIT THESE before going live. Every contact link on the page reads
   from here; nothing else hard-codes a number or address.
   ============================================================ */
export const CONFIG = {
  phone: '', // e.g. '+919876543210' (call buttons + WhatsApp)
  whatsapp: '', // defaults to phone if left empty
  email: '', // e.g. 'hello@xspace.co'
  office: 'Kokapet, Hyderabad',
  reraAgentNo: '', // TG RERA agent registration number, shown in the footer
  /* Optional: a URL that accepts a JSON POST of the enquiry (your API, a
     Google Apps Script, Formspree…). Left empty, enquiries go to WhatsApp. */
  enquiryEndpoint: '',
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
export const AREA_OPTIONS = ['Kokapet', 'Narsingi', 'Tellapur', 'Gachibowli', 'Nallagandla', 'Shankarpally', 'Open to suggestions'];
export const BUDGET_OPTIONS = ['Under ₹75 L', '₹75 L – 1.2 Cr', '₹1.2 – 2 Cr', '₹2 – 3.5 Cr', '₹3.5 Cr +'];
export const TIMELINE_OPTIONS = ['Immediately', 'Within 3 months', '3–6 months', 'Just exploring'];

/* What the enquiry form says for each way in: [title, subtitle, button]. */
export const DEFAULT_INTENT = 'Free 24-hour shortlist';
export const INTENT_COPY = {
  [DEFAULT_INTENT]: ["Tell us what you're looking for", 'An advisor will call you back with verified options. No spam.', 'Get my free shortlist'],
  'Book a site visit': ['Book a free site visit', 'We plan the visit day, confirm each site and walk you through. In person or by video call.', 'Book my visit'],
  'Video walkthrough': ['Get video walkthroughs', 'Watch verified homes before you visit. We send them straight to your WhatsApp.', 'Send me walkthroughs'],
  'Document check': ['Ask about a property', 'Tell us what you are considering. We will tell you what we know about its documents, approvals and RERA status.', 'Request a call back'],
  'Request a call back': ['Request a call back', 'Leave your number and an advisor will call you back.', 'Call me back'],
  'Chat with an advisor': ['Talk to an advisor', 'Share a few details and an advisor will reach out on WhatsApp.', 'Contact me'],
  'Business space': ['Find space for your business', "Tell us your team size, budget and preferred area. We'll shortlist verified offices and commercial property.", 'Find my space'],
  'Homes in my budget': ['Verified homes in your budget', 'We will send you verified homes that fit the budget you just worked out.', 'Show me homes'],
};
