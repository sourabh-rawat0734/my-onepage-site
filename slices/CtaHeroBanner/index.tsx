import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ReactNode } from "react";
export type CtaHeroBannerProps =
  SliceComponentProps<Content.CtaHeroBannerSlice>;

const CtaHeroBanner = ({ slice }: CtaHeroBannerProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#0B2545] text-white py-20 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center space-y-6">
        
        {/* Eyebrow (Plain Text) */}
        {slice.primary.eyebrow && (
          <span className="text-xs font-bold tracking-widest text-[#00A896] uppercase block">
            {slice.primary.eyebrow}
          </span>
        )}

        {/* Title */}
        {slice.primary.title && (
          <div className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            <PrismicRichText field={slice.primary.title} />
          </div>
        )}

        {/* Description */}
        {slice.primary.description && (
          <div className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed space-y-4">
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {slice.primary.primary_cta && (
            <PrismicNextLink
              field={slice.primary.primary_cta}
              className="rounded-full bg-[#00A896] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#028090] transition-colors shadow-lg"
            >
              {slice.primary.primary_cta.text || "Get Started"}
            </PrismicNextLink>
          )}

          {slice.primary.secondary_cta && (
            <PrismicNextLink
              field={slice.primary.secondary_cta}
              className="rounded-full border-2 border-white/80 px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#0B2545] transition-colors"
            >
              {slice.primary.secondary_cta.text || "Learn More"}
            </PrismicNextLink>
          )}
        </div>

      </div>
    </section>
  );
};

export default CtaHeroBanner;