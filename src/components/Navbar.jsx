"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); 
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "/about" },
    {
      name: "Locations",
      type: "locations",
      subItems: [
        { name: "Delhi", href: "/delhi" },
        { name: "New Delhi", href: "/new-delhi" },
        { name: "Gurgaon", href: "/gurgaon" },
        { name: "Noida", href: "/noida" },
        { name: "Ghaziabad", href: "/ghaziabad" },
      ],
    },
    {
      name: "Services",
      type: "services",
      subItems: [
        { name: "Doctor at Home", href: "/delhi/doctor-at-home" },
        { name: "Nurse at Home", href: "/delhi/nurse-at-home" },
        { name: "Physiotherapy at Home", href: "/delhi/physiotherapy-at-home" },
        { name: "X-Ray at Home", href: "/delhi/xray-at-home" },
        { name: "Elderly Care at Home", href: "/delhi/elderly-care-at-home" },
        { name: "ECG at Home", href: "/delhi/ecg-at-home" },
        { name: "Lab Test at Home", href: "/delhi/lab-test-at-home" },
        { name: "Medical Equipment", href: "/delhi/medical-equipment-at-home" },
        { name: "Caretaker at Home", href: "/delhi/caretaker-at-home" },
        { name: "ICU Setup at Home", href: "/delhi/icu-at-home" },
      ],
    },
    { name: "Our Doctors", href: "/our-doctors" },
    // { name: "Privacy & Policy", href: "/privacy-policy" },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const subMenuVariants = {
    closed: { opacity: 0, y: -8, height: 0, transition: { duration: 0.25 } },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <>
      <AnnouncementBar />
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 ease-out border-b",
          isScrolled
            ? "top-8 sm:top-10 md:top-12 bg-white/80 backdrop-blur-md shadow-sm border-gray-200/60"
            : "top-8 sm:top-10 md:top-12 bg-white border-gray-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative mr-2 mt-2 w-[50px] h-[50px] rounded sm:w-11 sm:h-11 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md border border-gray-100"
              >
                <img
                  src="/logo12.png"
                  className="w-[90px] h-[80px] object-contain"
                  alt="QuickHomeDoctor Logo"
                />
              </motion.div>
              <div>
                <h2 className="text-gray-900 text-xl font-bold sm:text-2xl leading-tight">
                  QuickHomeDoctor
                </h2>
                <p className="text-gray-500 font-medium text-[8px] sm:text-[10px] md:text-xs leading-tight">
                  Expert doctor at home in 15 min
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <button className="flex font-semibold items-center gap-1 px-4 py-3 text-gray-700 hover:text-gray-900 transition">
                        {item.name}
                        <ChevronDown className="w-4 h-4 mt-[2px] group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Desktop Dropdown */}
                      <div className="absolute top-full left-0 font-semibold w-52 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                        <div className="p-2">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:bg-blue-50 rounded-lg transition text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-3 font-semibold text-gray-700 hover:text-gray-900 transition"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            {/* RIGHT SIDE — CTA BUTTONS (Desktop) */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Call Now */}
              <a
                href="tel:+917303771900"
                className="flex items-center gap-2 px-4 py-2.5 text-[#064E53] font-semibold border border-gray-200 rounded-xl transition text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              {/* Book Now */}
              <Link
                href="/contact-us"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#C26418] text-white font-semibold rounded-xl hover:bg-[#c26518ed] transition text-sm shadow-md shadow-blue-200"
              >
                Book Doctor Now
              </Link>
            </div>
            {/* MOBILE RIGHT SIDE — Call icon + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Call icon — mobile pe sirf icon dikhega */}
              <a
                href="tel:+917303771900"
                className="flex items-center justify-center w-9 h-9 bg-brand-secondary text-white rounded-lg"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          className="overflow-hidden lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-3 py-2 space-y-1"
        >
          {navItems.map((item) => {
 const isOpen =
 item.type === "locations"
   ? isLocationsOpen
   : item.type === "services"
   ? isServicesOpen
   : false;
            return (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => {
                        if (item.type === "locations")
                          setIsLocationsOpen(!isLocationsOpen);
                        if (item.type === "services") 
                          setIsServicesOpen(!isServicesOpen);
                      }}
                      className="w-full flex items-center justify-between px-3 py-3 text-gray-700 font-medium text-base"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      variants={subMenuVariants}
                      className="overflow-hidden pl-4 border-l-2 border-blue-100 space-y-1 ml-3"
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-2 px-2 py-2.5 text-gray-500  text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 text-gray-700 font-medium hover:text-gray-900 text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile — Book Now button at bottom of menu */}
          <div className="pt-2 pb-3 px-3">
            <a
              href="tel:+917303771900"
              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-secondary text-white font-semibold rounded-xl text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4" />
              Book Home Visit — +91 73037 71900
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
