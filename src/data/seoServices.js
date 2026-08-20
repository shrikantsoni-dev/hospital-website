// src/data/seoServices.js
// Complete SEO-optimised service data for QuickHomeDoctor
// 10 services — matches services[] slugs exactly
// Used in: /[city]/[service]/page.jsx → 5 cities × 10 services = 50 static pages

export const seoServices = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. DOCTOR AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "doctor-at-home",
    name: "Doctor at Home",
    keyword: "doctor at home",
    treat: "Doctor",
    heroDesc: "Skip the hospital and medical clinics' rush. Get a certified doctor at your home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Certified MBBS/MD doctor at your doorstep in 15 minutes. Available 24/7.",
    longDesc:
      "QuickHomeDoctor provides experienced MBBS/MD certified doctors for home visits across Delhi NCR. Whether it is fever, cold, body pain, vomiting, BP check, diabetes monitoring or any general illness — our doctors come directly to you. No waiting in hospital queues, no OPD rush. Book online or call now and get a doctor at your home within 15 minutes.",
    benefits: [
      "MBBS/MD certified doctors with valid MCI registration",
      "Available 24/7 including weekends and public holidays",
      "Doctor arrives within 15 minutes of booking",
      "Written treatment plan provided after every consultation",
      "Follow-up call within 24 hours included",
      "Affordable fees starting ₹499 — no hidden charges",
    ],
    faqs: [
      {
        question: "How quickly can a doctor visit my home in Delhi NCR?",
        answer:
          "Our doctors typically arrive within 15 minutes of booking in major Delhi NCR areas. For outer areas response time may be up to 45 minutes.",
      },
      {
        question: "What illnesses and conditions can be treated at home?",
        answer:
          "Fever, cold, flu, body pain, headache, vomiting, diarrhoea, BP check, blood sugar monitoring, diabetes management, UTI, skin rash, breathing difficulty, and general illnesses can all be treated at home.",
      },
      {
        question: "Is the doctor MBBS or MD qualified?",
        answer:
          "Yes. All our doctors are MBBS or MD qualified, registered with the Medical Council of India, and undergo background verification before joining.",
      },
      {
        question: "What will I receive after the home visit?",
        answer:
          "You receive a written treatment plan with clear medical advice after every consultation, plus a follow-up call within 24 hours.",
      },
      {
        question: "What are the doctor home visit consultation charges?",
        answer:
          "Doctor home visit charges start from ₹499. Final fee depends on time of visit and any additional services. No hidden charges — price is confirmed before dispatch.",
      },
      {
        question: "Can I book a doctor at home at midnight or on Sunday?",
        answer:
          "Yes. QuickHomeDoctor operates 24 hours a day, 7 days a week including midnight, Sundays and all public holidays.",
      },
    ],
    howItWorks: [
      "Call, WhatsApp or Book Online",
      "Share Symptoms and Location",
      "Doctor Assigned Instantly",
      "Doctor Visits Your Home in 15–30 Minutes",
    ],
    whyChoose: [
      {
        icon: "clock",
        title: "Fast Doctor Visit",
        desc: "Doctor reaches your home in {city} within 15–30 minutes.",
      },
      {
        icon: "shield",
        title: "Verified MBBS Doctors",
        desc: "All doctors are qualified and experienced for home consultation in {city}.",
      },
      {
        icon: "users",
        title: "No Hospital Waiting",
        desc: "Avoid long hospital queues and crowded OPDs in {city}.",
      },
      {
        icon: "file",
        title: "Treatment & Advice",
        desc: "Clear treatment plan and medical advice after every visit.",
      },
      {
        icon: "phone",
        title: "24/7 Available",
        desc: "Doctor at home available day, night and weekends in {city}.",
      },
    ],
    idealFor: [
      "Elderly patients who find travel difficult",
      "Children who are unwell and need prompt care",
      "Working professionals with busy schedules",
      "Patients with non-emergency but urgent symptoms",
      "Patients needing home follow-up after surgery",
      "Anyone who prefers consultation at home",
    ],
    conditions: [
      "Fever, cold and flu treatment at home",
      "Blood pressure check and management",
      "Diabetes monitoring and sugar check",
      "Stomach infection and vomiting treatment",
      "Headache and body pain treatment",
      "Minor injuries and wound dressing",
      "Skin infection and allergy treatment",
      "General physician consultation at home",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. NURSE AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "nurse-at-home",
    name: "Nurse at Home",
    keyword: "nurse at home",
    treat: "Nurse",
    heroDesc:
      "Skip the hospital and medical clinics' rush. Get a certified nurse at your home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Certified RN & APRN nurses for post-surgery care, wound dressing & 24/7 home duty.",
    longDesc:
      "Skip the hospital rush. QuickHomeDoctor brings a qualified, background-verified nurse at your home in {city} fast, safe, and without the stress of city traffic. Whether you need wound dressing, catheter care, post-surgery nursing, vitals monitoring, bedridden patient care, or a full-time attendant — our licensed RN and APRN nurses are available day, night, and on weekends. Home nursing in {city} just got easier.",
    benefits: [
      "Licensed RN and APRN certified nurses",
      "15–30 minute arrival at your home in {city}",
      "Available 24/7 including weekends and holidays",
      "Post-surgery and post-hospitalisation nursing care",
      "Wound dressing, catheter care, and vitals monitoring",
      "Specialised elderly, bedridden, and child patient care",
    ],
    faqs: [
      {
        question: "How much does a nurse home visit cost in {city}?",
        answer:
          "The cost of a nurse home visit in {city} typically ranges depending on the type of service you want at home, duration , and care requirements. We give you an upfront and affordable price before confirming the booking",
      },
      {
        question: "Is the nurse home visit service available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need a doctor at home in Delhi at 3 AM, we're here",
      },
      {
        question: "Which areas in {city} do you cover?",
        answer:
          "Yes. We offer flexible packages — 8-hour day duty, 12-hour night duty, and 24-hour packages for continuous care.",
      },
      {
        question: "Do you provide nurses for bedridden or elderly patients?",
        answer:
          "Yes. We specialise in elderly care, bedridden patient nursing, and post-hospitalisation recovery at home.",
      },
      {
        question: "How quickly is a nurse assigned after booking?",
        answer:
          "A nurse is typically assigned and dispatched within 2 to 3 hours of booking confirmation.",
      },
      {
        question: "What is the charge for nurse at home service?",
        answer:
          "Nurse home visit charges start from ₹699 per visit. Day and night duty packages have separate rates — confirmed at booking.",
      },
    ],
    howItWorks: [
      "Call, WhatsApp, or Book Online",
      "Share Symptoms and Location",
      "Nurse Assigned Instantly",
      "Nurse at Your Home in 15–30 Mins",
    ],
    whyChoose: [
      {
        icon: "shield",
        title: "Verified RN & APRN Nurses",
        desc: "All our nurses are licensed, background-verified, and experienced in home health care services.",
      },
      {
        icon: "clock",
        title: "15–30 Min Arrival",
        desc: "Nurse at your Home faster than it takes to reach a hospital and clinic in {city} rush.",
      },
      {
        icon: "users",
        title: "Clear Care Notes",
        desc: "Every visit ends with clear care notes and follow-up guidance.",
      },
      {
        icon: "star",
        title: "No Waiting Rooms",
        desc: "No hospital queues, no crowded OPDs. Consultation with a doctor & nurse at home is easy with quickhomedoctor.",
      },
      {
        icon: "phone",
        title: "Available 24/7",
        desc: "Day, night, weekend — book a nurse at home in {city} anytime.",
      },
    ],
    idealFor: [
      "Elderly patients who find travel difficult",
      "Children needing regular care and monitoring",
      "Patients recovering from surgery or illness",
      "Bedridden patients needing daily nursing care",
      "Working professionals with packed schedules",
      "Anyone needing continuous medical support at home",
    ],
    conditions: [
      "Wound dressing and care",
      "Post-surgery nursing care",
      "Post-pregnancy care",
      "Catheter care",
      "Bedridden patient care",
      "Vital signs monitoring",
      "Post-visit care guidance",
      "Elderly care and monitoring",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. PHYSIOTHERAPY AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "physiotherapy-at-home",
    name: "Physiotherapy at Home",
    keyword: "physiotherapy at home",
    treat: "Physiotherapy",
    heroDesc:
      "Skip the Physiotherepy clinics' rush. Get a certified physiotherapist at your home for physiotherapy in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Certified physiotherapists for pain relief, post-surgery rehab & stroke recovery at home.",
    longDesc:
      "Skip the physiotherapy clinic rush. QuickHomeDoctor brings a certified, background-verified physiotherapist at your home in {city} — fast, safe, and without the exhausting commute. Whether you need post-surgery rehabilitation, back pain therapy, stroke and neurological recovery, sports injury rehab, or elderly mobility therapy — our licensed physiotherapists design personalised treatment plans and deliver sessions at your home. Home physiotherapy in {city} just got easier.",
    benefits: [
      "Certified and background-verified physiotherapists",
      "15–30 minute arrival at your home in {city}",
      "Available 24/7 including weekends and holidays",
      "Post-surgery and orthopaedic rehabilitation",
      "Stroke, neurological and paralysis physiotherapy",
      "Personalised therapy plans for chronic pain and elderly care",
    ],
    faqs: [
      {
        question: "What conditions can a home physiotherapist treat?",
        answer:
          "Back pain, neck pain, knee pain, shoulder pain, post-surgery recovery, fracture rehabilitation, stroke rehab, paralysis, Parkinson's disease management, and sports injuries.",
      },
      {
        question: "How many physiotherapy sessions will I need at home?",
        answer:
          "Our physiotherapist assesses your condition in the first session and recommends a personalised plan. Most patients need 10 to 20 sessions depending on the condition.",
      },
      {
        question: "Are home physiotherapists BPT or MPT qualified?",
        answer:
          "Yes. All our physiotherapists hold BPT or MPT degrees and are registered with the Indian Association of Physiotherapists.",
      },
      {
        question: "Do physiotherapists bring therapy equipment to home?",
        answer:
          "Yes. They bring TENS machines, ultrasound therapy units, resistance bands, exercise tools and any other equipment required for your treatment.",
      },
      {
        question: "What is the physiotherapy home visit charge?",
        answer:
          "Home physiotherapy sessions start from ₹799 per session. Package discounts available for 10 or 20 session bookings.",
      },
      {
        question: "Is home physiotherapy effective for post-surgery recovery?",
        answer:
          "Yes. Home physiotherapy is highly effective for knee replacement, hip replacement, spine surgery and fracture recovery. The physiotherapist monitors progress and adjusts the plan each session.",
      },
    ],
    howItWorks: [
      "Call, WhatsApp, or Book Online",
      "Share Symptoms and Location",
      "Physiotherapist Assigned Instantly",
      "Physiotherapist at Your Home in 15–30 Mins",
    ],
    whyChoose: [
      {
        icon: "shield",
        title: "Certified Physiotherapists",
        desc: "Trained and background-verified physiotherapists available at home in {city}.",
      },
      {
        icon: "clock",
        title: "15–30 Min Arrival",
        desc: "Physiotherapy at home faster than reaching a clinic in {city}.",
      },
      {
        icon: "users",
        title: "Post-Surgery & Stroke Rehab",
        desc: "Specialised physiotherapy for post-surgery recovery, stroke and paralysis patients.",
      },
      {
        icon: "star",
        title: "No Waiting Rooms",
        desc: "No clinic queues — personalised physiotherapy sessions right at your door.",
      },
      {
        icon: "phone",
        title: "Available 24/7",
        desc: "Day, night, weekend — book a physiotherapist at home in {city} anytime.",
      },
    ],
    idealFor: [
      "Patients recovering after surgery or injury",
      "Elderly patients needing regular therapy",
      "Stroke or paralysis patients requiring rehabilitation",
      "Patients with chronic pain conditions",
      "Working professionals with limited time",
      "Anyone looking for safe recovery at home",
    ],
    conditions: [
      "Post-surgery rehabilitation",
      "Back pain and neck pain therapy",
      "Sports injury rehabilitation",
      "Stroke and neurological physiotherapy",
      "Joint pain and arthritis management",
      "Post-fracture recovery",
      "Chronic pain and fibromyalgia management",
      "Elderly mobility and balance therapy",
      "Scoliosis and posture correction",
      "Muscle strengthening and flexibility exercises",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. X-RAY AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "xray-at-home",
    name: "X-Ray at Home",
    keyword: "X-ray at home",
    treat: "X-Ray",
    heroDesc:
      "Skip the hospitals' and medical clinics' rush. Get a certified MD, GP doctor & nurse at your home for X-Ray test at home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Portable digital X-ray at your doorstep. Reports within 2 hours.",
    longDesc:
      "QuickHomeDoctor provides portable digital X-ray services at home across Delhi NCR. Our trained radiography technicians bring hospital-grade portable X-ray machines to your doorstep. Ideal for bedridden patients, elderly patients, fracture cases and post-surgery monitoring. Digital reports are shared within 2 hours on WhatsApp and email. Radiologist interpretation available on request.",
    benefits: [
      "Hospital-grade portable digital X-ray machine",
      "Trained and certified radiography technicians",
      "Digital X-ray report within 2 hours",
      "Radiologist interpretation available",
      "Ideal for bedridden and immobile patients",
      "Chest, limb, spine and abdomen X-rays available",
    ],
    faqs: [
      {
        question: "How much does X-Ray at home cost in {city}?",
        answer:
          "The cost of X-Ray at home in {city} depends on the type of test and urgency. We provide transparent pricing before confirming the booking ",
      },
      {
        question: "Is the X-Ray service available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need an ECG at home in {city} at 3 AM, we're here.",
      },
      {
        question: "Is X-Ray at home accurate?",
        answer:
          "Yes. Our X-Ray tests are conducted using standard medical equipment and reviewed for accuracy",
      },
      {
        question: "Are the technicians qualified and verified?",
        answer:
          "Yes. Every technician is trained, certified, and background-verified before providing services.",
      },
      {
        question: "Do I need a doctor’s referral for X-Ray at home?",
        answer:
          "In most cases, a doctor’s recommendation is preferred, especially for diagnostic purposes.",
      },
      {
        question: "What is the charge for X-ray at home?",
        answer:
          "Home X-ray service starts from ₹699 per X-ray including visit and technician charges.",
      },
    ],
    howItWorks: [
      "Book X-Ray at Home",
      "Share Doctor’s Referral",
      "Technician Visits Home with Portable Machine",
      "Digital Report Delivered Online",
    ],

    whyChoose: [
      {
        icon: "clock",
        title: "15–30 Min Arrival",
        desc: "X-Ray test at home is faster than it takes to reach a hospital and clinic in {city} rush.",
      },
      {
        icon: "shield",
        title: "Certified & Experienced Technicians ",
        desc: "All our doctors & nurses are licensed, background-verified, and experienced for X-Ray test at home.",
      },
      {
        icon: "file",
        title: "No Waiting Rooms",
        desc: "No hospital queues, no crowded OPDs. Get a X-Ray test at home comfortably.",
      },
      {
        icon: "users",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a one phone call and inquiry away. ",
      },
      {
        icon: "phone",
        title: "Standard Reporting",
        desc: "Every X-Ray test is performed using standard equipment with proper reporting.",
      },
    ],
    idealFor: [
      "Patients with fractures or injuries",
      "Elderly patients who cannot travel easily",
      "Bedridden patients",
      "Post-surgery monitoring",
      "Patients advised X-ray by a doctor",
      "Anyone needing quick imaging at home",
    ],
    conditions: [
      "Chest X-ray at home",
      "Limb X-rays (hand, leg, arm, foot)",
      "Spine X-ray at home",
      "Joint X-ray",
      "Bedridden patient X-ray",
      "Injury and fracture assessment",
      "Post-surgery follow-up X-rays",
      "Doctor-reviewed X-ray reports",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. ELDERLY CARE AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "elderly-care-at-home",
    name: "Elderly Care at Home",
    keyword: "elderly care at home",
    treat: "Elderly Care",
    heroDesc:"Skip the hospital's and medical clinics' rush. Get a certified Elderly caretaker at your home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Police-verified caregivers for senior citizens — 24/7 personalised support.",
    longDesc:
      "QuickHomeDoctor provides dedicated and police-verified caregivers for elderly patients at home across Delhi NCR. Our trained attendants assist with daily activities, personal hygiene, daily routine reminders, mobility assistance, and companionship. Give your parents and elderly family members the professional care they deserve — in the comfort of their own home.",
    benefits: [
      "Police-verified and reference-checked caregivers",
      "Personal hygiene and daily activity assistance",
      "Daily routine and care schedule reminders",
      "Companionship and emotional support",
      "Mobility assistance and fall prevention",
      "Flexible 4-hour, 8-hour and 12-hour packages",
    ],
    faqs: [
      {
        question: "How much does elderly caretaker at home cost in {city}?",
        answer:
          "The cost depends on the duration (12-hour/24-hour), level of care, and patient condition. We provide transparent pricing before confirming the booking.",
      },
      {
        question: "Is elderly care service available 24 hours?",
        answer:
          "Yes. Our service is available 24/7 with both day and night support options.",
      },

      {
        question: "What tasks can an elderly caretaker handle at home?",
        answer:
          "Caretakers assist with daily activities like hygiene, feeding, mobility, and basic patient support but do not perform medical procedures.",
      },
      {
        question: "Are the caretakers trained and verified?",
        answer:
          "Every elderly caretaker on our platform is qualified with years of experience. We conduct background verification, credential checks, and performance reviews before onboarding any caretaker.",
      },

      {
        question: "Can I book a caretaker for elderly patients?",
        answer:
          "Absolutely. Our caretaker services are widely used for elderly care and long-term home support.",
      },
      {
        question: "Can I book long-term elderly care?",
        answer:
          "Yes. We provide both short-term and long-term elderly care services based on your needs.",
      },
    ],
    howItWorks: [
      "Call, WhatsApp, or Book Online",
      "Share Requirement and Location",
      "Caretaker Assigned Instantly",
      "Caretaker at Your Home in 15 - 30 mins",
    ],
    conditions: [
      "Senior citizens needing daily assistance",
      "Bedridden elderly patients",
      "Patients recovering after hospital discharge",
      "Families needing full-time or part-time support",
      "Working professionals managing elderly care",
      "Anyone wanting safe and reliable senior care at home",
    ],
    whyChoose: [
      {
        icon: "users",
        title: "15–30 Min Arrival",
        desc: "Elderly care at your Home faster than it takes to reach a hospital and clinic in {city} rush. ",
      },
      {
        icon: "shield",
        title: "Verified Elderly Caretakers ",
        desc: "All our caretakers are licensed, background-verified, and experienced in home health care services.",
      },
      {
        icon: "clock",
        title: "No Hospital Dependency",
        desc: "Getting caretaker at home is easy with quickhomedoctor.",
      },
      {
        icon: "star",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a phone call and inquiry away.",
      },
      {
        icon: "phone",
        title: "Compassionate Senior Care",
        desc: "Every caretaker provides respectful, patient-focused, and attentive elderly support.",
      },
    ],
    idealFor: [
      "Senior citizens needing daily assistance",
      "Bedridden elderly patients",
      "Patients recovering after hospital discharge",
      "Families needing full-time or part-time support",
      "Working professionals managing elderly care",
      "Anyone wanting safe and reliable senior care at home",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. ECG AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "ecg-at-home",
    name: "ECG at Home",
    treat: "ECG",
    heroDesc: "Skip the hospitals' and medical clinics' rush. Get a certified MD, GP doctor & certified nurse at your home for ECG test at home in {city} fast, safe, and without the stress of {trafficNote}.",
    keyword: "ECG at home",
    shortDesc:
      "12-lead digital ECG at home. Digital report within 2 hours. Starting ₹399.",
    longDesc:
      "QuickHomeDoctor provides portable 12-lead ECG testing at home across Delhi NCR by trained cardiac technicians. Our digital ECG machines deliver the same accuracy as hospital ECG departments. Reports are shared within 1 to 2 hours on WhatsApp and email. Ideal for elderly patients, bedridden patients, heart patients advised bed rest, and anyone wanting to avoid hospital queues.",
    benefits: [
      "Portable hospital-grade 12-lead digital ECG machine",
      "Trained and experienced cardiac technicians",
      "Digital ECG report within 1 to 2 hours",
      "Cardiologist interpretation available on request",
      "Full ECG procedure in under 30 minutes",
      "Ideal for elderly, bedridden and heart patients",
    ],
    faqs: [
      {
        question: "How much does ECG at home cost in {city}?",
        answer:
          "The cost of ECG at home in {city} depends on the type of test and urgency. We provide transparent pricing before confirming the booking.",
      },
      {
        question: "Is the ECG service available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need an ECG at home in {city} at 3 AM, we're here.",
      },
  
      {
        question: "Is ECG at home accurate?",
        answer:
          "Yes. Our ECG tests are conducted using standard medical equipment and reviewed for accuracy.",
      },
      {
        question: "Are the technicians qualified and verified?",
        answer:
          "Yes. Every technician is trained, certified, and background-verified before providing services.",
      },
    
      {
        question: "Do I need a doctor's referral for ECG at home?",
        answer:
          "In most cases, a doctor's recommendation is preferred, especially for diagnostic purposes.",
      },
      {
        question: "Can ECG detect heart problems?",
        answer:
          "Yes. ECG helps detect irregular heart rhythms, heart attacks, and other cardiac conditions, but further tests may be required for complete diagnosis.",
      },
    ],
    conditions: [
      "12-lead ECG test at home",
      "Routine heart check-up ECG",
      "Emergency ECG monitoring",
      "Pre-surgery ECG evaluation",
      "ECG for chest pain or discomfort",
      "ECG for elderly heart monitoring",
      "Follow-up ECG tests",
      "Doctor-reviewed ECG reports",
    ],
    howItWorks: [
      "Call, WhatsApp, or Book Online",
      "Share Symptoms and Location",
      "Doctor & Nurse Assigned Instantly",
      "Doctor & Nurse at Your Home in 15 - 30 mins",
    ],

    whyChoose: [
      {
        icon: "clock",
        title: "15–30 Min Arrival",
        desc: "ECG test at home is faster than it takes to reach a hospital and clinic in {city} rush.",
      },
      {
        icon: "shield",
        title: "Certified & Experienced Technicians ",
        desc: "All our doctors & nurses are licensed, background-verified, and experienced for ECG test at home.",
      },
      {
        icon: "file",
        title: "No Waiting Rooms",
        desc: "No hospital queues, no crowded OPDs. Get an ECG test at home comfortably.",
      },
      {
        icon: "users",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a one phone call and inquiry away. ",
      },
      {
        icon: "phone",
        title: "Standard Reporting",
        desc: "Every ECG test is performed using standard equipment with proper reporting.",
      },
    ],
    idealFor: [
      "Patients with heart-related symptoms",
      "Elderly patients who need regular monitoring",
      "Patients advised ECG by a doctor",
      "Post-hospital discharge follow-ups",
      "Working professionals who prefer convenience",
      "Anyone needing quick heart check at home",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. Lab TEST AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "lab-test-at-home",
    name: "Lab Test at Home",
    keyword: "Lab test at home",
    heroDesc:
      "Skip the hospitals' and medical clinics' rush. Get a certified MD, GP doctor & certified nurse at your home for Lab test at home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Doorstep blood sample collection. NABL lab. Digital reports in 24 hours.",
    longDesc:
      "QuickHomeDoctor provides doorstep blood sample collection services across Delhi NCR. Our certified phlebotomists collect your blood sample at home using sterilized equipment and send it to NABL-accredited laboratories for processing. Get accurate digital reports within 24 hours directly on WhatsApp and email. 100+ tests available including CBC, sugar, thyroid, lipid profile, liver function, kidney function, vitamin D, B12 and full body health packages.",
    benefits: [
      "Certified phlebotomists for safe sample collection",
      "NABL-accredited laboratory processing",
      "100+ blood tests and health packages available",
      "Digital reports on WhatsApp and email in 24 hours",
      "Fasting and non-fasting collection both available",
      "Home collection starts from ₹50",
    ],
    conditions: [
      "Blood tests (CBC, sugar, thyroid, etc.",
      "Urine tests",
      "Liver function tests (LFT)",
      "Kidney function tests (KFT)",
      "Kidney function test at home",
      "Vitamin deficiency tests",
      "Full body checkups",
      "Infection and fever panels",
    ],
    faqs: [
      {
        question: "How much does Lab test at home cost in {city}?",
        answer:
          "The cost of Lab test at home in {city} depends on the type of test and urgency. We provide transparent pricing before confirming the booking.",
      },
      {
        question: "Is the Lab test service available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need Lab test at home in {city} at 3 AM, we're here.",
      },
      {
        question: "Which areas in {city} do you cover?",
        answer:
          "Yes. All blood samples are processed in NABL-accredited and ISO-certified laboratories to ensure accurate results.",
      },
      {
        question: "Is Lab test at home accurate?",
        answer:
          "Yes. Our Lab tests are conducted using standard medical equipment and reviewed for accuracy",
      },
      {
        question: "Are the Phlebotomist qualified and verified?",
        answer:
          "Yes. Every phlebotomist is trained, certified, and background-verified before providing services.",
      },
      {
        question: "Do I need a doctor’s referral for a lab test at home?",
        answer:
          "In most cases, a doctor’s recommendation is preferred, especially for diagnostic purposes.",
      },
    ],
    howItWorks: [
      "Book Blood Test at Home",
      "Select Test or Health Package",
      "Sample Collected at Home",
      "Reports Delivered Online",
    ],

    whyChoose: [
      {
        icon: "shield",
        title: "15–30 Min Arrival",
        desc: "Lab test at home is faster than it takes to reach a hospital and clinic in {city} rush.",
      },
      {
        icon: "clock",
        title: "Certified & Experienced Technicians",
        desc: "All our doctors & nurses are licensed, background-verified, and experienced for Lab test at home.",
      },
      {
        icon: "file",
        title: "No Waiting Rooms",
        desc: "No hospital queues, no crowded OPDs. Get a Lab test at home comfortably.",
      },
      {
        icon: "users",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a one phone call and inquiry away.",
      },
      {
        icon: "phone",
        title: "Standard Reporting",
        desc: "Every Lab test is performed using standard equipment with proper reporting",
      },
    ],
    treat: "Lab Test",
    idealFor: [
      "Patients requiring regular blood tests",
      "Elderly patients who cannot travel",
      "Working professionals with busy schedules",
      "Routine blood tests at home",
      "Patients needing routine health checkups",
      "Post-treatment monitoring",
      "Anyone looking for convenient diagnostics at home",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. MEDICAL EQUIPMENT AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "medical-equipment-at-home",
    name: "Medical Equipment at Home",
    treat: "Medical Equipment",
    heroDesc:
      "Skip the hospitals' and medical clinics' rush. Get a certified MD, GP doctor & certified nurse at your home for medical equipment at home in {city} fast, safe, and without the stress of {trafficNote}.",
    keyword: "medical equipment on rent at home",
    shortDesc:
      "Oxygen concentrator, hospital bed, wheelchair & equipment rental at home.",
    longDesc:
      "QuickHomeDoctor provides medical equipment rental and setup at home across Delhi NCR. Whether you need an oxygen concentrator, hospital bed, wheelchair, walker, suction machine, BIPAP, CPAP or nebulizer — we deliver, install and demonstrate all equipment at your home. Ideal for post-hospitalisation recovery, elderly patients, and patients with chronic illness needing long-term home care equipment.",
    benefits: [
      "Oxygen concentrator and cylinder delivery at home",
      "Hospital bed and fowler bed rental",
      "Wheelchair, walker and mobility aid rental",
      "BIPAP, CPAP and nebulizer on rent",
      "Suction machine and infusion pump rental",
      "Equipment delivered, installed and demonstrated at home",
    ],
    conditions: [
      "Oxygen concentrator and cylinders",
      "Hospital beds (manual & electric)",
      "Wheelchairs and walkers",
      "BiPAP and CPAP machines",
      "Suction machines",
      "Patient monitors",
      "Infusion and IV pumps",
      "Nebulizers",
    ],
    faqs: [
      {
        question: "How much does medical equipment at home cost in {city}?",
        answer:
          "The cost of medical equipment at home in {city} depends on the equipment, duration, and level of care required.. We provide transparent pricing before confirming the booking ",
      },
      {
        question: "Is equipment delivery available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need an ICU setup at home in {city} at 3 AM, we're here",
      },
      {
        question: "Do you provide setup and guidance?",
        answer:
          "Yes. Our team installs the equipment and explains proper usage for safe operation.",
      },
      {
        question: "How quickly will equipment be delivered in {city}?",
        answer:
          "You just have to call and book the equipment our team will be delivered equipments under 15-30 minutes.",
      },
      {
        question: "What is the charge for oxygen concentrator on rent at home?",
        answer:
          "Oxygen concentrator rental starts from ₹500 per day or ₹8,000 per month depending on the model and flow rate required.",
      },
      {
        question:
          "What if the equipment needs repair or replacement during rental?",
        answer:
          "We provide free replacement or repair for any equipment fault during the rental period. Technical support is available 24/7.",
      },
    ],
    howItWorks: [
      "Select Equipment on Rent",
      "Book Online or Call",
      "Equipment Delivered and Installed",
      "Support Available 24/7",
    ],

    whyChoose: [
      {
        icon: "clock",
        title: "15–30 Min Arrival",
        desc: "Medical Equipment at home is faster than it takes to reach a hospital and clinic in {city} rush",
      },
      {
        icon: "shield",
        title: "Certified & Quality Equipment",
        desc: "All equipment is well-maintained, sanitized, and tested for safe home use.",
      },
      {
        icon: "users",
        title: "No Waiting Rooms",
        desc: "Avoid repeated hospital visits for basic equipment needs. Get everything at home.",
      },
      {
        icon: "star",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a one phone call and inquiry away.",
      },
      {
        icon: "phone",
        title: "Complete Setup & Support",
        desc: "Our team delivers, installs, and explains how to use the equipment properly.",
      },
    ],
    idealFor: [
      "Patients recovering at home",
      "Elderly patients needing support equipment",
      "Post-surgery care at home",
      "Patients requiring long-term oxygen support",
      "ICU setup at home",
      "Anyone needing reliable medical equipment quickly",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. CARETAKER AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "caretaker-at-home",
    name: "Caretaker at Home",
    keyword: "caretaker at home",
    treat: "Caretaker",
    heroDesc: "Skip the hospital's and medical clinics' rush. Get a certified caretaker at your home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "24/7 trained home caretaker for post-surgery recovery and daily patient support.",
    longDesc:
      "QuickHomeDoctor provides trained, police-verified caretakers and patient attendants for home care across Delhi NCR. Our caretakers assist patients during post-surgery recovery, illness, and long-term conditions. They help with personal hygiene, feeding, mobility, daily routine reminders, and round-the-clock monitoring. Flexible day duty, night duty and full-time live-in caretaker options available.",
    benefits: [
      "Police-verified and trained patient caretakers",
      "Post-surgery and post-hospitalisation recovery support",
      "Personal hygiene, feeding and mobility assistance",
      "Daily routine and care schedule reminders",
      "Day duty, night duty and live-in caretaker options",
      "Affordable daily and monthly packages",
    ],
    conditions: [
      "Elderly care and companionship",
      "Bedridden patient care",
      "Personal hygiene and grooming support",
      "Mobility and walking assistance",
      "Feeding and daily routine support",
      "Post-hospitalization care",
      "Daily routine reminders",
      "Basic patient monitoring",
    ],
    faqs: [
      {
        question: "How much does a caretaker home visit cost in {city}?",
        answer:
          "The cost of a caretaker home visit in {city} typically ranges depending on the type of service you want at home, duration, and care requirements. We give you an upfront and affordable price before confirming the booking.",
      },
      {
        question: "Is the caretaker at home visit service available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need a caretaker at home in {city} at 3 AM, we're here.",
      },
      {
        question: "What tasks can a caretaker handle at home?",
        answer:
          "Caretakers assist with daily activities like hygiene, feeding, mobility, and basic patient support but do not perform medical procedures.",
      },
      {
        question: "Are the caretakers trained and verified?",
        answer:
          "Every caretaker on our platform is qualified with years of experience. We conduct background verification, credential checks, and performance reviews before onboarding any caretaker.",
      },
      {
        question: "Can I book a caretaker for elderly patients?",
        answer:
          "Absolutely. Our caretaker services are widely used for elderly care and long-term home support.",
      },
      {
        question: "Is full-time caretaker service available?",
        answer:
          "Yes. We provide both part-time and full-time (12-hour and 24-hour) caretaker services based on your needs.",
      },
    ],
    howItWorks: [
      "Call, WhatsApp, or Book Online",
      "Share Requirement and Location",
      "Caretaker Assigned Instantly",
      "Caretaker at Your Home in 15 - 30 mins",
    ],

    whyChoose: [
      {
        icon: "users",
        title: "15–30 Min Arrival",
        desc: "Caretaker at your Home faster than it takes to reach a hospital and clinic in {city} rush.",
      },
      {
        icon: "shield",
        title: "Verified Caretakers",
        desc: "All our caretakers are licensed, background-verified, and experienced in home health care services.",
      },
      {
        icon: "clock",
        title: "No Waiting Rooms",
        desc: "Getting caretaker at home is easy with quickhomedoctor.",
      },
      {
        icon: "star",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a phone call and inquiry away.",
      },
      {
        icon: "phone",
        title: "Clear Care Notes",
        desc: "Every visit ends with clear care notes and follow-up guidance.",
      },
    ],
    idealFor: [
      "Elderly patients needing daily support",
      "Bedridden or mobility-restricted patients",
      "Patients recovering after hospital discharge",
      "Families needing full-time or part-time assistance",
      "Working professionals managing patient care",
      "Anyone needing reliable home care support",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. ICU AT HOME Done
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "icu-at-home",
    name: "ICU Setup at Home",
    keyword: "ICU at home",
    treat: "ICU at Home",
    heroDesc: "Skip the hospitals' and medical clinics' rush. Get a certified MD, GP doctor & certified nurse at your home for ICU setup at home in {city} fast, safe, and without the stress of {trafficNote}.",
    shortDesc:
      "Hospital-grade ICU setup at home for critical care. 24/7 medical team.",
    longDesc:
      "QuickHomeDoctor provides complete hospital-grade ICU setup at home for critically ill patients across Delhi NCR. We bring ventilators, cardiac monitors, infusion pumps, oxygen concentrators, suction machines and a dedicated ICU-trained doctor and nurse team to your home. Ideal for stable critical patients requiring continuous monitoring and medical care — at a significantly lower cost than hospital ICU.",
    benefits: [
      "Complete hospital-grade ICU equipment setup at home",
      "24/7 dedicated ICU-trained doctor and nurse team",
      "Ventilator, oxygen and BIPAP support",
      "Continuous cardiac and vitals monitoring",
      "Infusion pump and IV fluid monitoring",
      "30 to 50 percent cost saving vs hospital ICU",
    ],
    conditions: [
      "Ventilator support at home",
      "Cardiac monitor setup",
      "Oxygen concentrator and cylinder support",
      "Suction machine setup",
      "Infusion pumps and IV pumps",
      "24/7 critical care nursing",
      "Doctor on-call support",
      "Emergency response coordination",
    ],
    faqs: [
      {
        question: "How much does ICU setup at home cost in {city}?",
        answer:
          "The cost of ICU setup at home in {city} depends on the equipment, duration, and level of care required. We provide transparent pricing before confirming the booking.",
      },
      {
        question: "Is the ICU setup service available 24 hours?",
        answer:
          "Yes. Our service is available 24 hours a day, 7 days a week, including public holidays and late nights. If you need an ICU setup at home in {city} at 3 AM, we're here.",
      },
      {
        question: "Is ICU setup at home safe?",
        answer:
          "Yes. With proper equipment, trained staff, and medical supervision, ICU care at home is safe for selected patients.",
      },
      {
        question: "Do you provide ventilator support at home?",
        answer:
          "Yes. We provide ventilator setup along with trained staff for continuous monitoring.",
      },
      {
        question: "Will a doctor be available during ICU care at home?",
        answer:
          "Yes. Doctor support is available on-call and for regular monitoring depending on patient needs.",
      },
      {
        question: "Can ICU patients be shifted to home care?",
        answer:
          "Yes. Many stable ICU patients can be shifted to home ICU setup with proper medical guidance and support.",
      },
    ],
    howItWorks: [
      "Call, WhatsApp, or Book Online",
      "Share Symptoms and Location",
      "ICU Team Assigned Instantly",
      "Doctor & Nurse at Your Home in 15 - 30 mins",
    ],

    whyChoose: [
      {
        icon: "shield",
        title: "15–30 Min Arrival",
        desc: "ICU setup at home is faster than it takes to reach a hospital and clinic in {city} rush.",
      },
      {
        icon: "users",
        title: "Certified & Experienced Medical Team ",
        desc: "All our doctors & nurses are licensed, background-verified, and experienced for ICU setup at home.",
      },
      {
        icon: "clock",
        title: "No Waiting Rooms",
        desc: "No hospital queues, no crowded OPDs. Get an ICU setup at home comfortably.",
      },
      {
        icon: "star",
        title: "Available 24/7",
        desc: "Day, night, and weekend, we're always available just a one phone call and inquiry away.",
      },
      {
        icon: "phone",
        title: "Advance Equipment support",
        desc: "Complete ICU setup with ventilator, monitors, oxygen support, and required medical devices.",
      },
    ],
    idealFor: [
      "Critically ill patients requiring continuous monitoring",
      "Patients shifted from hospital ICU to home care",
      "Elderly patients needing intensive support",
      "Post-surgery critical care patients",
      "Patients requiring ventilator or oxygen support",
      "Families looking for hospital-level care at home",
    ],
  },
];
