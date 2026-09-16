import { NextResponse } from "next/server";

/**
 * Lead notification endpoint.
 *
 * Two kinds of thing arrive here, and they are NOT equally useful:
 *
 *   type "form"  — a real lead. Name, phone and emirate were typed by a human.
 *   type "click" — someone tapped WhatsApp or Call. We know the ad context and
 *                  nothing about who they are; WhatsApp and the dialer both
 *                  live outside the page, so no identity is available to us.
 *
 * The email subject says which, so nobody mistakes a click alert for a lead.
 *
 * This endpoint is deliberately fire-and-forget from the client's point of
 * view: the WhatsApp hand-off must never wait on it, and must never fail
 * because of it.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Comma-separated in env so recipients change without a deploy.
const TO = (process.env.LEAD_NOTIFY_TO || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const FROM = process.env.LEAD_NOTIFY_FROM || "Bhadeya Leads <onboarding@resend.dev>";

interface LeadPayload {
  type?: "form" | "click";
  channel?: string;
  name?: string;
  phone?: string;
  emirate?: string;
  description?: string;
  page?: string;
  referrer?: string;
  gclid?: string;
  utm?: Record<string, string>;
}

const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 14px 6px 0;color:#64748b;font:600 12px system-ui;text-transform:uppercase;letter-spacing:.05em;vertical-align:top;white-space:nowrap">${esc(label)}</td>
    <td style="padding:6px 0;color:#0f172a;font:15px system-ui">${esc(value)}</td>
  </tr>`;
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const isForm = body.type === "form";

  // A form lead without a phone number is not a lead; drop it rather than
  // emailing the client something they can't act on.
  if (isForm && !body.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "missing phone" }, { status: 400 });
  }

  // Unconfigured is not an error — the site must keep working without Resend.
  if (!process.env.RESEND_API_KEY || TO.length === 0) {
    console.warn("[lead] RESEND_API_KEY or LEAD_NOTIFY_TO unset — no email sent");
    return NextResponse.json({ ok: true, emailed: false });
  }

  const utm = body.utm || {};
  const subject = isForm
    ? `New GPR lead: ${body.name || "Unnamed"} — ${body.phone}`
    : `Website tap: ${body.channel || "contact"} (no contact details)`;

  const heading = isForm
    ? "New lead from the GPR landing page"
    : `Someone tapped ${esc(body.channel || "a contact button")}`;

  const note = isForm
    ? "They also had WhatsApp opened with this message pre-filled. If no WhatsApp message arrived, call them on the number above — the lead is still real."
    : "This is an anonymous tap, not a lead. Google Analytics and this alert cannot see who it was — their name and number only appear if they actually send the WhatsApp message or the phone rings.";

  const html = `<div style="max-width:560px;margin:0 auto;font:15px system-ui;color:#0f172a">
    <h2 style="font:700 20px system-ui;color:#0f172a;margin:0 0 4px">${heading}</h2>
    <p style="margin:0 0 18px;color:#64748b;font-size:13px">${new Date().toLocaleString("en-GB", { timeZone: "Asia/Dubai" })} (Dubai time)</p>
    <table style="border-collapse:collapse;width:100%;border-top:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;margin-bottom:18px">
      ${row("Name", body.name)}
      ${row("Phone", body.phone)}
      ${row("Emirate", body.emirate)}
      ${row("Project", body.description)}
      ${row("Page", body.page)}
      ${row("Google Ads click", body.gclid ? "Yes (gclid " + body.gclid.slice(0, 12) + "…)" : undefined)}
      ${row("Campaign", utm.utm_campaign)}
      ${row("Keyword/term", utm.utm_term)}
      ${row("Source", utm.utm_source)}
      ${row("Referrer", body.referrer)}
    </table>
    <p style="color:#475569;font-size:13px;line-height:1.5;margin:0">${note}</p>
  </div>`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        subject,
        html,
        ...(isForm && body.phone ? { reply_to: TO } : {}),
      }),
    });

    if (!res.ok) {
      console.error("[lead] Resend rejected:", res.status, await res.text());
      return NextResponse.json({ ok: false, emailed: false }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead] Resend request failed:", err);
    return NextResponse.json({ ok: false, emailed: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true, emailed: true });
}
