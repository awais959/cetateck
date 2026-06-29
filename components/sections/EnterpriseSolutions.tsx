"use client";

import { motion, type Variants } from "framer-motion";
import {
  Users,
  Monitor,
  Shield,
  Code2,
  Cloud,
  Server,
  GitBranch,
  Activity,
  Lock,
  Brain,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Zap,
  Calendar,
} from "lucide-react";
import type { ReactNode } from "react";

// ─── Animated Architecture Diagrams ──────────────────────────────────────────

function M365IdentityDiagram() {
  return (
    <svg
      viewBox="0 0 560 125"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="arr-m365"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M1,1 L7,4 L1,7 Z" fill="#2BA6B1" opacity="0.7" />
        </marker>
      </defs>

      <rect width="560" height="125" rx="10" fill="#EAF1F4" />

      {/* HR Form */}
      <rect x="8" y="43" width="78" height="38" rx="7" fill="#071B2A" />
      <text x="47" y="59" textAnchor="middle" fill="#3dbdc9" fontSize="8.5" fontWeight="700">HR</text>
      <text x="47" y="71" textAnchor="middle" fill="#3dbdc9" fontSize="8.5" fontWeight="700">Form</text>

      {/* Power Automate */}
      <rect x="128" y="43" width="84" height="38" rx="7" fill="#0d2d47" />
      <text x="170" y="59" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Power</text>
      <text x="170" y="71" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Automate</text>

      {/* Entra ID — highlighted hub */}
      <rect x="258" y="33" width="92" height="58" rx="9" fill="#2BA6B1" />
      <ellipse cx="304" cy="62" rx="32" ry="32" fill="none" stroke="white" strokeWidth="0.8">
        <animate attributeName="rx" values="30;42;30" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="30;42;30" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" />
      </ellipse>
      <text x="304" y="57" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700">Entra ID</text>
      <text x="304" y="70" textAnchor="middle" fill="white" fontSize="7.5" opacity="0.85">Identity Hub</text>

      {/* Output nodes */}
      <rect x="404" y="6" width="76" height="26" rx="6" fill="#0d2d47" />
      <text x="442" y="23" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Exchange</text>

      <rect x="404" y="49" width="76" height="26" rx="6" fill="#0d2d47" />
      <text x="442" y="66" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Teams + MFA</text>

      <rect x="404" y="92" width="76" height="26" rx="6" fill="#0d2d47" />
      <text x="442" y="109" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Intune</text>

      {/* Connector lines */}
      <path d="M86,62 L128,62" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.45" markerEnd="url(#arr-m365)" />
      <path d="M212,62 L258,62" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.45" markerEnd="url(#arr-m365)" />
      <path d="M350,48 Q385,22 404,19" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-m365)" />
      <path d="M350,62 L404,62" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-m365)" />
      <path d="M350,76 Q385,102 404,105" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-m365)" />

      {/* Animated packets — HR → Automate */}
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.4s" repeatCount="indefinite" begin="0s" path="M86,62 L128,62" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.4s" repeatCount="indefinite" begin="0s" />
      </circle>
      {/* Automate → Entra */}
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.4s" repeatCount="indefinite" begin="0.55s" path="M212,62 L258,62" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.4s" repeatCount="indefinite" begin="0.55s" />
      </circle>
      {/* Fan-out packets */}
      <circle r="2.5" fill="white">
        <animateMotion dur="1s" repeatCount="indefinite" begin="1.1s" path="M350,48 Q385,22 404,19" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1s" repeatCount="indefinite" begin="1.1s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="0.9s" repeatCount="indefinite" begin="1.3s" path="M350,62 L404,62" />
        <animate attributeName="opacity" values="0;1;1;0" dur="0.9s" repeatCount="indefinite" begin="1.3s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="1s" repeatCount="indefinite" begin="1.5s" path="M350,76 Q385,102 404,105" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1s" repeatCount="indefinite" begin="1.5s" />
      </circle>
    </svg>
  );
}

