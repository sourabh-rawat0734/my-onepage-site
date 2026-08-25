"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export type IconBulletlistIntroProps =
  SliceComponentProps<Content.IconBulletlistIntroSlice>;

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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const IconBulletlistIntro = ({
  slice,
}: IconBulletlistIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-teal-50/40 py-10 sm:py-14 md:py-16"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-3xl space-y-6 sm:space-y-8">
        
        {/* Intro / Heading Text Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          {/* Eyebrow / Small Section Title */}
          {slice.primary.eyebrow && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/15 border border-teal-300/60 px-4 py-1 text-xs font-extrabold tracking-widest text-[#00A896] uppercase shadow-2xs backdrop-blur-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A896] animate-pulse" />
              <PrismicRichText field={slice.primary.eyebrow} />
            </motion.div>
          )}

          {/* Heading with Multi-Color Gradient Effect */}
          {slice.primary.intro_text ? (
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B2545] 
              [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#028090] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent 
              [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#028090] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
              [&_h3]:bg-gradient-to-r [&_h3]:from-[#0B2545] [&_h3]:via-[#028090] [&_h3]:to-[#00A896] [&_h3]:bg-clip-text [&_h3]:text-transparent
              [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
            >
              <PrismicRichText field={slice.primary.intro_text} />
            </div>
          ) : (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#0B2545]">
              Your journey to{" "}
              <span className="bg-gradient-to-r from-[#00A896] via-[#028090] to-[#0B2545] bg-clip-text text-transparent italic font-serif">
                personalized health
              </span>
            </h2>
          )}

          {/* Description Text */}
          {slice.primary.description && (
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium space-y-4 [&_strong]:text-[#0B2545] [&_strong]:font-semibold">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </motion.div>

        {/* Bullet List Cards */}
        {slice.primary.items && slice.primary.items.length > 0 && (
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-3 sm:space-y-4"
          >
            {slice.primary.items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-teal-100/80 shadow-md hover:shadow-xl hover:border-teal-200 transition-all duration-300 overflow-hidden"
              >
                {/* Accent Highlight Bar on Hover */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00A896] to-[#028090] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Bullet Icon / Number Badge */}
                {item.icon?.url ? (
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-2xs mt-0.5 overflow-hidden p-2">
                    <PrismicNextImage
                      field={item.icon}
                      className="w-full h-full object-contain"
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-2xl bg-gradient-to-br from-[#00A896]/15 to-[#028090]/20 border border-teal-200/80 flex items-center justify-center font-black text-xs sm:text-sm text-[#00A896] group-hover:scale-105 group-hover:from-[#00A896] group-hover:to-[#028090] group-hover:text-white transition-all duration-300 shadow-2xs mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                )}

                {/* Content Details */}
                <div className="space-y-1 pr-2">
                  {item.title && (
                    <div className="text-base sm:text-lg font-extrabold text-[#0B2545] tracking-tight group-hover:text-[#00A896] transition-colors duration-200">
                      <PrismicRichText field={item.title} />
                    </div>
                  )}

                  {item.description && (
                    <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium [&_strong]:text-[#0B2545] [&_strong]:font-semibold">
                      <PrismicRichText field={item.description} />
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}

      </div>
    </section>
  );
};

export default IconBulletlistIntro;