// src/app/[city]/[area]/doctor-and-nurse-at-home/components/AreaWhyChooseSection.jsx
// Usage in page.jsx:
// import { areaContent } from "@/data/areaContent";
// <AreaWhyChooseSection areaName={areaName} cityName={cityData.name} data={areaContent.whuChooseUs} />

import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

// ── Icon map — one per card ───────────────────────────────────────────────────
const ICONS = [
  // 15–30 Min Arrival
  (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.2"/>
      <path d="M20 10v10l6 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Certified doctors
  (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
      <path d="M20 4C13.373 4 8 9.373 8 16c0 4.418 2.386 8.278 5.938 10.408L12 36h16l-1.938-9.592C29.614 24.278 32 20.418 32 16c0-6.627-5.373-12-12-12z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M15 22l3.5 3.5L26 17" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // No Waiting
  (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
      <path d="M8 20h24M24 12l8 8-8 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 24/7
  (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
      <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2.2"/>
      <circle cx="20" cy="20" r="2.5" fill="currentColor"/>
    </svg>
  ),
  // Clear Care Notes
  (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-8 h-8">
      <rect x="8" y="6" width="24" height="28" rx="3" stroke="currentColor" strokeWidth="2.2"/>
      <path d="M14 14h12M14 20h12M14 26h7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  ),
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function AreaWhyChooseSection({ areaName, cityName, data }) {
  if (!data) return null;

  const title = rp(data.title, areaName, cityName);

  return (
    <section
      className="relative bg-[var(--brand-primary,#0d6efd)] py-12 px-4 sm:py-16 overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* subtle background circles for depth */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-12 w-80 h-80 rounded-full bg-white/5"
      />

      <div className="relative max-w-5xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
            Why Choose Us
          </span>
          <h2
            id="why-choose-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug"
          >
            {title}
          </h2>
          {/* accent underline */}
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-white/40" />
        </div>

        {/* ── Cards grid ── */}
        {/* Mobile: 1 col | sm: 2 col | lg: 3 col (last row centered via CSS trick) */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0"
          role="list"
        >
          {data.whyFamiliesChoose.map((item, idx) => {
            const cardTitle = rp(item.title, areaName, cityName);
            const cardDesc = rp(item.description, areaName, cityName);

            return (
              <li
                key={idx}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 sm:p-6 flex gap-4 items-start transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
              >
                {/* icon bubble */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white group-hover:bg-white/30 transition-colors duration-300"
                  aria-hidden="true"
                >
                  {ICONS[idx] ?? ICONS[0]}
                </div>

                {/* text */}
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-1.5">
                    {cardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {cardDesc}
                  </p>
                </div>

                {/* top-right accent dot */}
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/30"
                />
              </li>
            );
          })}
        </ul>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-white/80 text-sm sm:text-base">
            Ready to book a home visit?
          </p>
          <a
            href="tel:+917303771900"
            className="inline-flex items-center gap-2 bg-white text-[var(--brand-primary,#0d6efd)] font-bold text-sm px-6 py-2.5 rounded-full shadow hover:shadow-md hover:scale-105 transition-all duration-200"
            aria-label="Call QuickHomeDoctor now"
          >
            {/* phone icon */}
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M2 3a2 2 0 0 1 2-2h2.153a2 2 0 0 1 1.94 1.515l.547 2.734a2 2 0 0 1-.45 1.732l-.7.7a11.042 11.042 0 0 0 4.829 4.829l.7-.7a2 2 0 0 1 1.732-.45l2.734.547A2 2 0 0 1 19 13.847V16a2 2 0 0 1-2 2C8.163 18 2 11.837 2 4V3z"/>
            </svg>
            Call +91 73037 71900
          </a>
        </div>

      </div>
    </section>
  );
}