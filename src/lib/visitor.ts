"use client";

const VISITOR_KEY = "portfolio_visitor_id";

/**
 * Returns a stable per-browser visitor id (stored in localStorage)
 * and whether this visitor has been seen before.
 */
export function getVisitor(): { id: string; returning: boolean } {
  if (typeof window === "undefined") return { id: "server", returning: false };

  let id = localStorage.getItem(VISITOR_KEY);
  let returning = true;

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_KEY, id);
    returning = false;
  }

  return { id, returning };
}
