"use client";

import React, { ReactNode, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion, Variants } from "framer-motion";
import { X, Check, ArrowRight, Sparkles, Activity } from "lucide-react";

export type HeadlineDescriptionGraphCtaProps =
  SliceComponentProps<Content.HeadlineDescriptionGraphCtaSlice>;

type ModalType = "pilot" | "partner" | null;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeadlineDescriptionGraphCta = ({
  slice,
}: HeadlineDescriptionGraphCtaProps): ReactNode => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [submittedModal, setSubmittedModal] = useState<ModalType>(null);

  const [pilotData, setPilotData] = useState({ fullName: "", email: "" });
  const [partnerData, setPartnerData] = useState({ fullName: "", email: "", orgFocus: "" });

  const closeModal = () => {
    setActiveModal(null);
    setSubmittedModal(null);
  };

  const handlePilotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedModal("pilot");
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedModal("partner");
  };

  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-teal-50/20 to-teal-50/40 py-12 sm:py-16 md:py-20"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="lg:col-span-6 space-y-5 text-left"
            >
              {/* Eyebrow & Icon Header Group */}
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00A896]/15 text-[#00A896] border border-teal-200/60 shadow-sm flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>

                {slice.primary.eyebrow && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-teal-100/60 border border-teal-200/70 px-3.5 py-1 text-xs font-bold tracking-wide text-[#00A896] uppercase shadow-2xs">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A896] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A896]" />
                    </span>
                    <PrismicRichText field={slice.primary.eyebrow} />
                  </div>
                )}
              </motion.div>

              {/* Headline matching previous section design */}
              {slice.primary.headline && (
                <motion.div
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2545] [&_h1]:bg-gradient-to-r [&_h1]:from-[#0B2545] [&_h1]:via-[#113A2F] [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h2]:bg-gradient-to-r [&_h2]:from-[#0B2545] [&_h2]:via-[#113A2F] [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent [&_strong]:bg-gradient-to-r [&_strong]:from-[#0B2545] [&_strong]:via-[#113A2F] [&_strong]:to-[#00A896] [&_strong]:bg-clip-text [&_strong]:text-transparent"
                >
                  <PrismicRichText field={slice.primary.headline} />
                </motion.div>
              )}

              {/* Highlighted Key Phrase */}
              {slice.primary.highlighted_phrase && (
                <motion.div
                  variants={itemVariants}
                  className="text-base sm:text-lg font-semibold text-[#00A896] leading-snug"
                >
                  <PrismicRichText field={slice.primary.highlighted_phrase} />
                </motion.div>
              )}

              {/* Description */}
              {slice.primary.description && (
                <motion.div
                  variants={itemVariants}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-2 font-medium"
                >
                  <PrismicRichText field={slice.primary.description} />
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2"
              >
                {slice.primary.primary_cta && (
                  <button
                    type="button"
                    onClick={() => setActiveModal("pilot")}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#00A896] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#028090] hover:shadow-lg hover:shadow-[#00A896]/20 transition-all duration-200 active:scale-95 text-center"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {slice.primary.primary_cta.text || "Join Pilot"} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                  </button>
                )}

                {slice.primary.secondary_cta && (
                  <button
                    type="button"
                    onClick={() => setActiveModal("partner")}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-[#0B2545] px-7 py-2.5 text-sm font-bold text-[#0B2545] hover:bg-[#0B2545] hover:text-white transition-all duration-200 hover:shadow-md text-center active:scale-95"
                  >
                    {slice.primary.secondary_cta.text || "Partner With Us"}
                  </button>
                )}
              </motion.div>

              {/* Footer Note */}
              {slice.primary.note && (
                <motion.p variants={itemVariants} className="text-xs text-slate-500 italic pt-0.5">
                  {slice.primary.note}
                </motion.p>
              )}
            </motion.div>

            {/* Right Column: Visualization Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="lg:col-span-6"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="relative group bg-white/80 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-teal-100 shadow-xl shadow-teal-900/5 space-y-4"
              >
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-teal-400/15 to-blue-400/15 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Metric Title */}
                {slice.primary.metric_title && (
                  <div className="relative z-10 text-lg sm:text-xl font-black text-[#0B2545] tracking-tight flex items-center justify-between">
                    <PrismicRichText field={slice.primary.metric_title} />
                    <Activity className="w-5 h-5 text-[#00A896]" />
                  </div>
                )}

                {/* Graphic Container */}
                {slice.primary.metric_visualization_image && (
                  <div className="relative z-10 rounded-2xl overflow-hidden bg-slate-50/50 p-2 border border-teal-100/70 transition-all duration-300 group-hover:border-teal-200">
                    <PrismicNextImage
                      field={slice.primary.metric_visualization_image}
                      className="w-full h-auto object-contain rounded-xl"
                      alt=""
                      priority
                    />
                  </div>
                )}

                {/* Status Tags */}
                {slice.primary.tag_list && slice.primary.tag_list.length > 0 && (
                  <div className="relative z-10 flex flex-wrap gap-1.5">
                    {slice.primary.tag_list.map((tag, index) => {
                      const tagStyle =
                        tag.color_scheme === "positive"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200/80"
                          : tag.color_scheme === "warning"
                          ? "bg-amber-50 text-amber-800 border-amber-200/80"
                          : "bg-slate-100 text-slate-700 border-slate-200/80";

                      return (
                        <span
                          key={index}
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagStyle}`}
                        >
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Metrics Grid */}
                {slice.primary.metrics_list &&
                  slice.primary.metrics_list.length > 0 && (
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {slice.primary.metrics_list.map((metric, index) => {
                        const metricColor =
                          metric.style === "critical"
                            ? "text-rose-600"
                            : metric.style === "highlighted"
                            ? "text-[#00A896]"
                            : "text-[#0B2545]";

                        return (
                          <div
                            key={index}
                            className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs space-y-0.5 hover:border-teal-200 transition-colors"
                          >
                            <span className="text-xs font-medium text-slate-500 block truncate">
                              {metric.label}
                            </span>
                            <div className={`text-lg sm:text-xl font-black tracking-tight ${metricColor}`}>
                              {metric.value}
                              {metric.unit && (
                                <span className="text-xs font-normal text-slate-500 ml-0.5">
                                  {metric.unit}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ------------------- MODAL 1: JOIN PILOT ------------------- */}
      {activeModal === "pilot" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={closeModal} />

          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-7 z-10 border border-slate-100 max-h-[92vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedModal !== "pilot" ? (
              <div className="space-y-4">
                <div className="space-y-1 pr-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
                    Join the Pilot Waitlist
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-normal">
                    Gain exclusive early access into Europe&apos;s health database analytics suite.
                  </p>
                </div>

                <form onSubmit={handlePilotSubmit} className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <label htmlFor="cta-pilot-name" className="block text-xs font-bold text-slate-700">
                      Full Professional Name
                    </label>
                    <input
                      type="text"
                      id="cta-pilot-name"
                      required
                      placeholder="Dr. Alex Janssen"
                      value={pilotData.fullName}
                      onChange={(e) => setPilotData({ ...pilotData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="cta-pilot-email" className="block text-xs font-bold text-slate-700">
                      Corporate / Institution Email
                    </label>
                    <input
                      type="email"
                      id="cta-pilot-email"
                      required
                      placeholder="alex@institution.eu"
                      value={pilotData.email}
                      onChange={(e) => setPilotData({ ...pilotData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-5 rounded-full bg-[#20a09a] hover:bg-[#188c87] text-white font-bold text-sm shadow-md transition-all active:scale-98"
                    >
                      Submit Registry Details
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-teal-100 text-[#00A896] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900">Waitlist Request Sent</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Thank you, <span className="font-semibold text-slate-700">{pilotData.fullName}</span>. We will contact you at <span className="font-semibold text-slate-700">{pilotData.email}</span> shortly.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------- MODAL 2: PARTNER WITH US ------------------- */}
      {activeModal === "partner" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={closeModal} />

          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-7 z-10 border border-slate-100 max-h-[92vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedModal !== "partner" ? (
              <div className="space-y-4">
                <div className="space-y-1 pr-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B2545] tracking-tight">
                    Explore Custom Collaboration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-normal">
                    Integrate our deep machine learning microbiome API endpoints into your corporate longevity workflows.
                  </p>
                </div>

                <form onSubmit={handlePartnerSubmit} className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <label htmlFor="cta-partner-name" className="block text-xs font-bold text-slate-700">
                      Full Professional Name
                    </label>
                    <input
                      type="text"
                      id="cta-partner-name"
                      required
                      placeholder="Dr. Alex Janssen"
                      value={partnerData.fullName}
                      onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="cta-partner-email" className="block text-xs font-bold text-slate-700">
                      Corporate / Institution Email
                    </label>
                    <input
                      type="email"
                      id="cta-partner-email"
                      required
                      placeholder="alex@institution.eu"
                      value={partnerData.email}
                      onChange={(e) => setPartnerData({ ...partnerData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="cta-partner-org" className="block text-xs font-bold text-slate-700">
                      Organization Focus Variant
                    </label>
                    <input
                      type="text"
                      id="cta-partner-org"
                      required
                      placeholder="e.g. Preventive Vitality Clinic"
                      value={partnerData.orgFocus}
                      onChange={(e) => setPartnerData({ ...partnerData, orgFocus: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-5 rounded-full bg-[#20a09a] hover:bg-[#188c87] text-white font-bold text-sm shadow-md transition-all active:scale-98"
                    >
                      Submit Registry Details
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-teal-100 text-[#00A896] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900">Collaboration Request Sent</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Thank you, <span className="font-semibold text-slate-700">{partnerData.fullName}</span>. Our integration team will reach out to <span className="font-semibold text-slate-700">{partnerData.email}</span>.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-2 px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeadlineDescriptionGraphCta;