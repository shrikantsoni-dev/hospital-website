/**
 * Notifies the WhatsApp workflow (Zoepact) about a new inquiry.
 *
 * Fire-and-forget: it posts to our own `/api/webhook/inquiry` route (which keeps
 * the real webhook URL server-side) and never throws. `keepalive` lets the
 * request complete even when the form immediately redirects to /thank-you.
 *
 * @param {Object} lead
 * @param {string}  lead.name        Patient name (required)
 * @param {string}  lead.mobile      Mobile number (required)
 * @param {string} [lead.email]
 * @param {string} [lead.countryCode] e.g. "+91"
 * @param {string} [lead.timeSlot]
 * @param {string} [lead.source]     Which form fired it
 * @param {string} [lead.city]
 * @param {string} [lead.service]
 * @param {string} [lead.area]
 * @param {string} [lead.message]
 */
export function fireInquiryWebhook(lead) {
  try {
    fetch("/api/webhook/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never let lead-notification break the user-facing flow.
  }
}
