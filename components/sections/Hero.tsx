"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Shield, Zap, Cloud } from "lucide-react";

function InfrastructureCard() {
  const services = [
    { name: "Azure Services", value: 98, color: "#2BA6B1" },
    { name: "AWS Clusters", value: 94, color: "#3dbdc9" },
    { name: "CI/CD Pipelines", value: 89, color: "#2BA6B1" },
  ];

  return (
    <div className="w-full max-w-sm bg-navy-800/80 backdrop-blur-md border border-brand/20 rounded-2xl p-6 shadow-2xl">
      {/* Terminal bar */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <span className="text-xs text-white/40 ml-2 font-mono">
          infrastructure.monitor
        </span>
      </div>

      {/* Live indicator */}
      <div className="flex items-center gap-2 mb-5">
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="w-2 h-2 rounded-full bg-green-400 absolute top-0 left-0 animate-ping opacity-60" />
        </div>
        <span className="text-xs text-green-400 font-medium">
          All Systems Operational
        </span>
      </div>

      {/* Service metrics */}
      <div className="space-y-4 mb-5">
        {services.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-white/60">{s.name}</span>
              <span className="text-xs text-brand font-semibold">{s.value}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                animate={{ width: `${s.value}%` }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/40">Deployments today</p>
            <p className="text-lg font-bold text-white">47</p>
          </div>
          <div>
            <p className="text-xs text-white/40">Automations run</p>
            <p className="text-lg font-bold text-brand">1,284</p>
          </div>
          <div>
            <p className="text-xs text-white/40">Uptime</p>
            <p className="text-lg font-bold text-green-400">99.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const floatingBadges = [
  {
    icon: <Zap size={14} className="text-brand" />,
    title: "Auto-Scaled",
    sub: "+3 instances · Azure",
    position: "top-0 right-0 md:-right-10",
    delay: 0.8,
    float: "animate-float",
  },
  {
    icon: <Server size={14} className="text-brand" />,
    title: "Deployed",
    sub: "prod-v2.4.1 · K8s",
    position: "bottom-4 left-0 md:-left-10",
    delay: 1.0,
    float: "animate-float-delayed",
  },
  {
    icon: <Shield size={14} className="text-brand" />,
    title: "Secured",
    sub: "Zero Trust · M365",
    position: "top-1/2 right-0 md:-right-6",
    delay: 1.2,
    float: "animate-float",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Radial gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span className="text-brand text-xs font-medium tracking-wide">
                Cloud Engineering & Enterprise Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Engineering{" "}
              <span className="text-brand">Intelligent</span>{" "}
              Cloud Infrastructure
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We design, deploy, and automate enterprise-grade cloud
              infrastructure on Azure and AWS — accelerating digital
              transformation through intelligent automation and DevOps
              excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand/25"
              >
                Start a Project
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/8 hover:bg-white/14 border border-white/15 text-white text-sm font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "200+", label: "Deployments" },
                { value: "50+", label: "Automations" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/40">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main card */}
              <InfrastructureCard />

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${badge.position} ${badge.float}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: badge.delay }}
                >
                  <div className="bg-white rounded-xl px-4 py-3 shadow-xl border border-[#E2EBF0] flex items-center gap-3 min-w-[150px]">
                    <div className="w-8 h-8 rounded-lg bg-pale flex items-center justify-center flex-shrink-0">
                      {badge.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy leading-none mb-0.5">
                        {badge.title}
                      </p>
                      <p className="text-[10px] text-muted">{badge.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 blur-3xl bg-brand/15 rounded-full scale-110 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
