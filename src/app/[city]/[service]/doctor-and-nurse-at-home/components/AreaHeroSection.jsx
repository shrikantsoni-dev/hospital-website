// src/app/[city]/[area]/doctor-and-nurse-at-home/components/AreaHeroSection.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";
import { areaContent } from "@/data/areaContent";
import emailjs from "@emailjs/browser";
import { ENQUIRY_TEMPLATE_ID, PUBLIC_KEY, SERVICE_ID } from "@/constant";
import { useRouter } from "next/navigation";
import { fireInquiryWebhook } from "@/lib/fireInquiryWebhook";

export default function AreaHeroSection({ areaName, cityName, citySlug }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const [submitted, setSubmitted] = useState(false);

  const { hero } = areaContent;
  const title = rp(hero.heroTitle, areaName, cityName);
  const description = rp(hero.heroDescription, areaName, cityName);
  const router = useRouter();
  // Split title for styled rendering:

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name.trim() || phone.length < 10) {
      setStatus("error");
      return;
    }
  
    try {
      setStatus("loading");
  
      await emailjs.send(
        SERVICE_ID,
        ENQUIRY_TEMPLATE_ID,
        {
          patient_name: name.trim(),
          mobile: phone,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
          page: `Doctor & Nurse at Home – ${areaName}, ${cityName}`,
        },
        PUBLIC_KEY
      );
  
      setStatus("success");
      setSubmitted(true);

      fireInquiryWebhook({
        name: name.trim(),
        mobile: phone,
        area: areaName,
        city: cityName,
        source: "area_hero_form",
      });

      setName("");
      setPhone("");
  
      // GTM dataLayer push
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_submit",
        form_name: "area_hero_form",
        area: areaName,
        city: cityName,
      });

      router.push("/thank-you");
    } catch (error) {
      console.error("Booking error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative mt-25 bg-white overflow-hidden">
      {/* Subtle teal top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* ── Breadcrumb ──────────────────────────────────────────── */}
        <nav aria-label="breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-400">
            <li>
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              ›
            </li>
            <li>
              <Link
                href={`/${citySlug}`}
                className="hover:text-teal-600 transition-colors capitalize"
              >
                {cityName}
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              ›
            </li>
            <li className="text-gray-600 font-medium" aria-current="page">
              Doctor &amp; Nurse at Home in {areaName}
            </li>
          </ol>
        </nav>

        {/* ── Two-column layout ────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* ── LEFT: Content ───────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {/* H1 — SEO-optimised, styled */}
            <h1 className="text-[1.75rem] sm:text-[2.15rem] md:text-[2.5rem] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Doctor and Nurse at Home in{" "}
              <span className="text-teal-600 italic">{areaName}</span>
              {" – "}24/7 Home Visit in{" "}
              <span className="text-[#c26418] italic">15–30 Minutes</span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-xl">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#c26418] hover:bg-[#a8531a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                Book Home Visit
              </a>
              <a
                href="tel:+917303771900"
                className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-teal-500 text-gray-700 hover:text-teal-600 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                <PhoneIcon className="text-gray-400" />
                Call Now
              </a>
            </div>
          </div>

          {/* ── RIGHT: Form ─────────────────────────────────────── */}
          <div className="w-full lg:w-[360px] shrink-0 mt-10 lg:mt-0 lg:sticky lg:top-[88px]">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl px-6 pt-6 pb-7">
              {!submitted ? (
                <>
                <form action="" onSubmit={handleSubmit}>               
                  <h2 className="text-lg font-bold text-gray-900 mb-0.5">
                    Book a Doctor &amp; Nurse at Home in {areaName}
                  </h2>
                  <p className="text-gray-400 text-xs mb-5">
                    Usually responds within 2 minutes
                  </p>

                  {/* Name */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#c26418] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                      Phone Number
                    </label>
                    <div className="flex items-center border border-gray-200 rounded-lg bg-white focus-within:border-[#c26418] transition-colors overflow-hidden">
                      <span className="px-3 text-sm text-gray-400 border-r border-gray-200 py-2.5 select-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        maxLength={10}
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/\D/g, ""))
                        }
                        className="flex-1 px-3 py-2.5 bg-transparent text-sm text-gray-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#c26418] text-white font-bold text-sm py-3.5 rounded-lg flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-3">
                    No spam. No hidden charges. 100% confidential.
                  </p>
                  </form>
                </>
              ) : (
                /* Success state */
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Our team will call you back within{" "}
                    <span className="font-semibold text-teal-600">
                      2 minutes
                    </span>{" "}
                    to confirm your visit in {areaName}.
                  </p>
                  <a
                    href="tel:+917303771900"
                    className="mt-5 inline-flex items-center gap-2 bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-700 transition"
                  >
                    <PhoneIcon />
                    Call Now: +91 73037 71900
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}
