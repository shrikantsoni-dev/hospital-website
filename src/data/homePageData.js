import { FaUserMd, FaHeartbeat, FaFlask } from "react-icons/fa";
import { FaUserNurse, FaXRay, FaHandHoldingMedical } from "react-icons/fa";
import { GiMedicalPack, GiHeartOrgan } from "react-icons/gi";
import { MdElderlyWoman, MdAccessibility } from "react-icons/md";

export const services = [
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
  // ── Service Areas Data For Home page
export const cities = [
  {
    slug: "delhi",
    name: "Delhi",
    badge: "Most Popular",
    areas: "South Delhi, Dwarka, Rohini, Saket, Vasant Kunj, Lajpat Nagar",
    services: ["Doctor at Home", "Nurse at Home", "Lab Tests"],
    extraCount: 8,
    linkLabel: "View all services in Delhi",
  },
  {
    slug: "noida",
    name: "Noida",
    badge: null,
    areas: "Sector 18, 62, 137, Greater Noida, Noida Extension",
    services: ["Doctor at Home", "Physiotherapy"],
    extraCount: 9,
    linkLabel: "View all services in Noida",
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    badge: null,
    areas: "DLF, Cyber City, Golf Course Road, Sohna Road, MG Road",
    services: ["Nurse at Home", "Elderly Care"],
    extraCount: 9,
    linkLabel: "View all services in Gurgaon",
  },
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    badge: null,
    areas: "Indirapuram, Vaishali, Raj Nagar, Kaushambi, Vasundhara",
    services: ["Doctor at Home", "Lab Tests"],
    extraCount: 9,
    linkLabel: "View all services in Ghaziabad",
  },
  {
    slug: "new-delhi",
    name: "New Delhi",
    badge: null,
    areas: "Delhi, Noida, Gurgaon, Ghaziabad, Faridabad & more",
    services: ["All 11 services", "Pan NCR"],
    extraCount: null,
    linkLabel: "View coverage",
  },
];

// Why Us Section Data
export const reasons = [
  {
    title: "Doctor at your door in 15 minutes guaranteed",
    desc: "We track ETA and commit to our response time day or night.",
    icon: "⚡",
  },
  {
    title: "Certified MD & GP Doctors only",
    desc: "Every doctor is MBBS/MD verified not just a health worker or attendant.",
    icon: "🩺",
  },
  {
    title: "Available 24/7, 365 days",
    desc: "Including 3 AM emergencies, Sundays, and public holidays.",
    icon: "🕐",
  },
  {
    title: "Serving Delhi, Noida, Gurgaon, Ghaziabad",
    desc: "5 cities covered one call connects you to the nearest doctor.",
    icon: "🗺️",
  },
  {
    title: "6,000+ patients treated at home",
    desc: "From routine check-ups to post-surgery recovery trusted since day one.",
    icon: "❤️",
  },
  {
    title: "Call, WhatsApp, or book online",
    desc: "Choose how you reach us we respond withiResponds in under 2 minutes · Available 24/7n minutes.",
    icon: "📞",
  },
];

// patient reviews data for home page
export const reviews = [
  {
    name: "Chandan Pawar",
    city: "Delhi",
    initials: "CP",
    rating: 5,
    text: "It was a Sunday morning when my father was ill. They arrived quickly with all equipment. Professional, polite, and extremely knowledgeable. Highly recommended!",
  },
  {
    name: "Sona Damania",
    city: "Noida",
    initials: "SD",
    rating: 5,
    text: "QuickHomeDoctor helped my mother during a critical time. Their home-care assistance was professional, compassionate and reliable. Truly a lifesaver.",
  },
  {
    name: "Ramesh K.",
    city: "Gurgaon",
    initials: "RK",
    rating: 5,
    text: "Got a doctor at home in Gurgaon within 12 minutes. The doctor was thorough and patient. Much better than waiting in a hospital. Will use again.",
  },
];

