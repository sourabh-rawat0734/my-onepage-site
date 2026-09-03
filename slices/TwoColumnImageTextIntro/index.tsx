"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export type TwoColumnImageTextIntroProps =
  SliceComponentProps<Content.TwoColumnImageTextIntroSlice>;

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

const TwoColumnImageTextIntro = ({
  slice,
}: TwoColumnImageTextIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-slate-50 to-teal-50/20 py-16 md:py-24"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Float Animation */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            {slice.primary.main_image && (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative group w-full max-w-lg bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-teal-100 shadow-xl shadow-teal-900/5"
              >
                {/* Fixed Background Hover Glow Alignment */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 overflow-hidden rounded-2xl bg-slate-50">
                  <PrismicNextImage
                    alt=""
                    field={slice.primary.main_image}
                    className="w-full h-auto rounded-2xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Staggered Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Pill Tag Eyebrow with Sparkles Icon */}
            {slice.primary.eyebrow && (
              <motion.div variants={itemVariants} className="inline-flex">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/15 border border-teal-300/60 px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#00A896] uppercase shadow-2xs backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00A896] animate-pulse" />
                  <PrismicRichText field={slice.primary.eyebrow} />
                </div>
              </motion.div>
            )}

            {/* Gradient Title */}
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

            {/* Highlighted Callout Text */}
            {slice.primary.highlighted_text && (
              <motion.div
                variants={itemVariants}
                className="text-lg md:text-xl font-semibold text-[#00A896] leading-snug border-l-4 border-[#00A896] pl-4 py-0.5"
              >
                <PrismicRichText field={slice.primary.highlighted_text} />
              </motion.div>
            )}

            {/* Subheading/Intro Title */}
            {slice.primary.right_title_intro && (
              <motion.div
                variants={itemVariants}
                className="text-lg md:text-xl font-bold text-[#0B2545]"
              >
                <PrismicRichText field={slice.primary.right_title_intro} />
              </motion.div>
            )}

            {/* Styled Body Description */}
            {slice.primary.description && (
              <motion.div
                variants={itemVariants}
                className="text-slate-600 text-base leading-relaxed space-y-4 font-medium [&_strong]:text-[#0B2545] [&_strong]:font-semibold"
              >
                <PrismicRichText field={slice.primary.description} />
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TwoColumnImageTextIntro;