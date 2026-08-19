"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Info, FlaskConical, ArrowRight, X } from "lucide-react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export type MultiColumnFooterProps =
  SliceComponentProps<Content.MultiColumnFooterSlice>;

// Modal Content Data Source
const MODAL_DATA = {
  privacy: {
    title: "Privacy & Data Protection",
    tagline: "Your data. Your control.",
    icon: ShieldCheck,
    content: (
      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          Your privacy is our highest priority. <strong className="font-semibold text-slate-800">SymVentra</strong> processes personal data in strict accordance with the General Data Protection Regulation (GDPR) and applies privacy and security by design principles.
        </p>
        <p>
          Your data are processed only with your explicit consent and protected using advanced technical and organizational safeguards.
        </p>
        <div className="pt-2 flex flex-col gap-2">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c8c8] hover:underline"
          >
            Read our Full Privacy Policy <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00c8c8] hover:underline"
          >
            Review Cookie Policy <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    ),
  },
  disclaimer: {
    title: "Medical & Health Disclaimer",
    tagline: "Health & Guidance",
    icon: Info,
    content: (
      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          SymVentra provides evidence-informed lifestyle recommendations to support overall health and wellbeing.
        </p>
        <p className="p-3.5 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl text-amber-900 font-medium text-xs">
          Our platform does not provide medical advice and is not intended to diagnose, treat, cure, or prevent any medical condition or disease.
        </p>
        <p>
          Always consult a qualified healthcare professional for medical concerns or before making significant changes to your health, regimen, or treatment plan.
        </p>
      </div>
    ),
  },
  research: {
    title: "Research & Citizen Science",
    tagline: "Ethical Innovation",
    icon: FlaskConical,
    content: (
      <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
        <p>
          Participation in our research initiatives and citizen science projects is completely voluntary.
        </p>
        <p>
          Where applicable, studies are conducted with explicit informed consent, adhering rigorously to high international ethical standards, Institutional Review Board (IRB) guidelines, and GDPR regulations.
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

  // Helper function to check link text and open corresponding modal
  const handleLinkClick = (e: React.MouseEvent, label?: string) => {
    if (!label) return;
    const lowerLabel = label.toLowerCase();

    if (
      lowerLabel.includes("privacy") ||
      lowerLabel.includes("data protection")
    ) {
      e.preventDefault();
      setActiveModal("privacy");
    } else if (lowerLabel.includes("disclaimer")) {
      e.preventDefault();
      setActiveModal("disclaimer");
    } else if (
      lowerLabel.includes("research") ||
      lowerLabel.includes("citizen science") ||
      lowerLabel.includes("science")
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
                      Email
                    </label>
                    <input
                      id={`email-${index}`}
                      type="email"
                      placeholder={column.email_placeholder || "Enter your email"}
                      className="bg-slate-100 text-slate-900 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00c8c8] w-full"
                    />
                    <button
                      type="submit"
                      className="bg-[#3d424d] hover:bg-slate-600 text-white font-medium px-6 py-2 rounded-full w-fit transition-colors duration-200"
                    >
                      {column.submit_button_label || "Subscribe"}
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
              <strong className="text-slate-400">Disclaimer:</strong> SymVentra is a personalized wellness platform providing evidence-informed lifestyle recommendations. It does not provide medical advice, diagnosis or treatment. Personal data are processed in accordance with the GDPR. © {year ?? "2026"} SymVentra B.V. All rights reserved.
            </p>
            <p>
              <strong className="text-slate-400">Copyright © {year ?? "2026"} SymVentra.</strong> All content, software, algorithms, reports, designs and trademarks on this website are the intellectual property of SymVentra B.V. and may not be copied or used without prior written permission. Certain technologies may be protected by patents or pending patent applications.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
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
              aria-label="Close dialog"
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
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiColumnFooter;