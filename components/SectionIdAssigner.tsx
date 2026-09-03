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

        if (heading && heading.textContent) {
          const slug = heading.textContent
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

          if (slug) {
            // Overwrites existing English IDs with translated Dutch IDs
            section.id = slug;
          }
        } else if (!section.id) {
          section.id = `section-${index + 1}`;
        }
      });
    };
 
    // A short delay guarantees Prismic DOM content has hydrated and updated text
    const timer = setTimeout(processSections, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}