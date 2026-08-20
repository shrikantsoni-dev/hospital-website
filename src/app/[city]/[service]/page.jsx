// src/app/[city]/[service]/page.jsx
// Dynamic pages → /delhi/doctor-at-home, /noida/nurse-at-home etc.
// Total pages = 5 cities × 8 services = 40 pages (all pre-rendered at build time)

import { notFound } from "next/navigation";
import Link from "next/link";
import { seoCities } from "@/data/seoCities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeedDoctorCTA from "@/components/NeedDoctorCTA";
import { seoServices } from "@/data/seoServices";

// ─── Static params — 40 pages at build time ──────────────────────────────────
export async function generateStaticParams() {
  const params = [];
  seoCities.forEach((city) => {
    seoServices.forEach((service) => {
      params.push({ city: city.slug, service: service.slug });
    });
  });
  return params;
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = seoCities.find((c) => c.slug === citySlug);
  const service = seoServices.find((s) => s.slug === serviceSlug);
  if (!city || !service) return { title: "Not Found" };

  const title = `${service.name} in ${city.name} | QuickHomeDoctor`;
  const description = `Book ${service.keyword} in ${
    city.name
  } — certified professionals at your doorstep within 60 minutes. Available 24/7 across ${city.areas
    .slice(0, 3)
    .join(", ")} & more. ₹399 onwards.`;
  const canonical = `https://quickhomedoctor.com/${city.slug}/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      `${service.keyword} in ${city.name}`,
      `${service.keyword} ${city.name}`,
      `home ${service.keyword} ${city.name}`,
      `${service.keyword} near me`,
      ...city.areas.map((area) => `${service.keyword} in ${area}`),
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "QuickHomeDoctor",
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

// Placeholders live in the raw service data so one entry serves all 5 cities.
// Resolve them once here so visible copy and JSON-LD never leak a literal {city}.
function resolvePlaceholders(value, city) {
  if (typeof value === "string") {
    return value
      .replaceAll("{city}", city.name)
      .replaceAll("{trafficNote}", city.trafficNote ?? "city traffic");
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolvePlaceholders(item, city));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        resolvePlaceholders(item, city),
      ])
    );
  }
  return value;
}

// ─── JSON-LD schemas ─────────────────────────────────────────────────────────
function JsonLd({ city, service }) {
  const url = `https://quickhomedoctor.com/${city.slug}/${service.slug}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `QuickHomeDoctor — ${service.name} in ${city.name}`,
    description: service.longDesc,
    url,
    telephone: "+91-7303771900",
    areaServed: city.areas.map((area) => ({
      "@type": "Place",
      name: `${area}, ${city.name}`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "₹₹",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://quickhomedoctor.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: city.name,
        item: `https://quickhomedoctor.com/${city.slug}`,
      },
      { "@type": "ListItem", position: 3, name: service.name, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

// ─── FAQ Accordion (client component) ────────────────────────────────────────
// Separate client component rakkha — baaki page Server Component rahega
import ServiceHeroSection from "./component/ServiceHeroSection";
import GoalsSection from "@/components/GoalsSection";
import ServiceWhyChooseUsSection from "./component/ServiceWhyChooseUsSection";
import ServiceIntroSection from "./component/ServiceIntroSection";
import ServiceConditionsSection from "./component/ServiceConditionsSection";
import ServiceWhyDoctorSection from "./component/ServiceWhyDoctorSection";
import BottomCTA from "@/components/BottomCTA";
import PatientReviews from "@/components/PatientReviews";
import BookAppointment from "@/components/BookAppointment";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import ServicesMoreServicesSection from "./component/ServiceMoreServicesSection";
import ServicePageAreasSection from "./component/ServiceAreasSection";
import ServiceFAQSection from "./component/ServiceFaqSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function CityServicePage({ params }) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = seoCities.find((c) => c.slug === citySlug);
  const rawService = seoServices.find((s) => s.slug === serviceSlug);

  if (!city || !rawService) notFound();

  const service = resolvePlaceholders(rawService, city);

  return (
    <main className="min-h-screen bg-white">
      <JsonLd city={city} service={service} />
      <Navbar />
      <ServiceHeroSection city={city} service={service} />
      <GoalsSection service={service}/>
      <ServiceWhyChooseUsSection city={city} service={service} />
      <ServiceIntroSection city={city} service={service} />
      <ServiceConditionsSection city={city} service={service} />
      <ServiceWhyDoctorSection city={city.name} service={service} />
      {/* Booking aur Benifits  */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* LEFT - How to Book */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              How to Book {service.name} in{" "}
              <span className="text-teal-600">{city.name}</span>
            </h2>

            <div className="space-y-4">
              {service.howItWorks.map((step, i) => (
                <div key={i} className="bg-gray-50 border rounded-lg p-4">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Benefits */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Benefits of {service.name} in{" "}
              <span className="text-teal-600">{city.name}</span>
            </h2>

            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="bg-gray-50 border rounded-lg p-4">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Desktop CTA */}
      <BottomCTA city={city} />
      <PatientReviews />
      <BookAppointment city={city} service={service} />
      <DoctorsCarousel />
      <ServicesMoreServicesSection city={city.name} service={serviceSlug}/>
      <ServicePageAreasSection city={city} />
      <ServiceFAQSection city={city} service={service} />
      <ServiceAreasSection />
      <NeedDoctorCTA cityName={city.name} />
      <Footer />
    </main>
  );
}