function XDRSecurityDiagram() {
  return (
    <svg
      viewBox="0 0 560 148"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker id="arr-xdr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#2BA6B1" opacity="0.7" />
        </marker>
        <radialGradient id="xdr-hub-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3dbdc9" />
          <stop offset="100%" stopColor="#2BA6B1" />
        </radialGradient>
      </defs>

      <rect width="560" height="148" rx="10" fill="#EAF1F4" />

      {/* Input sources */}
      <rect x="8" y="8" width="98" height="26" rx="6" fill="#071B2A" />
      <text x="57" y="25" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Endpoint</text>

      <rect x="8" y="48" width="98" height="26" rx="6" fill="#071B2A" />
      <text x="57" y="65" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Email / Office 365</text>

      <rect x="8" y="88" width="98" height="26" rx="6" fill="#071B2A" />
      <text x="57" y="105" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Identity</text>

      <rect x="8" y="128" width="98" height="26" rx="6" fill="#071B2A" />
      <text x="57" y="145" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Cloud Apps</text>

      {/* Defender XDR hub */}
      <circle cx="284" cy="74" r="48" fill="url(#xdr-hub-grad)" />
      <circle cx="284" cy="74" r="48" fill="none" stroke="#2BA6B1" strokeWidth="1.5">
        <animate attributeName="r" values="46;60;46" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="284" cy="74" r="48" fill="none" stroke="#2BA6B1" strokeWidth="1">
        <animate attributeName="r" values="46;72;46" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <text x="284" y="68" textAnchor="middle" fill="white" fontSize="10" fontWeight="800">Defender</text>
      <text x="284" y="82" textAnchor="middle" fill="white" fontSize="10" fontWeight="800">XDR</text>

      {/* Output nodes */}
      <rect x="396" y="34" width="92" height="30" rx="6" fill="#0d2d47" />
      <text x="442" y="53" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Sentinel SIEM</text>

      <rect x="396" y="84" width="92" height="30" rx="6" fill="#0d2d47" />
      <text x="442" y="103" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">SOAR Playbooks</text>

      {/* Input arrows */}
      <path d="M106,21 Q196,21 236,52" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-xdr)" />
      <path d="M106,61 L236,68" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-xdr)" />
      <path d="M106,101 L236,82" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-xdr)" />
      <path d="M106,141 Q196,141 236,96" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-xdr)" />

      {/* Output arrows */}
      <path d="M332,60 L396,49" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-xdr)" />
      <path d="M332,88 L396,99" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.4" markerEnd="url(#arr-xdr)" />

      {/* Threat packets */}
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="0s" path="M106,21 Q196,21 236,52" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.6s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.3s" repeatCount="indefinite" begin="0.4s" path="M106,61 L236,68" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.3s" repeatCount="indefinite" begin="0.4s" />
      </circle>
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.3s" repeatCount="indefinite" begin="0.8s" path="M106,101 L236,82" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.3s" repeatCount="indefinite" begin="0.8s" />
      </circle>
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="1.2s" path="M106,141 Q196,141 236,96" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.6s" repeatCount="indefinite" begin="1.2s" />
      </circle>
      {/* Hub → outputs */}
      <circle r="2.5" fill="white">
        <animateMotion dur="1s" repeatCount="indefinite" begin="1.8s" path="M332,60 L396,49" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1s" repeatCount="indefinite" begin="1.8s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="1s" repeatCount="indefinite" begin="2.1s" path="M332,88 L396,99" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1s" repeatCount="indefinite" begin="2.1s" />
      </circle>
    </svg>
  );
}

