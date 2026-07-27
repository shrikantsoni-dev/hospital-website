"use client";
import { motion, AnimatePresence } from "framer-motion";

const heroImage = {
  url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yJTIwYW5kJTIwbnVyc2V8ZW58MHx8MHx8fDA%3D",
  alt: "Nurse taking care of elderly patient",
};

export default function Hero({ cityName = "Delhi" }) {
  return (
    <section
      className="relative mt-[90px] w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ====== BACKGROUND CAROUSEL ====== */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Regular img tag — full cover on all screen sizes */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage.url}
              alt={heroImage.alt}
              className="w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.52)",
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Extra dark overlay for text readability */}
        <div className="absolute" />
      </div>

      {/* ====== MAIN CONTENT ====== */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-24 text-center">
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px] font-extrabold leading-tight mb-6 text-white drop-shadow-lg"
        >
          Expert Certified MD & GP Doctor & Nurse at home
          <br />
          <span className="text-white">IN </span>
          <span className="text-gray-200 text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-extrabold leading-tight drop-shadow-lg">
            {cityName.toUpperCase()}
          </span>
        </motion.h1>

        {/* BULLET POINTS */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="space-y-2 text-base sm:text-lg md:text-xl text-gray-100 mb-10"
        >
          {/* {[
            "Certified GP & MD doctors serving Delhi",
            "Delhi NCR, Noida, Gurgaon & Ghaziabad.",
            "No waiting rooms. No queues. Just real medical care at home",
          ].map((point, i) => (
            <li
              key={i}
              className="flex gap-3 items-center justify-center font-bold drop-shadow"
            >
              <span className="text-[#C26418] text-lg">●</span>
              {point}
            </li>
          ))} */}
          <p className="flex gap-3 items-center justify-center font-bold drop-shadow">
            Certified GP & MD doctors serving Delhi, Delhi NCR, Noida, Gurgaon &<br></br>
            Ghaziabad. No waiting rooms. No queues. Just real medical care at
            home.
          </p>
        </motion.ul>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-row gap-3 justify-center"
        >
          <a
            href="tel:+917303771900"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-[#064E53] text-white font-bold rounded-xl shadow-2xl text-sm sm:text-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/917303771900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border-2 border-white/50 text-white font-bold rounded-xl shadow-2xl text-sm sm:text-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            WhatsApp Us
          </a>
        </motion.div>

        {/* PHONE NUMBER SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-6 text-white/60 text-sm drop-shadow"
        >
          Or call directly:{" "}
          <a
            href="tel:+917303771900"
            className="text-white/90 font-semibold underline underline-offset-2 hover:text-white"
          >
            +91 7303771900
          </a>{" "}
          · We respond immediately
        </motion.p>
      </div>
    </section>
  );
}
