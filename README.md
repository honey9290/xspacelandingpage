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

## Where things are

```
src/
  config.js          contact details, form options, per-button form headings
  content.js         all list copy: offers, steps, areas, FAQ, comparison…
  lib/enquiry.js     useEnquiry() + lead building / sending
  lib/format.js      ₹ formatting, WhatsApp / tel links
  components/
    EnquiryProvider  the modal + exit-intent prompt; useEnquiry()(intent) opens it
    EnquiryForm      the one form (closing section and modal)
    Hero             photo slideshow, headline, home finder, stats
    Families         "Made for families" band + closing dream-home banner
    Business         offices, commercial buildings, retail, warehouses
    Sections         offers, process, property types, areas, compare, pledges, FAQ
    CorridorMap      schematic map of the west corridor (Locations)
    BudgetPlanner    EMI → budget calculator
    Closing          final CTA, footer, sticky WhatsApp / mobile dock
public/images/       stock photos (Unsplash licence: free to use, no attribution
                     required). Representative only; the page says so.
legacy/index.html    the original single-file version, for reference
```

Phones get their own layout (the last `@media (max-width: 640px)` block in
`styles.css`): card lists become swipe rows, the enquiry modal becomes a bottom
sheet, and buttons the sticky dock already offers are hidden.

Copy rule: partner rules forbid fake urgency, "guaranteed returns" and
unconfirmed promises, so every hook on the page is a real free offer.
