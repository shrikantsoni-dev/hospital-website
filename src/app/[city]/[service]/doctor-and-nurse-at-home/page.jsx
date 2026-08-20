// src/app/[city]/[service]/doctor-and-nurse-at-home/page.jsx
//
// PERFORMANCE STRATEGY:
// ─ Above-fold (Navbar, Hero)       → static import — renders instantly
// ─ Mid-fold  (Stats → HowToBook)   → static import — SSG pre-rendered, no client JS
// ─ Below-fold (Carousel → CTA)     → dynamic import + Suspense — JS bundle split

import { Suspense } from "react";
import { notFound } from "next/navigation";
import dynamicImport from "next/dynamic";

import { seoCities } from "@/data/seoCities";
import { areaContent } from "@/data/areaContent";
import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

// ── CRITICAL PATH — static imports (above + mid fold) ────────────────────────
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AreaHeroSection from "./components/AreaHeroSection";
import AreaStatsSection from "./components/AreaStatsSection";
import AreaHomeHealthcareSection from "./components/AreaHomeHealthcareSection";
import AreaServicesSection from "./components/AreaServicesSection";
import AreaWhyChooseSection from "./components/AreaWhyChooseSection";
import AreaWhyItMattersSection from "./components/AreaWhyItMattersSection";
import AreaHowToBookSection from "./components/AreaHowToBookSection";

// ── BELOW FOLD — dynamic imports (separate JS chunks, lazy hydrated) ──────────
// ssr: true  → HTML still SSG pre-rendered (SEO safe)
// loading    → skeleton shown during client hydration gap
const DoctorsCarousel = dynamicImport(() => import("@/components/DoctorsCarousel"), {
  ssr: true,
  loading: () => <SectionSkeleton height="h-64" />,
});
const PatientReviews = dynamicImport(() => import("@/components/PatientReviews"), {
  ssr: true,
  loading: () => <SectionSkeleton height="h-48" />,
});
const BookAppointment = dynamicImport(() => import("../component/BookAppointment"), {
  ssr: true,
  loading: () => <SectionSkeleton height="h-56" />,
});
const AreaFaqSection = dynamicImport(() => import("./components/AreaFaqSection"), {
  ssr: true,
  loading: () => <SectionSkeleton height="h-64" />,
});
const LatestBlogs = dynamicImport(() => import("@/components/LatestBlog"), {
  ssr: true,
  loading: () => <SectionSkeleton height="h-48" />,
});
const NeedDoctorCTA = dynamicImport(() => import("@/components/NeedDoctorCTA"), {
  ssr: true,
  loading: () => <SectionSkeleton height="h-24" />,
});

