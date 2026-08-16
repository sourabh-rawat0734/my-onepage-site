import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ReactNode } from "react";

export type MilestoneTimelineProps =
  SliceComponentProps<Content.MilestoneTimelineSlice>;

const MilestoneTimeline = ({ slice }: MilestoneTimelineProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {slice.primary.section_heading && (
            <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
              <PrismicRichText field={slice.primary.section_heading} />
            </div>
          )}

          {slice.primary.section_subheading && (
            <div className="text-slate-600 text-sm md:text-base">
              <PrismicRichText field={slice.primary.section_subheading} />
            </div>
          )}
        </div>

        {/* Milestones Grid (Two-Column Layout) */}
        {slice.primary.milestones && slice.primary.milestones.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {slice.primary.milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-[#EBF7F8] p-6 md:p-8 rounded-2xl border border-teal-100 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  
                  {/* Date Badge */}
                  {milestone.date && (
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold">
                      {milestone.date}
                    </span>
                  )}

                  {/* Title */}
                  {milestone.title && (
                    <div className="text-xl font-bold text-[#0B2545]">
                      <PrismicRichText field={milestone.title} />
                    </div>
                  )}

                  {/* Description */}
                  {milestone.description && (
                    <div className="text-slate-600 text-sm leading-relaxed">
                      <PrismicRichText field={milestone.description} />
                    </div>
                  )}
                </div>

                {/* Footer: Attribution & External Link */}
                <div className="flex items-center justify-between pt-4 border-t border-teal-200/60 text-xs text-slate-500">
                  {milestone.attribution && (
                    <span className="font-medium italic">
                      — {milestone.attribution}
                    </span>
                  )}

                  {milestone.external_link && (
                    <PrismicNextLink
                      field={milestone.external_link}
                      className="ml-auto flex items-center gap-1 font-semibold text-[#00A896] hover:underline"
                    >
                      View Link ↗
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

export default MilestoneTimeline;