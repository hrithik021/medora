"use client";

import React from "react";

export default function Footer() {
  const footerLinks = [
    { label: "Medora1 © 2026", href: "#" },
    { label: "Privacy & Legal", href: "#" },
    { label: "Apollo Partnership", href: "#hospitals" },
    { label: "Contact", href: "#" },
    { label: "News", href: "#" },
    { label: "Get Updates", href: "#" },
    { label: "Locations", href: "#hospitals" },
    { label: "Learn", href: "#philosophy" },
  ];

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#5C5E62] py-14 px-6 text-center select-none border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center space-y-6">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-[#171A20] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[11px] text-[#A2A4A7] max-w-xl">
          Medora1 Healthcare UAE. Built with Apollo Hospitals, in Dubai Investment Park, for secondary care done properly.
        </p>
      </div>
    </footer>
  );
}
