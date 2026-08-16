"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

export type FeatureColumnsIntroProps =
  SliceComponentProps<Content.FeatureColumnsIntroSlice>;

const cardBackgrounds = [
  "bg-gradient-to-br from-[#112240] to-[#0a1526] border-slate-700/50",
  "bg-gradient-to-br from-[#113A2F] to-[#0a231c] border-emerald-900/50",
  "bg-gradient-to-br from-[#331436] to-[#1f0c21] border-purple-900/50",
];

// Explicitly typed animation variants to resolve TS2322
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeatureColumnsIntro = ({
  slice,
}: FeatureColumnsIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center space-y-12 relative z-10">
        
        {/* Intro Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {/* Eyebrow / Small Section Title */}
          {slice.primary.eyebrow && (
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block text-xs font-bold tracking-widest text-[#00A896] uppercase bg-[#00A896]/10 px-3 py-1 rounded-full border border-[#00A896]/20"
            >
              {slice.primary.eyebrow}
            </motion.span>
          )}

          {/* Heading with Gradient Text Effect */}
          {slice.primary.heading && (
            <div className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0B2545] [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent">
              <PrismicRichText field={slice.primary.heading} />
            </div>
          )}

          {/* Description */}
          {slice.primary.description && (
            <div className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </motion.div>

        {/* 3-Column Feature Cards with Staggered Fade-in & Hover Effects */}
        {slice.primary.features && slice.primary.features.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {slice.primary.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group relative rounded-2xl p-8 text-white text-left space-y-5 shadow-lg hover:shadow-2xl transition-all duration-300 border backdrop-blur-sm overflow-hidden ${
                  cardBackgrounds[index % cardBackgrounds.length]
                }`}
              >
                {/* Subtle Hover Glow Effect inside card */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Optional Icon Identifier / Symbol */}
                {feature.icon && (
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center text-[#00A896] font-bold text-xl transition-all duration-300 shadow-inner border border-white/10"
                  >
                    {feature.icon}
                  </motion.div>
                )}

                {/* Feature Title */}
                {feature.title && (
                  <div className="text-xl font-bold tracking-wide group-hover:text-[#00A896] transition-colors duration-300">
                    <PrismicRichText field={feature.title} />
                  </div>
                )}

                {/* Feature Description */}
                {feature.feature_description && (
                  <div className="text-sm text-slate-300/90 leading-relaxed space-y-2 group-hover:text-white/90 transition-colors duration-300">
                    <PrismicRichText field={feature.feature_description} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default FeatureColumnsIntro;