import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export type FeaturedUpdatesProps =
  SliceComponentProps<Content.FeaturedUpdatesSlice>;

const FeaturedUpdates = ({ slice }: FeaturedUpdatesProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          
          {/* Eyebrow Pill Tag with "NEWS" */}
          <div className="inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF7F8] border border-teal-300/80 px-5 py-2 text-xs font-black tracking-widest text-[#00A896] uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-[#00A896]" />
              <span>News</span>
            </div>
          </div>

          {/* Title with Gradient Effect */}
          {slice.primary.section_heading && (
            <div
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545] 
                [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent 
                [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
                [&_h3]:bg-gradient-to-r [&_h3]:from-[#0B2545] [&_h3]:via-[#113A2F] [&_h3]:to-[#00A896] [&_h3]:bg-clip-text [&_h3]:text-transparent
                [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-[#028090] [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
            >
              <PrismicRichText field={slice.primary.section_heading} />
            </div>
          )}

          {/* Description Text */}
          {slice.primary.section_description && (
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium [&_strong]:text-[#0B2545]">
              <PrismicRichText field={slice.primary.section_description} />
            </div>
          )}
        </div>

        {/* Two-Column Updates Grid */}
        {slice.primary.updates && slice.primary.updates.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {slice.primary.updates.map((update, index) => (
              <div
                key={index}
                className="group relative bg-[#EBF7F8] p-6 sm:p-8 rounded-3xl border border-teal-100 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  
                  {/* Date Label Badge */}
                  {update.date_label && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold tracking-wide">
                      {update.date_label}
                    </span>
                  )}

                  {/* Title */}
                  {update.title && (
                    <div className="text-xl font-extrabold text-[#0B2545] tracking-tight group-hover:text-[#00A896] transition-colors duration-200">
                      <PrismicRichText field={update.title} />
                    </div>
                  )}

                  {/* Description */}
                  {update.description && (
                    <div className="text-slate-600 text-sm leading-relaxed font-normal [&_strong]:text-[#0B2545] [&_strong]:font-semibold">
                      <PrismicRichText field={update.description} />
                    </div>
                  )}
                </div>

                {/* Footer: Attribution & External Link */}
                <div className="flex items-center justify-between pt-4 border-t border-teal-200/60 text-xs text-slate-500">
                  {update.attribution && (
                    <span className="font-medium italic">
                      By {update.attribution}
                    </span>
                  )}

                  {update.external_link && (
                    <PrismicNextLink
                      field={update.external_link}
                      className="ml-auto inline-flex items-center gap-1 font-semibold text-[#00A896] hover:text-[#028090] transition-colors cursor-pointer"
                    >
                      Read Update ↗
                    </PrismicNextLink>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedUpdates;