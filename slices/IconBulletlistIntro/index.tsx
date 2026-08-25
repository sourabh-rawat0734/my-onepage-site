import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Sparkles } from "lucide-react";

export type IconBulletlistIntroProps =
  SliceComponentProps<Content.IconBulletlistIntroSlice>;

const IconBulletlistIntro = ({ slice }: IconBulletlistIntroProps): React.JSX.Element => {
  // Cast primary to 'any' to allow accessing fallback properties safely across variations
  const primary = slice.primary as any;

  // Resolves whether the model uses heading, title, or section_heading
  const headingField = primary.heading || primary.title || primary.section_heading;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 sm:py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl space-y-8 text-center">
        
        {/* Eyebrow */}
        {primary.eyebrow && (
          <div className="inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF7F8] border border-teal-300/80 px-5 py-2 text-xs font-black tracking-widest text-[#00A896] uppercase shadow-xs">
              <Sparkles className="w-4 h-4 text-[#00A896]" />
              {typeof primary.eyebrow === "string" ? (
                <span>{primary.eyebrow}</span>
              ) : (
                <PrismicRichText field={primary.eyebrow} />
              )}
            </div>
          </div>
        )}

        {/* Heading */}
        {headingField && (
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545]">
            {typeof headingField === "string" ? (
              <h2>{headingField}</h2>
            ) : (
              <PrismicRichText field={headingField} />
            )}
          </div>
        )}

        {/* Description */}
        {primary.description && (
          <div className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {typeof primary.description === "string" ? (
              <p>{primary.description}</p>
            ) : (
              <PrismicRichText field={primary.description} />
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default IconBulletlistIntro;