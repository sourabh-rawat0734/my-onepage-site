"use client";

import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type PostSliderProps = SliceComponentProps<Content.PostSliderSlice>;

const PostSlider: FC<PostSliderProps> = ({ slice }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans"
    >
      {/* Section Header */}
      {(slice.primary.section_title || slice.primary.section_subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {slice.primary.section_title && (
            <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight mb-4">
              <PrismicRichText field={slice.primary.section_title} />
            </div>
          )}
          {slice.primary.section_subtitle && (
            <div className="text-slate-600 text-base sm:text-lg leading-relaxed">
              <PrismicRichText field={slice.primary.section_subtitle} />
            </div>
          )}
        </div>
      )}

      {/* Slider Wrapper */}
      <div className="relative group/slider">
        {/* Navigation - Left Arrow */}
        <button
          aria-label="Previous Slide"
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white text-slate-800 hover:text-rose-600 rounded-full items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border border-slate-100 backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Swiper Carousel */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          className="w-full !pb-2"
        >
          {slice.primary.posts?.map((item, index) => (
            <SwiperSlide key={index} className="h-auto flex">
              <article className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-full h-full">
                {/* Post Image with Hover Zoom */}
                {item.image && (
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <PrismicNextImage alt=""
                      field={item.image}
                      className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Card Content Container */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  {item.meta && (
                    <div className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-2.5">
                      <PrismicRichText field={item.meta} />
                    </div>
                  )}

                  {item.title && (
                    <div className="text-xl font-serif font-bold text-slate-900 group-hover:text-rose-600 transition-colors duration-200 line-clamp-2 mb-3 leading-snug">
                      <PrismicRichText field={item.title} />
                    </div>
                  )}

                  {item.excerpt && (
                    <div className="text-sm text-slate-600 line-clamp-3 leading-relaxed flex-grow mb-6">
                      <PrismicRichText field={item.excerpt} />
                    </div>
                  )}

                  {item.cta && (
                    <div className="pt-2 border-t border-slate-100 mt-auto">
                      <PrismicNextLink
                        field={item.cta}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-rose-600 transition-colors uppercase tracking-wider pt-2"
                      >
                        <span>{item.cta.text || "Read More"}</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </PrismicNextLink>
                    </div>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation - Right Arrow */}
        <button
          aria-label="Next Slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white text-slate-800 hover:text-rose-600 rounded-full items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border border-slate-100 backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
        >
          <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Styled Pagination Indicators */}
      <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-10 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-slate-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!bg-rose-600 [&_.swiper-pagination-bullet-active]:!rounded-full" />
    </section>
  );
};

export default PostSlider;