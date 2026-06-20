import { NextRequest, NextResponse } from "next/server";
import { addEvent } from "@/lib/store";
import { deviceFromUserAgent } from "@/lib/device";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, visitorId, returning, path, referrer, project } = body ?? {};

    if (!type || !visitorId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const ua = req.headers.get("user-agent");
    // Vercel populates these geo headers automatically in production.
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";

    await addEvent({
      type,
      timestamp: Date.now(),
      visitorId,
      returning: Boolean(returning),
      path,
      referrer,
      project,
      device: deviceFromUserAgent(ua),
      country: decodeURIComponent(country),
      city: decodeURIComponent(city),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
