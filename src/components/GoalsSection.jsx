"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import { GiStethoscope } from "react-icons/gi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

function Counter({ end, started }) {
  const [count, setCount] = useState(0);
  const frame = useRef(null);
  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
      else setCount(end);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [started, end]);
  return <span>{count.toLocaleString("en-IN")}</span>;
}

// ── Per-service stat configs ──────────────────────────────────
const SERVICE_STATS = {
  "nurse-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserNurse size={40} />,                number: 40,   suffix: "+", label: "Certified Nurses" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "physiotherapy-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <GiStethoscope size={40} />,              number: 20,   suffix: "+", label: "Certified Physiotherapists" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "lab-test-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "medical-equipment-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "xray-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "caretaker-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "ecg-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "elderly-care-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  "icu-at-home": [
    { icon: <FaUsers size={40} />,                   number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <MdOutlineAccessTimeFilled size={40} />,  number: 15,   suffix: " Mins", label: "ETA at Home" },
    { icon: <FaUserDoctor size={40} />,               number: 20,   suffix: "+", label: "Certified Doctor & Nurse" },
    { icon: <FaHeartbeat size={40} />,                number: 24,   suffix: "/7", label: "Available" },
  ],
  // default — homepage wala
  default: [
    { icon: <FaUsers size={40} />,       number: 6000, suffix: "+", label: "Happy Patients" },
    { icon: <FaUserDoctor size={40} />,  number: 20,   suffix: "+", label: "Expert Doctors" },
    { icon: <RiHomeHeartFill size={40} />, number: 2100, suffix: "+", label: "Home Visits" },
    { icon: <FaHeartbeat size={40} />,   number: 11,   suffix: "+", label: "Medical Services" },
  ],
};

export default function GoalsSection({ service }) {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = SERVICE_STATS[service?.slug] ?? SERVICE_STATS.default;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-fixed bg-center bg-cover"
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[5px]" />
      <div className="relative max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 border-2 border-[#0f706b] rounded-lg flex items-center justify-center bg-white/60 shadow-md">
              <span className="text-[#0f706b]">{item.icon}</span>
            </div>
            <h3 className="text-4xl mt-5 font-extrabold text-[#212121] tabular-nums">
              <Counter end={item.number} started={started} />
              {item.suffix}
            </h3>
            <p className="text-gray-900 text-xl font-extrabold mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}