"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@/constant";
import { fireInquiryWebhook } from "@/lib/fireInquiryWebhook";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.mobile.length !== 10 || isNaN(form.mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    // The WhatsApp webhook runs alongside EmailJS, not after it — an EmailJS
    // outage must not swallow the lead. Both are started before either is
    // awaited so they overlap.
    const whatsapp = fireInquiryWebhook({
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      source: "Contact Us Form",
    });

    const email = emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        patient_name: form.name,
        mobile: form.mobile,
        email: form.email,
      },
      PUBLIC_KEY
    );

    const [whatsappSent, emailResult] = await Promise.all([
      whatsapp,
      email.catch((err) => {
        console.error("EmailJS error:", err);
        return null;
      }),
    ]);

    setLoading(false);

    // Only a total failure is worth showing the visitor an error for.
    if (!whatsappSent && !emailResult) {
      alert("Failed to send. Please try again.");
      return;
    }

    setForm({ name: "", mobile: "", email: "" });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_submit",
      form_name: "Contact Us Form",
    });
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Request a Call Back</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full mb-4 p-3 border rounded-lg"
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={handleChange}
        maxLength={10}
        required
        className="w-full mb-4 p-3 border rounded-lg"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full mb-6 p-3 border rounded-lg"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
