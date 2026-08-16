import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ReactNode } from "react";

export type MediaSideIntroProps =
  SliceComponentProps<Content.MediaSideIntroSlice>;

const MediaSideIntro = ({ slice }: MediaSideIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Media / Logo */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
            {slice.primary.media && (
              <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm w-full max-w-xs flex items-center justify-center">
                <PrismicNextImage
  field={slice.primary.media}
  className="w-full h-auto max-h-32 object-contain"
  alt=""
/>
              </div>
            )}
          </div>

          {/* Right Column: Text Intro */}
          <div className="md:col-span-8 lg:col-span-9 space-y-4 text-left">
            {/* Title */}
            {slice.primary.title && (
              <div className="text-2xl md:text-4xl font-extrabold text-[#0B2545] leading-tight">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}

            {/* Description */}
            {slice.primary.description && (
              <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-3">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MediaSideIntro;