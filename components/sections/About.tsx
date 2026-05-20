"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Automation-First Engineering",
    description:
      "Every engagement begins with identifying automation opportunities. We build systems that run themselves, freeing your team to focus on strategy.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "All infrastructure is version-controlled, peer-reviewed, and reproducible. Terraform and ARM templates ensure consistency across environments.",
  },
  {
    title: "Security by Design",
    description:
      "Zero-trust architecture, least-privilege access, and compliance controls are built into every layer — not bolted on afterward.",
  },
  {
    title: "Scalable Architecture",
    description:
      "We design for tomorrow's workloads today. Microservices, containerization, and cloud-native patterns ensure your platform grows with you.",
  },
];

const checkItems = [
  "Azure & AWS certified engineering team",
  "End-to-end DevOps lifecycle management",
  "Compliance-ready architecture (SOC2, ISO 27001)",
  "24/7 infrastructure monitoring & alerting",
  "Dedicated client success engineering",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand text-xs font-semibold tracking-widest uppercase block mb-3">
              Why Cetateck
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight mb-6">
              An Engineering Partner Built for Enterprise
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">
              Cetateck is not a staffing firm or a generic IT provider. We are a
              specialized cloud engineering studio that operates with the depth
              of an in-house infrastructure team and the breadth of a
              multi-disciplinary consultancy.
            </p>
            <p className="text-muted text-base leading-relaxed mb-10">
              Our methodology combines rigorous architecture reviews,
              infrastructure automation, and continuous optimization to deliver
              platforms that are reliable, secure, and ready for the demands of
              the modern enterprise.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-brand mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-navy/80">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Schedule a discovery call
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: Pillars */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="bg-surface border border-[#E2EBF0] rounded-2xl p-6 hover:border-brand/25 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                </div>
                <h3 className="text-navy font-semibold text-sm mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
