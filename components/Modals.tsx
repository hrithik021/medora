"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, Send, CheckCircle, Cpu } from "lucide-react";
import Logo from "./Logo";

// List of non-UAE countries for geographical intelligent detection
const worldCountries = [
  "india", "usa", "america", "united states", "uk", "united kingdom", "britain", "england",
  "saudi", "saudi arabia", "ksa", "qatar", "oman", "kuwait", "bahrain", "egypt", "germany",
  "france", "canada", "australia", "china", "singapore", "pakistan", "bangladesh", "russia",
  "turkey", "spain", "italy", "japan", "brazil", "south africa", "nigeria", "kenya"
];

// Completely out-of-scope topics — catch these FIRST before anything else
const hardBlockKeywords = [
  "weather", "recipe", "cook", "movie", "film", "football", "cricket", "basketball", "nba",
  "crypto", "bitcoin", "ethereum", "tell me a joke", "who won", "song", "lyrics", "game",
  "president of", "capital of", "stock market", "forex", "nfl", "soccer", "hollywood",
  "netflix", "spotify", "pokemon", "minecraft", "tiktok"
];

// Tech/car brands that should trigger a smart brand-comparison redirect
const techBrands = [
  "tesla", "apple", "google", "amazon", "microsoft", "meta", "facebook",
  "nvidia", "samsung", "bmw", "mercedes", "ferrari", "spacex", "openai", "chatgpt"
];

// Common random names to gracefully redirect
const randomPersonNames = [
  "hrithik", "rohit", "rahul", "priya", "arjun", "ananya", "john", "alex",
  "michael", "sarah", "james", "emma", "david", "ahmed", "ali", "mohammed"
];

// Generic greetings
const greetingPatterns = [
  "hi", "hello", "hey", "hii", "helo", "good morning", "good evening", "howdy",
  "how are you", "whats up", "sup", "yo", "hola", "namaste", "salaam"
];

