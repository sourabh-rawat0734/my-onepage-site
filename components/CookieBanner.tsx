"use client";

import React, { useState, useEffect } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";

const CookieBanner = (): React.JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already saved consent preference
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-3xl p-5 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 text-[#0B2545]">
            <div className="w-9 h-9 rounded-xl bg-[#00A896]/15 text-[#00A896] flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base">We Value Your Privacy</h4>
          </div>
          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed">
          We use essential cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 py-2 px-4 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 py-2 px-4 rounded-full bg-[#00A896] hover:bg-[#028090] text-white text-xs font-semibold shadow-sm transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;