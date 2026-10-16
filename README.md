# Xspace & Co. — Landing page

Public, customer-facing site. React 19 + Vite 7, same stack as the portal in
`xspace app/XSPACE-AND-CO/xspace-portal-react`, but a separate project.

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # -> dist/ (static files, host anywhere)
npm run lint
```

## Before going live

Fill in `CONFIG` in [`src/config.js`](src/config.js): phone, WhatsApp, email,
TG RERA agent number. Until a number is set, Call and WhatsApp buttons open the
enquiry form instead.

Enquiries go to WhatsApp as a pre-filled message. Set `enquiryEndpoint` to a URL
that accepts a JSON POST to capture them somewhere as well. The payload is built
in `buildLead()` in [`src/lib/enquiry.js`](src/lib/enquiry.js).

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero with Residential / Commercial paths, free offers, process |
| `/residential` | Family finder, "Made for families", home types, budget planner, FAQ |
| `/commercial` | Business finder, commercial types, business section, FAQ |
| `/locations` | Corridor map and area cards |
| `/why-xspace` | Comparison, pledges, general FAQ |
| `/contact` | Contact cards and the enquiry form |

Routing is client-side (React Router), so the host must serve `index.html`
for every path. `public/_redirects` (Netlify) and `vercel.json` (Vercel)
already do; on other hosts add the equivalent rewrite.

## Where things are

```
src/
  config.js          contact details, form options, per-button form headings
  content.js         all list copy, grouped by page: nav, slides, types, FAQs…
  App.jsx            routes + shared layout (nav, footer, sticky dock)
  pages/             Home, Residential, Commercial, Locations, WhyXspace, Contact
  lib/enquiry.js     useEnquiry() + lead building / sending
  lib/format.js      ₹ formatting, WhatsApp / tel links
  components/
    EnquiryProvider  the modal + exit-intent prompt; useEnquiry()(intent) opens it
    EnquiryForm      the one form (closing section and modal)
    PageHero         photo-slideshow hero + PageHeader for text-led pages
    Finder           chip finder; residential and commercial versions via props
    Families         "Made for families" band (Residential)
    Business         how we help businesses + what we check (Commercial)
    Sections         paths, offers, process, property grid, areas, compare, pledges, FAQ
    CorridorMap      schematic map of the west corridor (Locations)
    BudgetPlanner    EMI → budget calculator (Residential)
    Closing          final CTA (per-page wording), footer, sticky WhatsApp / mobile dock
    Nav              header links + phone menu
public/images/       stock photos (Unsplash licence: free to use, no attribution
                     required). Representative only; the page says so.
legacy/index.html    the original single-file version, for reference
```

Phones get their own layout (the last `@media (max-width: 640px)` block in
`styles.css`): card lists become swipe rows, the enquiry modal becomes a bottom
sheet, and buttons the sticky dock already offers are hidden.

Copy rule: partner rules forbid fake urgency, "guaranteed returns" and
unconfirmed promises, so every hook on the page is a real free offer.
