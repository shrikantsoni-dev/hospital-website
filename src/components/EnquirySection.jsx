"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, PUBLIC_KEY, TEMPLATE_ID,  } from "@/constant";
import { useRouter } from "next/navigation";
import { fireInquiryWebhook } from "@/lib/fireInquiryWebhook";

export default function EnquirySection() {
    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: "",
        countryCode: "+91",
        mobile: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
const router = useRouter()
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg("");

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    patient_name: form.name,
                    mobile: `${form.countryCode} ${form.mobile}`,
                    email: form.email,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                fireInquiryWebhook({
                    name: form.name,
                    mobile: form.mobile,
                    countryCode: form.countryCode,
                    email: form.email,
                    source: "Enquiry Popup",
                });
                router.push("/thank-you");
                setSuccessMsg("Thank you! Our team will call you shortly.");
                setForm({
                    name: "",
                    countryCode: "+91",
                    mobile: "",
                    email: "",
                });

                // agar chaaho to 1–2 sec baad modal close bhi kar sakte ho
                // setTimeout(() => setOpen(false), 1500);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                alert("Failed to send enquiry. Please try again.");
            });
    };

    return (
        <>
            {/* ENQUIRY STRIP */}
            <section
                className="
                    bg-[#dff0f6] py-6 px-4
                    flex flex-col sm:flex-row
                    items-center sm:items-center
                    justify-between gap-4
                    max-w-7xl mx-auto rounded-xl shadow-sm mt-16
                "
            >
                <h3
                    className="
                        text-base sm:text-lg md:text-xl 
                        font-semibold text-gray-700 tracking-wide
                        text-center sm:text-left
                    "
                >
                    HAVE QUESTIONS? GET IN TOUCH WITH OUR CARE COORDINATOR:
                </h3>

                <button
                    onClick={() => {
                        setSuccessMsg("");
                        setOpen(true);
                    }}
                    className="
                        px-6 py-3 bg-white rounded-full 
                        shadow-md font-semibold text-gray-700 
                        hover:bg-gray-100 transition w-full sm:w-auto
                    "
                >
                    Enquiry
                </button>
            </section>

            {/* POPUP MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            fixed inset-0 bg-black/40 backdrop-blur-sm 
                            flex items-center justify-center z-50 p-4
                        "
                    >
                        {/* MODAL BOX */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="
                                bg-white 
                                w-[95%]
                                max-w-sm
                                rounded-2xl 
                                shadow-xl 
                                p-6 sm:p-8 
                                relative 
                                overflow-hidden
                            "
                        >
                            {/* CLOSE BTN */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl sm:text-2xl font-bold text-[#064e53] text-center mb-6">
                                Share Your Details
                            </h2>

                            {/* FORM */}
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label className="text-sm font-semibold text-gray-600">
                                        Patient Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="
                                            w-full mt-1 px-4 py-3 border rounded-xl 
                                            bg-gray-50 focus:ring-2 focus:ring-teal-500 outline-none
                                        "
                                        placeholder="Enter Your Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-600">
                                        Mobile Number*
                                    </label>

                                    <div className="flex items-center gap-2 mt-1 w-full">
                                        <select
                                            name="countryCode"
                                            value={form.countryCode}
                                            onChange={handleChange}
                                            className="
                                                w-20 px-2 py-3 
                                                border rounded-xl bg-gray-50
                                                focus:ring-2 focus:ring-teal-500 outline-none
                                            "
                                        >
                                            <option value="+91">+91</option>
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                        </select>

                                        <input
                                            type="text"
                                            name="mobile"
                                            value={form.mobile}
                                            onChange={(e) => {
                                                // Only numbers + limit 10
                                                const value = e.target.value.replace(/\D/g, "");
                                                if (value.length <= 10) {
                                                    setForm({ ...form, mobile: value });
                                                }
                                            }}
                                            maxLength={10}
                                            className="flex-1 min-w-0 px-3 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-500 outline-none"
                                            placeholder="Enter Mobile Number"
                                            required
                                        />

                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-600">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="
                                            w-full mt-1 px-4 py-3 border rounded-xl 
                                            bg-gray-50 focus:ring-2 focus:ring-teal-500 outline-none
                                        "
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>

                                {/* SUCCESS MESSAGE */}
                                {successMsg && (
                                    <p className="text-green-600 text-sm font-semibold">
                                        {successMsg}
                                    </p>
                                )}

                                {/* SUBMIT BUTTON */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                                        w-full mt-4 py-3 bg-[#0f706b] hover:bg-[#0d5d5a] 
                                        text-white font-semibold rounded-xl shadow-md transition
                                        flex items-center justify-center gap-2
                                        disabled:opacity-70
                                    "
                                >
                                    {loading ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        "Get a Call Back"
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
