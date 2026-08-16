import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ReactNode } from "react";

export type CoreTeamGridProps = SliceComponentProps<Content.CoreTeamGridSlice>;

const CoreTeamGrid = ({ slice }: CoreTeamGridProps): ReactNode => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-12xl mx-auto space-y-3">
          {slice.primary.title && (
            <div className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}

          {slice.primary.description && (
            <div className="text-slate-600 text-sm md:text-base">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}
        </div>

        {/* Team Members Grid */}
        {slice.primary.members && slice.primary.members.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {slice.primary.members.map((member, index) => (
              <div
                key={index}
                className="bg-[#EBF7F8] p-6 rounded-2xl border border-teal-100 flex flex-col items-center text-center space-y-4"
              >
                {/* Photo */}
                {member.photo && (
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#00A896] shadow-sm">
                    <PrismicNextImage alt=""
                      field={member.photo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Name & Role */}
                <div className="space-y-1">
                  {member.name && (
                    <h3 className="text-xl font-bold text-[#0B2545]">
                      {member.name}
                    </h3>
                  )}

                  {member.role && (
                    <p className="text-xs font-semibold text-[#00A896] uppercase tracking-wider">
                      {member.role}
                    </p>
                  )}
                </div>

                {/* Bio */}
                {member.bio && (
                  <div className="text-slate-600 text-sm leading-relaxed pt-2 border-t border-teal-200/50 w-full">
                    <PrismicRichText field={member.bio} />
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

export default CoreTeamGrid;