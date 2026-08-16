"use client";

import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

export type HeadlineCtaImageProps =
  SliceComponentProps<Content.HeadlineCtaImageSlice>;

const HeadlineCtaImage = ({
  slice,
}: HeadlineCtaImageProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-[#f0fbfa] overflow-hidden py-12 md:py-20 lg:py-28"
    >
      {/* Proportionate rounded background shape in the top-right corner */}
      <div 
        className="absolute -right-16 md:-right-20 lg:-right-24 -top-16 md:-top-20 lg:-top-24 w-[280px] sm:w-[380px] md:w-[480px] lg:w-[580px] h-[280px] sm:h-[380px] md:h-[480px] lg:h-[580px] bg-[#d2f3f1] rounded-full pointer-events-none z-0"
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content: order-2 on mobile, order-1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col items-start space-y-6 text-left"
          >
            {/* Eyebrow / Underlined Text */}
            {slice.primary.eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block border-b-2 border-[#20a09a] pb-0.5 text-xs md:text-sm font-semibold tracking-widest text-[#20a09a] uppercase"
              >
                <PrismicRichText field={slice.primary.eyebrow} />
              </motion.div>
            )}

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif text-[#0e171e] leading-[1.15]"
            >
              {slice.primary.title ? (
                <PrismicRichText field={slice.primary.title} />
              ) : (
                <h1>
                  Personalized health starts with your{" "}
                  <span className="italic font-serif font-bold text-[#27789c]">
                    microbiome
                  </span>
                </h1>
              )}
            </motion.div>

            {/* Emphasized Text */}
            {slice.primary.emphasized_text && (
              <div className="text-xl font-semibold text-[#27789c]">
                <PrismicRichText field={slice.primary.emphasized_text} />
              </div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-600 text-base md:text-lg max-w-lg leading-relaxed font-normal"
            >
              <PrismicRichText field={slice.primary.description} />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              {slice.primary.primary_cta && (
                <PrismicNextLink
                  field={slice.primary.primary_cta}
                  className="inline-flex items-center space-x-2 rounded-full border-2 border-[#20a09a] bg-transparent hover:bg-[#20a09a]/10 px-7 py-2.5 text-sm md:text-base font-semibold text-[#20a09a] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                >
                  <span>{slice.primary.primary_cta.text || "Learn More"}</span>
                  <span className="text-base font-bold">&rsaquo;</span>
                </PrismicNextLink>
              )}
            </motion.div>
          </motion.div>

          {/* Animated Image: order-1 on mobile, order-2 on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end items-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-full max-w-md lg:max-w-lg"
            >
              {slice.primary.main_image && (
                <PrismicNextImage
                  field={slice.primary.main_image}
                  alt=""
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              )}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeadlineCtaImage;