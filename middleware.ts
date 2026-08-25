import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Use experimental-edge as required by Next.js 16
export const runtime = "experimental-edge";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en-us", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};