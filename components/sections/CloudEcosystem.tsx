"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const HUB_NODES = [
  // Inner ring (radius ~130px)
  { id: "azure", label: "Azure", abbr: "Az", angle: 0, ring: 1, color: "#0078D4" },
  { id: "aws", label: "AWS", abbr: "AWS", angle: 72, ring: 1, color: "#FF9900" },
  { id: "m365", label: "M365", abbr: "365", angle: 144, ring: 1, color: "#D83B01" },
  { id: "terraform", label: "Terraform", abbr: "Tf", angle: 216, ring: 1, color: "#7B42BC" },
  { id: "k8s", label: "Kubernetes", abbr: "K8s", angle: 288, ring: 1, color: "#326CE5" },

  // Outer ring (radius ~230px)
  { id: "docker", label: "Docker", abbr: "Dkr", angle: 36, ring: 2, color: "#2496ED" },
  { id: "sentinel", label: "Sentinel", abbr: "Sec", angle: 108, ring: 2, color: "#00BCF2" },
  { id: "n8n", label: "n8n", abbr: "n8n", angle: 180, ring: 2, color: "#EA4B71" },
  { id: "intune", label: "Intune", abbr: "MDM", angle: 252, ring: 2, color: "#2BA6B1" },
  { id: "veeam", label: "Veeam", abbr: "BKP", angle: 324, ring: 2, color: "#00B336" },
];

const INNER_R = 130;
const OUTER_R = 220;
const CX = 300;
const CY = 300;

function toCartesian(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function AnimatedPacket({
  x1, y1, x2, y2, delay, duration,
}: {
  x1: number; y1: number; x2: number; y2: number; delay: number; duration: number;
}) {
  return (
    <motion.circle
      r={3}
      fill="#2BA6B1"
      opacity={0.9}
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: ["0%", "100%"] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: duration * 0.8,
        ease: "linear",
      }}
      style={{
        offsetPath: `path("M ${x1} ${y1} L ${x2} ${y2}")`,
      } as React.CSSProperties}
    />
  );
}