// Medora Intelligence Engine — Strict Domain, Smart Responses
function generateSmartMedoraResponse(rawQuery: string): string {
  const query = rawQuery.toLowerCase().trim();

  // 0. Greetings — warm but immediately redirect to Medora1
  if (greetingPatterns.some((g) => query === g || query.startsWith(g + " ") || query.startsWith(g + "!"))) {
    return `Hello and welcome to Medora1 Intelligence.\n\nI'm here to answer any questions about Medora1's secondary care hospital network, MIHC, our Dubai Investment Park flagship in partnership with Apollo Hospitals, our founders, or our stakeholder model.\n\nWhat would you like to know?`;
  }

  // 1. Hard block — completely unrelated topics
  const isHardBlocked = hardBlockKeywords.some((kw) => query.includes(kw));
  if (isHardBlocked && !query.includes("medora") && !query.includes("hospital") && !query.includes("health")) {
    return `I'm Medora1 Intelligence — dedicated exclusively to Medora1's UAE secondary care model, MIHC, and our Dubai Investment Park hospital network.\n\nI'm not designed to answer general topics outside our healthcare mission. I'd be happy to tell you about:\n• How Medora1 delivers transparent, predictably-priced secondary care\n• Our technology platform, MIHC\n• The Apollo Hospitals partnership at Dubai Investment Park\n• Our founders' track records`;
  }

  // 2. Tech/car brand comparisons — intelligent redirect, never a hard block
  const matchedBrand = techBrands.find((b) => query.includes(b));
  if (matchedBrand) {
    const brandCapitalized = matchedBrand.charAt(0).toUpperCase() + matchedBrand.slice(1);
    return `If ${brandCapitalized} is the reference point — Medora1 is building the same category-defining operation for UAE secondary healthcare.\n\nLike ${brandCapitalized}'s software-defined approach, Medora1 runs hospitals through a proprietary operating system — MIHC — that replaces disconnected, manual administration with real-time clinical intelligence:\n• Patient flow routed in < 12 minutes\n• 100% upfront, pre-agreed billing — no surprise invoices\n• Consistent 29% operating margins\n• Learnings from the 1st hospital automatically applied to the 10th\n\nOur proving ground is the DIP Flagship, built with Apollo Hospitals in Dubai Investment Park. From there, the model scales — emirate by emirate, country by country.\n\nWould you like to know more about MIHC, our stakeholder model, or the DIP facility?`;
  }

  // 3. Random personal names — polite redirect
  const isRandomName = randomPersonNames.some((n) => query === n || query === `who is ${n}` || query.startsWith(n + " ") || (query.length <= n.length + 2 && query.includes(n)));
  if (isRandomName) {
    return `I'm Medora1 Intelligence — I answer questions specifically about Medora1's secondary care model, our Dubai Investment Park hospital, MIHC, and our founding team.\n\nIf you'd like to know about our founders, try asking: "Who are the Medora1 founders?" or "Tell me about Dr. Raza Siddiqui."`;
  }

  // 3.5 Specific query for RAK / Other Emirates hospital presence
  if (query.includes("rak") || query.includes("ras al khaimah")) {
    return `Medora1's secondary-care hospital network is focused strictly on Dubai and Abu Dhabi. Our flagship hospital is located in Dubai Investment Park (DIP) in clinical partnership with Apollo Hospitals, with secondary-care expansion centers in Abu Dhabi. We do not have hospital facilities in Ras Al Khaimah (RAK).`;
  }

  // 4. Geographical / Other Country Routing
  const matchedCountry = worldCountries.find((c) => query.includes(c));
  if (matchedCountry) {
    return `Medora1 is headquartered and operationally anchored in the United Arab Emirates, with our flagship secondary-care hospital in Dubai Investment Park (DIP), in clinical alliance with Apollo Hospitals.\n\nWhile our current facility footprint is purpose-built for the UAE's insured middle-income population across Dubai and Abu Dhabi, our founding team carries deep international reach:\n• Dr. Raza Siddiqui has directed hospital networks across 11 countries with 650+ clinical professionals.\n• Bidhann Chaudary delivered hospital infrastructure under the UAE Presidential Program across 5 countries.\n• Apollo Hospitals brings world-class clinical protocols and cross-border healthcare expertise.\n\nMIHC is engineered so every operational playbook proven in Dubai scales seamlessly to Abu Dhabi and the wider GCC in subsequent phases.`;
  }

  // 5. About Medora1 / General Overview
  if (
    query.includes("about") ||
    query.includes("what is medora") ||
    query.includes("who is medora") ||
    query.includes("tell me about") ||
    query.includes("what do you do") ||
    query.includes("overview") ||
    query.includes("introduction") ||
    (query.includes("healthcare") && query.length < 30)
  ) {
    return `Medora1 is a next-generation secondary-care hospital network in the United Arab Emirates.\n\nOur founding thesis: "Premium is not expensive. They only sound alike."\n\nWe build hospitals for the UAE's insured middle-income population — people who fall between overcrowded government facilities and overpriced private hospitals. Medora1 offers premium secondary care at predictable, pre-agreed prices.\n\nFlagship: Dubai Investment Park (DIP) — built with Apollo Hospitals. 120+ beds, 6 surgical theaters, JCI-accredited protocols.\n\nEngine: MIHC — our proprietary hospital operating platform that delivers < 12 minute triage, 100% upfront billing, and 29% operating margins.\n\nFounders: Dr. Raza Siddiqui, Bidhann Chaudary, and Abhinav Sharma — three executives with combined experience across 11 countries, UAE sovereign mandates, and a 14x hospital scale-up.`;
  }

  // 6. Why secondary care
  if (
    query.includes("why secondary") ||
    query.includes("secondary care") ||
    query.includes("why not primary") ||
    query.includes("why not tertiary") ||
    (query.includes("why") && query.includes("care"))
  ) {
    return `Secondary care sits at the most powerful intersection in UAE healthcare:\n\n• High volume: The UAE's insured middle-income population faces the highest incidence of secondary procedures — orthopedics, general surgery, gynecology, cardiology diagnostics.\n• Underserved: Government hospitals are overcrowded. Private hospitals are overpriced. The insured middle class has no premium option at fair cost.\n• Systemizable: Secondary procedures are repeatable and schedulable — the perfect domain for MIHC to deliver 29% margins.\n• Scalable: Unlike complex tertiary care, secondary hospitals are modular — 120 beds, 6 OR suites, replicable city by city.\n\nThis is why Medora1 focuses exclusively on secondary care — the highest-volume, least-served, most systemizable segment in UAE healthcare.`;
  }

  // 7. Pricing / Cost / Middle-Income Focus / Philosophy
  if (
    query.includes("cost") ||
    query.includes("price") ||
    query.includes("pricing") ||
    query.includes("expensive") ||
    query.includes("middle") ||
    query.includes("cheap") ||
    query.includes("affordable") ||
    query.includes("thesis") ||
    query.includes("philosophy") ||
    query.includes("premium")
  ) {
    return `Medora1 operates on a core clinical thesis: "Premium is not expensive. They only sound alike."\n\n• Expensive is what a hospital charges.\n• Premium is what a patient receives: the right diagnosis, at the right time, from an unhurried clinician, with a transparent bill understood before treatment starts.\n\nThese elements are not inherently costly — they are rare because traditional hospitals rely on manual coordination that doesn't scale. MIHC replaces that manual effort with software-driven precision, compressing overhead so premium care is sustainably priced for the UAE's insured middle segment.\n\nEvery patient at Medora1 receives a 100% pre-agreed bill — no surprises, no post-discharge additions.`;
  }

  // 8. MIHC / Software / Technology
  if (
    query.includes("medora os") ||
    query.includes("operating system") ||
    query.includes("software") ||
    query.includes("platform") ||
    query.includes("technology") ||
    query.includes("tech") ||
    query.includes("telemetry") ||
    query.includes("algorithm") ||
    (query.includes("os") && query.includes("medora"))
  ) {
    return `MIHC — Medora1 Integrated Healthcare Corporation — is the operating company behind the Medora1 hospital network, purpose-built to develop, own, and operate secondary-care hospitals across the UAE in partnership with Apollo Hospitals, starting at Dubai Investment Park.\n\nEvery MIHC facility runs on a single proprietary hospital OS that synchronizes four engines:\n1. Intelligent Triage Engine: Dynamic patient routing — < 12 minute door-to-doctor times.\n2. Diagnostic Velocity Engine: 4.2x faster imaging, pathology, and consultant review turnaround.\n3. Upfront Billing Algorithm: 100% pre-agreed invoices generated before care begins.\n4. Autonomous Margin Telemetry: Real-time OR and consumable tracking — 29% operating margins.\n5. Network Learning Loop: Every lesson from DIP transfers automatically to every subsequent hospital.\n\nThis is what makes Medora1 a scalable system, not just a single hospital.`;
  }

  // 9. DIP Flagship / Apollo Hospitals / Location / Facility
  if (
    query.includes("dip") ||
    query.includes("dubai investment park") ||
    query.includes("apollo") ||
    query.includes("flagship") ||
    query.includes("where") ||
    query.includes("location") ||
    query.includes("facility") ||
    query.includes("hospital") ||
    query.includes("bed")
  ) {
    return `Medora1's flagship hospital is located in Dubai Investment Park (DIP 1), developed in clinical partnership with Apollo Hospitals.\n\nFacility Details:\n• 120+ secondary-care inpatient beds and day recovery suites\n• 6 modular, high-yield surgical theaters\n• 24/7 urgent care and rapid diagnostics (CT, MRI, Ultrasound)\n• Specialties: Orthopedics, General Surgery, Cardiology, Internal Medicine, Gynecology, Pediatrics\n• Accreditations: JCI, TEMOS, ISO quality frameworks\n\nThe DIP facility is both proof and proving ground. Lessons learned here are embedded into MIHC and carried forward to every subsequent Medora1 hospital.`;
  }

  // 10. Founders / Leadership
  if (
    query.includes("founder") ||
    query.includes("leadership") ||
    query.includes("raza") ||
    query.includes("siddiqui") ||
    query.includes("bidhann") ||
    query.includes("chaudary") ||
    query.includes("abhinav") ||
    query.includes("sharma") ||
    query.includes("team") ||
    query.includes("who built") ||
    query.includes("who started") ||
    query.includes("who created")
  ) {
    return `Medora1 is co-founded by three healthcare executives with proven GCC sovereign credentials:\n\n1. Dr. Raza Siddiqui — Former CEO, Arabian Healthcare Group; Executive Director Hospital. Led networks across 11 countries with 650+ clinicians. Direct relationships with IHC, G42, and UAE sovereign health authorities.\n\n2. Bidhann Chaudary — Built Medi Q into a national operator under the UAE Presidential Program across 5 countries. Directed the UAE's nationwide COVID-19 vaccination infrastructure. Built a 200-bed, 50-ICU hospital in 9 days. Exited Medi Q to IHC (Tamouh Holding).\n\n3. Abhinav Sharma — IIM Ahmedabad alumnus. Scaled an integrated surgery platform from USD 6M to USD 84M (14x). Quintupled operating margins from 6% to 29%. Grew from 1 hospital to 13 across 7 specialties.`;
  }

  // 11. Stakeholders / ROI / Investors / Insurers / Doctors

  // 11. Stakeholders / ROI / Investors / Insurers / Doctors
  if (
    query.includes("stakeholder") ||
    query.includes("patient") ||
    query.includes("doctor") ||
    query.includes("nurse") ||
    query.includes("insurer") ||
    query.includes("insurance") ||
    query.includes("investor") ||
    query.includes("roi") ||
    query.includes("margin") ||
    query.includes("return")
  ) {
    return `Medora1 aligns all four healthcare stakeholders through one operating system:\n\n• Patients: Unhurried care, < 12 min triage, and 100% upfront transparent bills — no post-discharge surprise invoices.\n• Doctors & Nurses: +45% time returned to medicine as MIHC automates administrative coordination, scheduling, and logistics.\n• Insurers: -28% lower secondary claims costs, fewer chronic complications, and automated pre-authorizations.\n• Investors: Predictable 29% operating profit margins, validated at DIP and repeatable across each subsequent facility.\n\nAll four stakeholders benefit simultaneously — not at each other's expense.`;
  }

  // 12. Default — specific and helpful, never a generic copy-paste fallback
  return `I'm Medora1 Intelligence. I can give you precise answers on:\n\n• "Why secondary care?" — The market gap Medora1 fills in UAE healthcare\n• "What is MIHC?" — The 4-engine hospital operating platform\n• "Apollo DIP details" — Our flagship facility in Dubai Investment Park\n• "Who are the founders?" — Dr. Raza Siddiqui, Bidhann Chaudary, Abhinav Sharma\n• "Medora1 pricing model" — Premium care at predictable, pre-agreed costs\n• "Stakeholder benefits" — For patients, doctors, insurers, and investors\n\nFeel free to ask in your own words.`;
}


