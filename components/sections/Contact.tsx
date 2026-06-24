"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Send, CheckCircle2, Clock, ArrowRight, AlertCircle, Phone } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  details: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Unable to send. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand text-xs font-semibold tracking-widest uppercase block mb-3">
              Let's Build Together
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight mb-5">
              Start Your Cloud Transformation
            </h2>
            <p className="text-muted text-base leading-relaxed mb-10">
              Whether you're migrating to the cloud, modernizing infrastructure,
              or building automation workflows — we'll architect the right
              solution for your organization.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:support@cetateck.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pale border border-[#E2EBF0] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-200">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Email</p>
                  <p className="text-sm font-medium text-navy">
                    support@cetateck.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+19295891358"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-pale border border-[#E2EBF0] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-200">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Phone</p>
                  <p className="text-sm font-medium text-navy">
                    +1 929 589 1358
                  </p>
                </div>
              </a>

              <a href="https://www.linkedin.com/company/cetateck" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-pale border border-[#E2EBF0] flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-200">
                  <Globe size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium text-navy">
                    linkedin.com/company/cetateck
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pale border border-[#E2EBF0] flex items-center justify-center text-brand">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-xs text-muted mb-0.5">Response Time</p>
                  <p className="text-sm font-medium text-navy">
                    Within 24 business hours
                  </p>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="p-5 bg-navy rounded-2xl">
              <p className="text-white text-sm font-semibold mb-1">
                Free Architecture Review
              </p>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Book a 30-minute discovery call with our cloud architects —
                no commitment required.
              </p>
              <a
                href="mailto:support@cetateck.com?subject=Discovery Call Request"
                className="inline-flex items-center gap-2 text-brand text-xs font-semibold hover:gap-3 transition-all duration-200"
              >
                Book consultation
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white border border-[#E2EBF0] rounded-3xl p-8 lg:p-10 shadow-sm">
              {status === "success" ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                    <CheckCircle2 size={32} className="text-brand" />
                  </div>
                  <h3 className="text-navy font-bold text-xl mb-3">
                    Message Sent
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out. Our engineering team will review
                    your project and respond within 24 hours.
                  </p>
                  <button
                    className="mt-8 text-xs text-brand font-semibold underline underline-offset-2"
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", company: "", details: "" });
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-2">
                        Full Name <span className="text-brand">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EBF0] bg-surface text-navy text-sm placeholder:text-muted/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy/70 mb-2">
                        Work Email <span className="text-brand">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2EBF0] bg-surface text-navy text-sm placeholder:text-muted/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy/70 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corporation"
                      className="w-full px-4 py-3 rounded-xl border border-[#E2EBF0] bg-surface text-navy text-sm placeholder:text-muted/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy/70 mb-2">
                      Project Details <span className="text-brand">*</span>
                    </label>
                    <textarea
                      name="details"
                      required
                      rows={5}
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Describe your project, current infrastructure, and the outcomes you're looking for..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E2EBF0] bg-surface text-navy text-sm placeholder:text-muted/40 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                    />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <motion.div
                      className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle size={15} className="flex-shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand/20"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12" cy="12" r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-muted/50">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
