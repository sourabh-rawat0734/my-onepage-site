"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { motion, Variants } from "framer-motion";

export type HeadlineDescriptionGraphCtaProps =
  SliceComponentProps<Content.HeadlineDescriptionGraphCtaSlice>;

// Explicitly typed animation variants to prevent TS2322 errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeadlineDescriptionGraphCta = ({
  slice,
}: HeadlineDescriptionGraphCtaProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/20 py-12 sm:py-16 md:py-24"
    >
      {/* Background Decorative Ambient Blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text Content with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow Badge with Pulse Effect */}
            {slice.primary.eyebrow && (
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-50/90 border border-teal-200/80 px-3.5 py-1 text-xs font-bold tracking-wider text-[#00A896] uppercase shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A896] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A896]" />
                  </span>
                  <PrismicRichText field={slice.primary.eyebrow} />
                </div>
              </motion.div>
            )}

            {/* Headline with Gradient Text Accent */}
            {slice.primary.headline && (
              <motion.div
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] leading-[1.15] tracking-tight [&_strong]:bg-gradient-to-r [&_strong]:from-[#0B2545] [&_strong]:via-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent"
              >
                <PrismicRichText field={slice.primary.headline} />
              </motion.div>
            )}

            {/* Highlighted Key Phrase with Glow Accent */}
            {slice.primary.highlighted_phrase && (
              <motion.div
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-[#00A896] leading-snug drop-shadow-xs"
              >
                <PrismicRichText field={slice.primary.highlighted_phrase} />
              </motion.div>
            )}

            {/* Body Description */}
            {slice.primary.description && (
              <motion.div
                variants={itemVariants}
                className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4 font-normal"
              >
                <PrismicRichText field={slice.primary.description} />
              </motion.div>
            )}

            {/* Action Buttons with Hover Sweep & Scale Effect */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-3"
            >
              {slice.primary.primary_cta && (
                <PrismicNextLink
                  field={slice.primary.primary_cta}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center overflow-hidden rounded-full bg-[#00A896] px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#028090] hover:shadow-xl hover:shadow-[#00A896]/20 hover:-translate-y-0.5 active:translate-y-0 text-center"
                >
                  <span className="relative z-10">
                    {slice.primary.primary_cta.text || "Get Started"}
                  </span>
                  {/* Subtle Light Reflection Sweep */}
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                </PrismicNextLink>
              )}

              {slice.primary.secondary_cta && (
                <PrismicNextLink
                  field={slice.primary.secondary_cta}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-[#0B2545] px-8 py-3 text-base font-semibold text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all duration-300 hover:shadow-md text-center"
                >
                  {slice.primary.secondary_cta.text || "Learn More"}
                </PrismicNextLink>
              )}
            </motion.div>

            {/* Footer Note */}
            {slice.primary.note && (
              <motion.p variants={itemVariants} className="text-xs text-slate-500 italic pt-1">
                {slice.primary.note}
              </motion.p>
            )}
          </motion.div>

          {/* Right Column: Interactive Card with Floating & Zoom Effects */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-6"
          >
            {/* Smooth Floating Motion Wrapper */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="relative group bg-gradient-to-br from-[#EBF7F8] to-[#D8F3F5]/60 p-6 sm:p-8 rounded-3xl border border-teal-100/90 shadow-2xl shadow-teal-900/10 backdrop-blur-xs space-y-6"
            >
              {/* Image Glow Ambient Layer */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400/20 to-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Metric Title Header */}
              {slice.primary.metric_title && (
                <div className="relative z-10 text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
                  <PrismicRichText field={slice.primary.metric_title} />
                </div>
              )}

              {/* Visualization Graphic Container with Zoom & Lift Effect */}
              {slice.primary.metric_visualization_image && (
                <div className="relative z-10 rounded-2xl overflow-hidden bg-white p-3 shadow-sm border border-teal-100/80 transition-all duration-500 group-hover:shadow-md group-hover:scale-[1.02]">
                  <PrismicNextImage
                    field={slice.primary.metric_visualization_image}
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    alt=""
                    priority
                  />
                </div>
              )}

              {/* Status Tag List */}
              {slice.primary.tag_list && slice.primary.tag_list.length > 0 && (
                <div className="relative z-10 flex flex-wrap gap-2">
                  {slice.primary.tag_list.map((tag, index) => {
                    const tagStyle =
                      tag.color_scheme === "positive"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200/80"
                        : tag.color_scheme === "warning"
                        ? "bg-amber-50 text-amber-800 border-amber-200/80"
                        : "bg-slate-100 text-slate-700 border-slate-200/80";

                    return (
                      <span
                        key={index}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-2xs ${tagStyle}`}
                      >
                        {tag.label}
                      </span>
                    );
                  })}
                </div>
              )}

              {/* Metrics Grid with Individual Card Lift */}
              {slice.primary.metrics_list &&
                slice.primary.metrics_list.length > 0 && (
                  <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
                    {slice.primary.metrics_list.map((metric, index) => {
                      const metricColor =
                        metric.style === "critical"
                          ? "text-rose-600"
                          : metric.style === "highlighted"
                          ? "text-[#00A896]"
                          : "text-[#0B2545]";

                      return (
                        <div
                          key={index}
                          className="bg-white/90 backdrop-blur-xs p-4 rounded-2xl border border-teal-100/60 shadow-2xs space-y-1 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                          <span className="text-xs font-semibold text-slate-500 block truncate">
                            {metric.label}
                          </span>
                          <div className={`text-xl sm:text-2xl font-black tracking-tight ${metricColor}`}>
                            {metric.value}
                            {metric.unit && (
                              <span className="text-xs sm:text-sm font-normal text-slate-500 ml-1">
                                {metric.unit}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeadlineDescriptionGraphCta;