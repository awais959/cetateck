"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Microsoft Azure", abbr: "Az" },
  { name: "Amazon AWS", abbr: "AWS" },
  { name: "Microsoft 365", abbr: "M365" },
  { name: "Terraform", abbr: "Tf" },
  { name: "Kubernetes", abbr: "K8s" },
  { name: "Docker", abbr: "Dkr" },
  { name: "Power Automate", abbr: "PA" },
  { name: "n8n", abbr: "n8n" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[#E2EBF0] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powered by enterprise technology
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-surface border border-[#E2EBF0] rounded-full hover:border-brand/40 hover:bg-pale transition-all duration-200 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <div className="w-6 h-6 rounded-md bg-brand/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] font-bold text-brand leading-none">
                  {tech.abbr}
                </span>
              </div>
              <span className="text-sm font-medium text-navy/70 group-hover:text-navy transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
