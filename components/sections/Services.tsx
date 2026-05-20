"use client";

import { motion, type Variants } from "framer-motion";
import {
  Cloud,
  Settings,
  GitBranch,
  Workflow,
  Users,
  Brain,
  Smartphone,
  Monitor,
  Server,
  Shield,
  LayoutGrid,
} from "lucide-react";

const services = [
  {
    icon: <Cloud size={20} />,
    title: "Cloud Infrastructure",
    description:
      "Design and deploy resilient Azure & AWS architectures — VNets, VPCs, multi-region failover, landing zones, and cost optimization built for enterprise workloads.",
    tags: ["Azure", "AWS", "Terraform"],
  },
  {
    icon: <Server size={20} />,
    title: "Windows & Linux Server Management",
    description:
      "End-to-end server lifecycle management — provisioning, hardening, patch automation, performance tuning, and monitoring for both Windows Server and Linux environments.",
    tags: ["Windows Server", "Linux", "Automation"],
  },
  {
    icon: <Monitor size={20} />,
    title: "RMM Tools & Remote Management",
    description:
      "Unified remote monitoring and management across your endpoint fleet using Kaseya, Datto RMM, Ninja RMM, Veeam backup, and Azure Site Recovery for business continuity.",
    tags: ["Kaseya", "Ninja RMM", "Veeam", "Datto"],
  },
  {
    icon: <Smartphone size={20} />,
    title: "Device Management (MDM)",
    description:
      "Enterprise mobile device management across all platforms. Intune, JAMF, Addigy, and JumpCloud deployments — policy enforcement, zero-touch enrolment, and compliance reporting.",
    tags: ["Intune", "JAMF", "Addigy", "JumpCloud"],
  },
  {
    icon: <Shield size={20} />,
    title: "Cloud Security & SIEM",
    description:
      "Layered security architecture covering threat detection, incident response, and continuous compliance. Deployments across Microsoft Sentinel, Defender XDR, Trend Micro, and Wazuh.",
    tags: ["Sentinel", "Defender", "Trend Micro", "Wazuh"],
  },
  {
    icon: <LayoutGrid size={20} />,
    title: "Productivity Suites",
    description:
      "Full administration and optimisation of enterprise productivity platforms — M365 Exchange & SharePoint, Google Workspace, and Zoho — including migrations, governance, and DLP policies.",
    tags: ["M365 Exchange", "SharePoint", "Google Workspace", "Zoho"],
  },
  {
    icon: <Settings size={20} />,
    title: "M365 Administration",
    description:
      "Full-lifecycle Microsoft 365 management — identity governance, Exchange Online, Teams telephony, SharePoint architecture, and Intune device compliance for enterprise environments.",
    tags: ["Exchange", "Teams", "Intune"],
  },
  {
    icon: <GitBranch size={20} />,
    title: "DevOps & CI/CD",
    description:
      "Build automated delivery pipelines with Azure DevOps, GitHub Actions, and ArgoCD. From code commit to production in minutes — with full observability and rollback capabilities.",
    tags: ["GitHub Actions", "K8s", "Docker"],
  },
  {
    icon: <Workflow size={20} />,
    title: "Workflow Automation",
    description:
      "Eliminate manual processes with n8n and Power Automate. Connect enterprise tools, automate approvals, and orchestrate complex business logic without code bottlenecks.",
    tags: ["n8n", "Power Automate", "Logic Apps"],
  },
  {
    icon: <Users size={20} />,
    title: "HR Management Systems",
    description:
      "Custom internal HR platforms and onboarding automation. Streamline employee lifecycle management with secure, compliant digital workflows and system integrations.",
    tags: ["Onboarding", "HRMS", "Compliance"],
  },
  {
    icon: <Brain size={20} />,
    title: "AI Infrastructure",
    description:
      "Deploy and operationalize AI at enterprise scale. GPU cluster provisioning, MLflow tracking, model serving, and LLM pipeline orchestration on Azure AI and AWS SageMaker.",
    tags: ["LLMs", "MLflow", "Azure AI"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
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
            What We Build
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy leading-tight mb-4">
            Enterprise Services Built for Scale
          </h2>
          <p className="text-muted text-base leading-relaxed">
            From cloud infrastructure to intelligent automation and endpoint
            security — we deliver end-to-end solutions that drive operational
            efficiency and competitive advantage.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white border border-[#E2EBF0] rounded-2xl p-6 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 cursor-default"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-pale flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all duration-300 flex-shrink-0">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-navy font-semibold text-sm mb-2.5 leading-snug">
                {service.title}
              </h3>
              <p className="text-muted text-xs leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-brand bg-brand/8 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
