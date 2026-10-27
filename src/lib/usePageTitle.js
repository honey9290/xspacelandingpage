import { useEffect } from 'react';

const SITE = 'XSPACE & CO.';

/* The browser tab shows only the company name, on every page. `title`
   names the page for anyone reading the code; it is not shown. */
export default function usePageTitle(_title) {
  useEffect(() => {
    document.title = SITE;
  }, []);
}
