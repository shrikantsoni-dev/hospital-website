// src/app/[city]/[service]/doctor-and-nurse-at-home/components/AreaServicesSection.jsx

import { areaContent } from "@/data/areaContent";
import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

// Service icons map
const SERVICE_ICONS = [
  // Doctor
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>,
  // Nurse
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // Physiotherapy
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  // Lab Tests
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11"/><path d="M3 9h18"/><path d="M3 14h5"/><path d="M14 14h7"/><circle cx="11.5" cy="17" r="3"/></svg>,
  // ECG
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  // ICU
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  // Elderly Care
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  // Caretaker
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  // X-Ray
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/></svg>,
  // Medical Equipment
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
];

export default function AreaServicesSection({ areaName, cityName }) {
  const { ourHealthCareServices } = areaContent;

  const sectionTitle = rp(ourHealthCareServices.title, areaName, cityName);
  const sectionDesc = rp(ourHealthCareServices.description, areaName, cityName);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#064E53]/10 text-[#064E53] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E53] inline-block" />
            Home Healthcare Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
            {sectionTitle}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            {sectionDesc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ourHealthCareServices.services.map((service, i) => {
            const title = rp(service.title, areaName, cityName);
            const description = rp(service.description, areaName, cityName);

            return (
              <div
                key={i}
                className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#064E53]/30 hover:shadow-md transition-all duration-200"
              >
                {/* Icon + Title row */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Icon bubble */}
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-[#064E53]/8 text-[#064E53] flex items-center justify-center group-hover:bg-[#064E53] group-hover:text-white transition-colors duration-200">
                    {SERVICE_ICONS[i] ?? SERVICE_ICONS[0]}
                  </div>
                  {/* Title — SEO h3 */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug pt-1">
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pl-12">
                  {description}
                </p>

                {/* Subtle left accent bar on hover */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full bg-[#C26418] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-[#C26418] hover:bg-[#a8531a] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            Book Home Visit
          </a>
          <a
            href="tel:+917303771900"
            className="inline-flex items-center justify-center gap-2 border-2 border-[#064E53]/20 hover:border-[#064E53] text-[#064E53] font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200"
          >
            <PhoneIcon />
            Call Now 7303771900
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}