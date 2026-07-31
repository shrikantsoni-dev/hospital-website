import { NextResponse } from "next/server";

// Run on the Node.js runtime so the outbound fetch and env vars are server-side only.
export const runtime = "nodejs";
// This route must never be statically cached.
export const dynamic = "force-dynamic";

/**
 * Which Zoepact webhooks fire for each kind of lead.
 *
 * - `inquiry`     — short forms (name + phone [+ email]): hero forms, contact, enquiry popup.
 * - `appointment` — full booking forms (adds time slot + message).
 *
 * Each kind notifies the patient AND the vendor (our team), so two webhooks per lead.
 * Env var names intentionally match the ones already configured in .env / Vercel.
 */
const WEBHOOK_GROUPS = {
  inquiry: [
    ["inquiry:patient", "INQUIRY_WEBHOOK_URL", false],
    ["inquiry:vendor", "INQUIRY_VENDOR_WEBHOOK_URL", true],
  ],
  appointment: [
    ["appointment:patient", "APPOITMENT_WEBHOOK_URL", false],
    ["appointment:vendor", "APPOITMENT_VENDOR_WEBHOOK_URL", true],
  ],
};

/**
 * Where vendor notifications go. The patient's number stays in `CustomerPhone`
 * (the template prints it), so the destination needs its own field.
 */
const VENDOR_PHONE = normaliseMobile(
  process.env.VENDOR_WHATSAPP_NUMBER || "7303771900"
);

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

/**
 * Post the payload to one webhook. Never throws — returns a result we can log.
 *
 * Zoepact occasionally drops a request or answers 5xx under load, which used to
 * lose the lead outright, so a failed attempt is retried twice with a short
 * backoff. A 4xx is our own bad payload and won't fix itself, so we stop there.
 */
async function deliver(label, url, payload) {
  const body = JSON.stringify(payload);

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        // Don't let a slow webhook hang the request.
        signal: AbortSignal.timeout(8000),
      });

      if (res.ok) return { label, ok: true, attempts: attempt };

      console.error(
        `[lead-webhook] ${label} upstream responded ${res.status} (attempt ${attempt})`
      );
      if (res.status < 500) return { label, ok: false, attempts: attempt };
    } catch (err) {
      console.error(
        `[lead-webhook] ${label} failed to deliver (attempt ${attempt})`,
        err?.name || err
      );
    }

    if (attempt < 3) {
      await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
    }
  }

  return { label, ok: false, attempts: 3 };
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const type = data.type === "appointment" ? "appointment" : "inquiry";

  const name = String(data.name || "").trim();
  const mobile = normaliseMobile(data.mobile, data.countryCode);
  const email = String(data.email || "").trim();
  const timeSlot = String(data.timeSlot || "").trim();
  const message = String(data.message || "").trim();

  // Minimal validation — a lead is useless without a reachable number.
  if (!name || mobile.length < 10) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 422 });
  }

  const emailValue = email || "Not provided";
  const timeSlotValue = timeSlot || "Not specified";
  const messageValue = message || "No message provided";

  // Flat payload carrying every naming style the Zoepact templates use, so the
  // fields map directly on the "Capture Webhook Response" screen:
  //   snake_case keys — what the live inquiry workflow already maps.
  //   PascalCase keys — match the template variables #!CustomerName!#,
  //                     #!CustomerPhone!#, #!Email!#, #!PatientName!#,
  //                     #!TimeSlot!#, #!Message!#.
  const payload = {
    // snake_case (existing mapping — do not remove)
    patient_name: name,
    name,
    mobile,
    phone: mobile,
    email: emailValue,
    time_slot: timeSlotValue,
    message: messageValue,

    // Zoepact template variables
    CustomerName: name,
    PatientName: name,
    CustomerPhone: mobile,
    // The lead's number under a name the vendor template can print even though
    // the vendor payload overrides mobile/phone with the team's number.
    PatientPhone: mobile,
    patient_phone: mobile,
    Email: emailValue,
    TimeSlot: timeSlotValue,
    Message: messageValue,

    // Context — handy for routing/reporting on the Zoepact side.
    lead_type: type,
    source: String(data.source || "website").trim(),
    city: String(data.city || "").trim(),
    service: String(data.service || "").trim(),
    area: String(data.area || "").trim(),
    submitted_at: new Date().toISOString(),
  };

  const targets = WEBHOOK_GROUPS[type]
    .map(([label, envKey, isVendor]) => {
      const url = process.env[envKey];
      if (!url) {
        // Misconfiguration: log it, but still deliver whatever else is configured.
        console.error(`[lead-webhook] ${envKey} is not set`);
        return null;
      }
      // Vendor webhooks go to the team, not the patient, so every field a
      // Zoepact workflow might use as the *destination* number is overridden
      // with the team's number. The patient's own number stays available for
      // the message body under the Patient*/Customer* keys.
      const body = isVendor
        ? {
            ...payload,
            mobile: VENDOR_PHONE,
            phone: VENDOR_PHONE,
            to: VENDOR_PHONE,
            whatsapp_number: VENDOR_PHONE,
            vendor_phone: VENDOR_PHONE,
            VendorPhone: VENDOR_PHONE,
          }
        : payload;
      return { label, url, body };
    })
    .filter(Boolean);

  if (targets.length === 0) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const results = await Promise.all(
    targets.map(({ label, url, body }) => deliver(label, url, body))
  );

  const delivered = results.filter((r) => r.ok).map((r) => r.label);
  const failed = results.filter((r) => !r.ok).map((r) => r.label);

  // Partial success still counts as ok — one dead webhook shouldn't mask the other.
  return NextResponse.json(
    { ok: delivered.length > 0, type, delivered, failed },
    { status: delivered.length > 0 ? 200 : 502 }
  );
}
