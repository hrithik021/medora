"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingPillBar from "@/components/FloatingPillBar";
import Modals from "@/components/Modals";
import { MapPin, Phone, Mail, Building, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantQuery, setAssistantQuery] = useState("");
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [osModalOpen, setOsModalOpen] = useState(false);
  const [founderModalId, setFounderModalId] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    category: "Institutional Investment / Partnership",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#171A20] selection:bg-[#3E6AE1] selection:text-white pb-14">
      <Navbar
        onOpenAssistant={(q) => {
          setAssistantQuery(q || "");
          setAssistantOpen(true);
        }}
        onOpenSchedule={() => setScheduleOpen(true)}
      />

      <section className="pt-28 pb-16 px-6 max-w-4xl mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#5C5E62]">
          Engagement &bull; Dubai Investment Park
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171A20] mt-3">
          Contact Medora1
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#393C41] max-w-2xl mx-auto font-light leading-relaxed">
          Schedule private walkthroughs of our Apollo-partnered flagship facility in Dubai Investment Park or inquire about MIHC deployments.
        </p>
      </section>

      <section className="py-8 px-6 sm:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-xl bg-[#F4F4F4] border border-gray-200">
              <h2 className="text-xl font-semibold text-[#171A20] mb-4">Flagship Location</h2>
              <div className="space-y-4 text-sm text-[#393C41]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#3E6AE1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A20]">Medora1 &times; Apollo Hospitals</strong>
                    <span>Dubai Investment Park (DIP 1), Dubai, United Arab Emirates</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#3E6AE1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A20]">Corporate Office</strong>
                    <span>contact@medora1.ae</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#3E6AE1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#171A20]">Dubai Direct Line</strong>
                    <span>+971 4 000 0000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#F4F4F4] border border-gray-200">
              <h3 className="text-base font-semibold text-[#171A20] mb-2">Institutional Relations</h3>
              <p className="text-xs text-[#5C5E62] leading-relaxed">
                For sovereign wealth funds, regional healthcare operators, and insurance syndicates seeking strategic partnership briefings, our executive leadership is available for scheduled sessions.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-gray-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#171A20]">Inquiry Confirmed</h3>
                  <p className="text-sm text-[#5C5E62] max-w-md mx-auto">
                    Thank you, {form.name}. A member of our Dubai executive leadership office will review your request and reach out within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-semibold text-[#393C41] uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Dr. / Mr. / Ms. Name"
                      className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#393C41] uppercase tracking-wider mb-1">Work Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#393C41] uppercase tracking-wider mb-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#393C41] uppercase tracking-wider mb-1">Organization / Entity</label>
                    <input
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      placeholder="Healthcare Group, Investment Fund, or Insurer"
                      className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#393C41] uppercase tracking-wider mb-1">Inquiry Purpose</label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-[#171A20] focus:outline-none focus:border-[#171A20]"
                    >
                      <option value="DIP Hospital Tour & Facility Briefing">DIP Hospital Tour &amp; Facility Briefing</option>
                      <option value="MIHC Enterprise Demo">MIHC Enterprise Demo</option>
                      <option value="Doctor & Clinical Specialty Affiliation">Doctor &amp; Clinical Specialty Affiliation</option>
                      <option value="Insurance Network Partnership">Insurance Network Partnership</option>
                      <option value="Institutional Investment / Partnership">Institutional Investment / Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#393C41] uppercase tracking-wider mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please share specific requirements or schedule preferences..."
                      className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2.5 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white font-medium text-sm transition active:scale-[0.98] shadow-sm flex items-center justify-center cursor-pointer"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FloatingPillBar
        onOpenAssistant={(q) => {
          setAssistantQuery(q || "");
          setAssistantOpen(true);
        }}
        onOpenSchedule={() => setScheduleOpen(true)}
      />

      <Modals
        assistantOpen={assistantOpen}
        onCloseAssistant={() => setAssistantOpen(false)}
        initialQuery={assistantQuery}
        scheduleOpen={scheduleOpen}
        onCloseSchedule={() => setScheduleOpen(false)}
        osModalOpen={osModalOpen}
        onCloseOSModal={() => setOsModalOpen(false)}
        founderModalId={founderModalId}
        onCloseFounderModal={() => setFounderModalId(null)}
      />

      <Footer />
    </main>
  );
}
