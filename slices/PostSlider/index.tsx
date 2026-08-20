import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type PostSliderProps = SliceComponentProps<Content.PostSliderSlice>;

const PostSlider: FC<PostSliderProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-4 max-w-7xl mx-auto font-sans"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {slice.primary.section_title && (
          <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            <PrismicRichText field={slice.primary.section_title} />
          </div>
        )}
        {slice.primary.section_subtitle && (
          <div className="text-slate-600 text-base leading-relaxed">
            <PrismicRichText field={slice.primary.section_subtitle} />
          </div>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative flex items-center gap-4">
        {/* Left Arrow Button */}
        <button
          aria-label="Previous Slide"
          className="hidden md:flex shrink-0 w-12 h-12 bg-red-500 hover:bg-red-600 text-white items-center justify-center rounded transition shadow"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {slice.primary.posts?.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-lg border border-slate-100 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Post Image */}
              {item.image && (
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <PrismicNextImage
                    field={item.image}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Post Title */}
                {item.title && (
                  <div className="text-xl font-serif font-bold text-slate-900 mb-2 line-clamp-2">
                    <PrismicRichText field={item.title} />
                  </div>
                )}

                {/* Meta Info */}
                {item.meta && (
                  <div className="text-xs font-semibold text-red-500 mb-3 uppercase tracking-wide">
                    <PrismicRichText field={item.meta} />
                  </div>
                )}

                {/* Excerpt */}
                {item.excerpt && (
                  <div className="text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed flex-grow">
                    <PrismicRichText field={item.excerpt} />
                  </div>
                )}

                {/* CTA Button */}
                {item.cta && (
                  <div>
                    <PrismicNextLink
                      field={item.cta}
                      className="inline-block px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-full transition-colors"
                    >
                      {item.cta.text || "Read More"}
                    </PrismicNextLink>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          aria-label="Next Slide"
          className="hidden md:flex shrink-0 w-12 h-12 bg-red-500 hover:bg-red-600 text-white items-center justify-center rounded transition shadow"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-2 mt-8">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
      </div>
    </section>
  );
};

export default PostSlider;