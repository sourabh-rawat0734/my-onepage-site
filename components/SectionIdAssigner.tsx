"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SectionIdAssigner({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const processSections = () => {
      const sections = document.querySelectorAll("main section");

      sections.forEach((section, index) => {
        const heading = section.querySelector("h1, h2, h3, h4, h5, h6");

        if (heading && heading.textContent && heading.textContent.trim()) {
          const slug = heading.textContent
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

          if (slug && section.id !== slug) {
            // ALWAYS update the ID if it differs from the current heading text slug
            section.id = slug;
          }
        } else if (!section.id) {
          section.id = `section-${index + 1}`;
        }
      });
    };

    // 1. Run immediately on path change
    processSections();

    // 2. Watch for DOM text updates (e.g., when Prismic replaces English text with Dutch)
    const observer = new MutationObserver(() => {
      processSections();
    });

    const mainElement = document.querySelector("main") || document.body;
    observer.observe(mainElement, {
      childList: true,
      subtree: true,
      characterData: true, // Crucial: detects when heading inner text changes language
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
} 