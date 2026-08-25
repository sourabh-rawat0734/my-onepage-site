"use client";

import React, { useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Sparkles, X, CheckCircle2 } from "lucide-react";

export type CtaHeroBannerProps =
  SliceComponentProps<Content.CtaHeroBannerSlice>;

const CtaHeroBanner = ({ slice }: CtaHeroBannerProps): React.JSX.Element => {
  // Modal state management
  const [activeModal, setActiveModal] = useState<"pilot" | "collaboration" | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [pilotForm, setPilotForm] = useState({ fullName: "", email: "" });
  const [collabForm, setCollabForm] = useState({
    fullName: "",
    email: "",
    organization: "",
    interest: "Research & Development",
    message: "",
  });

  const closeModal = () => {
    setActiveModal(null);
    setIsSubmitted(false);
    setPilotForm({ fullName: "", email: "" });
    setCollabForm({
      fullName: "",
      email: "",
      organization: "",
      interest: "Research & Development",
      message: "",
    });
  };

  const handlePilotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCollabSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="relative overflow-hidden bg-gradient-to-b from-[#0B2545] via-[#0D2E55] to-[#0B2545] text-white py-16 sm:py-20 md:py-28"
      >
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-1/4 -mt-12 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-12 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-5xl text-center space-y-6 sm:space-y-8">
          
          {/* Eyebrow Pill Tag */}
          {slice.primary.eyebrow && (
            <div className="inline-flex">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-400/30 px-5 py-2 text-xs font-black tracking-widest text-[#00A896] uppercase shadow-xs backdrop-blur-xs">
                <Sparkles className="w-4 h-4 text-[#00A896]" />
                <span>{slice.primary.eyebrow}</span>
              </div>
            </div>
          )}

          {/* Title */}
          {slice.primary.title && (
            <div
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight
                [&_h1]:bg-gradient-to-r [&_h1]:from-white [&_h1]:via-teal-100 [&_h1]:to-[#00A896] [&_h1]:bg-clip-text [&_h1]:text-transparent 
                [&_h2]:bg-gradient-to-r [&_h2]:from-white [&_h2]:via-teal-100 [&_h2]:to-[#00A896] [&_h2]:bg-clip-text [&_h2]:text-transparent
                [&_h3]:bg-gradient-to-r [&_h3]:from-white [&_h3]:via-teal-100 [&_h3]:to-[#00A896] [&_h3]:bg-clip-text [&_h3]:text-transparent
                [&_strong]:bg-gradient-to-r [&_strong]:from-[#00A896] [&_strong]:to-teal-300 [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-serif [&_strong]:italic"
            >
              <PrismicRichText field={slice.primary.title} />
            </div>
          )}

          {/* Description */}
          {slice.primary.description && (
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium [&_strong]:text-white">
              <PrismicRichText field={slice.primary.description} />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setActiveModal("pilot")}
              className="cursor-pointer rounded-full bg-[#00A896] hover:bg-[#028090] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-teal-500/20 hover:scale-[1.03] active:scale-[0.98]"
            >
              {slice.primary.primary_cta?.text || "Join the Pilot Wait-list"}
            </button>

            <button
              type="button"
              onClick={() => setActiveModal("collaboration")}
              className="cursor-pointer rounded-full border-2 border-white/80 px-8 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#0B2545] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              {slice.primary.secondary_cta?.text || "Explore Collaboration"}
            </button>
          </div>

        </div>
      </section>

      {/* Modal Backdrop & Popups */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="fixed inset-0 bg-[#0B2545]/70 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={closeModal}
          />

          {/* POPUP 1: JOIN PILOT WAIT-LIST */}
          {activeModal === "pilot" && (
            <div className="relative w-full max-w-lg bg-white rounded-3xl sm:rounded-[32px] shadow-2xl p-6 sm:p-10 z-10 border border-slate-100 max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-2 pr-6 text-left">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                      Join the Pilot Wait-list
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Gain early access privileges and test platform features first hand.
                    </p>
                  </div>

                  <form onSubmit={handlePilotSubmit} className="space-y-4 text-left">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        placeholder="Dr. Sarah Jenkins"
                        value={pilotForm.fullName}
                        onChange={(e) => setPilotForm({ ...pilotForm, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="sarah@organization.org"
                        value={pilotForm.email}
                        onChange={(e) => setPilotForm({ ...pilotForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="cursor-pointer w-full py-3.5 px-6 rounded-full bg-[#00A896] hover:bg-[#028090] text-white font-semibold text-base shadow-md transition-all duration-200"
                      >
                        Submit Registration
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-[#00A896] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2545]">Request Received</h4>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Thank you, <span className="font-semibold text-slate-800">{pilotForm.fullName}</span>. We&apos;ve added <span className="font-semibold text-slate-800">{pilotForm.email}</span> to our pilot program wait-list.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="cursor-pointer px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          )}

          {/* POPUP 2: EXPLORE COLLABORATION (WITHOUT SCROLLBAR) */}
          {activeModal === "collaboration" && (
            <div className="relative w-full max-w-xl bg-white rounded-3xl sm:rounded-[32px] shadow-2xl p-6 sm:p-8 z-10 border border-slate-100 overflow-visible">
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <div className="space-y-5">
                  <div className="space-y-1.5 pr-6 text-left">
                    <span className="inline-block text-xs font-bold tracking-widest text-[#00A896] uppercase">
                      Partnerships
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                      Explore Collaboration
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      Connect with our team to discuss joint research initiatives, enterprise integration, or data partnerships.
                    </p>
                  </div>

                  <form onSubmit={handleCollabSubmit} className="space-y-3.5 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label htmlFor="collabName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="collabName"
                          required
                          placeholder="Prof. Michael Vance"
                          value={collabForm.fullName}
                          onChange={(e) => setCollabForm({ ...collabForm, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="collabEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="collabEmail"
                          required
                          placeholder="michael@university.edu"
                          value={collabForm.email}
                          onChange={(e) => setCollabForm({ ...collabForm, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label htmlFor="collabOrg" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Organization / Company
                        </label>
                        <input
                          type="text"
                          id="collabOrg"
                          required
                          placeholder="BioTech Institute"
                          value={collabForm.organization}
                          onChange={(e) => setCollabForm({ ...collabForm, organization: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="collabInterest" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                          Area of Interest
                        </label>
                        <select
                          id="collabInterest"
                          value={collabForm.interest}
                          onChange={(e) => setCollabForm({ ...collabForm, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 text-sm outline-none transition-all"
                        >
                          <option value="Research & Development">Research & Development</option>
                          <option value="Data Sharing & Exchange">Data Sharing & Exchange</option>
                          <option value="Enterprise Integration">Enterprise Integration</option>
                          <option value="Investment / Advisory">Investment / Advisory</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="collabMessage" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Brief Note / Proposal
                      </label>
                      <textarea
                        id="collabMessage"
                        rows={2}
                        required
                        placeholder="Tell us about your organization and how you'd like to collaborate..."
                        value={collabForm.message}
                        onChange={(e) => setCollabForm({ ...collabForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00A896] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="cursor-pointer w-full py-3.5 px-6 rounded-full bg-[#0B2545] hover:bg-[#0D2E55] text-white font-semibold text-base shadow-md transition-all duration-200"
                      >
                        Submit Collaboration Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-teal-100 text-[#00A896] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0B2545]">Inquiry Received</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-slate-800">{collabForm.fullName}</span> from <span className="font-semibold text-slate-800">{collabForm.organization}</span>. Our team will follow up via <span className="font-semibold text-slate-800">{collabForm.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="cursor-pointer px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-all"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CtaHeroBanner;