// ── FAQ Data city ke hisab se alag alag 
export const cityFAQs = {
  default: [
    {
      q: "How quickly can I get a doctor home visit in New Delhi?",
      a: "In most cases, a doctor can reach your home within 15–30 minutes, depending on your location and availability.",
    },
    {
      q: "Is doctor home visit service available 24/7 in New Delhi?",
      a: "Yes, QuickHomeDoctor offers 24/7 doctor home visit services, including late nights, weekends, and emergencies.",
    },
    {
      q: "What is the cost of a doctor home visit in New Delhi?",
      a: "The cost depends on factors like location, type of consultation, and urgency. For exact pricing, please call us to confirm.",
    },
    {
      q: "Which areas are covered under doctor home visit services?",
      a: "Services are available across Delhi, Noida, Gurgaon, Ghaziabad and nearby NCR regions. Call us to check exact coverage for your area.",
    },
    {
      q: "What does the doctor bring to a home visit?",
      a: "Our doctors carry standard diagnostic equipment so that assessment and treatment advice can begin immediately at home.",
    },
    {
      q: "What health issues can be treated through a doctor home visit?",
      a: "Common conditions like fever, cold, cough, infections, blood pressure issues, elderly care, and post-hospital recovery can be handled at home.",
    },
  ],
 
  delhi: [
    {
      q: "How quickly can I get a doctor home visit in Delhi?",
      a: "In Delhi, our doctors typically arrive within 15–30 minutes. Areas like South Delhi, Dwarka, Rohini, and Saket are covered with fast response.",
    },
    {
      q: "Is doctor home visit available 24/7 in Delhi?",
      a: "Yes, QuickHomeDoctor provides 24/7 doctor home visits across all Delhi areas including late night emergencies.",
    },
    {
      q: "Which areas of Delhi are covered?",
      a: "We cover South Delhi, Dwarka, Rohini, Vasant Kunj, Saket, Lajpat Nagar, Janakpuri and all major Delhi localities.",
    },
    {
      q: "What is the doctor home visit charge in Delhi?",
      a: "Charges vary based on consultation type and timing. Call us for exact pricing — we offer affordable rates for Delhi patients.",
    },
    {
      q: "Can I get a nurse at home in Delhi?",
      a: "Yes, we provide trained nurses for home care in Delhi — available for post-surgery care, wound dressing, vitals monitoring and more.",
    },
    {
      q: "What health conditions can be treated at home in Delhi?",
      a: "Fever, cold, flu, infections, elderly care, blood pressure monitoring, diabetes management, and post-surgery recovery — all handled at home in Delhi.",
    },
  ],
 
  noida: [
    {
      q: "How quickly can I get a doctor home visit in Noida?",
      a: "In Noida, our doctors reach your home within 15–30 minutes. We cover Sector 18, 62, 137, Greater Noida and all major sectors.",
    },
    {
      q: "Is doctor home visit available 24/7 in Noida?",
      a: "Yes, QuickHomeDoctor provides round-the-clock doctor home visit services across all sectors of Noida and Greater Noida.",
    },
    {
      q: "Which sectors of Noida are covered?",
      a: "We cover Sector 18, 50, 62, 137, Indirapuram, Greater Noida, Noida Extension and surrounding areas.",
    },
    {
      q: "What is the cost of home doctor visit in Noida?",
      a: "Our home visit charges in Noida are competitive. Call us for exact pricing based on your location and type of consultation needed.",
    },
    {
      q: "Can I book a nurse for home care in Noida?",
      a: "Yes, trained and certified nurses are available in Noida for post-surgery care, dressing changes, vitals monitoring and elderly care.",
    },
    {
      q: "What medical services are available at home in Noida?",
      a: "Doctor visits, nurse care, blood tests, ECG, physiotherapy, elderly care, ICU setup and more — all available at home in Noida.",
    },
  ],
 
  gurgaon: [
    {
      q: "How quickly can I get a doctor at home in Gurgaon?",
      a: "Our doctors reach your home in Gurgaon within 15–30 minutes. We cover DLF, Cyber City, Golf Course Road, Sohna Road and more.",
    },
    {
      q: "Is 24/7 doctor home visit available in Gurgaon?",
      a: "Yes, QuickHomeDoctor offers 24/7 home visit services across Gurgaon including late nights and weekends.",
    },
    {
      q: "Which areas of Gurgaon are covered?",
      a: "DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, Sector 56, MG Road, Manesar and surrounding Gurgaon areas.",
    },
    {
      q: "What is the doctor home visit cost in Gurgaon?",
      a: "Charges depend on consultation type and urgency. Call us for transparent pricing — we serve Gurgaon at affordable rates.",
    },
    {
      q: "Can I get physiotherapy at home in Gurgaon?",
      a: "Yes, certified physiotherapists are available at home in Gurgaon for post-surgery rehab, back pain and joint treatment.",
    },
    {
      q: "What conditions are treated at home in Gurgaon?",
      a: "Fever, infections, elderly care, blood pressure, diabetes monitoring, wound care and post-hospital recovery — all at home in Gurgaon.",
    },
  ],
 
  ghaziabad: [
    {
      q: "How quickly can a doctor visit my home in Ghaziabad?",
      a: "In Ghaziabad, our doctors arrive within 15–30 minutes. We cover Indirapuram, Vaishali, Raj Nagar, Kaushambi and nearby areas.",
    },
    {
      q: "Is doctor home visit available 24/7 in Ghaziabad?",
      a: "Yes, QuickHomeDoctor provides 24/7 doctor and nurse home visit services across all major areas of Ghaziabad.",
    },
    {
      q: "Which areas of Ghaziabad are covered?",
      a: "Indirapuram, Vaishali, Raj Nagar Extension, Kaushambi, Crossings Republik, Vasundhara and surrounding Ghaziabad localities.",
    },
    {
      q: "What is the home doctor visit charge in Ghaziabad?",
      a: "Charges vary by consultation type and location. Call us for accurate pricing — we offer affordable home care in Ghaziabad.",
    },
    {
      q: "Can I get elderly care at home in Ghaziabad?",
      a: "Yes, we provide trained caregivers and nurses for elderly care at home in Ghaziabad — available for day and night duty.",
    },
    {
      q: "What health issues can be treated at home in Ghaziabad?",
      a: "Fever, cold, infections, elderly care, blood tests, ECG, physiotherapy and post-surgery recovery — all available at home in Ghaziabad.",
    },
  ],
 
  "new-delhi": [
    {
      q: "How quickly can I get a doctor home visit in New Delhi?",
      a: "In most cases, a doctor can reach your home within 15–30 minutes across New Delhi depending on your location.",
    },
    {
      q: "Is doctor home visit service available 24/7 in New Delhi?",
      a: "Yes, QuickHomeDoctor offers 24/7 doctor home visit services across all New Delhi cities including emergencies.",
    },
    {
      q: "Which cities in NCR are covered?",
      a: "We cover Delhi, Noida, Gurgaon, Ghaziabad, Faridabad and surrounding NCR areas. Call to confirm coverage for your pincode.",
    },
    {
      q: "What is the cost of a doctor home visit in New Delhi?",
      a: "Charges depend on location, consultation type and urgency. Call us for transparent and accurate pricing.",
    },
    {
      q: "What does the doctor bring to a home visit in NCR?",
      a: "Our doctors carry standard diagnostic equipment so assessment and treatment advice can begin immediately at your home.",
    },
    {
      q: "What health issues can be treated at home in New Delhi?",
      a: "Fever, infections, elderly care, blood pressure, diabetes, wound care, post-surgery recovery and more — all handled at home across NCR.",
    },
  ],
};