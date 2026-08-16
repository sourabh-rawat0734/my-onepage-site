import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { notFound } from "next/navigation";

export default async function Home() {
  const client = createClient();

  try {
    // Fetch the published Homepage document from Prismic
    const page = await client.getSingle("homepage");

    return (
      <main className="min-h-screen bg-white text-slate-900">
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    );
  } catch (error) {
    // If the document isn't published yet in Prismic
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Homepage Not Found in Prismic</h1>
        <p className="text-slate-600 max-w-md">
          Please make sure you created a <strong>Homepage</strong> document on Prismic.io and clicked <strong>Publish</strong>.
        </p>
      </div>
    );
  }
}