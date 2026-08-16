import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ReactNode } from "react";
import { 
  Dna, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  HeartPulse, 
  LucideIcon 
} from "lucide-react";

export type IconHeadlineColumnsProps = SliceComponentProps<Content.IconHeadlineColumnsSlice>;

// Fallback Lucide icons array mapped by index if no Prismic image icon is provided
const DEFAULT_ICONS: LucideIcon[] = [Dna, Sparkles, Activity, ShieldCheck, HeartPulse];

const IconHeadlineColumns = ({ slice }: IconHeadlineColumnsProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#D8F3F5] py-12 md:py-16 border-y border-teal-100/60"
    >
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {slice.primary.items?.map((item, index) => {
            const FallbackIcon = DEFAULT_ICONS[index % DEFAULT_ICONS.length];

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2 transition-transform duration-200 hover:translate-y-[-2px]"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 md:w-11 md:h-11 shrink-0 flex items-center justify-center rounded-2xl bg-[#00A896]/15 text-[#00A896] p-2.5 shadow-sm">
                  {item.icon?.url ? (
                    <PrismicNextImage
                      field={item.icon}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <FallbackIcon className="w-6 h-6 stroke-[2.25]" />
                  )}
                </div>

                {/* Text Group */}
                <div className="space-y-1.5 flex-1">
                  {/* Headline */}
                  {item.headline && (
                    <h3 className="font-extrabold text-[#0B2545] text-lg leading-tight">
                      {typeof item.headline === "string" ? (
                        item.headline
                      ) : (
                        <PrismicRichText field={item.headline} />
                      )}
                    </h3>
                  )}

                  {/* Subheadline */}
                  {item.subheadline && (
                    <div className="text-sm font-medium text-slate-700 leading-normal">
                      {typeof item.subheadline === "string" ? (
                        item.subheadline
                      ) : (
                        <PrismicRichText field={item.subheadline} />
                      )}
                    </div>
                  )}

                  {/* Description */}
                  {item.description && (
                    <div className="text-xs italic font-medium text-[#00A896]">
                      {typeof item.description === "string" ? (
                        item.description
                      ) : (
                        <PrismicRichText field={item.description} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IconHeadlineColumns;