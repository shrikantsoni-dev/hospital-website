"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function ServiceIntroSection({ city, service }) {
  // city.areas se first few areas list karo dynamically
  const areaList = city.areas?.slice(0, 5).join(", ") ?? "all major areas";
    console.log(areaList)
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">
          {/* ── LEFT: Text Content ─────────────────────────────────────── */}
          <div>
            {/* Section label */}
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c26418] bg-orange-50 px-3 py-1 rounded-full mb-4">
              About Our Service
            </span>

            {/* H2 — italic handwriting style like PDF */}
            <h2 className="font-bold text-2xl sm:text-3xl text-gray-900 leading-snug mb-6">
              Getting a {service.name} in{" "}
              <span className="italic text-[#0a7075]">{city.name}</span> Just
              Got Easier
            </h2>

            {/* Para 1 */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Anyone who has visited a <strong>{city.name}</strong> hospitals and
              clinic knows the chaos, traffic, and crowd. Long queues in clinics
              and hospitals increase consultations' waiting time, and the
              exhausting drive to home. When you're already unwell, that
              experience makes the situation more worst.
            </p>

            {/* Para 2 — dynamic areas */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              QuickHomeDoctor brings a qualified GP &amp; MD {service.name} in{" "}
              <strong>{city.name}</strong> so you don't have to go with such
              situations. Whether you're in {areaList}. Our home
              visit doctors reach at your home in just 15 to 30 minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917303771900"
                className="inline-flex items-center gap-2 bg-[#c26418] hover:bg-[#a8531a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/917303771900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa54] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── RIGHT: Highlight Card — desktop only ──────────────────── */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Quick facts card */}
            <div className="bg-[#f8fffe] border border-[#0a7075]/15 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0a7075] mb-4">
                Why patients prefer us
              </p>
              <ul className="space-y-3">
                {[
                  `Doctor reaches in ${city.avgArrivalTime ?? "15–30 mins"}`,
                  "No hospital queues or crowded OPDs",
                  "Certified MBBS & MD doctors",
                  "Written treatment plan every visit",
                  "Available day, night & weekends",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#0a7075]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[#0a7075]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Usage ──────────────────────────────────────────────────────────────────
  import IntroSection from "@/app/[city]/[service]/components/IntroSection";

  <IntroSection city={city} service={service} />

  // city object me chahiye:
  // city.name, city.areas[], city.avgArrivalTime
  // service object me chahiye:
  // service.name
──────────────────────────────────────────────────────────────────────────── */
