"use client";

import { Globe, Mail, ArrowUpRight } from "lucide-react";

function CetateckLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="0" y="0" width="13" height="13" rx="2.5" fill="#2BA6B1" opacity="0.5" />
      <rect x="17" y="0" width="13" height="13" rx="2.5" fill="#2BA6B1" opacity="0.75" />
      <rect x="0" y="17" width="13" height="13" rx="2.5" fill="#2BA6B1" opacity="0.35" />
      <rect x="17" y="17" width="13" height="13" rx="2.5" fill="#2BA6B1" />
    </svg>
  );
}

const services = [
  "Azure Cloud Engineering",
  "AWS Infrastructure",
  "DevOps & CI/CD",
  "Microsoft 365",
  "Workflow Automation",
  "AI Infrastructure",
];

const company = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <CetateckLogo />
              <span className="text-lg font-bold tracking-widest text-white">
                CETATECK
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Engineering intelligent cloud infrastructure and enterprise
              automation solutions that scale with your organization.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="mailto:hello@cetateck.com"
                className="flex items-center gap-2 text-white/50 hover:text-brand text-sm transition-colors"
              >
                <Mail size={15} />
                hello@cetateck.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                className="flex items-center gap-2 text-white/50 hover:text-brand text-sm transition-colors"
              >
                <Globe size={15} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/45 hover:text-brand text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-white/45 hover:text-brand text-sm transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Cetateck. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Cloud Engineering & Enterprise Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
