"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { HelpCircle, Globe, User, Menu, X, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenAssistant: (query?: string) => void;
  onOpenSchedule: () => void;
}

export default function Navbar({ onOpenAssistant, onOpenSchedule }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "AR">("EN");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Hospitals", href: "/hospitals" },
    { name: "MIHC", href: "/mihc" },
    { name: "Stakeholders", href: "/stakeholders" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ];

  const drawerItems = [
    { label: "DIP Flagship Hospital (Apollo)", href: "/hospitals" },
    { label: "MIHC Operating Platform", href: "/mihc" },
    { label: "Four Stakeholders Value System", href: "/stakeholders" },
    { label: "Executive Governance & Founders", href: "/leadership" },
    { label: "Clinical Specialties", href: "/hospitals" },
    { label: "Insurance Networks", href: "/stakeholders" },
    { label: "Investor Relations", href: "/stakeholders" },
    { label: "Schedule DIP Tour / Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-14 flex items-center transition-colors duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md text-[#171A20] border-b border-gray-200 shadow-sm"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white"
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Left Brand Logo */}
          <Link href="/" className="flex items-center tracking-widest transition-opacity hover:opacity-80">
            <Logo />
          </Link>

          {/* Middle Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 rounded text-[14px] font-medium transition-colors hover:bg-black/10 dark:hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              onClick={() => onOpenAssistant("What is Medora1?")}
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer"
              title="Help & Questions"
              aria-label="Help"
            >
              <HelpCircle className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition flex items-center cursor-pointer"
                title="Region / Language"
                aria-label="Region"
              >
                <Globe className="w-5 h-5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white shadow-xl rounded-md py-1 border border-gray-200 text-xs text-gray-900 z-50">
                  <button
                    onClick={() => {
                      setLanguage("EN");
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${
                      language === "EN" ? "font-bold" : ""
                    }`}
                  >
                    UAE (English)
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("AR");
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 hover:bg-gray-100 ${
                      language === "AR" ? "font-bold" : ""
                    }`}
                  >
                    الإمارات (العربية)
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition hidden sm:flex cursor-pointer"
              title="Investor & Client Portal"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="px-3 py-1.5 rounded text-[14px] font-medium transition-colors hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Tesla Slide-Over Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-white h-full p-8 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto text-gray-900 animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-6">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Logo />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded hover:bg-black/5 transition cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 flex flex-col space-y-1">
                {drawerItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between text-[15px] font-medium text-gray-800 hover:bg-black/5 px-4 py-2.5 rounded transition"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-xs text-gray-500">
              <p className="font-semibold text-gray-900">Medora1 Healthcare UAE</p>
              <p className="mt-1">Accessible premium secondary care.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
