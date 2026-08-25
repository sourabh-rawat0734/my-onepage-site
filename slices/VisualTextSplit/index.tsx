"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export type VisualTextSplitProps =
  SliceComponentProps<Content.VisualTextSplitSlice>;

const VisualTextSplit = ({ slice }: VisualTextSplitProps): ReactNode => {
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
          
          {/* Left Column: Visual / Image Block with Seamless Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
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
              {/* Subtle Backlight */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#00A896]/20 via-emerald-400/15 to-blue-500/20 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {slice.primary.visual_block && (
                <div className="relative z-10 w-full overflow-hidden rounded-3xl p-2">
                  <PrismicNextImage
                    field={slice.primary.visual_block}
                    className="w-full h-auto rounded-2xl object-contain drop-shadow-xl"
                    alt=""
                    priority
                  />
                </div>
              )}
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
            {/* Eyebrow Tag / Preheading */}
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

            {/* Section Heading with Colorful Gradient */}
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

            {/* Styled Section Description */}
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