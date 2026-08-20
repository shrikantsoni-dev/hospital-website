"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Quote, Star } from "lucide-react";

export default function AboutSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const services = [
        "Home Hospitalization",
        "Home care services",
        "Critical Care/Specialized Services",
        "Diagnostics & Monitoring",
        "Other Services",
        "ICU-Level Care at Home",
        "Diagnostic Services (ECG, X-Ray, Blood Tests)",
        "Skilled Nursing Care",
        "Nursing & Home Care Support",
        "Ambulance Assistance",
        "Post-Surgery Recovery Support",
    ];

    const reviews = [
        "My dad suddenly started vomiting and feeling weak. I called QuickHomeDoctor—they immediately sent a female doctor home. It was life-saving. Must recommend in Noida.",
        "Very good service! They set up the bed at home and took care of my mom for 10 days. She recovered well. Really thankful!",
        "I met with an accident and doctor suggested physiotherapy. Traveling was painful, so I hired QuickHomeDoctor’s physiotherapist. He came daily and was excellent.",
        "Most required service! Hard to find a good home doctor who charges less and still gives clinic-level treatment.",
        "My sister Anjali is on bed rest; we found QuickHomeDoctor and now the doctor visits weekly. She is recovering rapidly. Great job guys!",
    ];

    /* ---------------------------------------------------
       AUTO SLIDE CAROUSEL LOGIC
    --------------------------------------------------- */
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length);
        }, 3000); // 3 sec
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/2.png"
                    alt="About QuickHomeDoctor"
                    fill
                    quality={70}
                    className="brightness-[0.55] object-cover"
                />

                <div className="absolute inset-0 bg-black/40 z-[1]"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-[2] text-center px-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow">
                        ABOUT US
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white/90 drop-shadow">
                        QuickHomeDoctor – Expert Doctor at your home in just 15 mins
                    </p>
                </motion.div>
            </section>

            {/* ABOUT US BODY */}
            <section className="py-10 mt-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        className="text-gray-700 leading-relaxed"
                    >
                        <h2 className="text-4xl font-extrabold text-[#0a6664]">ABOUT US</h2>

                        <p className="mt-4">
                            Expert Care at your home with QuickHomeDoctor – Expert Doctor at
                            your home in just 15 mins. We bring quality healthcare to your
                            doorstep with certified doctors and nurses.
                        </p>

                        <p className="mt-3">
                            QuickHomeDoctor fills the gap of home treatment by providing
                            essential care, advanced medical support, and 24/7 healthcare
                            assistance—always with safety and compassion.
                        </p>

                        <h3 className="text-xl font-bold text-[#0a6664] mt-6">
                            What We Offer
                        </h3>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle size={22} className="text-[#d76c24]" />
                                    <span>{service}</span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="mt-6">
                            Every service is delivered with expertise and clinical precision
                            because your health matters the most to us.
                        </p>
                    </motion.div>
                </div>

                {/* MISSION */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    className="max-w-6xl mx-auto text-center mt-20 px-6"
                >
                    <h2 className="text-4xl font-extrabold text-[#0a6664]">
                        OUR MISSION
                    </h2>

                    <p className="mt-5">
                        Our mission is simple — To provide hospital-level care at home with
                        comfort, trust, and medical excellence.
                    </p>

                    <p className="mt-3">
                        We aim to bring transparency, compassion, and high-quality medical
                        care to your doorstep.
                    </p>
                </motion.div>

                {/* --------------------------------------
                    PATIENT REVIEWS — CAROUSEL
                --------------------------------------- */}
                <div className="max-w-4xl mx-auto mt-20 px-6 text-center relative">

                    <h2 className="text-3xl font-extrabold text-[#0a6664] mb-10">
                        What our Patients say about QuickHomeDoctor
                    </h2>

                    {/* ARROWS */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hidden md:block"
                    >
                        ◀
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hidden md:block"
                    >
                        ▶
                    </button>

                    {/* SLIDER */}
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#f8fdfd] p-7 rounded-2xl shadow-xl border border-gray-200 min-h-[200px]"
                    >
                        <Quote size={28} className="text-[#0a6664] mx-auto" />

                        <p className="mt-4 text-gray-800 text-lg leading-relaxed">
                            {reviews[current]}
                        </p>

                        <div className="flex justify-center gap-1 mt-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={20} className="text-yellow-500" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
