"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export type FeatureColumnsIntroProps =
  SliceComponentProps<Content.FeatureColumnsIntroSlice>;

const cardBackgrounds = [
  "from-[#0B2545] via-[#112240] to-[#0a1526] border-slate-700/60 hover:border-teal-400/50 hover:shadow-teal-900/20",
  "from-[#092e27] via-[#113A2F] to-[#0a231c] border-emerald-800/60 hover:border-emerald-400/50 hover:shadow-emerald-900/20",
  "from-[#28102b] via-[#331436] to-[#1f0c21] border-purple-800/60 hover:border-purple-400/50 hover:shadow-purple-900/20",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const FeatureColumnsIntro = ({
  slice,
}: FeatureColumnsIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-teal-50/40 py-10 sm:py-14 md:py-16"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl text-center space-y-8 sm:space-y-10">
        
        {/* Intro Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto space-y-2.5"
        >
          {/* Eyebrow / Small Section Title */}
          {slice.primary.eyebrow && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full bg-teal-100/70 border border-teal-200/80 px-3.5 py-1 text-xs font-bold tracking-wide text-[#00A896] uppercase shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00A896]" />
              <span>{slice.primary.eyebrow}</span>
            </motion.div>
          )}

          {/* Heading with Gradient Text Effect */}
          {slice.primary.heading && (
            <div className="w-full text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545] [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent">
  <PrismicRichText field={slice.primary.heading} />
</div>
          )}

          {/* Description */}
          {slice.primary.description && (
            <div className="w-full max-w-none text-center text-slate-600 text-sm sm:text-base leading-relaxed font-medium [&>*]:w-full [&>*]:max-w-none">
  <PrismicRichText field={slice.primary.description} />
</div>
          )}
        </motion.div> 

        {/* 3-Column Feature Cards */}
        {slice.primary.features && slice.primary.features.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch"
          >
            {slice.primary.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className={`group relative flex flex-col justify-between h-full w-full rounded-3xl p-6 sm:p-7 text-white text-left shadow-xl hover:shadow-2xl transition-all duration-300 border bg-gradient-to-br overflow-hidden ${
                  cardBackgrounds[index % cardBackgrounds.length]
                }`}
              >
                {/* Full-Card Hover Background Glow Overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 space-y-3.5">
                  {/* Icon Container */}
                  {feature.icon && (
                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 group-hover:bg-[#00A896] group-hover:text-white group-hover:border-[#00A896] flex items-center justify-center text-[#00A896] font-bold text-lg transition-all duration-300 shadow-md">
                      {feature.icon}
                    </div>
                  )}

                  {/* Feature Title */}
                  {feature.title && (
                    <div className="text-lg sm:text-xl font-extrabold tracking-tight group-hover:text-teal-200 transition-colors duration-300">
                      <PrismicRichText field={feature.title} />
                    </div>
                  )}

                  {/* Feature Description */}
                  {feature.feature_description && (
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal group-hover:text-slate-100 transition-colors duration-300">
                      <PrismicRichText field={feature.feature_description} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default FeatureColumnsIntro;