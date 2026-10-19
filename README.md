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
TG RERA agent number, and the Instagram / YouTube / LinkedIn URLs (each footer
link appears once its URL is set). Until a number is set, Call and WhatsApp buttons open the
enquiry form instead.

Enquiries go to WhatsApp as a pre-filled message. Set `enquiryEndpoint` to a URL
that accepts a JSON POST to capture them somewhere as well. The payload is built
in `buildLead()` in [`src/lib/enquiry.js`](src/lib/enquiry.js).

## Pages

The copy follows the "Know Before You Own" brief: Xspace doesn't just show you
property, it helps you understand it, verify it, experience it and decide.
Section numbers in the kickers (01–15) match the brief.

| Route | Page |
|---|---|
| `/` | Home: hero, 01 Why Xspace, 02 What we do, 03 The difference, 05 Journey, 15 closing CTA |
| `/property` | 06 Find what fits you: five-filter finder, Residential / Commercial paths |
| `/residential`, `/commercial` | Family and business pages, reached from Home and Property |
| `/projects` | 06 West Hyderabad: corridor map and the eight areas |
| `/verification` | 04 Know before you own: what you can explore, verify before you visit, FAQ |
| `/studio` | 07 Xspace Studio formats |
| `/partners` | 09 Ecosystem, 10 Developers, 11 Realtor Partners, 12 Creators (`#developers`, `#realtors`, `#creators`) |
| `/about` | 13 About, 14 Trust, 08 Technology (`#technology`), FAQ |
| `/contact` | Contact cards and the enquiry form |

`/locations` and `/why-xspace` (the old pages) redirect to `/projects` and `/about`.

Routing is client-side (React Router), so the host must serve `index.html`
for every path. `public/_redirects` (Netlify) and `vercel.json` (Vercel)
already do; on other hosts add the equivalent rewrite.

## Where things are

```
src/
  config.js          contact details, form options, per-button form headings
  content.js         all list copy, grouped by page: nav, slides, types, FAQs…
  App.jsx            routes + shared layout (nav, footer, sticky dock)
  pages/             Home, Property, Residential, Commercial, Projects, Verification,
                     Studio, Partners, About, Contact
  lib/enquiry.js     useEnquiry() + lead building / sending
  lib/format.js      ₹ formatting, WhatsApp / tel links
  components/
    EnquiryProvider  the modal + exit-intent prompt; useEnquiry()(intent) opens it
    EnquiryForm      the one form (closing section and modal)
    PageHero         photo-slideshow hero + PageHeader for text-led pages
    Finder           chip finder; residential and commercial versions via props
    Families         "Made for families" band (Residential)
    Business         how we help businesses + what we check (Commercial)
    Sections         paths, icon cards, chain, journey, checklist, property grid, areas, FAQ
    CorridorMap      schematic map of the eight areas (Projects)
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
Verification is always worded as "relevant information, where applicable",
with the due-diligence disclaimer on the Verification page.
