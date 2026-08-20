// components/ServicesMoreServicesSection.jsx
import Link from "next/link";

const services = [
  {
    label: "Doctor at Home",
    slug: "doctor-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    label: "Nurse at Home",
    slug: "nurse-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M12 11v4M10 13h4" />
      </svg>
    ),
  },
  {
    label: "Physiotherapy at Home",
    slug: "physiotherapy-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M12 10v12M6 14l6 2 6-2" />
      </svg>
    ),
  },
  {
    label: "X-Ray at Home",
    slug: "xray-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h3l2 3 2-3h3" />
        <path d="M7 17h3l2-3 2 3h3" />
        <path d="M12 10v4" />
      </svg>
    ),
  },
  {
    label: "Elderly Care at Home",
    slug: "elderly-care-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <circle cx="12" cy="10" r="2" />
        <line x1="8" x2="8" y2="2" />
        <line x1="16" x2="16" y2="2" />
      </svg>
    ),
  },
  {
    label: "ECG at Home",
    slug: "ecg-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Lab Test at Home",
    slug: "lab-test-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-3 6h12l-3-6V3" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    label: "Medical Equipment",
    slug: "medical-equipment-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="7" height="7" />
        <rect x="15" y="3" width="7" height="7" />
        <rect x="15" y="15" width="7" height="7" />
        <path d="M9 7h6M12 4v6M5.5 15H9a2 2 0 0 1 2 2v4" />
      </svg>
    ),
  },
  {
    label: "Caretaker at Home",
    slug: "caretaker-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "ICU Setup at Home",
    slug: "icu-at-home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M8 14h2l2-4 2 8 2-4h2" />
      </svg>
    ),
  },
];

// Server Component — params directly as prop
export default function ServicesMoreServicesSection({ city, service }) {
  const citySlug = city
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-');  // "New Delhi" → "new-delhi" ✅

const cityDisplay = city.charAt(0).toUpperCase() + city.slice(1);
const otherServices = services.filter((s) => s.slug !== service);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-[1.5px] bg-[#C26418] inline-block" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C26418]">
              Our Services
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#064E53] leading-snug mb-2"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            24/7 Home Healthcare Services{" "}
            <span className="text-[#C26418]">in {cityDisplay}</span>
          </h2>
          <p className="text-sm text-[#5a7a7b] max-w-md">
            We cover all major localities across {city}. Click on your area for
            specific information about our home health care service near you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {otherServices.map((svc) => (
            <Link
            key={svc.slug}
            href={`/${citySlug}/${svc.slug}`}
              className="group relative bg-white border border-[#e8f0f0] rounded-2xl p-4 flex flex-col items-center gap-2.5 
                         hover:-translate-y-1 hover:border-[#b5d4d5] hover:shadow-[0_8px_24px_rgba(6,78,83,0.10)]
                         transition-all duration-200 overflow-hidden"
            >
              {/* Top accent bar */}
              <span
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#C26418] to-[#e8893a]
                           scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"
              />
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl bg-[#f0f9f9] group-hover:bg-[#e1f2f2] 
                              flex items-center justify-center transition-colors duration-200"
              >
                <span className="w-6 h-6 text-[#064E53]">{svc.icon}</span>
              </div>
              {/* Label */}
              <span className="text-[13px] font-medium text-[#1a3a3b] text-center leading-snug">
                {svc.label}
              </span>
              {/* Arrow */}
              <span className="text-[11px] font-medium text-[#C26418] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                View →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}