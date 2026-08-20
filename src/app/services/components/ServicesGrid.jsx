import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaFlask,
  FaHandHoldingMedical,
  FaHeartbeat,
  FaPhoneAlt,
  FaShieldAlt,
  FaUserMd,
  FaUserNurse,
  FaWhatsapp,
  FaXRay,
} from "react-icons/fa";
import { GiHeartOrgan, GiMedicalPack } from "react-icons/gi";
import { MdAccessibility, MdElderlyWoman } from "react-icons/md";

const services = [
  {
    slug: "doctor-at-home",
    name: "Doctor at Home",
    desc: "GP & MD consultation at your door in 15 min",
    icon: FaUserMd,
    iconColor: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    slug: "nurse-at-home",
    name: "Nurse at Home",
    desc: "Skilled nursing, dressing & 24hr attendants",
    icon: FaUserNurse,
    iconColor: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    slug: "physiotherapy-at-home",
    name: "Physiotherapy at Home",
    desc: "Post-surgery rehab & pain management",
    icon: MdAccessibility,
    iconColor: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    slug: "xray-at-home",
    name: "X-Ray at Home",
    desc: "Portable digital X-ray at your doorstep",
    icon: FaXRay,
    iconColor: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    slug: "elderly-care-at-home",
    name: "Elderly Care at Home",
    desc: "Dedicated senior care & companion services",
    icon: MdElderlyWoman,
    iconColor: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    slug: "ecg-at-home",
    name: "ECG at Home",
    desc: "Portable cardiac & diagnostic testing",
    icon: FaHeartbeat,
    iconColor: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    slug: "lab-test-at-home",
    name: "Lab Test at Home",
    desc: "Blood test, CBC, sugar — NABL certified labs",
    icon: FaFlask,
    iconColor: "text-green-600",
    bg: "bg-green-50",
  },
  {
    slug: "medical-equipment-at-home",
    name: "Medical Equipment at Home",
    desc: "Oxygen, hospital beds & equipment rental",
    icon: GiMedicalPack,
    iconColor: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    slug: "caretaker-at-home",
    name: "Caretaker at Home",
    desc: "24hr caretaker for recovery & daily support",
    icon: FaHandHoldingMedical,
    iconColor: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    slug: "icu-at-home",
    name: "ICU Setup at Home",
    desc: "Hospital-grade critical care at home",
    icon: GiHeartOrgan,
    iconColor: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const trustPoints = [
  "Verified medical professionals",
  "Fast doorstep response across Delhi",
  "Care for acute, chronic, and recovery needs",
];

const quickStats = [
  { value: "11+", label: "doorstep services" },
  { value: "24/7", label: "booking support" },
  { value: "15-30 min", label: "typical response" },
];

const journeySteps = [
  {
    title: "Tell us what you need",
    desc: "Call or WhatsApp our team and share the patient condition, location, and preferred timing.",
  },
  {
    title: "We match the right service",
    desc: "A doctor, nurse, technician, or support professional is assigned based on the case.",
  },
  {
    title: "Care arrives at your doorstep",
    desc: "Get timely treatment, monitoring, diagnostics, or recovery support at home without the hospital rush.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full mt-25 bg-[linear-gradient(180deg,#fff8f2_0%,#ffffff_28%,#f7faf9_100%)] px-4 pb-20 pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#e7d8cb] bg-[radial-gradient(circle_at_top_left,_rgba(194,100,24,0.18),_transparent_34%),linear-gradient(135deg,#fffaf5_0%,#ffffff_55%,#eef7f5_100%)] shadow-[0_30px_80px_rgba(6,78,83,0.08)]">
          <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-14">
            <div>
              <span className="inline-flex items-center rounded-full border border-[#e7c7ad] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
                Home Healthcare Services
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Professional medical care at home, designed to feel fast, calm, and reliable.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                From doctor visits and nursing support to diagnostics, physiotherapy, elderly care, and ICU setup, Quick Home Doctor brings complete healthcare support to families across Delhi.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                  >
                    <FaCheckCircle className="text-brand-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+917303771900"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
                >
                  <FaPhoneAlt />
                  Call Now
                </a>
                <a
                  href="https://wa.me/917303771900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-secondary px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
                >
                  <FaWhatsapp />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-end sm:grid-cols-3 lg:grid-cols-1">
              {quickStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 backdrop-blur"
                >
                  <div className="text-3xl font-black text-brand-secondary">{item.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary">
                Explore Services
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Choose the care your family needs
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Every card below leads to a dedicated service page so patients can quickly understand scope, eligibility, and booking details.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900 ring-1 ring-amber-200">
              <FaClock className="text-brand-primary" />
              Available day and night
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/delhi/${service.slug}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b498] hover:shadow-[0_20px_50px_rgba(194,100,24,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-orange-300 to-brand-secondary opacity-0 transition duration-300 group-hover:opacity-100" />

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${service.bg} transition duration-300 group-hover:scale-110`}
                >
                  {Icon && <Icon className={`text-2xl ${service.iconColor}`} />}
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {service.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
                  {service.desc}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-brand-primary">
                    View service
                  </p>
                  <FaArrowRight className="text-brand-primary transition duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-brand-secondary p-8 text-white shadow-[0_24px_60px_rgba(6,78,83,0.18)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              <FaShieldAlt />
              Why families trust us
            </div>
            <h3 className="mt-5 text-3xl font-bold">
              Built for urgent needs, routine care, and recovery support.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
              Hospitals are not always the best first step. Our service model helps families get qualified help at home with less travel, less waiting, and better comfort for elderly and recovering patients.
            </p>
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-white/90">
                Doctor consultations, nursing procedures, and diagnostics in one place.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-white/90">
                Ideal for post-surgery care, chronic conditions, mobility issues, and elderly support.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm text-white/90">
                Quick booking support through phone and WhatsApp for families who need clarity fast.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-primary">
              How It Works
            </p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              Simple booking flow, without the hospital back-and-forth
            </h3>
            <div className="mt-8 grid gap-4">
              {journeySteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-primary text-base font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#e6d5c8] bg-[linear-gradient(135deg,#fff6ee_0%,#ffffff_50%,#f2fbf8_100%)] p-8 text-center shadow-[0_20px_60px_rgba(194,100,24,0.08)] sm:p-10">
          <h3 className="text-3xl font-bold text-slate-900">
            Need help choosing the right service?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Share the patient condition and your location. Our team will guide you to the right home healthcare option and help you book quickly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+917303771900"
              className="inline-flex items-center gap-2 rounded-2xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              <FaPhoneAlt />
              Speak to Support
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-secondary hover:text-brand-secondary"
            >
              Contact Page
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
