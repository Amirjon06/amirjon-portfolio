import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * CONTACT FORM HANDLER — sends each submission to your inbox via Resend.
 * Requires RESEND_API_KEY in .env.local (restart dev server after adding it).
 */
const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "amirjonabd5@gmail.com";
// Free shared sender that works without owning a domain.
// If you later verify a domain in Resend, change this to e.g. "contact@yourdomain.com".
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 12px"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p style="white-space:pre-wrap;margin:0;padding:12px;background:#f4f4f5;border-radius:8px">${escapeHtml(
            message
          )}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