interface ModalsProps {
  assistantOpen: boolean;
  onCloseAssistant: () => void;
  initialQuery?: string;
  scheduleOpen: boolean;
  onCloseSchedule: () => void;
  osModalOpen: boolean;
  onCloseOSModal: () => void;
  founderModalId: string | null;
  onCloseFounderModal: () => void;
}

export default function Modals({
  assistantOpen,
  onCloseAssistant,
  initialQuery = "",
  scheduleOpen,
  onCloseSchedule,
  osModalOpen,
  onCloseOSModal,
  founderModalId,
  onCloseFounderModal,
}: ModalsProps) {
  // AI Assistant State
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([]);
  const [inputVal, setInputVal] = useState("");
  const chatBottomRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (assistantOpen) {
      if (initialQuery) {
        handleSendQuery(initialQuery);
      } else if (messages.length === 0) {
        setMessages([
          {
            sender: "ai",
            text: "Welcome to Medora1 Intelligence. Ask me anything about our Dubai Investment Park flagship, MIHC architecture, our pricing model, clinical specialties, or our leadership team.",
          },
        ]);
      }
    }
  }, [assistantOpen, initialQuery]);

  const handleSendQuery = (query: string) => {
    if (!query.trim()) return;
    const userMsg = query.trim();
    setInputVal("");

    const newMsgs = [...messages, { sender: "user" as const, text: userMsg }];
    setMessages(newMsgs);

    setTimeout(() => {
      const smartReply = generateSmartMedoraResponse(userMsg);
      setMessages((prev) => [...prev, { sender: "ai", text: smartReply }]);
    }, 250);
  };

  // Schedule Form State
  const [submittedSchedule, setSubmittedSchedule] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "DIP Hospital Tour & Facility Briefing",
  });

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSchedule(true);
  };

  return (
    <>
      {/* 1. AI Assistant Modal (Clean Tesla Light Theme) */}
      {assistantOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onCloseAssistant} />
          <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-xl p-6 shadow-2xl z-10 flex flex-col h-[580px] animate-fade-in text-[#171A20]">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-lg bg-[#F4F4F4] text-[#171A20]">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#171A20]">Medora1 Intelligence</h3>
                  <p className="text-xs text-[#5C5E62]">Dedicated AI on Medora1 &amp; UAE Secondary Care</p>
                </div>
              </div>
              <button
                onClick={onCloseAssistant}
                className="p-1.5 rounded hover:bg-gray-100 text-[#5C5E62] hover:text-[#171A20] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Chips */}
            <div className="flex gap-2 py-3 overflow-x-auto no-scrollbar border-b border-gray-100">
              {[
                "Why secondary care?",
                "What is MIHC?",
                "Apollo DIP details",
                "Founders track record",
                "Presence in other countries?",
              ].map((chip, i) => (
                <button
                  key={i}
                  onClick={() => handleSendQuery(chip)}
                  className="whitespace-nowrap px-3 py-1 rounded bg-[#F4F4F4] hover:bg-[#EAEAEA] text-xs text-[#393C41] border border-gray-200 transition cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 text-sm">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-lg p-3.5 leading-relaxed text-xs sm:text-sm whitespace-pre-line ${
                      m.sender === "user"
                        ? "bg-[#3E6AE1] text-white"
                        : "bg-[#F4F4F4] text-[#171A20] border border-gray-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {/* Invisible anchor — scrolled into view on every new message */}
              <div ref={chatBottomRef} />
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendQuery(inputVal);
              }}
              className="pt-3 border-t border-gray-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about Medora1, DIP hospital, or MIHC..."
                className="flex-1 bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2 text-sm text-[#171A20] placeholder-[#5C5E62] focus:outline-none focus:border-[#171A20] transition"
              />
              <button
                type="submit"
                className="h-9 px-4 rounded-[4px] bg-[#171A20] hover:bg-[#393C41] text-white font-medium text-xs transition active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Schedule DIP Flagship Consultation Modal */}
      {scheduleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onCloseSchedule} />
          <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in text-[#171A20]">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5C5E62]">
                  Apollo &times; Medora1
                </span>
                <h3 className="text-xl font-semibold text-[#171A20]">DIP Flagship Engagement</h3>
              </div>
              <button
                onClick={onCloseSchedule}
                className="p-1.5 rounded hover:bg-gray-100 text-[#5C5E62] hover:text-[#171A20] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedSchedule ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-semibold text-[#171A20]">Consultation Request Received</h4>
                <p className="text-xs sm:text-sm text-[#5C5E62]">
                  Thank you, {formData.name || "valued stakeholder"}. Our Dubai executive coordinator will contact you at {formData.phone || "your contact number"} within 4 business hours.
                </p>
                <button
                  onClick={onCloseSchedule}
                  className="px-6 py-2.5 rounded-[4px] bg-[#171A20] text-white font-medium text-xs hover:bg-[#393C41] transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleScheduleSubmit} className="mt-5 space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-[#393C41] font-medium mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. / Mr. / Ms. Name"
                    className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                  />
                </div>

                <div>
                  <label className="block text-[#393C41] font-medium mb-1">Corporate / Personal Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.ae"
                    className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                  />
                </div>

                <div>
                  <label className="block text-[#393C41] font-medium mb-1">UAE / International Phone</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2 text-[#171A20] placeholder-[#8E8E93] focus:outline-none focus:border-[#171A20]"
                  />
                </div>

                <div>
                  <label className="block text-[#393C41] font-medium mb-1">Stakeholder Category</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#F4F4F4] border border-gray-300 rounded-[4px] px-3.5 py-2 text-[#171A20] focus:outline-none focus:border-[#171A20]"
                  >
                    <option value="DIP Hospital Tour & Facility Briefing">DIP Hospital Tour &amp; Facility Briefing</option>
                    <option value="MIHC Demonstration">MIHC Enterprise Demo</option>
                    <option value="Doctor & Clinical Specialty Affiliation">Doctor &amp; Clinical Specialty Affiliation</option>
                    <option value="Insurance Network Partnership">Insurance Network Partnership</option>
                    <option value="Institutional Investor Discussion">Institutional Investor Discussion</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 h-10 rounded-[4px] bg-[#3E6AE1] hover:bg-[#345ac2] text-white font-medium text-sm transition active:scale-[0.98] shadow-sm cursor-pointer flex items-center justify-center"
                >
                  Confirm Engagement Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. MIHC Architecture Modal */}
      {osModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onCloseOSModal} />
          <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto animate-fade-in text-[#171A20]">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#3E6AE1]" />
                <h3 className="text-xl font-semibold text-[#171A20]">MIHC Architectural Blueprint</h3>
              </div>
              <button
                onClick={onCloseOSModal}
                className="p-1.5 rounded hover:bg-gray-100 text-[#5C5E62] hover:text-[#171A20] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm text-[#393C41]">
              <div className="p-4 rounded-lg bg-[#F4F4F4] border border-gray-200">
                <h4 className="text-[#171A20] font-semibold mb-1">The Core Engine</h4>
                <p className="text-xs leading-relaxed text-[#5C5E62]">
                  MIHC replaces legacy, disconnected EHRs with an integrated Hospital Operating Architecture that synchronizes clinical workflows, OR scheduling, inventory consumption, and upfront pricing in real time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#F4F4F4] border border-gray-200">
                  <span className="text-xs font-semibold text-[#171A20] uppercase">1. Patient Flow Engine</span>
                  <p className="text-xs text-[#5C5E62] mt-1">
                    Continuous triage queuing that dynamically routes diagnostics, imaging, and lab work to eliminate clinic dead-time.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#F4F4F4] border border-gray-200">
                  <span className="text-xs font-semibold text-[#171A20] uppercase">2. Margin Telemetry</span>
                  <p className="text-xs text-[#5C5E62] mt-1">
                    Automated cost-tracking down to consumables and procedure minutes, locking in predictable 29% operating margins.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#F4F4F4] border border-gray-200">
                  <span className="text-xs font-semibold text-[#171A20] uppercase">3. Upfront Billing Engine</span>
                  <p className="text-xs text-[#5C5E62] mt-1">
                    Transparent algorithm generating fully understood pre-procedure invoices before patient treatment commences.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#F4F4F4] border border-gray-200">
                  <span className="text-xs font-semibold text-[#171A20] uppercase">4. Network Learning Loop</span>
                  <p className="text-xs text-[#5C5E62] mt-1">
                    Shared operational intelligence across hospitals so each new secondary care facility starts on day 1 with collective knowledge.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={onCloseOSModal}
                className="h-9 px-6 rounded-[4px] bg-[#171A20] hover:bg-[#393C41] text-white font-medium text-xs transition cursor-pointer"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Founder Dossier Modal */}
      {founderModalId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onCloseFounderModal} />
          <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-2xl z-10 animate-fade-in text-[#171A20]">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-[#171A20]">Executive Profile</h3>
              <button
                onClick={onCloseFounderModal}
                className="p-1.5 rounded hover:bg-gray-100 text-[#5C5E62] hover:text-[#171A20] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 text-sm text-[#393C41] space-y-4">
              {founderModalId === "dr-raza" && (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-[#F4F4F4] text-[#171A20] border border-gray-200 flex items-center justify-center font-bold text-lg">
                      RS
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#171A20]">Dr. Raza Siddiqui</h4>
                      <p className="text-xs text-[#5C5E62] font-medium">Co-Founder &bull; GCC Healthcare Veteran</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#393C41]">
                    With over 20 years leading healthcare giants across the Gulf, Dr. Raza served as CEO of Arabian Healthcare Group and Executive Director of Arabian Healthcare Group. His footprint spans 11 countries, 650+ healthcare professionals, and international accreditations under JCI, TEMOS, and ISO.
                  </p>
                  <div className="p-3.5 rounded-lg bg-[#F4F4F4] border border-gray-200 text-xs">
                    <strong className="text-[#171A20] block mb-1">Key Sovereign Relationships:</strong>
                    International Holding Company (IHC), G42, UAE sovereign health authorities, and  Chamber of Commerce Board.
                  </div>
                </>
              )}

              {founderModalId === "bidhann" && (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-[#F4F4F4] text-[#171A20] border border-gray-200 flex items-center justify-center font-bold text-lg">
                      BC
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#171A20]">Bidhann Chaudary</h4>
                      <p className="text-xs text-[#5C5E62] font-medium">Co-Founder &bull; National Mandate Operator</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#393C41]">
                    Bidhann established Medi Q into an elite hospital operator trusted with presidential-scale operations. Delivered hospitals under the UAE Presidential Program across 5 countries, directed the UAE&apos;s nationwide COVID-19 vaccination drive, and constructed a 200-bed, 50-ICU hospital in just 9 days.
                  </p>
                  <div className="p-3.5 rounded-lg bg-[#F4F4F4] border border-gray-200 text-xs">
                    <strong className="text-[#171A20] block mb-1">M&amp;A Milestone:</strong>
                    Led Medi Q through acquisition and exit to IHC (Tamouh Holding).
                  </div>
                </>
              )}

              {founderModalId === "abhinav" && (
                <>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-[#F4F4F4] text-[#171A20] border border-gray-200 flex items-center justify-center font-bold text-lg">
                      AS
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#171A20]">Abhinav Sharma</h4>
                      <p className="text-xs text-[#5C5E62] font-medium">Co-Founder &bull; Scale &amp; Profit Architect</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#393C41]">
                    An alumnus of the prestigious IIM Ahmedabad, Abhinav spearheaded the scale-up of an integrated surgical hospital platform from USD 6M to USD 84M (a 14x multiple). During this growth, he quintupled operating margins from 6% to 29% and expanded the network from 1 hospital to 13 across 7 clinical specialties.
                  </p>
                  <div className="p-3.5 rounded-lg bg-[#F4F4F4] border border-gray-200 text-xs">
                    <strong className="text-[#171A20] block mb-1">Core Expertise:</strong>
                    Secondary Care Network Economics, Surgical Asset Velocity, Clinical P&amp;L Optimization.
                  </div>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
              <button
                onClick={onCloseFounderModal}
                className="h-9 px-6 rounded-[4px] bg-[#171A20] hover:bg-[#393C41] text-white font-medium text-xs transition cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
