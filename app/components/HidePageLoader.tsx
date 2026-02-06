'use client';

import { useEffect } from 'react';

/**
 * Hides the root page loader when mounted.
 * Use in not-found or any route that may render without firing window "load" (e.g. streamed 404).
 */
export default function HidePageLoader() {
  useEffect(() => {
    document.querySelector('.page-loader')?.classList.add('loaded');
  }, []);
  return null;
}
