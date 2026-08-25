"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Phone, Mail, Globe, ChevronDown, Check } from "lucide-react";

export type HeaderNavigationProps = SliceComponentProps<Content.HeaderNavigationSlice>;

const HeaderNavigation = ({ slice }: HeaderNavigationProps): React.JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });

  // Language State Management
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  // Detect current locale from route (e.g., /nl-nl or /nl)
  const isDutch = pathname.startsWith("/nl");
  const currentLang = isDutch ? "nl" : "en";

  // Track manual active selection
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Sync active item automatically based on current page route
  useEffect(() => {
    if (slice.primary.nav_links && activeIndex === null) {
      const currentIdx = slice.primary.nav_links.findIndex((item) => {
        const linkUrl = (item.link as { url?: string })?.url;
        return linkUrl && pathname === linkUrl;
      });
      setActiveIndex(currentIdx !== -1 ? currentIdx : 0);
    }
  }, [pathname, slice.primary.nav_links, activeIndex]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({ fullName: "", email: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Switch between English and Dutch routes
  const handleLanguageChange = (targetLang: "en" | "nl") => {
    setIsLangOpen(false);

    if (targetLang === "en" && isDutch) {
      // Replace /nl or /nl-nl prefix with /en-us
      const newPath = pathname.replace(/^\/nl(-[a-z]+)?/, "/en-us");
      router.push(newPath === pathname ? "/en-us" : newPath);
    } else if (targetLang === "nl" && !isDutch) {
      // Replace /en or /en-us prefix with /nl-nl
      const newPath = pathname.replace(/^\/en(-[a-z]+)?/, "/nl-nl");
      router.push(newPath === pathname ? "/nl-nl" : newPath);
    }
  };

  return (
    <>
      {/* ================= TOP UTILITY BAR ================= */}
      <div className="bg-[#0b2545] text-slate-200 text-xs sm:text-sm border-b border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-10">
          
          {/* Left: Contact Details */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+31201234567"
              className="inline-flex items-center gap-2 hover:text-[#00A896] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A896]" />
              <span className="font-medium">+31 (0) 20 123 4567</span>
            </a>
            <a
              href="mailto:Info@symventra.nl"
              className="hidden sm:inline-flex items-center gap-2 hover:text-[#00A896] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00A896]" />
              <span className="font-medium">Info@symventra.nl</span>
            </a>
          </div>

          {/* Right: Language Switcher Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors cursor-pointer border border-slate-700"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00A896]" />
              <span>{currentLang === "en" ? "English" : "Nederlands"}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Language Selection Menu */}
            {isLangOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsLangOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-36 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-slate-800 text-xs font-medium animate-in fade-in-50 zoom-in-95">
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full flex items-center justify-between px-3 py-2 hover:bg-slate-50 transition-colors cursor-pointer ${
                      currentLang === "en" ? "text-[#00A896] font-bold bg-[#EBF7F8]/50" : ""
                    }`}
                  >
                    <span>English (EN)</span>
                    {currentLang === "en" && <Check className="w-3.5 h-3.5 text-[#00A896]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("nl")}
                    className={`w-full flex items-center justify-between px-3 py-2 hover:bg-slate-50 transition-colors cursor-pointer ${
                      currentLang === "nl" ? "text-[#00A896] font-bold bg-[#EBF7F8]/50" : ""
                    }`}
                  >
                    <span>Nederlands (NL)</span>
                    {currentLang === "nl" && <Check className="w-3.5 h-3.5 text-[#00A896]" />}
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVIGATION HEADER ================= */}
      <header
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="sticky top-0 z-40 bg-[#f0fbfa]/90 backdrop-blur-md border-b border-[#d2f3f1]/60 transition-all"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-20 md:h-24">
          
          {/* Logo container */}
          <div className="flex items-center shrink-0 py-2">
            {slice.primary.logo ? (
              <PrismicNextImage
                field={slice.primary.logo}
                fallbackAlt=""
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 max-w-[220px] sm:max-w-[260px]"
                priority
              />
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0e171e]">
                  Sym<span className="text-[#20a09a]">Ventra</span>
                </span>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[14px] xl:text-[15px] font-semibold text-[#1c2a38]">
            {slice.primary.nav_links?.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <PrismicNextLink
                  key={index}
                  field={item.link}
                  onClick={() => setActiveIndex(index)}
                  className={`relative py-2 whitespace-nowrap transition-colors duration-300 hover:text-[#20a09a] group ${
                    isActive ? "text-[#20a09a] font-bold" : "text-[#1c2a38]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] bg-[#20a09a] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </PrismicNextLink>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer rounded-full bg-[#20a09a] hover:bg-[#188c87] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
            >
              {slice.primary.cta_button?.text || (currentLang === "nl" ? "Start Pilot" : "Join Pilot")}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="cursor-pointer p-2.5 rounded-xl text-[#1c2a38] hover:text-[#20a09a] hover:bg-[#d2f3f1]/50 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[#f0fbfa] border-b border-[#d2f3f1] px-6 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4 py-3 text-center">
              {slice.primary.nav_links?.map((item, index) => (
                <PrismicNextLink
                  key={index}
                  field={item.link}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-medium py-2 transition-colors ${
                    activeIndex === index ? "text-[#20a09a] font-bold" : "text-[#1c2a38] hover:text-[#20a09a]"
                  }`}
                >
                  {item.label}
                </PrismicNextLink>
              ))}
            </nav>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={openModal}
                className="cursor-pointer w-full max-w-xs text-center rounded-full bg-[#20a09a] hover:bg-[#188c87] px-6 py-3.5 text-base font-semibold text-white transition-all shadow-md active:scale-95"
              >
                {slice.primary.cta_button?.text || (currentLang === "nl" ? "Start Pilot" : "Join Pilot")}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ================= MODAL DIALOG ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[32px] shadow-2xl p-6 sm:p-10 z-10 transition-all border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-5 right-5 sm:top-7 sm:right-7 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <div className="space-y-6 sm:space-y-7">
                <div className="space-y-2 pr-6">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f172a] tracking-tight">
                    {currentLang === "nl" ? "Meld u aan voor de Pilot" : "Join the Pilot Waitlist"}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                    {currentLang === "nl"
                      ? "Krijg vroegtijdig toegang tot Europa's meest geavanceerde gezondheidsdatabase."
                      : "Gain exclusive early validation rights into Europe's largest health database analytics suite."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-slate-800">
                      {currentLang === "nl" ? "Volledige Naam" : "Full Professional Name"}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="Dr. Alex Janssen"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#f5f8f8] border border-transparent focus:border-[#20a09a] focus:bg-white text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-800">
                      {currentLang === "nl" ? "Zakelijk E-mailadres" : "Corporate / Institution Email"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="alex@institution.eu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-[#f5f8f8] border border-transparent focus:border-[#20a09a] focus:bg-white text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none transition-all duration-200"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="cursor-pointer w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#2b889b] hover:bg-[#207384] active:scale-[0.99] text-white font-semibold text-base sm:text-lg shadow-md transition-all duration-200"
                    >
                      {currentLang === "nl" ? "Verstuur Aanvraag" : "Submit Registry Details"}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#20a09a]/10 text-[#20a09a] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">
                  {currentLang === "nl" ? "Aanvraag Ontvangen" : "Application Received"}
                </h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  {currentLang === "nl" ? "Bedankt" : "Thank you"},{" "}
                  <span className="font-semibold text-slate-700">{formData.fullName}</span>.{" "}
                  {currentLang === "nl"
                    ? "We hebben een bevestiging gestuurd naar"
                    : "We have sent a confirmation email to"}{" "}
                  <span className="font-semibold text-slate-700">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="cursor-pointer px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-all"
                  >
                    {currentLang === "nl" ? "Sluiten" : "Done"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNavigation;