import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SymVentra",
  description: "Choose the health future that fits you.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ lang?: string }>;
}>) {
  // Safe resolution for params to prevent runtime crashes
  const resolvedParams = params ? await params : undefined;
  const langCode = resolvedParams?.lang ?? "en";
  const htmlLang = langCode.split("-")[0] || "en";

  return (
    <html
      lang={htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* Added font-sans to enforce Geist Sans globally on body & all child tags */}
      <body className="font-sans min-h-full flex flex-col">
        {children}

        {/* Global Cookie Disclaimer */}
        <CookieBanner />

        {/* Script to add unique IDs to sections inside <main> */}
        <Script id="add-section-ids" strategy="lazyOnload">
          {`
            (function assignSectionIds() {
              const processSections = () => {
                const sections = document.querySelectorAll('main section');
                sections.forEach((section, index) => {
                  if (!section.id) {
                    const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
                    if (heading && heading.textContent) {
                      const slug = heading.textContent
                        .toLowerCase()
                        .trim()
                        .replace(/[^\\w\\s-]/g, '')
                        .replace(/[\\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, '');
                      section.id = slug || ('section-' + (index + 1));
                    } else {
                      section.id = 'section-' + (index + 1);
                    }
                  }
                });
              };

              // Run immediately
              processSections();

              // Observe dynamic client-side renders & page changes
              const observer = new MutationObserver(() => processSections());
              observer.observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}