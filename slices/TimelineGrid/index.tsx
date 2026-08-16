import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";

export type TimelineGridProps = SliceComponentProps<Content.TimelineGridSlice>;

const TimelineGrid = ({ slice }: TimelineGridProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {slice.primary.section_heading && (
            <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
              <PrismicRichText field={slice.primary.section_heading} />
            </div>
          )}

          {slice.primary.section_description && (
            <div className="text-slate-600 text-sm md:text-base">
              <PrismicRichText field={slice.primary.section_description} />
            </div>
          )}
        </div>

        {/* 3-Column Timeline Grid */}
        {slice.primary.timeline_items && slice.primary.timeline_items.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {slice.primary.timeline_items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl border border-teal-100 shadow-sm flex flex-col space-y-4"
              >
                {/* Date Label Badge */}
                {item.date_label && (
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold">
                      {item.date_label}
                    </span>
                  </div>
                )}

                {/* Event Title */}
                {item.event_title && (
                  <div className="text-xl font-bold text-[#0B2545]">
                    <PrismicRichText field={item.event_title} />
                  </div>
                )}

                {/* Event Description (Supports lists, strong, em, etc.) */}
                {item.event_description && (
                  <div className="text-slate-600 text-sm leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
                    <PrismicRichText field={item.event_description} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TimelineGrid;