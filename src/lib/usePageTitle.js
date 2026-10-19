import { useEffect } from 'react';

const SITE = 'Xspace & Co.';

/* Sets the browser tab title for the current page. */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} — Know Before You Own | Property in West Hyderabad`;
  }, [title]);
}
