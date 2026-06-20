/**
 * EVENT STORE
 * ---------------------------------------------------------------
 * Stores raw analytics events so the private dashboard can
 * aggregate them.
 *
 * - If UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN are set
 *   (free tier at https://upstash.com), events persist in Redis
 *   and survive across serverless invocations/deploys.
 * - Otherwise, falls back to an in-memory array. This works for
 *   local development but resets whenever the server restarts
 *   (and on Vercel, each serverless instance has its own memory),
 *   so it's NOT reliable for production — set up Upstash for that.
 * ---------------------------------------------------------------
 */

export interface AnalyticsEvent {
  type: string;
  timestamp: number;
  visitorId: string;
  returning: boolean;
  path?: string;
  referrer?: string;
  device?: string;
  country?: string;
  city?: string;
  project?: string;
}

const MAX_EVENTS = 5000;
const KEY = "analytics:events";

let memoryStore: AnalyticsEvent[] = [];

function hasUpstash() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function getRedis() {
  const { Redis } = await import("@upstash/redis");
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

export async function addEvent(event: AnalyticsEvent): Promise<void> {
  if (hasUpstash()) {
    const redis = await getRedis();
    await redis.lpush(KEY, JSON.stringify(event));
    await redis.ltrim(KEY, 0, MAX_EVENTS - 1);
    return;
  }

  memoryStore.unshift(event);
  if (memoryStore.length > MAX_EVENTS) memoryStore = memoryStore.slice(0, MAX_EVENTS);
}

export async function getEvents(limit = MAX_EVENTS): Promise<AnalyticsEvent[]> {
  if (hasUpstash()) {
    const redis = await getRedis();
    const raw = await redis.lrange<string>(KEY, 0, limit - 1);
    return raw
      .map((r) => {
        try {
          return typeof r === "string" ? (JSON.parse(r) as AnalyticsEvent) : (r as unknown as AnalyticsEvent);
        } catch {
          return null;
        }
      })
      .filter((e): e is AnalyticsEvent => e !== null);
  }

  return memoryStore.slice(0, limit);
}
