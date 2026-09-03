"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Info, FlaskConical, FileText, ArrowRight, X } from "lucide-react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type MultiColumnFooterProps = SliceComponentProps<Content.MultiColumnFooterSlice> & {
  locale?: "nl" | "en";
};

// Dual Language Modal Content Data Source
const MODAL_DATA = {
  privacy: {
    nl: {
      title: "Privacy & Gegevensbescherming",
      tagline: "Uw gegevens. Uw controle.",
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            Uw privacy is onze hoogste prioriteit. <strong className="font-semibold text-slate-800">SymVentra</strong> verwerkt persoonsgegevens in strikte overeenstemming met de AVG/GDPR.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c8c8] hover:underline">
              Lees ons volledige Privacybeleid <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
    en: {
      title: "Privacy & Data Protection",
      tagline: "Your data. Your control.",
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            Your privacy is our top priority. <strong className="font-semibold text-slate-800">SymVentra</strong> processes personal data in strict compliance with the GDPR.
          </p>
          <div className="pt-2">
            <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c8c8] hover:underline">
              Read our full Privacy Policy <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ),
    },
  },
  disclaimer: {
    nl: {
      title: "Medische & Gezondheidsdisclaimer",
      tagline: "Gezondheid & Begeleiding",
      icon: Info,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            SymVentra biedt op bewijs gebaseerde leefstijladviezen om de algemene gezondheid en het welzijn te ondersteunen.
          </p>
          <p className="p-3.5 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl text-amber-900 font-medium text-xs">
            Ons platform geeft geen medisch advies en is niet bedoeld om medische aandoeningen of ziektes te diagnosticeren, behandelen, genezen of voorkomen.
          </p>
          <p>
            Raadpleeg altijd een gekwalificeerde zorgverlener voor medische vragen.
          </p>
        </div>
      ),
    },
    en: {
      title: "Medical & Health Disclaimer",
      tagline: "Health & Guidance",
      icon: Info,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            SymVentra provides evidence-based lifestyle guidance to support general health and wellness.
          </p>
          <p className="p-3.5 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl text-amber-900 font-medium text-xs">
            Our platform does not provide medical advice and is not intended to diagnose, treat, cure, or prevent any medical condition or disease.
          </p>
          <p>
            Always consult a qualified healthcare professional regarding any medical questions.
          </p>
        </div>
      ),
    },
  },
  research: {
    nl: {
      title: "Onderzoek & Burgerwetenschap",
      tagline: "Ethische Innovatie",
      icon: FlaskConical,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>Deelname aan onze onderzoeksinitiatieven is volledig vrijwillig.</p>
        </div>
      ),
    },
    en: {
      title: "Research & Citizen Science",
      tagline: "Ethical Innovation",
      icon: FlaskConical,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>Participation in our research initiatives is completely voluntary.</p>
        </div>
      ),
    },
  },
  terms: {
    nl: {
      title: "Algemene Voorwaarden",
      tagline: "Gebruikersovereenkomst",
      icon: FileText,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>Welkom bij SymVentra. Door onze diensten te gebruiken, gaat u akkoord met deze voorwaarden.</p>
        </div>
      ),
    },
    en: {
      title: "Terms & Conditions",
      tagline: "User Agreement",
      icon: FileText,
      content: (
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>Welcome to SymVentra. By using our services, you agree to these terms.</p>
        </div>
      ),
    },
  },
};

type ModalType = keyof typeof MODAL_DATA | null;

const MultiColumnFooter = ({ slice, locale = "nl" }: MultiColumnFooterProps): React.JSX.Element => {
  const columns = slice?.primary?.columns || (slice?.items as unknown as typeof slice.primary.columns) || [];
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleLinkClick = (e: React.MouseEvent, label?: string | null) => {
    if (!label) return;
    const cleanLabel = label.trim().toLowerCase();

    // 1. Privacy Matcher
    if (
      cleanLabel.includes("privacy") ||
      cleanLabel.includes("data protection") ||
      cleanLabel.includes("gegevensbescherming")
    ) {
      e.preventDefault();
      setActiveModal("privacy");
    } 
    // 2. Disclaimer / Vrijwaring Matcher (Expanded keywords)
    else if (
      cleanLabel.includes("disclaimer") ||
      cleanLabel.includes("vrijwaring") ||
      cleanLabel.includes("medisch") ||
      cleanLabel.includes("medical") ||
      cleanLabel.includes("voorbehoud")
    ) {
      e.preventDefault();
      setActiveModal("disclaimer");
    } 
    // 3. Terms Matcher
    else if (
      cleanLabel.includes("term") ||
      cleanLabel.includes("condition") ||
      cleanLabel.includes("voorwaarde") ||
      cleanLabel.includes("algemeen")
    ) {
      e.preventDefault();
      setActiveModal("terms");
    } 
    // 4. Research Matcher
    else if (
      cleanLabel.includes("research") ||
      cleanLabel.includes("science") ||
      cleanLabel.includes("onderzoek") ||
      cleanLabel.includes("wetenschap")
    ) {
      e.preventDefault();
      setActiveModal("research");
    }
  };

  const currentLang = locale === "en" ? "en" : "nl";
  const currentModalData = activeModal ? MODAL_DATA[activeModal][currentLang] : null;

  return (
    <>
      <footer className="bg-[#030914] text-slate-300 pt-16 pb-12 px-6 md:px-12 lg:px-20 relative font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-slate-800/80">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {column.heading && (
                <div className="text-[#00c8c8] text-xl font-medium tracking-wide">
                  <PrismicRichText field={column.heading} />
                </div>
              )}

              {(column.type === "navigation_links" || column.type === "custom") && (
                <div className="flex flex-col space-y-2 text-sm">
                  {Array.isArray(column.custom_links) &&
                    column.custom_links.map((item, linkIdx) => {
                      const linkField = (item as { link?: unknown }).link || item;
                      const label =
                        (item as { label?: string; text?: string }).label ||
                        (item as { text?: string }).text ||
                        column.custom_link_label;

                      return (
                        <PrismicNextLink
                          key={linkIdx}
                          field={linkField as Parameters<typeof PrismicNextLink>[0]["field"]}
                          onClick={(e) => handleLinkClick(e, label)}
                          className="text-slate-300 hover:text-white transition-colors duration-200 w-fit cursor-pointer"
                        >
                          {label}
                        </PrismicNextLink>
                      );
                    })}
                </div>
              )}
            </div>
          ))}
        </div>
      </footer>

      {/* Render Modal */}
      {activeModal && currentModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-[#030914]/75 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          />

          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="text-[#00c8c8] p-3 bg-[#00c8c8]/10 rounded-2xl shrink-0">
                <currentModalData.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00c8c8] block">
                  {currentModalData.tagline}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {currentModalData.title}
                </h3>
              </div>
            </div>

            {currentModalData.content}

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md active:scale-95"
              >
                {currentLang === "nl" ? "Sluiten" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiColumnFooter;