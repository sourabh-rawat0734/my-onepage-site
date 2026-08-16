"use client";

import React, { useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

export type HeaderNavigationProps = SliceComponentProps<Content.HeaderNavigationSlice>;

const HeaderNavigation = ({ slice }: HeaderNavigationProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="sticky top-0 z-50 bg-[#f0fbfa]/95 backdrop-blur-md border-b border-[#d2f3f1]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          {slice.primary.logo ? (
            <PrismicNextImage
              field={slice.primary.logo}
              alt=""
              className="h-9 w-auto object-contain"
              priority
            />
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-[#0e171e]">
                Sym<span className="text-[#20a09a]">Ventra</span>
              </span>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-[#1c2a38]">
          {slice.primary.nav_links?.map((item, index) => (
            <PrismicNextLink
              key={index}
              field={item.link}
              className="hover:text-[#20a09a] transition-colors duration-200"
            >
              {item.label}
            </PrismicNextLink>
          ))}
        </nav>

        {/* Desktop CTA Button Link */}
        <div className="hidden lg:flex items-center">
          {slice.primary.cta_button && (
            <PrismicNextLink
              field={slice.primary.cta_button}
              className="rounded-full bg-[#20a09a] hover:bg-[#188c87] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              {slice.primary.cta_button.text || "Join Pilot"}
            </PrismicNextLink>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 rounded-lg text-[#1c2a38] hover:text-[#20a09a] hover:bg-[#d2f3f1]/40 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#f0fbfa] border-b border-[#d2f3f1] px-6 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-4 py-3 text-center">
            {slice.primary.nav_links?.map((item, index) => (
              <PrismicNextLink
                key={index}
                field={item.link}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#1c2a38] hover:text-[#20a09a] py-1 transition-colors"
              >
                {item.label}
              </PrismicNextLink>
            ))}
          </nav>
          {slice.primary.cta_button && (
            <div className="pt-2 flex justify-center">
              <PrismicNextLink
                field={slice.primary.cta_button}
                onClick={() => setIsOpen(false)}
                className="w-full text-center rounded-full bg-[#20a09a] hover:bg-[#188c87] px-6 py-3 text-sm font-semibold text-white transition-all shadow-sm"
              >
                {slice.primary.cta_button.text || "Join Pilot"}
              </PrismicNextLink>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default HeaderNavigation;