import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ReactNode } from "react";

export type TimelineHighlightsProps =
  SliceComponentProps<Content.TimelineHighlightsSlice>;

const TimelineHighlights = ({ slice }: TimelineHighlightsProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {slice.primary.section_title && (
            <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
              <PrismicRichText field={slice.primary.section_title} />
            </div>
          )}

          {slice.primary.section_description && (
            <div className="text-slate-600 text-sm md:text-base">
              <PrismicRichText field={slice.primary.section_description} />
            </div>
          )}
        </div>

        {/* Two Column Events Grid */}
        {slice.primary.milestones && slice.primary.milestones.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slice.primary.milestones.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl border border-teal-100 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  
                  {/* Date Badge */}
                  {event.date && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold">
                      {event.date}
                    </span>
                  )}

                  {/* Title (Plain Text) */}
                  {event.title && (
                    <h3 className="text-xl font-bold text-[#0B2545]">
                      {event.title}
                    </h3>
                  )}

                  {/* Description */}
                  {event.description && (
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <PrismicRichText field={event.description} />
                    </div>
                  )}
                </div>

                {/* Footer: Author & LinkedIn Link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                  {event.author && (
                    <span className="font-medium italic">
                      By {event.author}
                    </span>
                  )}

                  {event.linkedin_button && (
                    <PrismicNextLink
                      field={event.linkedin_button}
                      className="ml-auto inline-flex items-center gap-1 font-semibold text-[#00A896] hover:text-[#028090] transition-colors"
                    >
                      View on LinkedIn ↗
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

export default TimelineHighlights;