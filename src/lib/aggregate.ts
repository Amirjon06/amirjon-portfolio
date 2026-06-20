import { AnalyticsEvent } from "./store";

const ACTIVITY_TYPES: Record<string, string> = {
  resume_download: "Resume downloaded",
  github_click: "GitHub clicked",
  linkedin_click: "LinkedIn clicked",
  contact_form_submit: "Contact form submitted",
};

function classifyReferrer(referrer?: string): string {
  if (!referrer) return "Direct";
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (host.includes("google")) return "Google";
    if (host.includes("github")) return "GitHub";
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("t.co") || host.includes("twitter") || host.includes("x.com")) return "Twitter / X";
    return host;
  } catch {
    return "Direct";
  }
}

function toCount(map: Map<string, number>) {
  return Array.from(map.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

export function aggregate(events: AnalyticsEvent[]) {
  const pageViews = events.filter((e) => e.type === "page_view");
  const visitorIds = new Set(pageViews.map((e) => e.visitorId));
  const returningVisitors = new Set(
    pageViews.filter((e) => e.returning).map((e) => e.visitorId)
  );

  const projectViews = new Map<string, number>();
  const trafficSources = new Map<string, number>();
  const deviceTypes = new Map<string, number>();
  const locations = new Map<string, number>();
  const timelineMap = new Map<string, number>();

  for (const e of pageViews) {
    if (e.referrer !== undefined) {
      const src = classifyReferrer(e.referrer);
      trafficSources.set(src, (trafficSources.get(src) ?? 0) + 1);
    }
    if (e.device) {
      deviceTypes.set(e.device, (deviceTypes.get(e.device) ?? 0) + 1);
    }
    if (e.country) {
      const loc = e.city && e.city !== "Unknown" ? `${e.city}, ${e.country}` : e.country;
      locations.set(loc, (locations.get(loc) ?? 0) + 1);
    }
    const day = new Date(e.timestamp).toISOString().slice(0, 10);
    timelineMap.set(day, (timelineMap.get(day) ?? 0) + 1);
  }

  for (const e of events.filter((e) => e.type === "project_view")) {
    if (e.project) projectViews.set(e.project, (projectViews.get(e.project) ?? 0) + 1);
  }

  const countByType = (type: string) => events.filter((e) => e.type === type).length;

  const mostViewedProjectEntry = toCount(projectViews)[0];

  // Build a 14-day timeline ending today, filling gaps with 0.
  const timeline: { date: string; views: number }[] = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    timeline.push({ date: key.slice(5), views: timelineMap.get(key) ?? 0 });
  }

  const recentActivity = events
    .filter((e) => e.type in ACTIVITY_TYPES)
    .slice(0, 15)
    .map((e) => ({
      label: ACTIVITY_TYPES[e.type],
      timestamp: e.timestamp,
      path: e.path,
      country: e.country,
      device: e.device,
    }));

  return {
    totals: {
      totalVisitors: pageViews.length,
      uniqueVisitors: visitorIds.size,
      returningVisitors: returningVisitors.size,
      resumeDownloads: countByType("resume_download"),
      githubClicks: countByType("github_click"),
      linkedinClicks: countByType("linkedin_click"),
      contactSubmissions: countByType("contact_form_submit"),
      mostViewedProject: mostViewedProjectEntry ? mostViewedProjectEntry.name : "—",
    },
    timeline,
    trafficSources: toCount(trafficSources),
    deviceTypes: toCount(deviceTypes),
    locations: toCount(locations).slice(0, 8),
    projectViews: toCount(projectViews),
    recentActivity,
  };
}
