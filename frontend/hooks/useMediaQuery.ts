"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
<<<<<<< HEAD
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
=======
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
>>>>>>> origin/cursor/679-transaction-poller-9a06
  }, [query]);

  return matches;
}

<<<<<<< HEAD
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 768px)");
=======
/** True when viewport is below the `md` breakpoint (768px). */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
>>>>>>> origin/cursor/679-transaction-poller-9a06
}
