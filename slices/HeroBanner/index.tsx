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
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/30 to-teal-50/50 py-10 sm:py-14 md:py-16"
    >
      {/* Colorful Ambient Decorative Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 space-y-4 text-left"
          >
            {/* Eyebrow Tag with Icon */}
            {slice.primary.eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-teal-100/70 border border-teal-200/80 px-3.5 py-1 text-xs font-bold tracking-wide text-[#00A896] uppercase shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
                <PrismicRichText field={slice.primary.eyebrow} />
              </motion.div>
            )}

            {/* Vibrant Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545] [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent [&_strong]:text-[#00A896]"
            >
              {slice.primary.title ? (
                <PrismicRichText field={slice.primary.title} />
              ) : (
                <h1>
                  Personalized health starts with your{" "}
                  <span className="bg-gradient-to-r from-[#00A896] to-[#028090] bg-clip-text text-transparent italic font-serif">
                    microbiome
                  </span>
                </h1>
              )}
            </motion.div>

            {/* Emphasized Sub-Text */}
            {slice.primary.emphasized_text && (
              <div className="text-base sm:text-lg font-bold text-[#00A896] leading-snug">
                <PrismicRichText field={slice.primary.emphasized_text} />
              </div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-medium"
            >
              <PrismicRichText field={slice.primary.description} />
            </motion.div>

            {/* Modern CTA Button */}
            {slice.primary.primary_cta && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="pt-2"
              >
                <PrismicNextLink
                  field={slice.primary.primary_cta}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00A896] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#028090] hover:shadow-lg hover:shadow-[#00A896]/20 transition-all duration-200 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {slice.primary.primary_cta.text || "Learn More"}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                </PrismicNextLink>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Floating Hero Image */}
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
              {/* Image Backlight Effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400/20 to-blue-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {slice.primary.main_image && (
                <div className="relative z-10 rounded-3xl overflow-hidden p-2">
                  <PrismicNextImage
                    field={slice.primary.main_image}
                    alt=""
                    className="w-full h-auto object-contain drop-shadow-xl"
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