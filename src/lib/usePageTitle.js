import { useEffect } from 'react';

const SITE = 'Xspace & Co.';

/* Sets the browser tab title for the current page. */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} — Dream Homes, Offices & Commercial Property in West Hyderabad`;
  }, [title]);
}
