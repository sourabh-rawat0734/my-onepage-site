import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Handle POST request sent by Prismic
export async function POST(request: Request) {
  try {
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, now: Date.now() }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating", error: String(err) }, { status: 500 });
  }
}

// Handle GET request for browser testing
export async function GET() {
  try {
    revalidatePath("/", "layout");
    return NextResponse.json({ revalidated: true, now: Date.now() }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating", error: String(err) }, { status: 500 });
  }
}

// Handle OPTIONS request if Prismic sends a preflight check
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Allow": "GET, POST, OPTIONS",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
  });
}