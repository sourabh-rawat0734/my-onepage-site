"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { ShieldCheck, Info, FlaskConical, FileText, ArrowRight, X } from "lucide-react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type MultiColumnFooterProps =
  SliceComponentProps<Content.MultiColumnFooterSlice>;

// Modal Content Data Source (In Dutch)
const MODAL_DATA = {
  privacy: {
    title: "Privacy & Gegevensbescherming",
    tagline: "Uw gegevens. Uw controle.",
    icon: ShieldCheck,
    content: (
      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          Uw privacy is onze hoogste prioriteit. <strong className="font-semibold text-slate-800">SymVentra</strong> verwerkt persoonsgegevens in strikte overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR) en past principes van privacy en beveiliging door ontwerp toe.
        </p>
        <p>
          Uw gegevens worden alleen verwerkt met uw uitdrukkelijke toestemming en beschermd met geavanceerde technische en organisatorische maatregelen.
        </p>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c8c8] hover:underline"
          >
            Lees ons volledige Privacybeleid <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    ),
  },
  disclaimer: {
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
          Raadpleeg altijd een gekwalificeerde zorgverlener voor medische vragen of voordat u ingrijpende wijzigingen aanbrengt in uw gezondheid, regime of behandelplan.
        </p>
      </div>
    ),
  },
  research: {
    title: "Onderzoek & Burgerwetenschap",
    tagline: "Ethische Innovatie",
    icon: FlaskConical,
    content: (
      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          Deelname aan onze onderzoeksinitiatieven en citizen science-projecten is volledig vrijwillig.
        </p>
        <p>
          Waar van toepassing worden onderzoeken uitgevoerd met uitdrukkelijke geïnformeerde toestemming, strikt volgens hoge internationale ethische normen, richtlijnen van de Medisch-Ethische Toetsingscommissie (METC) en de AVG-regelgeving.
        </p>
      </div>
    ),
  },
  terms: {
    title: "Algemene Voorwaarden",
    tagline: "Gebruikersovereenkomst",
    icon: FileText,
    content: (
      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          Welkom bij <strong className="font-semibold text-slate-800">SymVentra</strong>. Door toegang te krijgen tot of gebruik te maken van onze diensten, gaat u akkoord met en bent u gebonden aan deze Algemene Voorwaarden.
        </p>
        <p>
          U stemt ermee in het platform uitsluitend voor rechtmatige doeleinden te gebruiken en in overeenstemming met alle toepasselijke lokale en internationale wetten. Ongeautoriseerd gebruik van onze intellectuele eigendom, inhoud of systeeminfrastructuur is ten strengste verboden.
        </p>
        <p className="p-3.5 bg-slate-100 rounded-xl text-slate-700 text-xs">
          Wij behouden ons het recht voor om deze voorwaarden op elk moment zonder voorafgaande kennisgeving bij te werken of te wijzigen. Voortgezet gebruik van het platform na updates houdt acceptatie in van de gewijzigde voorwaarden.
        </p>
      </div>
    ),
  },
};

type ModalType = keyof typeof MODAL_DATA | null;

