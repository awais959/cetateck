"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(end: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  description,
  delay,
  startCounting,
}: {
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  startCounting: boolean;
}) {
  const count = useCounter(value, 1800, startCounting);

  return (
    <motion.div
      className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 text-center hover:bg-white/12 hover:border-brand/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums">
        {count}
        <span className="text-white">{suffix}</span>
      </div>
      <div className="text-white/80 text-sm font-semibold mb-2">{label}</div>
      <div className="text-white/65 text-xs leading-relaxed">{description}</div>
    </motion.div>
  );
}

const stats = [
  {
    value: 200,
    suffix: "+",
    label: "Cloud Deployments",
    description: "Production environments shipped across Azure & AWS",
    delay: 0.1,
  },
  {
    value: 1500,
    suffix: "+",
    label: "Automations Built",
    description: "Workflows eliminating manual enterprise processes",
    delay: 0.2,
  },
  {
    value: 35,
    suffix: "+",
    label: "Cloud Integrations",
    description: "Enterprise systems connected via APIs and middleware",
    delay: 0.3,
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime SLA",
    description: "Guaranteed availability across managed infrastructure",
    delay: 0.4,
  },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-brand py-20 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Background texture */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Delivering Results at Enterprise Scale
          </h2>
          <p className="text-white/65 text-sm max-w-md mx-auto">
            Numbers that reflect the trust organizations place in Cetateck
            infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} startCounting={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
