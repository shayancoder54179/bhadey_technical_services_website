"use client";

import { getUTMParams, getPersistedUTMParams } from "@/lib/googleAds";

/**
 * Posts a lead (or an anonymous contact tap) to /api/lead so the client gets
 * an email about it.
 *
 * Nothing here is ever awaited by the caller and nothing throws: the WhatsApp
 * hand-off is the thing that matters, and it must happen whether or not the
 * notification succeeds. `keepalive` lets the request finish after the page
 * has already navigated to WhatsApp.
 */

interface LeadDetails {
  name?: string;
  phone?: string;
  emirate?: string;
  description?: string;
}

function context() {
  const params = new URLSearchParams(window.location.search);
  const utm = { ...getPersistedUTMParams(), ...getUTMParams() } as Record<string, string>;
  return {
    page: window.location.pathname,
    referrer: document.referrer || undefined,
    // gclid is how Google marks a paid click; it tells the client whether a
    // lead came from the ads they are paying for.
    gclid: params.get("gclid") || sessionStorage.getItem("gclid") || undefined,
    utm,
  };
}

function send(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, ...context() }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* never block the contact flow */
  }
}

/** A real lead: the visitor typed their details into the form. */
export function notifyFormLead(details: LeadDetails) {
  send({ type: "form", ...details });
}

/** An anonymous tap on a WhatsApp or Call button — no identity available. */
export function notifyContactTap(channel: "WhatsApp" | "Call") {
  send({ type: "click", channel });
}

/** Keep the gclid for the whole session, so a lead on any page stays attributable. */
export function persistGclid() {
  if (typeof window === "undefined") return;
  const gclid = new URLSearchParams(window.location.search).get("gclid");
  if (gclid) {
    try {
      sessionStorage.setItem("gclid", gclid);
    } catch {
      /* private mode */
    }
  }
}
