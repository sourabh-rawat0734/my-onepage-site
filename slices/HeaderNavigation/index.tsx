"use client";

import React, { useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

export type HeaderNavigationProps = SliceComponentProps<Content.HeaderNavigationSlice>;

const HeaderNavigation = ({ slice }: HeaderNavigationProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", email: "" });

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const openModal = () => {
    setIsModalOpen(true);
    setIsOpen(false); // Close mobile menu if open
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

  return (
    <>
      <header
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="sticky top-0 z-40 bg-[#f0fbfa]/90 backdrop-blur-md border-b border-[#d2f3f1]/60 transition-all"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-20 md:h-24">
          
          {/* Responsive Enlarged Logo */}
          <div className="flex items-center gap-3">
            {slice.primary.logo ? (
              <PrismicNextImage
                field={slice.primary.logo}
                alt=""
                className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
                priority
              />
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0e171e]">
                  Sym<span className="text-[#20a09a]">Ventra</span>
                </span>
              </div>
            )}
          </div>

          {/* Enhanced Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-semibold text-[#1c2a38]">
            {slice.primary.nav_links?.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.link}
                className="relative py-1 transition-colors duration-300 hover:text-[#20a09a] group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#20a09a] transition-all duration-300 group-hover:w-full rounded-full" />
              </PrismicNextLink>
            ))}
          </nav>

          {/* Desktop CTA Button Trigger */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={openModal}
              className="rounded-full bg-[#20a09a] hover:bg-[#188c87] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              {slice.primary.cta_button?.text || "Join Pilot"}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-xl text-[#1c2a38] hover:text-[#20a09a] hover:bg-[#d2f3f1]/50 focus:outline-none transition-colors"
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
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#1c2a38] hover:text-[#20a09a] py-2 transition-colors"
                >
                  {item.label}
                </PrismicNextLink>
              ))}
            </nav>
            <div className="pt-4 flex justify-center">
              <button
                type="button"
                onClick={openModal}
                className="w-full max-w-xs text-center rounded-full bg-[#20a09a] hover:bg-[#188c87] px-6 py-3.5 text-base font-semibold text-white transition-all shadow-md active:scale-95"
              >
                {slice.primary.cta_button?.text || "Join Pilot"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Join Pilot Waitlist Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0f172a]/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[32px] shadow-2xl p-6 sm:p-10 z-10 transition-all border border-slate-100 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSubmitted ? (
              <div className="space-y-6 sm:space-y-7">
                {/* Header Text */}
                <div className="space-y-2 pr-6">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f172a] tracking-tight">
                    Join the Pilot Waitlist
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                    Gain exclusive early validation rights into Europe&apos;s largest health database analytics suite.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-slate-800">
                      Full Professional Name
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
                      Corporate / Institution Email
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
                      className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#2b889b] hover:bg-[#207384] active:scale-[0.99] text-white font-semibold text-base sm:text-lg shadow-md transition-all duration-200"
                    >
                      Submit Registry Details
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#20a09a]/10 text-[#20a09a] rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-900">Application Received</h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-slate-700">{formData.fullName}</span>. We have sent a confirmation email to <span className="font-semibold text-slate-700">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-all"
                  >
                    Done
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