function DevOpsPipelineDiagram() {
  const stages: Array<{ label: string; x: number; color: string }> = [
    { label: "Code", x: 46, color: "#0d2d47" },
    { label: "Build", x: 136, color: "#0d2d47" },
    { label: "Test", x: 226, color: "#0d2d47" },
    { label: "Security", x: 316, color: "#0d2d47" },
    { label: "Deploy", x: 406, color: "#2BA6B1" },
    { label: "Monitor", x: 496, color: "#0d2d47" },
  ];
  const cy = 50;
  const r = 24;

  return (
    <svg
      viewBox="0 0 560 96"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="560" height="96" rx="10" fill="#EAF1F4" />

      {/* Track */}
      <line
        x1="70"
        y1={cy}
        x2="472"
        y2={cy}
        stroke="#2BA6B1"
        strokeWidth="2"
        opacity="0.15"
        strokeDasharray="5,4"
      />

      {/* Stage nodes */}
      {stages.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy={cy} r={r} fill={s.color} />
          {/* Deploy pulse */}
          {i === 4 && (
            <circle cx={s.x} cy={cy} r={r} fill="none" stroke="#2BA6B1" strokeWidth="2">
              <animate attributeName="r" values={`${r};${r + 10};${r}`} dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
          {/* Status dot */}
          <circle
            cx={s.x + r - 2}
            cy={cy - r + 2}
            r="5"
            fill={i < 4 ? "#22c55e" : i === 4 ? "#2BA6B1" : "#5B6773"}
            opacity={i < 5 ? 1 : 0.4}
          >
            {i < 4 && (
              <animate
                attributeName="opacity"
                values="1;0.6;1"
                dur="2s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            )}
          </circle>
          <text
            x={s.x}
            y={cy + r + 14}
            textAnchor="middle"
            fill="#071B2A"
            fontSize="8"
            fontWeight="600"
            opacity="0.65"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Moving commit packet */}
      <rect width="12" height="7" rx="2.5" fill="#2BA6B1">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          begin="0s"
          path={`M70,${cy} L472,${cy}`}
        />
        <animate attributeName="opacity" values="0;1;1;1;0" dur="3.6s" repeatCount="indefinite" begin="0s" />
      </rect>
      <rect width="10" height="5" rx="2" fill="#3dbdc9">
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          begin="1.6s"
          path={`M70,${cy} L472,${cy}`}
        />
        <animate attributeName="opacity" values="0;1;1;1;0" dur="3.6s" repeatCount="indefinite" begin="1.6s" />
      </rect>
    </svg>
  );
}

function IaCDiagram() {
  return (
    <svg
      viewBox="0 0 560 120"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker id="arr-iac" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#2BA6B1" opacity="0.7" />
        </marker>
      </defs>

      <rect width="560" height="120" rx="10" fill="#EAF1F4" />

      {/* Terraform */}
      <rect x="8" y="35" width="90" height="50" rx="9" fill="#2BA6B1" />
      <rect x="8" y="35" width="90" height="50" rx="9" fill="none" stroke="#2BA6B1" strokeWidth="2">
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="53" y="56" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">Tf</text>
      <text x="53" y="70" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Terraform</text>
      <text x="53" y="80" textAnchor="middle" fill="white" fontSize="7" opacity="0.8">IaC Engine</text>

      {/* Terraform → Gate */}
      <path d="M98,60 L155,60" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arr-iac)" />

      {/* Plan / Apply gate */}
      <rect x="155" y="35" width="90" height="50" rx="8" fill="#0d2d47" />
      <text x="200" y="54" textAnchor="middle" fill="#3dbdc9" fontSize="8.5" fontWeight="700">Plan</text>
      <text x="200" y="65" textAnchor="middle" fill="#3dbdc9" fontSize="8.5" fontWeight="700">Validate</text>
      <text x="200" y="76" textAnchor="middle" fill="#3dbdc9" fontSize="8.5" fontWeight="700">Apply</text>

      {/* Gate → clouds */}
      <path d="M245,46 Q325,20 382,18" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.45" markerEnd="url(#arr-iac)" />
      <path d="M245,60 L382,60" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.45" markerEnd="url(#arr-iac)" />
      <path d="M245,74 Q325,100 382,102" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.45" markerEnd="url(#arr-iac)" />

      {/* Cloud nodes */}
      <rect x="382" y="5" width="76" height="26" rx="6" fill="#071B2A" />
      <text x="420" y="22" textAnchor="middle" fill="#3dbdc9" fontSize="9" fontWeight="700">Azure</text>

      <rect x="382" y="47" width="76" height="26" rx="6" fill="#071B2A" />
      <text x="420" y="64" textAnchor="middle" fill="#3dbdc9" fontSize="9" fontWeight="700">AWS</text>

      <rect x="382" y="89" width="76" height="26" rx="6" fill="#071B2A" />
      <text x="420" y="106" textAnchor="middle" fill="#3dbdc9" fontSize="9" fontWeight="700">GCP</text>

      {/* Resource tags */}
      <rect x="466" y="5" width="88" height="26" rx="6" fill="#2BA6B1" opacity="0.18" />
      <text x="510" y="22" textAnchor="middle" fill="#2BA6B1" fontSize="7" fontWeight="600">AKS · SQL · VNet</text>

      <rect x="466" y="47" width="88" height="26" rx="6" fill="#2BA6B1" opacity="0.18" />
      <text x="510" y="64" textAnchor="middle" fill="#2BA6B1" fontSize="7" fontWeight="600">EKS · RDS · VPC</text>

      <rect x="466" y="89" width="88" height="26" rx="6" fill="#2BA6B1" opacity="0.18" />
      <text x="510" y="106" textAnchor="middle" fill="#2BA6B1" fontSize="7" fontWeight="600">GKE · Cloud SQL</text>

      {/* Particles */}
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.3s" repeatCount="indefinite" begin="0s" path="M98,60 L155,60" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.3s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="1.1s" repeatCount="indefinite" begin="0.9s" path="M245,46 Q325,20 382,18" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.1s" repeatCount="indefinite" begin="0.9s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="1s" repeatCount="indefinite" begin="1.1s" path="M245,60 L382,60" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1s" repeatCount="indefinite" begin="1.1s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="1.1s" repeatCount="indefinite" begin="1.3s" path="M245,74 Q325,100 382,102" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.1s" repeatCount="indefinite" begin="1.3s" />
      </circle>
    </svg>
  );
}

function AiOperationsDiagram() {
  return (
    <svg
      viewBox="0 0 560 138"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker id="arr-ai" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#2BA6B1" opacity="0.7" />
        </marker>
      </defs>

      <rect width="560" height="138" rx="10" fill="#EAF1F4" />

      {/* User */}
      <rect x="8" y="52" width="72" height="34" rx="7" fill="#071B2A" />
      <text x="44" y="65" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">User</text>
      <text x="44" y="77" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Query</text>

      {/* AI Chatbot */}
      <rect x="120" y="52" width="82" height="34" rx="7" fill="#0d2d47" />
      <text x="161" y="65" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">AI</text>
      <text x="161" y="77" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Chatbot</text>

      {/* RAG Engine — hub */}
      <rect x="246" y="45" width="90" height="48" rx="9" fill="#2BA6B1" />
      <rect x="243" y="42" width="96" height="54" rx="11" fill="none" stroke="#2BA6B1" strokeWidth="1.5">
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.3s" repeatCount="indefinite" />
        <animate attributeName="x" values="243;239;243" dur="2.3s" repeatCount="indefinite" />
        <animate attributeName="y" values="42;38;42" dur="2.3s" repeatCount="indefinite" />
        <animate attributeName="width" values="96;104;96" dur="2.3s" repeatCount="indefinite" />
        <animate attributeName="height" values="54;62;54" dur="2.3s" repeatCount="indefinite" />
      </rect>
      <text x="291" y="66" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700">RAG</text>
      <text x="291" y="79" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">Engine</text>

      {/* Azure OpenAI — above */}
      <rect x="251" y="8" width="80" height="26" rx="6" fill="#071B2A" />
      <text x="291" y="25" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Azure OpenAI</text>

      {/* Knowledge Base — below */}
      <rect x="251" y="104" width="80" height="26" rx="6" fill="#0d2d47" />
      <text x="291" y="121" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Knowledge Base</text>

      {/* Smart Response */}
      <rect x="394" y="52" width="82" height="34" rx="7" fill="#0d2d47" />
      <text x="435" y="65" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Smart</text>
      <text x="435" y="77" textAnchor="middle" fill="#3dbdc9" fontSize="8" fontWeight="600">Response</text>

      {/* Arrows */}
      <path d="M80,69 L120,69" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arr-ai)" />
      <path d="M202,69 L246,69" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arr-ai)" />
      <path d="M291,45 L291,34" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arr-ai)" />
      <path d="M291,93 L291,104" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arr-ai)" />
      <path d="M336,69 L394,69" stroke="#2BA6B1" strokeWidth="1.5" fill="none" opacity="0.5" markerEnd="url(#arr-ai)" />
      {/* KB feedback line */}
      <path d="M271,104 L271,93" stroke="#2BA6B1" strokeWidth="1" strokeDasharray="3,2" fill="none" opacity="0.3" />

      {/* Particles */}
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.2s" repeatCount="indefinite" begin="0s" path="M80,69 L120,69" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.2s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.2s" repeatCount="indefinite" begin="0.55s" path="M202,69 L246,69" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.2s" repeatCount="indefinite" begin="0.55s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="0.8s" repeatCount="indefinite" begin="0.9s" path="M291,45 L291,34" />
        <animate attributeName="opacity" values="0;1;1;0" dur="0.8s" repeatCount="indefinite" begin="0.9s" />
      </circle>
      <circle r="2.5" fill="white">
        <animateMotion dur="0.8s" repeatCount="indefinite" begin="1.1s" path="M291,93 L291,104" />
        <animate attributeName="opacity" values="0;1;1;0" dur="0.8s" repeatCount="indefinite" begin="1.1s" />
      </circle>
      <circle r="3" fill="#2BA6B1">
        <animateMotion dur="1.2s" repeatCount="indefinite" begin="1.3s" path="M336,69 L394,69" />
        <animate attributeName="opacity" values="0;1;1;0" dur="1.2s" repeatCount="indefinite" begin="1.3s" />
      </circle>
    </svg>
  );
}

function MigrationDiagram() {
  return (
    <svg
      viewBox="0 0 560 112"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker id="arr-mig" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M1,1 L7,4 L1,7 Z" fill="#2BA6B1" opacity="0.8" />
        </marker>
      </defs>

      <rect width="560" height="112" rx="10" fill="#EAF1F4" />

      {/* On-Prem */}
      <rect x="6" y="8" width="158" height="96" rx="8" fill="#071B2A" opacity="0.92" />
      <text x="85" y="24" textAnchor="middle" fill="#5B6773" fontSize="7.5" fontWeight="500">On-Premises</text>
      <rect x="16" y="30" width="56" height="18" rx="4" fill="#0d2d47" />
      <rect x="20" y="34" width="10" height="10" rx="2" fill="#2BA6B1" opacity="0.5" />
      <text x="56" y="43" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">VMware</text>
      <rect x="88" y="30" width="66" height="18" rx="4" fill="#0d2d47" />
      <text x="121" y="43" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">Hyper-V</text>
      <rect x="16" y="56" width="56" height="18" rx="4" fill="#0d2d47" />
      <text x="44" y="69" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">SQL DB</text>
      <rect x="88" y="56" width="66" height="18" rx="4" fill="#0d2d47" />
      <text x="121" y="69" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">Storage</text>
      <rect x="16" y="82" width="138" height="14" rx="3" fill="#0d2d47" />
      <text x="85" y="93" textAnchor="middle" fill="#5B6773" fontSize="7">Legacy Infrastructure</text>

      {/* Azure Migrate — center */}
      <rect x="196" y="30" width="112" height="52" rx="9" fill="#2BA6B1" />
      <rect x="194" y="28" width="116" height="56" rx="10" fill="none" stroke="#2BA6B1" strokeWidth="2">
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="252" y="53" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700">Azure</text>
      <text x="252" y="67" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="700">Migrate</text>

      {/* Azure Cloud */}
      <rect x="346" y="8" width="208" height="96" rx="8" fill="#0d2d47" opacity="0.92" />
      <text x="450" y="24" textAnchor="middle" fill="#5B6773" fontSize="7.5" fontWeight="500">Azure Cloud</text>
      <rect x="356" y="30" width="56" height="18" rx="4" fill="#071B2A" />
      <text x="384" y="43" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">Azure VMs</text>
      <rect x="424" y="30" width="56" height="18" rx="4" fill="#071B2A" />
      <text x="452" y="43" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">Azure SQL</text>
      <rect x="492" y="30" width="54" height="18" rx="4" fill="#071B2A" />
      <text x="519" y="43" textAnchor="middle" fill="#3dbdc9" fontSize="7">Blob Store</text>
      <rect x="356" y="56" width="84" height="18" rx="4" fill="#071B2A" />
      <text x="398" y="69" textAnchor="middle" fill="#3dbdc9" fontSize="7.5">Site Recovery</text>
      <rect x="452" y="56" width="86" height="18" rx="4" fill="#071B2A" />
      <text x="495" y="69" textAnchor="middle" fill="#3dbdc9" fontSize="7">Disaster Recovery</text>
      <rect x="356" y="82" width="182" height="14" rx="3" fill="#071B2A" />
      <text x="447" y="93" textAnchor="middle" fill="#5B6773" fontSize="7">Scalable · Resilient · Managed</text>

      {/* Arrows */}
      <path d="M164,56 L196,56" stroke="#2BA6B1" strokeWidth="2" fill="none" markerEnd="url(#arr-mig)" />
      <path d="M308,56 L346,56" stroke="#2BA6B1" strokeWidth="2" fill="none" markerEnd="url(#arr-mig)" />

      {/* Migration packets */}
      <rect width="14" height="6" rx="2" fill="#2BA6B1">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0s" path="M164,55 L196,55" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
      </rect>
      <rect width="14" height="6" rx="2" fill="#2BA6B1">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M164,61 L196,61" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </rect>
      <rect width="14" height="6" rx="2" fill="white">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1s" path="M308,55 L346,55" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </rect>
      <rect width="14" height="6" rx="2" fill="white">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1.5s" path="M308,61 L346,61" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </rect>
    </svg>
  );
}

// ─── Types & Data ─────────────────────────────────────────────────────────────

type EnterpriseProject = {
  icon: ReactNode;
  category: string;
  title: string;
  businessProblem: string;
  solutionOverview: string;
  technologies: string[];
  automationScope: string;
  businessBenefits: string[];
  expectedRoi: string;
  tags: string[];
  diagram?: ReactNode;
};

const projects: EnterpriseProject[] = [
  {
    icon: <Users size={22} />,
    category: "Identity & Access Management",
    title: "Microsoft 365 Identity Automation",
    businessProblem:
      "Manual employee onboarding consuming 4–8 hours of IT time per hire, with inconsistent access provisioning causing security gaps and compliance failures.",
    solutionOverview:
      "End-to-end automated onboarding pipeline triggered by HR approval. Entra ID accounts, group assignments, license provisioning, MFA enforcement, device enrolment, and welcome communications delivered in under 15 minutes.",
    technologies: [
      "Entra ID", "Azure AD", "Exchange Online", "Teams", "Intune", "Autopilot",
      "Power Automate", "RBAC", "Dynamic Groups", "Conditional Access", "MFA", "Shared Mailboxes",
    ],
    automationScope: "Full lifecycle — onboarding to offboarding",
    businessBenefits: [
      "Reduce onboarding time from hours to under 15 minutes",
      "Eliminate manual access provisioning errors and security gaps",
      "Automated offboarding removes access in real-time on departure",
      "Full audit trail for compliance (ISO 27001, SOC 2)",
    ],
    expectedRoi: "85% reduction in IT onboarding hours",
    tags: ["Identity", "M365", "Zero-Touch", "Compliance"],
    diagram: <M365IdentityDiagram />,
  },
  {
    icon: <Monitor size={22} />,
    category: "Unified Endpoint Management",
    title: "Enterprise Endpoint Management",
    businessProblem:
      "Fragmented endpoint environment with inconsistent patch levels, unmanaged BYOD devices, and no centralised compliance visibility across a distributed workforce.",
    solutionOverview:
      "Unified endpoint lifecycle platform combining Intune, SCCM, and Windows Autopilot. Zero-touch device provisioning, automated compliance policies, BitLocker encryption, and ring-based patch management for all endpoints.",
    technologies: [
      "Microsoft Intune", "SCCM", "Windows Autopilot", "BitLocker", "Compliance Policies",
      "Configuration Profiles", "Patch Management", "Software Deployment", "Remote Actions", "Inventory", "Reporting",
    ],
    automationScope: "Device procurement to decommission",
    businessBenefits: [
      "Zero-touch provisioning — devices ready on day one without IT involvement",
      "Automated patch compliance across all managed endpoints",
      "BitLocker encryption enforced with key escrow to Azure",
      "Centralised inventory and compliance reporting dashboard",
    ],
    expectedRoi: "70% reduction in manual device management tasks",
    tags: ["Endpoint", "MDM", "Zero-Touch", "Compliance"],
  },
  {
    icon: <Shield size={22} />,
    category: "Extended Detection & Response",
    title: "XDR / EDR Security Deployment",
    businessProblem:
      "Siloed security tools creating detection blind spots, slow incident response, and inability to correlate threats across identity, endpoints, email, and cloud applications.",
    solutionOverview:
      "Unified Microsoft XDR deployment across the entire attack surface. Defender for Endpoint, Identity, Office 365, and Cloud Apps feeding into Microsoft Sentinel SIEM/SOAR with automated incident response playbooks.",
    technologies: [
      "Microsoft Defender XDR", "Defender for Endpoint", "Defender for Identity",
      "Defender for Office 365", "Defender for Cloud Apps", "Microsoft Sentinel",
      "SIEM", "SOAR", "Incident Response", "Threat Hunting", "Automated Remediation",
    ],
    automationScope: "Detection, triage, and automated containment",
    businessBenefits: [
      "Unified attack surface visibility across all enterprise vectors",
      "Automated threat containment without analyst intervention",
      "SOAR playbooks reduce MTTR from hours to minutes",
      "Continuous threat hunting with custom KQL detection rules",
    ],
    expectedRoi: "60% faster mean time to detect and respond",
    tags: ["Security", "XDR", "SIEM", "SOAR"],
    diagram: <XDRSecurityDiagram />,
  },
  {
    icon: <Code2 size={22} />,
    category: "Cloud Provisioning",
    title: "Infrastructure as Code Platform",
    businessProblem:
      "Manual cloud provisioning causing configuration drift, undocumented environments, and multi-week deployment cycles blocking product teams from shipping.",
    solutionOverview:
      "Modular Terraform platform covering Azure, AWS, and GCP landing zones. Hub-spoke networking, AKS clusters, App Services, Azure SQL, and Key Vault — all provisioned in minutes via CI/CD with full drift detection.",
    technologies: [
      "Terraform", "Azure", "AWS", "GCP", "Landing Zones", "Hub-Spoke VNets",
      "NSGs", "Azure Firewall", "AKS", "Azure App Service", "Azure SQL", "Key Vault", "CI/CD", "Azure Monitor",
    ],
    automationScope: "Infrastructure provisioned in minutes, not weeks",
    businessBenefits: [
      "Repeatable, auditable infrastructure deployments every time",
      "Eliminate configuration drift with automated state management",
      "Landing zones enforce security and governance guardrails by default",
      "Full environment cloning for dev, staging, and production parity",
    ],
    expectedRoi: "90% reduction in infrastructure provisioning time",
    tags: ["IaC", "Terraform", "Multi-Cloud", "Landing Zones"],
    diagram: <IaCDiagram />,
  },
  {
    icon: <Cloud size={22} />,
    category: "Cloud Migration",
    title: "Cloud Migration Factory",
    businessProblem:
      "Legacy on-premises infrastructure with ageing VMware and Hyper-V workloads driving up TCO, limiting scalability, and introducing business continuity risk.",
    solutionOverview:
      "Structured migration factory using Azure Migrate and Azure Site Recovery. Wave-based workload migration with zero-downtime cutovers, SQL database migration, disaster recovery configuration, and post-migration cost optimisation.",
    technologies: [
      "Azure Migrate", "Azure Site Recovery", "VMware", "Hyper-V",
      "SQL Migration", "Storage Migration", "Disaster Recovery", "Zero Downtime", "Cost Optimisation",
    ],
    automationScope: "Automated discovery, assessment, and migration execution",
    businessBenefits: [
      "Zero-downtime migration with automated cutover orchestration",
      "Disaster recovery built-in from day one post-migration",
      "Right-sizing analysis delivers immediate and sustained cost savings",
      "Detailed dependency mapping prevents migration failures",
    ],
    expectedRoi: "40% reduction in infrastructure TCO",
    tags: ["Migration", "Azure", "DR", "Cost Optimisation"],
    diagram: <MigrationDiagram />,
  },
  {
    icon: <Server size={22} />,
    category: "Server Infrastructure",
    title: "Windows & Linux Server Platform",
    businessProblem:
      "Inconsistently managed server estate with manual patching, ad-hoc configurations, and no centralised monitoring causing unplanned outages and compliance failures.",
    solutionOverview:
      "Standardised enterprise server platform covering full Active Directory design, DNS/DHCP management, IIS and Nginx configuration, and automated patching. Ubuntu and RHEL environments hardened to CIS benchmarks with HA clustering.",
    technologies: [
      "Active Directory", "DNS", "DHCP", "IIS", "Nginx", "Apache",
      "Ubuntu", "RHEL", "Monitoring", "Backup", "HA Clustering", "Performance Optimisation",
    ],
    automationScope: "Provisioning, patching, and monitoring automated end-to-end",
    businessBenefits: [
      "99.9% uptime SLA through HA clustering and automated failover",
      "CIS-benchmarked hardening eliminates common attack vectors",
      "Automated patch management with tested rollback capability",
      "Centralised monitoring with proactive alerting before failures occur",
    ],
    expectedRoi: "99.9% server uptime with zero unplanned outages",
    tags: ["Infrastructure", "Active Directory", "Linux", "HA"],
  },
  {
    icon: <GitBranch size={22} />,
    category: "DevOps Engineering",
    title: "Enterprise DevOps Platform",
    businessProblem:
      "Manual release processes, siloed development and operations teams, and multi-week deployment cycles blocking the business from responding to market demands.",
    solutionOverview:
      "End-to-end DevOps platform on Azure DevOps and GitHub Actions. Containerised workloads on Kubernetes with Helm chart deployments, automated secret management via Key Vault, and full observability from code commit to production.",
    technologies: [
      "Azure DevOps", "GitHub Actions", "Docker", "Kubernetes", "Helm",
      "Terraform", "CI/CD Pipelines", "Secret Management", "Monitoring", "Logging",
    ],
    automationScope: "Code commit to production in a single automated pipeline",
    businessBenefits: [
      "10x deployment frequency with zero-downtime blue-green releases",
      "Automated security scanning integrated into every pipeline stage",
      "Full environment parity eliminates 'works on my machine' failures",
      "Rollback in seconds with automated pipeline triggers",
    ],
    expectedRoi: "10x increase in deployment frequency",
    tags: ["DevOps", "Kubernetes", "CI/CD", "GitOps"],
    diagram: <DevOpsPipelineDiagram />,
  },
  {
    icon: <Activity size={22} />,
    category: "Observability",
    title: "Enterprise Monitoring & Observability",
    businessProblem:
      "Reactive incident management with no unified visibility across cloud, on-premises, and application layers — resulting in prolonged outages and missed SLA obligations.",
    solutionOverview:
      "Centralised observability platform combining Azure Monitor, Log Analytics, Grafana, and Prometheus. Custom dashboards, intelligent alerting, SLA tracking, and cost anomaly detection delivering full-stack visibility in real time.",
    technologies: [
      "Azure Monitor", "Log Analytics", "Grafana", "Prometheus",
      "Application Insights", "Alerting", "Custom Dashboards", "SLA Monitoring", "Cost Monitoring",
    ],
    automationScope: "Automated alerting, escalation, and incident ticketing",
    businessBenefits: [
      "Proactive alerting detects issues before users are impacted",
      "Single pane of glass across all infrastructure and applications",
      "SLA dashboards provide real-time compliance and performance reporting",
      "Cost anomaly detection prevents unexpected cloud spend",
    ],
    expectedRoi: "90% reduction in mean time to resolve incidents",
    tags: ["Monitoring", "Observability", "SLA", "AIOps"],
  },
  {
    icon: <Lock size={22} />,
    category: "Identity Governance",
    title: "Secure Hybrid Identity",
    businessProblem:
      "Fragmented identity landscape with on-premises Active Directory and cloud applications creating password sprawl, weak authentication, and privilege creep across the organisation.",
    solutionOverview:
      "Comprehensive hybrid identity modernisation using Entra Connect. Seamless SSO across all applications, passwordless authentication, Privileged Identity Management for just-in-time access, and Conditional Access policies enforcing Zero Trust.",
    technologies: [
      "Entra Connect", "Hybrid Identity", "Conditional Access", "SSO",
      "MFA", "Passwordless", "RBAC", "Identity Governance", "PIM", "Entra ID",
    ],
    automationScope: "Automated access reviews, provisioning, and privilege elevation",
    businessBenefits: [
      "Passwordless authentication eliminates credential-based attacks",
      "Just-in-time privileged access reduces standing privilege risk",
      "Automated access reviews enforce least-privilege at enterprise scale",
      "SSO across all enterprise applications improves workforce productivity",
    ],
    expectedRoi: "Zero credential-based breach incidents post-deployment",
    tags: ["Identity", "Zero Trust", "SSO", "PIM"],
  },
  {
    icon: <Brain size={22} />,
    category: "AI Operations",
    title: "Enterprise AI Operations",
    businessProblem:
      "IT helpdesk overwhelmed with repetitive L1 tickets, manual document processing consuming analyst time, and no intelligent automation to scale operations without additional headcount.",
    solutionOverview:
      "Enterprise AI operations platform built on Azure AI and OpenAI. RAG-powered knowledge base for intelligent ticket routing, AI-assisted document processing, conversational AI helpdesk, and automated reporting — reducing L1 support burden by over 50%.",
    technologies: [
      "Azure AI", "OpenAI", "RAG", "Knowledge Base", "AI Helpdesk",
      "AI Ticket Routing", "AI Document Processing", "AI Chatbot", "AI Reporting",
    ],
    automationScope: "L1 helpdesk, document intake, and reporting fully automated",
    businessBenefits: [
      "50%+ reduction in L1 support tickets through AI-powered self-service",
      "Intelligent ticket routing ensures first-time resolution",
      "Document processing time reduced from days to seconds",
      "24/7 AI helpdesk availability without additional headcount cost",
    ],
    expectedRoi: "50% reduction in L1 support operational cost",
    tags: ["AI", "Automation", "LLM", "Enterprise"],
    diagram: <AiOperationsDiagram />,
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EnterpriseSolutions() {
  return (
    <section id="solutions" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand text-xs font-semibold tracking-widest uppercase block mb-3">
            Featured Solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight mb-4">
            Enterprise Solutions That Drive Measurable Results
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Real-world implementations solving complex enterprise challenges — from identity
            automation and cloud migration to AI-powered operations. Every solution is
            engineered to deliver quantifiable ROI from day one.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative bg-white border border-[#E2EBF0] rounded-2xl p-7 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 flex flex-col"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-pale flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    {project.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold text-brand/70 uppercase tracking-wider block mb-0.5 truncate">
                      {project.category}
                    </span>
                    <h3 className="text-navy font-bold text-sm leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {/* ROI badge */}
                <div className="flex-shrink-0 flex items-center gap-1.5 bg-brand/8 border border-brand/15 text-brand text-[10px] font-semibold px-2.5 py-1.5 rounded-xl">
                  <TrendingUp size={11} />
                  <span className="whitespace-nowrap hidden sm:inline">
                    {project.expectedRoi}
                  </span>
                </div>
              </div>

              {/* Enterprise tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-brand bg-brand/8 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Architecture diagram */}
              {project.diagram && (
                <div className="mb-5">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-1 h-3.5 rounded-full bg-brand" />
                    <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                      Architecture Overview
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#E2EBF0]">
                    {project.diagram}
                  </div>
                </div>
              )}

              {/* Business Problem */}
              <div className="mb-4">
                <span className="text-[10px] font-semibold text-muted uppercase tracking-wider block mb-1.5">
                  Business Problem
                </span>
                <p className="text-muted text-xs leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>

              {/* Solution Overview */}
              <div className="mb-4">
                <span className="text-[10px] font-semibold text-muted uppercase tracking-wider block mb-1.5">
                  Solution
                </span>
                <p className="text-muted text-xs leading-relaxed">
                  {project.solutionOverview}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <span className="text-[10px] font-semibold text-muted uppercase tracking-wider block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium text-navy/60 bg-[#EAF1F4] px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Automation Scope */}
              <div className="flex items-center gap-2 bg-pale rounded-xl px-3.5 py-2.5 mb-4">
                <Zap size={12} className="text-brand flex-shrink-0" />
                <span className="text-[11px] font-medium text-navy/70">
                  {project.automationScope}
                </span>
              </div>

              {/* Business Benefits */}
              <div className="mb-6 flex-1">
                <span className="text-[10px] font-semibold text-muted uppercase tracking-wider block mb-2">
                  Business Benefits
                </span>
                <ul className="space-y-1.5">
                  {project.businessBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="group/btn inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-pale hover:bg-brand text-navy hover:text-white text-xs font-semibold rounded-xl transition-all duration-200 mt-auto"
              >
                Discuss This Solution
                <ArrowRight
                  size={13}
                  className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
                />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          className="mt-16 bg-navy rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-brand text-xs font-semibold tracking-widest uppercase block mb-3">
                Free Engagement
              </span>
              <h3 className="text-white text-2xl lg:text-3xl font-bold leading-tight mb-3">
                Ready to Solve Your Enterprise Challenge?
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Book a free architecture review. We analyse your current environment, identify
                the highest-leverage automation opportunities, and deliver a prioritised
                roadmap — at no cost.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-brand/25"
              >
                <Calendar size={15} />
                Book Architecture Review
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/8 hover:bg-white/14 border border-white/15 text-white text-sm font-semibold rounded-xl transition-all duration-200"
              >
                Request a Consultation
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
