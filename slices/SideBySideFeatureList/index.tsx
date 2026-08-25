"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { motion, Variants } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export type SideBySideFeatureListProps =
  SliceComponentProps<Content.SideBySideFeatureListSlice>;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const SideBySideFeatureList = ({
  slice,
}: SideBySideFeatureListProps): ReactNode => {
  const groupCount = slice.primary.feature_groups?.length || 0;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-slate-50 to-teal-50/20 py-16 md:py-24"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-6xl space-y-12">
        
        {/* Intro Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          {/* Subtitle / Eyebrow Tag with Sparkles Icon */}
          {slice.primary.subtitle && (
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/15 border border-teal-300/60 px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#00A896] uppercase shadow-2xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00A896] animate-pulse" />
                <PrismicRichText field={slice.primary.subtitle} />
              </div>
            </motion.div>
          )}

          {/* Title with Gradient Effect */}
          {slice.primary.title && (
            <motion.div
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B2545] 
                [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#028090] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent 
                [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#028090] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
                [&_h3]:bg-gradient-to-r [&_h3]:from-[#0B2545] [&_h3]:via-[#028090] [&_h3]:to-[#00A896] [&_h3]:bg-clip-text [&_h3]:text-transparent
                [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
            >
              <PrismicRichText field={slice.primary.title} />
            </motion.div>
          )}

          {/* Header Description */}
          {slice.primary.description && (
            <motion.div
              variants={itemVariants}
              className="text-slate-600 text-sm md:text-base leading-relaxed font-medium [&_strong]:text-[#0B2545]"
            >
              <PrismicRichText field={slice.primary.description} />
            </motion.div>
          )}
        </motion.div>

        {/* Feature Groups Cards */}
        {groupCount > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={`grid gap-8 ${
              groupCount === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {slice.primary.feature_groups.map((group, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-teal-100 shadow-xl shadow-teal-900/5 space-y-5 transition-all duration-300 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-900/10"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-teal-400/15 to-blue-400/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Group Heading */}
                {group.group_heading && (
                  <div className="relative z-10 border-b border-teal-100/80 pb-3 flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-[#0B2545] tracking-tight">
                      {group.group_heading}
                    </h3>
                    <CheckCircle2 className="w-5 h-5 text-[#00A896] opacity-80" />
                  </div>
                )}

                {/* Features Rich Text with Custom Stylings */}
                {group.features && (
                  <div className="relative z-10 text-slate-600 text-sm leading-relaxed space-y-3 font-medium [&_strong]:text-[#0B2545] [&_strong]:font-semibold [&_ul]:space-y-2 [&_li]:relative [&_li]:pl-6 [&_li::before]:content-['✓'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-[#00A896] [&_li::before]:font-bold">
                    <PrismicRichText field={group.features} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Highlighted Banner Section Underneath */}
        {slice.primary.highlighted_text && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500/10 via-emerald-500/15 to-teal-500/10 p-6 sm:p-8 border border-teal-200/80 shadow-md text-center backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-teal-300/20 blur-2xl pointer-events-none" />
            
            <div className="relative z-10 text-[#0B2545] font-semibold text-base md:text-lg leading-relaxed max-w-3xl mx-auto [&_strong]:text-[#00A896] [&_strong]:font-extrabold">
              <PrismicRichText field={slice.primary.highlighted_text} />
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default SideBySideFeatureList;