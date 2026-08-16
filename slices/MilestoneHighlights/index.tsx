import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ReactNode } from "react";

export type MilestoneHighlightsProps =
  SliceComponentProps<Content.MilestoneHighlightsSlice>;

const MilestoneHighlights = ({ slice }: MilestoneHighlightsProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {slice.primary.headline && (
            <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
              <PrismicRichText field={slice.primary.headline} />
            </div>
          )}

          {slice.primary.description && (
            <div className="text-slate-600 text-sm md:text-base">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </div>

        {/* Horizontally-Arranged Milestone Cards */}
        {slice.primary.milestones && slice.primary.milestones.length > 0 && (
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-teal-200 snap-x snap-mandatory">
            {slice.primary.milestones.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] flex-1 bg-white p-6 md:p-8 rounded-2xl border border-teal-100 shadow-sm flex flex-col justify-between space-y-4 snap-start shrink-0"
              >
                <div className="space-y-3">
                  
                  {/* Date Badge */}
                  {item.date && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold">
                      {item.date}
                    </span>
                  )}

                  {/* Title */}
                  {item.title && (
                    <div className="text-lg font-bold text-[#0B2545]">
                      <PrismicRichText field={item.title} />
                    </div>
                  )}

                  {/* Milestone Description */}
                  {item.milestone_description && (
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <PrismicRichText field={item.milestone_description} />
                    </div>
                  )}
                </div>

                {/* Footer: Author & Action Link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                  {item.author && (
                    <span className="font-medium italic">
                      By {item.author}
                    </span>
                  )}

                  {item.action_link && (
                    <PrismicNextLink
                      field={item.action_link}
                      className="ml-auto inline-flex items-center gap-1 font-semibold text-[#00A896] hover:text-[#028090] transition-colors"
                    >
                      Learn More ↗
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

export default MilestoneHighlights;