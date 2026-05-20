"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function CetateckLogo({ size = 32 }: { size?: number }) {
  const s = size / 2 - 2;
  const gap = 4;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="0" y="0" width="13" height="13" rx="2.5" fill="#071B2A" />
      <rect x="17" y="0" width="13" height="13" rx="2.5" fill="#2BA6B1" opacity="0.65" />
      <rect x="0" y="17" width="13" height="13" rx="2.5" fill="#2BA6B1" opacity="0.45" />
      <rect x="17" y="17" width="13" height="13" rx="2.5" fill="#2BA6B1" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E2EBF0]"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <CetateckLogo size={32} />
            <span
              className={`text-lg font-bold tracking-widest transition-colors duration-300 ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              CETATECK
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand ${
                  scrolled ? "text-muted" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors duration-200"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-white border-t border-[#E2EBF0] overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-navy text-sm font-medium py-3 border-b border-[#F7FAFC] last:border-0"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="#contact"
                  className="block text-center px-5 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
