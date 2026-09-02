"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface TrackPageViewProps {
  documentId?: string;
  documentType?: string;
  locale?: string;
}

export function TrackPageView({
  documentId,
  documentType,
  locale,
}: TrackPageViewProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`;

    // Example 1: Google Analytics 4 (gtag)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        page_path: url,
        page_title: document.title,
        prismic_id: documentId,
        prismic_type: documentType,
        prismic_locale: locale,
      });
    }

    // Example 2: PostHog
    // if (typeof window !== "undefined" && (window as any).posthog) {
    //   (window as any).posthog.capture("$pageview", {
    //     $current_url: url,
    //     prismic_id: documentId,
    //     prismic_type: documentType,
    //     prismic_locale: locale,
    //   });
    // }
  }, [pathname, searchParams, documentId, documentType, locale]);

  return null;
}