import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

// Helper to map route params to Prismic locale codes
function formatPrismicLocale(lang: string): string {
  const lower = lang.toLowerCase();
  if (lower === "nl" || lower === "nl-nl") return "nl-nl";
  if (lower === "en" || lower === "en-us") return "en-us";
  return lang; // Fallback to raw param
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const prismicLang = formatPrismicLocale(lang);
  const client = createClient();

  try {
    // Fetch the published Homepage document from Prismic for the current locale
    const page = await client.getSingle("homepage", { lang: prismicLang });

    return (
      <main className="min-h-screen bg-white text-slate-900">
        <SliceZone slices={page.data.slices ?? []} components={components} />
      </main>
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Homepage Not Found in Prismic</h1>
        <p className="text-slate-600 max-w-md">
          Please make sure you have created and <strong>Published</strong> a <strong>Homepage</strong> document on Prismic.io for locale: <code className="bg-slate-100 px-2 py-1 rounded text-teal-600 font-mono text-sm">{prismicLang}</code>.
        </p>
      </div>
    );
  }
}