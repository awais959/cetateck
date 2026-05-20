"use client";

import { motion } from "framer-motion";
import { Search, Layers, Cpu, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search size={20} />,
    title: "Discovery",
    description:
      "Deep-dive into your current infrastructure, business objectives, and technical constraints. We map gaps and identify high-leverage automation opportunities.",
  },
  {
    number: "02",
    icon: <Layers size={20} />,
    title: "Architecture",
    description:
      "Design a scalable, secure cloud architecture aligned to your workloads. Detailed runbooks, network diagrams, and IaC blueprints before a single resource is provisioned.",
  },
  {
    number: "03",
    icon: <Cpu size={20} />,
    title: "Automation",
    description:
      "Build CI/CD pipelines, Terraform modules, and workflow automations. Every repeatable process is codified so your team can ship without manual intervention.",
  },
  {
    number: "04",
    icon: <Rocket size={20} />,
    title: "Deployment",
    description:
      "Zero-downtime production rollouts with full observability. Monitoring dashboards, alerting thresholds, and runbooks are handed over alongside the infrastructure.",
  },
  {
    number: "05",
    icon: <TrendingUp size={20} />,
    title: "Optimization",
    description:
      "Continuous cost review, performance tuning, and security hardening. We treat your infrastructure as a living system — not a one-time project.",
  },
];

export default function Process() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand text-xs font-semibold tracking-widest uppercase block mb-3">
            How We Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            A Proven Engineering Process
          </h2>
          <p className="text-white/45 text-base leading-relaxed">
            From first conversation to production deployment, our structured
            process ensures nothing is left to chance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-navy-800/80 border border-brand/25 flex items-center justify-center text-brand group-hover:border-brand/60 group-hover:bg-brand/10 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
