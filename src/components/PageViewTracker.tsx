"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function PageViewTracker() {
  useEffect(() => {
    trackEvent("page_view");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
