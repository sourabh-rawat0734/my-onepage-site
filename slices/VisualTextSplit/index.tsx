import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ReactNode } from "react";

export type VisualTextSplitProps =
  SliceComponentProps<Content.VisualTextSplitSlice>;

const VisualTextSplit = ({ slice }: VisualTextSplitProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Visual / Image Block */}
          <div className="flex flex-col items-center justify-center space-y-3">
            {slice.primary.visual_block && (
              <div className="bg-white/60 p-4 rounded-2xl border border-teal-100 shadow-sm w-full">
                <PrismicNextImage
  field={slice.primary.visual_block}
  className="w-full h-auto rounded-xl object-contain"
  alt=""
/>
              </div>
            )}

            {/* Visual Caption */}
            {slice.primary.visual_caption && (
              <div className="text-xs text-slate-500 text-center italic">
                <PrismicRichText field={slice.primary.visual_caption} />
              </div>
            )}
          </div>

          {/* Right Column: Textual Content */}
          <div className="space-y-6">
            
            {/* Section Preheading */}
            {slice.primary.section_preheading && (
              <div className="text-xs font-bold tracking-widest text-[#00A896] uppercase">
                <PrismicRichText field={slice.primary.section_preheading} />
              </div>
            )}

            {/* Section Heading */}
            {slice.primary.section_heading && (
              <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545] leading-tight">
                <PrismicRichText field={slice.primary.section_heading} />
              </div>
            )}

            {/* Section Description */}
            {slice.primary.section_description && (
              <div className="text-slate-600 text-base leading-relaxed space-y-4">
                <PrismicRichText field={slice.primary.section_description} />
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualTextSplit;