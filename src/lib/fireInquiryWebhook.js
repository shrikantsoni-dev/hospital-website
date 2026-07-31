/**
 * Notifies the WhatsApp workflows (Zoepact) about a new lead.
 *
 * It posts to our own `/api/webhook/inquiry` route (which keeps the real
 * webhook URLs server-side) and never throws. The route fans out to two
 * webhooks per lead — one for the patient, one for the vendor — picked by
 * `type`.
 *
 * IMPORTANT — always `await` this before navigating away (e.g. router.push to
 * /thank-you). An un-awaited fetch that overlaps a navigation is the classic
 * reason leads silently go missing. If the fetch does get cut short we fall
 * back to `sendBeacon`, which the browser is required to flush even while the
 * page is going away.
 *
 * @param {Object} lead
 * @param {string}  lead.name        Patient name (required)
 * @param {string}  lead.mobile      Mobile number (required)
 * @param {"inquiry"|"appointment"} [lead.type]  Defaults to "inquiry".
 *                                   Use "appointment" for the full booking
 *                                   forms (the ones with time slot + message).
 * @param {string} [lead.email]
 * @param {string} [lead.countryCode] e.g. "+91"
 * @param {string} [lead.timeSlot]
 * @param {string} [lead.source]     Which form fired it
 * @param {string} [lead.city]
 * @param {string} [lead.service]
 * @param {string} [lead.area]
 * @param {string} [lead.message]
 * @returns {Promise<boolean>} true when the route accepted the lead. Never rejects.
 */
export async function fireInquiryWebhook(lead) {
  const ENDPOINT = "/api/webhook/inquiry";
  const body = JSON.stringify({ type: "inquiry", ...lead });

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });

    if (res.ok) return true;
    console.error("[lead-webhook] route rejected the lead", res.status);
  } catch (err) {
    console.error("[lead-webhook] request failed", err?.name || err);
  }

  // Last resort: hand the payload to the browser to deliver on its own.
  try {
    return navigator.sendBeacon(
      ENDPOINT,
      new Blob([body], { type: "application/json" })
    );
  } catch {
    // Never let lead-notification break the user-facing flow.
    return false;
  }
}
