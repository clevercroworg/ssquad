import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/app/lib/session";

const COOKIE_NAME = "ssquad_admin_session";

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || request.nextUrl.hostname;
  const proto = request.headers.get("x-forwarded-proto") || (request.nextUrl.protocol.replace(":", ""));

  // 1. Single-Hop 308 Permanent Redirect for:
  //    - HTTP Non-WWW: http://ssquad.com/* -> https://ssquad.com/*
  //    - HTTPS WWW: https://www.ssquad.com/* -> https://ssquad.com/*
  //    - HTTP WWW: http://www.ssquad.com/* -> https://ssquad.com/*
  const isWww = host.toLowerCase().startsWith("www.");
  const isHttp = proto.toLowerCase() === "http";

  if (isWww || isHttp) {
    const targetHost = "ssquad.com";
    const targetUrl = new URL(path + request.nextUrl.search, `https://${targetHost}`);
    return NextResponse.redirect(targetUrl, { status: 308 });
  }

  // 2. Admin Route Protection
  if (path.startsWith("/admin")) {
    const sessionCookie = request.cookies.get(COOKIE_NAME)?.value;
    const session = await decrypt(sessionCookie);
    const isAuthenticated = !!session?.userId;

    if (path === "/admin/login" && isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.nextUrl));
    }

    if (path !== "/admin/login" && !isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
    }
  }

  return NextResponse.next();
}

// Apply proxy to all pages/routes (exclude static assets & images)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|certificate/|images/|.*\\.png$|.*\\.jpeg$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};



