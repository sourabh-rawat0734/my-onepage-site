import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ReactNode } from "react";

export type IconBulletlistIntroProps =
  SliceComponentProps<Content.IconBulletlistIntroSlice>;

const IconBulletlistIntro = ({
  slice,
}: IconBulletlistIntroProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#EBF7F8] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10">
        
        {/* Intro / Heading Text */}
        {slice.primary.intro_text && (
          <div className="text-center text-slate-500 font-medium text-lg md:text-xl">
            <PrismicRichText field={slice.primary.intro_text} />
          </div>
        )}
 <div className="text-center text-slate-500 font-medium text-lg md:text-xl">Your journey to personalized health</div>
        {/* Bullet List */}
        {slice.primary.items && slice.primary.items.length > 0 && (
          <ul className="space-y-8">
            {slice.primary.items.map((item, index) => (
              <li key={index} className="flex gap-4 items-start">
                
                {/* Icon Image or Fallback Arrow */}
                <div className="w-8 h-8 shrink-0 flex items-center justify-center mt-1">
                  {item.icon ? (
                    <PrismicNextImage
                      field={item.icon}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold">
                      &rarr;
                    </div>
                  )}
                </div>

                {/* Content Group */}
                <div className="space-y-1">
                  {item.title && (
                    <div className="text-xl font-bold text-[#0B2545]">
                      <PrismicRichText field={item.title} />
                    </div>
                  )}

                  {item.description && (
                    <div className="text-slate-600 text-sm md:text-base leading-relaxed">
                      <PrismicRichText field={item.description} />
                    </div>
                  )}
                </div>

              </li>
            ))}
          </ul>
        )}

      </div>
    </section>
  );
};

export default IconBulletlistIntro;