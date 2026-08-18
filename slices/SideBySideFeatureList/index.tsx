import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { ReactNode } from "react";

export type SideBySideFeatureListProps =
  SliceComponentProps<Content.SideBySideFeatureListSlice>;

const SideBySideFeatureList = ({
  slice,
}: SideBySideFeatureListProps): ReactNode => {
  const groupCount = slice.primary.feature_groups?.length || 0;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-12">
        
        {/* Intro Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          
          {/* Subtitle / Eyebrow */}
          {slice.primary.subtitle && (
            <div className="text-xs font-bold tracking-widest text-[#00A896] uppercase">
              <PrismicRichText field={slice.primary.subtitle} />
            </div>
          )}

          {/* Title */}
          {slice.primary.title && (
            <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}

          {/* Description */}
          {slice.primary.description && (
            <div className="text-slate-600 text-sm md:text-base leading-relaxed">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}

        </div>

        {/* Feature Groups (Conditional Full Width or 2-Column Grid) */}
        {groupCount > 0 && (
          <div
            className={`grid gap-8 ${
              groupCount === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {slice.primary.feature_groups.map((group, index) => (
              <div
                key={index}
                className="bg-white/80 p-8 rounded-2xl border border-teal-100 shadow-sm space-y-4"
              >
                {/* Group Heading (Plain Text) */}
                {group.group_heading && (
                  <h3 className="text-lg font-bold text-[#0B2545] border-b border-teal-100 pb-2">
                    {group.group_heading}
                  </h3>
                )}

                {/* Features (StructuredText with list capability) */}
                {group.features && (
                  <div className="text-slate-700 text-sm leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:list-inside [&_li]:mt-1">
                    <PrismicRichText field={group.features} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Highlighted Section Underneath */}
        {slice.primary.highlighted_text && (
          <div className="bg-[#D8F3F5] p-6 md:p-8 rounded-2xl border border-teal-200 text-center text-[#0B2545] font-semibold text-base md:text-lg">
            <PrismicRichText field={slice.primary.highlighted_text} />
          </div>
        )}

      </div>
    </section>
  );
};

export default SideBySideFeatureList;