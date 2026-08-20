"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/constant";
import { useRouter } from "next/navigation";
import { fireInquiryWebhook } from "@/lib/fireInquiryWebhook";

const TIME_SLOTS = [
  "10:00 AM – 12:00 PM",
  "12:00 PM – 02:00 PM",
  "02:00 PM – 04:00 PM",
  "04:00 PM – 06:00 PM",
  "06:00 PM – 08:00 PM",
];

// ── tiny inline SVG icons ──────────────────────────────────────────────────
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
    <circle cx="12" cy="12" r="12" fill="#064E53" />
    <path
      d="M7 12.5l3.5 3.5 6.5-7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
);

const SpinnerIcon = () => (
  <svg
    className="animate-spin w-5 h-5 text-white"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

export default function BookAppointment({ city, areaName }) {

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    slot: TIME_SLOTS[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const router = useRouter();
  // ── validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Patient name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      e.mobile = "Enter a valid 10-digit mobile number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    return e;
  };

  // ── submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("loading");

    const now = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const templateParams = {
      patient_name: form.name.trim(),
      mobile: form.mobile,
      email: form.email || "Not provided",
      preferred_time: form.slot,
      message: form.message.trim() || "No message",
      time: now,
      city: city?.name || "",
      area: areaName || "",
    };

    // The WhatsApp webhook runs alongside EmailJS, not after it — an EmailJS
    // outage must not swallow the lead.
    const whatsapp = fireInquiryWebhook({
      type: "appointment",
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      timeSlot: form.slot,
      message: form.message,
      city: city?.name,
      area: areaName,
      source: "area_BookAppointment_form",
    });

    const email = emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .catch((err) => {
        console.error("EmailJS error:", err);
        return null;
      });

    const [whatsappSent, emailResult] = await Promise.all([whatsapp, email]);

    if (!whatsappSent && !emailResult) {
      setStatus("error");
      return;
    }

    setStatus("success");
    // GTM dataLayer push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_submit",
      form_name: "area_BookAppointment_form",
      area: areaName,
      city: city.name,
    });
    // Redirect to thank-you page
    router.push("/thank-you");
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // ── success screen ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <section className="bg-white py-12 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center text-center">
            <CheckIcon />
            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Appointment Booked!
            </h2>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed max-w-xs">
              Thank you, <strong>{form.name}</strong>. Our doctor will call you
              on <strong>+91 {form.mobile}</strong> within 2 minutes to confirm
              your visit.
            </p>

            {/* trust pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {["No advance payment", "Doctor visits at home", "24/7 support"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "#EFF9F9", color: "#064E53" }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <button
              onClick={() => {
                setStatus("idle");
                setForm({
                  name: "",
                  mobile: "",
                  email: "",
                  slot: TIME_SLOTS[0],
                  message: "",
                });
              }}
              className="mt-8 text-sm font-medium underline"
              style={{ color: "#064E53" }}
            >
              Book another appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── main form ───────────────────────────────────────────────────────────────
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">

          {/* ── LEFT CONTENT ─────────────────────────────────────────────── */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
              Get a Certified Doctor &amp; Nurse at Your Home in{" "}
              <span style={{ color: "#C26418" }}>{areaName}</span> Today
            </h2>

            <p className="text-gray-500 text-sm mb-5 leading-relaxed">
              Fill the form and our doctor will call you back within 2 minutes
              to confirm your booking.
            </p>

            <ul className="space-y-3">
              {[
                { icon: "✓", text: "No advance payment required" },
                {
                  icon: "✓",
                  text: `Doctor arrives in ${city?.avgArrivalTime || "30–45 mins"}`,
                },
                { icon: "✓", text: "24/7 Availability" },
                { icon: "✓", text: "Written treatment plan after every visit" },
                {
                  icon: "✓",
                  text: `40+ certified doctors & nurses in ${city?.name || "your city"}`,
                },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-2 text-sm text-gray-700">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white mt-0.5"
                    style={{ background: "#064E53" }}
                  >
                    {icon}
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT FORM ───────────────────────────────────────────────── */}
          <div className="space-y-4">

            {/* Row 1 — Name + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Patient Name *"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="border rounded-lg p-3 w-full text-sm outline-none focus:ring-2 transition"
                  style={{
                    borderColor: errors.name ? "#ef4444" : "#e2e8f0",
                    "--tw-ring-color": "#064E53",
                  }}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  maxLength={10}
                  value={form.mobile}
                  onChange={handleChange("mobile")}
                  className="border rounded-lg p-3 w-full text-sm outline-none focus:ring-2 transition"
                  style={{
                    borderColor: errors.mobile ? "#ef4444" : "#e2e8f0",
                    "--tw-ring-color": "#064E53",
                  }}
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Row 2 — Email + Time Slot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="border rounded-lg p-3 w-full text-sm outline-none focus:ring-2 transition"
                  style={{
                    borderColor: errors.email ? "#ef4444" : "#e2e8f0",
                    "--tw-ring-color": "#064E53",
                  }}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <select
                value={form.slot}
                onChange={handleChange("slot")}
                className="border border-gray-200 rounded-lg p-3 w-full text-sm text-gray-700 outline-none focus:ring-2 transition bg-white"
                style={{ "--tw-ring-color": "#064E53" }}
              >
                {TIME_SLOTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 3 — Message */}
            <textarea
              placeholder="Describe your concern (optional)"
              rows={3}
              value={form.message}
              onChange={handleChange("message")}
              className="border border-gray-200 rounded-lg p-3 w-full text-sm outline-none focus:ring-2 transition resize-none"
              style={{ "--tw-ring-color": "#064E53" }}
            />

            {/* Error state banner */}
            {status === "error" && (
              <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full flex cursor-pointer items-center justify-center gap-2 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-80"
              style={{ background: status === "loading" ? "#0a7075" : "#064E53" }}
            >
              {status === "loading" ? (
                <>
                  <SpinnerIcon />
                  Submitting…
                </>
              ) : (
                <>
                  <PhoneIcon />
                  Request a Callback
                </>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              Our doctor will call you within immedeiately to confirm your booking.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}