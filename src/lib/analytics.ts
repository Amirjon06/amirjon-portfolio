"use client";

import { track } from "@vercel/analytics";
import { getVisitor } from "./visitor";

/**
 * EVENT TRACKING
 * ---------------------------------------------------------------
 * Fires events to two places:
 * 1) Vercel Analytics (`track`) — visible in your Vercel dashboard
 *    under Analytics > Events (custom events require Pro plan;
 *    on Hobby they're still recorded but not shown in the UI).
 * 2) `/api/track` — feeds the private dashboard at /dashboard
 *    (resume downloads, link clicks, contact submissions, project
 *    views, traffic source, device, location, etc.)
 * ---------------------------------------------------------------
 */
export function trackEvent(name: string, props?: Record<string, string>) {
  try {
    track(name, props);
  } catch {
    // no-op if Vercel Analytics isn't available (e.g. local dev)
  }

  try {
    const { id, returning } = getVisitor();
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: name,
        visitorId: id,
        returning,
        path: window.location.pathname,
        referrer: document.referrer || undefined,
        ...(props?.project ? { project: props.project } : {}),
      }),
      keepalive: true,
    });
  } catch {
    // no-op
  }
}
