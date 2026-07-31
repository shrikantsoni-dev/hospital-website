"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  SERVICE_ID,
  BOOK_APPOINTMENT_TEMPLATE_ID,
  PUBLIC_KEY,
  ENQUIRY_TEMPLATE_ID,
} from "@/constant";
import { useRouter } from "next/navigation";
import { fireInquiryWebhook } from "@/lib/fireInquiryWebhook";

export default function BookAppointment({ service, city }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    timeSlot: "08:00 - 10:00 AM",
    message: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow 10-digit mobile number
    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length <= 10) {
        setForm((prev) => ({ ...prev, mobile: onlyDigits }));
      }
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    // The WhatsApp webhook runs alongside EmailJS, not after it — an EmailJS
    // outage must not swallow the lead.
    const whatsapp = fireInquiryWebhook({
      type: "appointment",
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      timeSlot: form.timeSlot,
      message: form.message,
      service: service?.name,
      city: city?.name,
      source: "service_BookAppointment_form",
    });

    // Send data on email Appoitment data
    const email = emailjs.send(
      SERVICE_ID,
      ENQUIRY_TEMPLATE_ID,
      {
        patient_name: form.name,
        mobile: form.mobile,
        email: form.email,
        time_slot: form.timeSlot,
        message: form.message,
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

    if (!whatsappSent && !emailResult) {
      alert("Failed to send appointment request. Please try again.");
      return;
    }

    setSuccessMsg("Your appointment request has been sent successfully!");

    setForm({
      name: "",
      mobile: "",
      email: "",
      timeSlot: "08:00 - 10:00 AM",
      message: "",
    });

    // GTM dataLayer push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_submit",
      form_name: "service_BookAppointment_form",
      service: service.name,
      city: city.name,
    });
    // Redirect To thank-you page
    router.push("/thank-you");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800"
      >
        Get a {service.treat} at Your Home in {city.name} Today
      </motion.h2>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-12 leading-relaxed">
        Fill in the details on this form, and our nurse will call you back
        within 2 minutes to confirm your booking.
      </p>
      <ul className="text-sm text-gray-500 block max-w-2xl mx-auto mb-8">
        <li className=""> No advance payment required</li>
        <li className="">The nurse arrives in {city.avgArrivalTime}</li>
        <li>24/7 Availability</li>
        <li>Written prescription after every visit</li>
        <li>40+ certified Nurses in {city.name}</li>
      </ul>

      {/* Wrapper Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-3 p-8 md:p-12 gap-10"
      >
        {/* FORM SECTION */}
        <form className="md:col-span-2 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patient Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Patient Name*
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Mobile Number*
              </label>
              <input
                type="text"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                maxLength={10}
                required
                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none"
              />

              {form.mobile.length > 0 && form.mobile.length < 10 && (
                <p className="text-xs text-red-500 mt-1">
                  Mobile number must be 10 digits.
                </p>
              )}
            </div>
          </div>

          {/* Email & Time Slot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Time Slots*
              </label>
              <select
                name="timeSlot"
                value={form.timeSlot}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none"
              >
                <option>08:00 - 10:00 AM</option>
                <option>10:00 - 12:00 PM</option>
                <option>12:00 - 02:00 PM</option>
                <option>02:00 - 04:00 PM</option>
                <option>04:00 - 06:00 PM</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 h-28 focus:ring-2 focus:ring-teal-600 outline-none"
            ></textarea>
          </div>

          {/* SUCCESS MESSAGE */}
          {successMsg && (
            <p className="text-green-600 text-sm font-semibold">{successMsg}</p>
          )}

          {/* SUBMIT BUTTON WITH LOADER */}
          <motion.button
            whileHover={{ scale: loading ? 1 : 1.03 }}
            whileTap={{ scale: loading ? 1 : 0.96 }}
            type="submit"
            disabled={loading}
            className="w-full md:w-auto bg-brand-secondary  text-white font-semibold px-10 py-3 rounded-xl shadow-md transition flex items-center justify-center cursor-pointer gap-2 disabled:opacity-70"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Request a Callback"
            )}
          </motion.button>
        </form>

        {/* Right Side – Doctor + WhatsApp */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 rounded-full overflow-hidden shadow-lg"
          >
            <Image
              src="/img2.png"
              alt="Doctor"
              quality={70}
              width={200}
              height={200}
              className="object-cover h-full"
            />
          </motion.div>

          <Link
            href="https://wa.me/7303771900"
            target="_blank"
            className="bg-brand-secondary text-white mt-6 px-8 py-3 rounded-full font-semibold shadow-md transition flex items-center gap-2"
          >
            WhatsApp Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
