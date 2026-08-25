"use client";

import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export type HeadlineCtaImageProps =
  SliceComponentProps<Content.HeadlineCtaImageSlice>;

const HeadlineCtaImage = ({
  slice,
}: HeadlineCtaImageProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/40 to-teal-100/30 py-12 sm:py-16 md:py-20"
    >
      {/* Vibrant Background Ambient Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-300/30 to-emerald-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-300/30 to-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 space-y-5 text-left"
          >
            {/* Eyebrow Tag with Icon */}
            {slice.primary.eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/15 border border-teal-300/60 px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#00A896] uppercase shadow-sm backdrop-blur-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00A896] animate-pulse" />
                <PrismicRichText field={slice.primary.eyebrow} />
              </motion.div>
            )}

            {/* Beautiful Colorful Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B2545] 
                [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#028090] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent
                [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#028090] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
                [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
            >
              {slice.primary.title ? (
                <PrismicRichText field={slice.primary.title} />
              ) : (
                <h1>
                  Personalized health starts with your{" "}
                  <span className="bg-gradient-to-r from-[#00A896] via-[#028090] to-[#0B2545] bg-clip-text text-transparent italic font-serif">
                    microbiome
                  </span>
                </h1>
              )}
            </motion.div>

            {/* Emphasized Colorful Sub-Text */}
            {slice.primary.emphasized_text && (
              <div className="text-base sm:text-lg font-extrabold bg-gradient-to-r from-[#00A896] to-[#028090] bg-clip-text text-transparent leading-snug tracking-wide">
                <PrismicRichText field={slice.primary.emphasized_text} />
              </div>
            )}

            {/* Styled Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-medium tracking-normal [&_strong]:text-[#0B2545] [&_strong]:font-semibold"
            >
              <PrismicRichText field={slice.primary.description} />
            </motion.div>

            {/* Modern Vibrant CTA Button */}
            {slice.primary.primary_cta && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="pt-3"
              >
                <PrismicNextLink
                  field={slice.primary.primary_cta}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#00A896] to-[#028090] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00A896]/25 hover:shadow-xl hover:shadow-[#00A896]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2 tracking-wide">
                    {slice.primary.primary_cta.text || "Learn More"}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                  <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                </PrismicNextLink>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Hero Image with Seamless Blending and Masking */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md lg:max-w-lg group"
            >
              {/* Softened Multicolor Glow Backlight */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00A896]/30 via-emerald-400/20 to-blue-500/30 blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {slice.primary.main_image && (
                <div className="relative z-10 w-full h-auto overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
                  <PrismicNextImage
                    field={slice.primary.main_image}
                    alt=""
                    className="w-full h-auto object-contain mix-blend-multiply"
                    priority
                  />
                </div>
              )}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeadlineCtaImage;