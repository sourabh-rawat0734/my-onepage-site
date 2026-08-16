import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ReactNode } from "react";

export type TwoColumnImageTextIntroProps =
  SliceComponentProps<Content.TwoColumnImageTextIntroSlice>;

const TwoColumnImageTextIntro = ({
  slice,
}: TwoColumnImageTextIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Main Image */}
          <div className="flex justify-center">
            {slice.primary.main_image && (
              <div className="bg-white/60 p-4 rounded-2xl border border-teal-100 shadow-sm w-full max-w-lg">
                <PrismicNextImage alt=""
                  field={slice.primary.main_image}
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            )}
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6">
            
            {/* Eyebrow */}
            {slice.primary.eyebrow && (
              <div className="text-xs font-bold tracking-widest text-[#00A896] uppercase">
                <PrismicRichText field={slice.primary.eyebrow} />
              </div>
            )}

            {/* Title */}
            {slice.primary.title && (
              <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545] leading-tight">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}

            {/* Highlighted Text */}
            {slice.primary.highlighted_text && (
              <div className="text-lg md:text-xl font-semibold text-[#00A896]">
                <PrismicRichText field={slice.primary.highlighted_text} />
              </div>
            )}

            {/* Right Title Intro */}
            {slice.primary.right_title_intro && (
              <div className="text-lg font-bold text-[#0B2545]">
                <PrismicRichText field={slice.primary.right_title_intro} />
              </div>
            )}

            {/* Description */}
            {slice.primary.description && (
              <div className="text-slate-600 text-base leading-relaxed space-y-4">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default TwoColumnImageTextIntro;