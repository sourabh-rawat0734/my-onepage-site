import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comprehensive SEO Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://symventra.com"), // Replace with your production domain
  title: {
    default: "SymVentra | Choose the health future that fits you",
    template: "%s | SymVentra",
  },
  description:
    "Discover personalized healthcare solutions with SymVentra. Choose the health future that fits your lifestyle, wellness, and long-term goals.",
  keywords: [
    "SymVentra",
    "healthcare",
    "personalized health",
    "wellness future",
    "health solutions",
  ],
  authors: [{ name: "SymVentra Team" }],
  creator: "SymVentra",
  publisher: "SymVentra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SymVentra | Choose the health future that fits you",
    description:
      "Discover personalized healthcare solutions with SymVentra. Choose the health future that fits your lifestyle and goals.",
    url: "https://symventra.com",
    siteName: "SymVentra",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image to public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "SymVentra - Healthcare Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SymVentra | Choose the health future that fits you",
    description:
      "Discover personalized healthcare solutions with SymVentra. Choose the health future that fits your lifestyle and goals.",
    images: ["/og-image.jpg"],
    creator: "@symventra",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ lang?: string }>;
}>) {
  const resolvedParams = params ? await params : undefined;
  const langCode = resolvedParams?.lang ?? "en";
  const htmlLang = langCode.split("-")[0] || "en";

  return (
    <html
      lang={htmlLang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Additional non-metadata head items like Cookiebot */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="76acced4-09ad-4300-92c2-3b066c02c028"
          data-blockingmode="auto"
          type="text/javascript"
          async
        />
      </head>
      <body className="font-sans min-h-full flex flex-col">
        {children}

        {/* Script for section IDs */}
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

              processSections();

              const observer = new MutationObserver(() => processSections());
              observer.observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}