export default function CloudEcosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="bg-navy py-24 lg:py-32 overflow-hidden relative" ref={ref}>
      {/* Background accents matching Process section */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <span className="text-brand text-xs font-semibold tracking-widest uppercase block mb-3">
            Unified Platform
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
            Your Cloud Ecosystem, Orchestrated
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Cetateck acts as the intelligent hub connecting all your cloud
            platforms, security tools, and automation engines into one coherent
            operating model.
          </p>
        </motion.div>

        {/* Diagram + side info */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* SVG Diagram */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={controls}
            variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } } }}
          >
            <svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              className="w-full max-w-[420px] lg:max-w-[520px] mx-auto"
            >
              {/* Radial gradient defs */}
              <defs>
                <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2BA6B1" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2BA6B1" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2BA6B1" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#2BA6B1" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background glow */}
              <circle cx={CX} cy={CY} r={260} fill="url(#bgGrad)" />
              <circle cx={CX} cy={CY} r={160} fill="url(#hubGrad)" />

              {/* Orbit rings */}
              <circle
                cx={CX} cy={CY} r={INNER_R}
                fill="none" stroke="#2BA6B1" strokeWidth="1"
                strokeDasharray="4 8" opacity="0.3"
              />
              <circle
                cx={CX} cy={CY} r={OUTER_R}
                fill="none" stroke="#2BA6B1" strokeWidth="1"
                strokeDasharray="4 8" opacity="0.2"
              />

              {/* Connection lines + animated packets */}
              {HUB_NODES.map((node, i) => {
                const r = node.ring === 1 ? INNER_R : OUTER_R;
                const pos = toCartesian(node.angle, r);
                return (
                  <g key={node.id}>
                    <line
                      x1={CX} y1={CY}
                      x2={pos.x} y2={pos.y}
                      stroke="#2BA6B1"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                    <AnimatedPacket
                      x1={CX} y1={CY}
                      x2={pos.x} y2={pos.y}
                      delay={i * 0.38}
                      duration={1.6 + (i % 3) * 0.4}
                    />
                  </g>
                );
              })}

              {/* Outer nodes */}
              {HUB_NODES.map((node, i) => {
                const r = node.ring === 1 ? INNER_R : OUTER_R;
                const pos = toCartesian(node.angle, r);
                const nodeR = node.ring === 1 ? 30 : 26;
                return (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={controls}
                    variants={{
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.4, delay: 0.4 + i * 0.08 },
                      },
                    }}
                  >
                    {/* Pulse ring */}
                    <motion.circle
                      cx={pos.x} cy={pos.y} r={nodeR + 6}
                      fill="none"
                      stroke="#2BA6B1"
                      strokeWidth="1"
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.35,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    {/* Node background */}
                    <circle
                      cx={pos.x} cy={pos.y} r={nodeR}
                      fill="white"
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="1.5"
                    />
                    {/* Abbr text */}
                    <text
                      x={pos.x} y={pos.y - 3}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={node.ring === 1 ? "9" : "8"}
                      fontWeight="700"
                      fill={node.color}
                      fontFamily="var(--font-inter), system-ui, sans-serif"
                    >
                      {node.abbr}
                    </text>
                    {/* Label below abbr */}
                    <text
                      x={pos.x} y={pos.y + 9}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="6"
                      fontWeight="500"
                      fill="#5B6773"
                      fontFamily="var(--font-inter), system-ui, sans-serif"
                    >
                      {node.label}
                    </text>
                  </motion.g>
                );
              })}

              {/* Center hub */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={controls}
                variants={{ visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } } }}
              >
                {/* Outer pulse */}
                <motion.circle
                  cx={CX} cy={CY} r={56}
                  fill="none"
                  stroke="#2BA6B1"
                  strokeWidth="1.5"
                  initial={{ opacity: 0.5, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.6 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Hub circle — white background */}
                <circle
                  cx={CX} cy={CY} r={48}
                  fill="white"
                  stroke="#2BA6B1"
                  strokeWidth="2"
                />
                {/* Hub inner ring */}
                <circle
                  cx={CX} cy={CY} r={42}
                  fill="none"
                  stroke="#2BA6B1"
                  strokeWidth="0.5"
                  opacity="0.25"
                />
                {/* Cetateck logo squares — dark on white */}
                <rect x={CX - 16} y={CY - 16} width="12" height="12" rx="2" fill="#071B2A" opacity="0.9" />
                <rect x={CX + 4} y={CY - 16} width="12" height="12" rx="2" fill="#2BA6B1" opacity="0.7" />
                <rect x={CX - 16} y={CY + 4} width="12" height="12" rx="2" fill="#2BA6B1" opacity="0.45" />
                <rect x={CX + 4} y={CY + 4} width="12" height="12" rx="2" fill="#2BA6B1" />
                {/* Label — dark text on white hub */}
                <text
                  x={CX} y={CY + 28}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="700"
                  fill="#071B2A"
                  letterSpacing="2"
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                >
                  CETATECK
                </text>
              </motion.g>
            </svg>
          </motion.div>

          {/* Side feature list */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Multi-Cloud Orchestration",
                desc: "Seamlessly bridge Azure and AWS workloads with unified governance, single-pane monitoring, and cross-cloud networking.",
                delay: 0.3,
              },
              {
                title: "Automated Security Posture",
                desc: "Continuous compliance scanning via Sentinel and Wazuh ensures your posture is hardened without manual intervention.",
                delay: 0.4,
              },
              {
                title: "Endpoint Intelligence",
                desc: "MDM platforms push policy, collect telemetry, and enforce compliance across every managed device in real time.",
                delay: 0.5,
              },
              {
                title: "Integrated Automation Mesh",
                desc: "n8n and Power Automate workflows stitch together SaaS tools, cloud APIs, and internal systems into one automated fabric.",
                delay: 0.6,
              },
              {
                title: "Unified Identity & Access",
                desc: "Entra ID, JumpCloud, and JAMF enforce least-privilege access from a single identity plane across all connected systems.",
                delay: 0.7,
              },
              {
                title: "Resilience by Design",
                desc: "Veeam and Azure Site Recovery ensure your critical workloads meet RPO/RTO targets even during a major outage.",
                delay: 0.8,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-navy-800/70 backdrop-blur-sm border border-brand/20 rounded-xl p-5 hover:border-brand/50 hover:bg-navy-800 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, x: 0, transition: { duration: 0.45, delay: item.delay } },
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                  <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
