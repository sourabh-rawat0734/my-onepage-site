import React from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Sparkles, Mail } from "lucide-react";

export type CoreTeamGridProps = SliceComponentProps<Content.CoreTeamGridSlice>;

const CoreTeamGrid = ({ slice }: CoreTeamGridProps): React.JSX.Element => {
  const primary = slice.primary as any;
  const sectionHeading = primary.section_heading || primary.title || primary.heading;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-slate-50 py-16 sm:py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
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

          {sectionHeading && (
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545]">
              {typeof sectionHeading === "string" ? (
                <h2>{sectionHeading}</h2>
              ) : (
                <PrismicRichText field={sectionHeading} />
              )}
            </div>
          )}
        </div>

        {/* Team Grid */}
        {primary.members && primary.members.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {primary.members.map((item: any, index: number) => {
              const memberImage = item.image || item.photo || item.avatar;
              const memberName = item.name || item.member_name;
              const memberBio = item.bio || item.description;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4"
                >
                  {/* Photo */}
                  {memberImage && (
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-teal-50">
                      <PrismicNextImage
                        field={memberImage}
                        fallbackAlt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}

                  <div className="space-y-1">
                    {memberName && (
                      <div className="text-xl font-bold text-[#0B2545]">
                        {typeof memberName === "string" ? (
                          <h3>{memberName}</h3>
                        ) : (
                          <PrismicRichText field={memberName} />
                        )}
                      </div>
                    )}
                    {item.role && (
                      <p className="text-sm font-semibold text-[#00A896]">
                        {typeof item.role === "string" ? item.role : ""}
                      </p>
                    )}
                  </div>

                  {memberBio && (
                    <div className="text-xs text-[#0B2545]/70 leading-relaxed">
                      {typeof memberBio === "string" ? (
                        <p>{memberBio}</p>
                      ) : (
                        <PrismicRichText field={memberBio} />
                      )}
                    </div>
                  )}

                  {/* Links */}
                  {(item.linkedin_link || item.email) && (
                    <div className="flex items-center gap-3 pt-2">
                      {item.linkedin_link && (
                        <PrismicNextLink
                          field={item.linkedin_link}
                          className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-[#00A896] hover:text-white transition-colors"
                          aria-label="LinkedIn Profile"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </PrismicNextLink>
                      )}

                      {item.email && (
                        <a
                          href={`mailto:${item.email}`}
                          className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-[#00A896] hover:text-white transition-colors"
                          aria-label="Send Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreTeamGrid;