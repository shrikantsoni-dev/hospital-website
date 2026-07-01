import { NextResponse } from "next/server";

// Run on the Node.js runtime so the outbound fetch and env var are server-side only.
export const runtime = "nodejs";
// This route must never be statically cached.
export const dynamic = "force-dynamic";

const WEBHOOK_URL = process.env.INQUIRY_WEBHOOK_URL;

/**
 * Normalise an Indian mobile number to `91XXXXXXXXXX` (WhatsApp friendly).
 * Accepts input like "9876543210", "+91 9876543210", "091-98765 43210".
 */
function normaliseMobile(rawMobile, countryCode) {
  let digits = String(rawMobile || "").replace(/\D/g, "");
  const cc = String(countryCode || "").replace(/\D/g, "");

  // Strip a leading 0 (common local prefix).
  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  // Bare 10-digit number -> prefix with country code (default India 91).
  if (digits.length === 10) {
    digits = (cc || "91") + digits;
  }

  return digits;
}

export async function POST(request) {
  if (!WEBHOOK_URL) {
    // Misconfiguration: don't leak details, just fail quietly so the UI flow is unaffected.
    console.error("[inquiry-webhook] INQUIRY_WEBHOOK_URL is not set");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = String(data.name || "").trim();
  const mobile = normaliseMobile(data.mobile, data.countryCode);
  const email = String(data.email || "").trim();
  const timeSlot = String(data.timeSlot || "").trim();

  // Minimal validation — a lead is useless without a reachable number.
  if (!name || mobile.length < 10) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 422 });
  }

  // Flat payload with both snake_case and human-readable keys so the fields are
  // easy to map on the Zoepact "Capture Webhook Response" screen.
  const payload = {
    patient_name: name,
    name,
    mobile,
    phone: mobile,
    email: email || "Not provided",
    time_slot: timeSlot || "Not specified",
    source: String(data.source || "website").trim(),
    city: String(data.city || "").trim(),
    service: String(data.service || "").trim(),
    area: String(data.area || "").trim(),
    message: String(data.message || "").trim(),
    submitted_at: new Date().toISOString(),
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Don't let a slow webhook hang the request.
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error("[inquiry-webhook] upstream responded", res.status);
      return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry-webhook] failed to deliver", err?.name || err);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