// ── Lightweight skeleton shown during hydration ───────────────────────────────
function SectionSkeleton({ height = "h-40" }) {
  return (
    <div className={`w-full ${height} bg-gray-100 animate-pulse`} aria-hidden="true" />
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function areaToSlug(area) {
  return area.toLowerCase().replace(/\s+/g, "-");
}
function slugToArea(slug, areas) {
  return areas.find((a) => areaToSlug(a) === slug) ?? null;
}

// ─── Static params — full SSG at build time ───────────────────────────────────
export async function generateStaticParams() {
  const params = [];
  seoCities.forEach((city) => {
    city.areas.forEach((area) => {
      params.push({ city: city.slug, service: areaToSlug(area) });
    });
  });
  return params;
}

// ─── Force pure static — never runs on server at request time ─────────────────
export const dynamic = "force-static";
export const revalidate = false;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { city: citySlug, service: areaSlug } = await params;

  const cityData = seoCities.find((c) => c.slug === citySlug);
  if (!cityData) return { title: "Not Found" };

  const areaName = slugToArea(areaSlug, cityData.areas);
  if (!areaName) return { title: "Not Found" };

  const cityName = cityData.name;
  const canonical = `https://quickhomedoctor.com/${citySlug}/${areaSlug}/doctor-and-nurse-at-home`;

  const title = `Doctor & Nurse at Home in ${areaName}, ${cityName} | QuickHomeDoctor`;
  const description = `Book certified MBBS/MD doctor or nurse at home in ${areaName}, ${cityName} in 15–30 min. 24/7 for fever, post-surgery care, wound dressing & lab tests. Starting ₹399. Call now.`;

  const keywords = [
    `doctor at home in ${areaName}`,
    `nurse at home in ${areaName} ${cityName}`,
    `home doctor visit ${areaName}`,
    `doctor home visit ${areaName} ${cityName}`,
    `home healthcare ${areaName}`,
    `nurse at home ${areaName}`,
    `MBBS doctor home visit ${areaName}`,
    `doctor on call ${areaName} ${cityName}`,
    `home visit doctor ${cityName}`,
    `certified doctor home visit ${areaName}`,
  ];

  return {
    title,
    description,
    keywords,
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

// ─── JSON-LD — inline, zero render cost ──────────────────────────────────────
function JsonLd({ cityData, areaName, areaSlug }) {
  const cityName = cityData.name;
  const citySlug = cityData.slug;
  const url = `https://quickhomedoctor.com/${citySlug}/${areaSlug}/doctor-and-nurse-at-home`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: `QuickHomeDoctor — Doctor & Nurse at Home in ${areaName}, ${cityName}`,
      description: `Certified MBBS/MD doctors and trained nurses for home visits in ${areaName}, ${cityName} within 15–30 min. Available 24/7.`,
      url,
      telephone: "+91-7303771900",
      priceRange: "₹₹",
      areaServed: [{ "@type": "Place", name: `${areaName}, ${cityName}` }],
      address: {
        "@type": "PostalAddress",
        addressLocality: areaName,
        addressRegion: cityName,
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: areaContent.FAQ.map((faq) => ({
        "@type": "Question",
        name: rp(faq.question, areaName, cityName),
        acceptedAnswer: {
          "@type": "Answer",
          text: rp(faq.answer, areaName, cityName),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quickhomedoctor.com" },
        { "@type": "ListItem", position: 2, name: cityName, item: `https://quickhomedoctor.com/${citySlug}` },
        { "@type": "ListItem", position: 3, name: `Doctor & Nurse at Home in ${areaName}`, item: url },
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function AreaDoctorNursePage({ params }) {
  const { city: citySlug, service: areaSlug } = await params;

  const cityData = seoCities.find((c) => c.slug === citySlug);
  if (!cityData) notFound();

  const areaName = slugToArea(areaSlug, cityData.areas);
  if (!areaName) notFound();

  const cityName = cityData.name;

  return (
    <main className="min-h-screen bg-white">

      {/* JSON-LD schemas — zero render cost */}
      <JsonLd cityData={cityData} areaName={areaName} areaSlug={areaSlug} />

      {/* ── ABOVE FOLD ── critical, static, instant render */}
      <Navbar />
      <AreaHeroSection areaName={areaName} cityName={cityName} citySlug={cityData.slug} />

      {/* ── MID FOLD ── SSG pre-rendered server components, zero client JS */}
      <AreaStatsSection areaName={areaName} cityName={cityName} />
      <AreaHomeHealthcareSection areaName={areaName} cityName={cityName} data={areaContent.homeHealthcare} />
      <AreaServicesSection areaName={areaName} cityName={cityName} />
      <AreaWhyChooseSection areaName={areaName} cityName={cityName} data={areaContent.whuChooseUs} />
      <AreaWhyItMattersSection areaName={areaName} cityName={cityName} data={areaContent.whyItMatters} />
      <AreaHowToBookSection areaName={areaName} cityName={cityName} />

      {/* ── BELOW FOLD ── dynamic chunks, lazy hydrated, Suspense wrapped */}
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <DoctorsCarousel />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-48" />}>
        <PatientReviews />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-56" />}>
        <BookAppointment city={cityData} areaName={areaName} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <AreaFaqSection areaName={areaName} cityName={cityName} faqs={areaContent.FAQ} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-48" />}>
        <LatestBlogs />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-24" />}>
        <NeedDoctorCTA cityName={cityName} areaName={areaName} />
      </Suspense>

      <Footer />
    </main>
  );
}