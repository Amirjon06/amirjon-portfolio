import { NextRequest, NextResponse } from "next/server";
import { getEvents } from "@/lib/store";
import { aggregate } from "@/lib/aggregate";

/**
 * PRIVATE ANALYTICS API
 * ---------------------------------------------------------------
 * Protected by ANALYTICS_PASSWORD (set in your environment vars,
 * e.g. Vercel project settings -> Environment Variables).
 * The dashboard at /dashboard posts the password here on login.
 * ---------------------------------------------------------------
 */
export async function POST(req: NextRequest) {
  const configured = process.env.ANALYTICS_PASSWORD;

  if (!configured) {
    return NextResponse.json(
      { error: "ANALYTICS_PASSWORD is not set in the environment." },
      { status: 503 }
    );
  }

  let password = "";
  try {
    const body = await req.json();
    password = body?.password ?? "";
  } catch {
    // ignore — handled below
  }

  if (password !== configured) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const events = await getEvents();
  return NextResponse.json(aggregate(events));
}
