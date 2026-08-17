"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion, Variants } from "framer-motion";

export type CoreTeamGridProps = SliceComponentProps<Content.CoreTeamGridSlice>;

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

const CoreTeamGrid = ({ slice }: CoreTeamGridProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-teal-50/40 py-10 sm:py-14 md:py-16"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-2.5"
        >
          {slice.primary.title && (
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545] [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}

          {slice.primary.description && (
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </motion.div>

        {/* Team Members Grid */}
        {slice.primary.members && slice.primary.members.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            {slice.primary.members.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur-md border border-teal-100/80 shadow-md hover:shadow-xl hover:border-teal-200 transition-all duration-300 space-y-4"
              >
                {/* Photo with Glowing Gradient Halo */}
                {member.photo && (
                  <div className="relative group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#00A896] to-teal-300 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white shadow-md bg-teal-50">
                      <PrismicNextImage
                        field={member.photo}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Name & Role */}
                <div className="space-y-1">
                  {member.name && (
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2545] tracking-tight group-hover:text-[#00A896] transition-colors duration-200">
                      {member.name}
                    </h3>
                  )}

                  {member.role && (
                    <p className="text-xs font-bold text-[#00A896] uppercase tracking-wider">
                      {member.role}
                    </p>
                  )}
                </div>

                {/* Bio */}
                {member.bio && (
                  <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-3 border-t border-teal-100/80 w-full">
                    <PrismicRichText field={member.bio} />
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

export default CoreTeamGrid;