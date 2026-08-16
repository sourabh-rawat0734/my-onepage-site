"use client";

import React, { ReactNode } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { 
  Dna, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  HeartPulse, 
  LucideIcon 
} from "lucide-react";

export type IconHeadlineColumnsProps = SliceComponentProps<Content.IconHeadlineColumnsSlice>;

const DEFAULT_ICONS: LucideIcon[] = [Dna, Sparkles, Activity, ShieldCheck, HeartPulse];

// Dynamic color palettes for vibrant, colorful icon cards
const ICON_THEMES = [
  {
    bg: "bg-teal-500/10 hover:bg-teal-500/20",
    text: "text-teal-600",
    border: "border-teal-200/60",
    shadow: "shadow-teal-500/10",
  },
  {
    bg: "bg-indigo-500/10 hover:bg-indigo-500/20",
    text: "text-indigo-600",
    border: "border-indigo-200/60",
    shadow: "shadow-indigo-500/10",
  },
  {
    bg: "bg-rose-500/10 hover:bg-rose-500/20",
    text: "text-rose-600",
    border: "border-rose-200/60",
    shadow: "shadow-rose-500/10",
  },
  {
    bg: "bg-amber-500/10 hover:bg-amber-500/20",
    text: "text-amber-600",
    border: "border-amber-200/60",
    shadow: "shadow-amber-500/10",
  },
  {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    text: "text-emerald-600",
    border: "border-emerald-200/60",
    shadow: "shadow-emerald-500/10",
  },
];

const IconHeadlineColumns = ({ slice }: IconHeadlineColumnsProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-teal-50/40 py-10 sm:py-14 md:py-16 border-y border-teal-100/60"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {slice.primary.items?.map((item, index) => {
            const FallbackIcon = DEFAULT_ICONS[index % DEFAULT_ICONS.length];
            const theme = ICON_THEMES[index % ICON_THEMES.length];

            return (
              <div
                key={index}
                className="group relative flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Vibrant Colorful Icon Badge */}
                <div
                  className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-2xl ${theme.bg} ${theme.text} ${theme.border} border ${theme.shadow} shadow-md transition-all duration-300 group-hover:scale-110`}
                >
                  {item.icon?.url ? (
                    <PrismicNextImage
                      field={item.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <FallbackIcon className="w-6 h-6 stroke-[2.25]" />
                  )}
                </div>

                {/* Text Group */}
                <div className="space-y-1 flex-1">
                  {/* Headline */}
                  {item.headline && (
                    <h3 className="font-extrabold text-[#0B2545] text-base sm:text-lg leading-tight group-hover:text-[#00A896] transition-colors">
                      {typeof item.headline === "string" ? (
                        item.headline
                      ) : (
                        <PrismicRichText field={item.headline} />
                      )}
                    </h3>
                  )}

                  {/* Subheadline */}
                  {item.subheadline && (
                    <div className="text-xs sm:text-sm font-medium text-slate-600 leading-normal">
                      {typeof item.subheadline === "string" ? (
                        item.subheadline
                      ) : (
                        <PrismicRichText field={item.subheadline} />
                      )}
                    </div>
                  )}

                  {/* Description */}
                  {item.description && (
                    <div className="text-xs italic font-semibold text-[#00A896] pt-0.5">
                      {typeof item.description === "string" ? (
                        item.description
                      ) : (
                        <PrismicRichText field={item.description} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconHeadlineColumns;