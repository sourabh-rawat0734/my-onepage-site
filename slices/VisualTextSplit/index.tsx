"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export type VisualTextSplitProps =
  SliceComponentProps<Content.VisualTextSplitSlice>;

type SupportedLang = "en" | "nl";

const translations = {
  en: {
    headerTag: "SAME DIET ECOSYSTEM. DISPARATE CLINICAL REALITIES.",
    matrixPill: "Controlled Diet Matrix — 8 Weeks Tracking",
    profileA: {
      title: "Subject Profile A",
      subtitle: "Elevated Bacteroidetes Baseline",
      metricLabel: "Glycemic Control",
      badge: "Optimal Fit",
    },
    profileB: {
      title: "Subject Profile B",
      subtitle: "Prevotella Dominated Ecosystem",
      metricLabel: "Glycemic Control",
      badge: "Inflammatory Response",
    },
  },
  nl: {
    headerTag: "HETZELFDE DIEETECOSYSTEEM. VERSCHILLENDE KLINISCHE REALITEITEN.",
    matrixPill: "Gecontroleerde Dieetmatrix — 8 Weken Tracking",
    profileA: {
      title: "Proefpersoon Profiel A",
      subtitle: "Verhoogde Bacteroidetes Basislijn",
      metricLabel: "Glycemische Controle",
      badge: "Optimale Pasvorm",
    },
    profileB: {
      title: "Proefpersoon Profiel B",
      subtitle: "Gedomineerd Prevotella Ecosysteem",
      metricLabel: "Glycemische Controle",
      badge: "Inflammatoire Respons",
    },
  },
};

const VisualTextSplit = ({ slice }: VisualTextSplitProps): ReactNode => {
  // Fix: Safe language detection for Prismic slice locale
  const rawLang =
    (slice as any).lang ||
    (slice.primary as any)?.lang ||
    (typeof window !== "undefined" ? window.location.pathname.split("/")[1] : "en");

  const isDutch = rawLang.toLowerCase().includes("nl");
  const t = isDutch ? translations.nl : translations.en;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/30 to-slate-50 py-12 sm:py-16 md:py-20"
    >
      {/* Background Ambient Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-300/20 to-emerald-200/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-300/20 to-blue-200/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clinical Realities Comparison Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-center justify-center space-y-3"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md lg:max-w-lg group"
            >
              {/* Card Container Matching Exact Image Layout */}
              <div className="relative z-10 w-full rounded-3xl bg-[#F4F9FB] p-6 sm:p-8 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                
                {/* Header Subtitle */}
                <h2 className="text-center text-xs sm:text-sm font-bold tracking-wider text-[#5A6E85] uppercase mb-6 leading-relaxed">
                  {t.headerTag}
                </h2>

                {/* Matrix Pill Banner with Dashed Border */}
                <div className="w-full py-3.5 px-4 mb-6 rounded-xl bg-[#E8F4F8]/80 border border-dashed border-[#A0C4D3] text-center shadow-xs">
                  <span className="text-sm sm:text-base font-semibold text-[#1F5164]">
                    {t.matrixPill}
                  </span>
                </div>

                {/* Stacked Profiles */}
                <div className="space-y-4">
                  
                  {/* Subject Profile A */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E3EFF3] text-[#2D5A6E] font-bold text-base shrink-0">
                        A
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight">
                          {t.profileA.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-normal text-[#64748B] mt-0.5">
                          {t.profileA.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar & Status */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-xs sm:text-sm font-medium text-[#64748B] shrink-0">
                        {t.profileA.metricLabel}
                      </span>
                      <div className="flex-1 max-w-[200px] h-3.5 rounded-full bg-[#F1F5F9] overflow-hidden">
                        <div className="h-full w-[75%] rounded-full bg-[#2A7B88]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#1F5164] shrink-0 text-right">
                        {t.profileA.badge}
                      </span>
                    </div>
                  </div>

                  {/* Subject Profile B */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold text-base shrink-0">
                        B
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-tight">
                          {t.profileB.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-normal text-[#64748B] mt-0.5">
                          {t.profileB.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar & Status */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-xs sm:text-sm font-medium text-[#64748B] shrink-0">
                        {t.profileB.metricLabel}
                      </span>
                      <div className="flex-1 max-w-[200px] h-3.5 rounded-full bg-[#F1F5F9] overflow-hidden">
                        <div className="h-full w-[35%] rounded-full bg-[#D97706]" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#B45309] shrink-0 text-right leading-tight max-w-[100px]">
                        {t.profileB.badge}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Visual Caption */}
            {slice.primary.visual_caption && (
              <div className="text-xs text-slate-500 text-center italic tracking-wide">
                <PrismicRichText field={slice.primary.visual_caption} />
              </div>
            )}
          </motion.div>

          {/* Right Column: Styled Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            {/* Eyebrow Tag */}
            {slice.primary.section_preheading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/15 border border-teal-300/60 px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#00A896] uppercase shadow-2xs backdrop-blur-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00A896] animate-pulse" />
                <PrismicRichText field={slice.primary.section_preheading} />
              </motion.div>
            )}

            {/* Section Heading */}
            {slice.primary.section_heading && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B2545] 
                  [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#028090] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent
                  [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#028090] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
                  [&_h3]:bg-gradient-to-r [&_h3]:from-[#0B2545] [&_h3]:via-[#028090] [&_h3]:to-[#00A896] [&_h3]:bg-clip-text [&_h3]:text-transparent
                  [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
              >
                <PrismicRichText field={slice.primary.section_heading} />
              </motion.div>
            )}

            {/* Section Description */}
            {slice.primary.section_description && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium tracking-normal space-y-4 [&_strong]:text-[#0B2545] [&_strong]:font-semibold"
              >
                <PrismicRichText field={slice.primary.section_description} />
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisualTextSplit;