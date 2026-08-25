"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion, Variants } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";

export type CoreTeamGridProps = SliceComponentProps<Content.CoreTeamGridSlice>;

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-teal-50/40 py-12 sm:py-16 md:py-20"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          {/* Eyebrow Pill Tag with Sparkles Icon */}
          {slice.primary.eyebrow && (
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-500/15 border border-teal-300/60 px-4 py-1.5 text-xs font-extrabold tracking-widest text-[#00A896] uppercase shadow-2xs backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00A896] animate-pulse" />
                <PrismicRichText field={slice.primary.eyebrow} />
              </div>
            </motion.div>
          )}

          {/* Title with Gradient Effect */}
          {slice.primary.title && (
            <motion.div
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545] 
                [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent 
                [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
                [&_h3]:bg-gradient-to-r [&_h3]:from-[#0B2545] [&_h3]:via-[#113A2F] [&_h3]:to-[#00A896] [&_h3]:bg-clip-text [&_h3]:text-transparent
                [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
            >
              <PrismicRichText field={slice.primary.title} />
            </motion.div>
          )}

          {/* Description Text */}
          {slice.primary.description && (
            <motion.div
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium [&_strong]:text-[#0B2545]"
            >
              <PrismicRichText field={slice.primary.description} />
            </motion.div>
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
                className="group relative flex flex-col justify-between text-center p-6 sm:p-7 rounded-3xl bg-white/80 backdrop-blur-md border border-teal-100/80 shadow-md hover:shadow-xl hover:border-teal-200 transition-all duration-300 space-y-4"
              >
                <div className="space-y-4 flex flex-col items-center">
                  {/* Photo with Glowing Gradient Halo */}
                  {member.photo && (
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#00A896] to-teal-300 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
                    <div className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-3 border-t border-teal-100/80 w-full [&_strong]:text-[#0B2545] [&_strong]:font-semibold">
                      <PrismicRichText field={member.bio} />
                    </div>
                  )}
                </div>

                {/* Optional Social / Contact Links Footer */}
                {(member.linkedin_link || member.email) && (
                  <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-100 w-full text-slate-400">
                    {member.linkedin_link && (
                      <a
                        href={member.linkedin_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn profile for ${member.name || "team member"}`}
                        className="p-1.5 rounded-full hover:bg-teal-50 hover:text-[#00A896] transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name || "team member"}`}
                        className="p-1.5 rounded-full hover:bg-teal-50 hover:text-[#00A896] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
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