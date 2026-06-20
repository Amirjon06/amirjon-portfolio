export function deviceFromUserAgent(ua: string | null): string {
  if (!ua) return "Unknown";
  if (/iPad|Tablet/i.test(ua)) return "Tablet";
  if (/Mobi|Android|iPhone/i.test(ua)) return "Mobile";
  return "Desktop";
}