const renderSocialIcon = (variant?: string) => {
  switch (variant?.toLowerCase()) {
    case "facebook":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "twitter":
    case "x":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
};

const MultiColumnFooter = ({ slice }: MultiColumnFooterProps): React.JSX.Element => {
  const columns =
    slice?.primary?.columns ||
    (slice?.items as unknown as typeof slice.primary.columns) ||
    [];

  const [year, setYear] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, label?: string | null) => {
    if (!label) return;
    const lowerLabel = label.toLowerCase();

    // Privacy matchers (EN & NL)
    if (
      lowerLabel.includes("privacy") ||
      lowerLabel.includes("data protection") ||
      lowerLabel.includes("gegevensbescherming") ||
      lowerLabel.includes("privacybeleid")
    ) {
      e.preventDefault();
      setActiveModal("privacy");
    } 
    // Disclaimer matchers (EN & NL)
    else if (
      lowerLabel.includes("disclaimer") ||
      lowerLabel.includes("medische") ||
      lowerLabel.includes("voorbehoud")
    ) {
      e.preventDefault();
      setActiveModal("disclaimer");
    } 
    // Terms & Conditions matchers (EN & NL)
    else if (
      lowerLabel.includes("terms") ||
      lowerLabel.includes("condition") ||
      lowerLabel.includes("voorwaarden") ||
      lowerLabel.includes("algemene")
    ) {
      e.preventDefault();
      setActiveModal("terms");
    } 
    // Research & Science matchers (EN & NL)
    else if (
      lowerLabel.includes("research") ||
      lowerLabel.includes("citizen science") ||
      lowerLabel.includes("science") ||
      lowerLabel.includes("onderzoek") ||
      lowerLabel.includes("wetenschap")
    ) {
      e.preventDefault();
      setActiveModal("research");
    }
  };

  const currentModalData = activeModal ? MODAL_DATA[activeModal] : null;

  return (
    <>
      <footer
        data-slice-type={slice?.slice_type}
        data-slice-variation={slice?.variation}
        className="bg-[#030914] text-slate-300 pt-16 pb-12 px-6 md:px-12 lg:px-20 relative font-sans"
      >
        {/* Primary Dynamic Navigation Columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-slate-800/80">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col space-y-4">
              {column.heading && (
                <div className="text-[#00c8c8] text-xl font-medium tracking-wide">
                  <PrismicRichText field={column.heading} />
                </div>
              )}

              {column.description && (
                <div className="text-sm leading-relaxed text-slate-300">
                  <PrismicRichText field={column.description} />
                </div>
              )}

              {column.type === "contact_info" && (
                <div className="space-y-4 text-sm leading-relaxed text-slate-300">
                  {column.address && (
                    <p className="whitespace-pre-line">{column.address}</p>
                  )}
                  {column.secondary_contact && <p>{column.secondary_contact}</p>}

                  {Array.isArray(column.social_icons) && column.social_icons.length > 0 && (
                    <div className="flex items-center space-x-4 pt-2">
                      {column.social_icons.map((social, idx) => {
                        const linkField = (social as { link?: unknown }).link || social;
                        const variant = (social as { variant?: string }).variant;

                        return (
                          <PrismicNextLink
                            key={idx}
                            field={linkField as Parameters<typeof PrismicNextLink>[0]["field"]}
                            className="text-[#00c8c8] hover:text-white transition-colors duration-200"
                          >
                            {renderSocialIcon(variant)}
                          </PrismicNextLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {(column.type === "navigation_links" ||
                column.type === "social_links" ||
                column.type === "custom") && (
                <div className="flex flex-col space-y-2 text-sm">
                  {column.custom_links_heading && (
                    <div className="font-medium text-white mb-1">
                      <PrismicRichText field={column.custom_links_heading} />
                    </div>
                  )}

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

              {column.type === "newsletter_signup" && (
                <div className="flex flex-col space-y-4 text-sm">
                  {column.newsletter_text && (
                    <div className="text-slate-300 leading-relaxed">
                      <PrismicRichText field={column.newsletter_text} />
                    </div>
                  )}

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col space-y-3 pt-2"
                  >
                    <label htmlFor={`email-${index}`} className="text-slate-300 font-medium">
                      E-mailadres
                    </label>
                    <input
                      id={`email-${index}`}
                      type="email"
                      placeholder={column.email_placeholder || "Vul uw e-mailadres in"}
                      className="bg-slate-100 text-slate-900 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00c8c8] w-full"
                    />
                    <button
                      type="submit"
                      className="bg-[#3d424d] hover:bg-slate-600 text-white font-medium px-6 py-2 rounded-full w-fit transition-colors duration-200"
                    >
                      {column.submit_button_label || "Aanmelden"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="max-w-7xl mx-auto pt-8 flex items-center justify-between text-xs text-slate-500">
          <div className="w-full text-left space-y-2">
            <p>
              <strong className="text-slate-400">Disclaimer:</strong> SymVentra is een gepersonaliseerd welzijnsplatform dat op bewijs gebaseerde leefstijladviezen biedt. Het geeft geen medisch advies, diagnose of behandeling. Persoonsgegevens worden verwerkt in overeenstemming met de AVG/GDPR. © {year ?? "2026"} SymVentra B.V. Alle rechten voorbehouden.
            </p>
            <p>
              <strong className="text-slate-400">Auteursrecht © {year ?? "2026"} SymVentra.</strong> Alle inhoud, software, algoritmen, rapporten, ontwerpen en handelsmerken op deze website zijn het intellectuele eigendom van SymVentra B.V. en mogen niet worden gekopieerd of gebruikt zonder voorafgaande schriftelijke toestemming.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll naar boven"
            className="fixed bottom-6 right-6 bg-[#00c8c8] hover:bg-[#00a8a8] text-slate-950 p-3 rounded-full shadow-lg transition-transform duration-200 hover:scale-105 z-40"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4l-8 8h5v8h6v-8h5z" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Modal Popup for Legal / Info Topics */}
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
              aria-label="Venster sluiten"
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
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiColumnFooter;