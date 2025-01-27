import { UAParser } from "ua-parser-js";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const authRequiredPages = ["/setting", "/posts/create", "/posts/edit"];

export async function middleware(req: Request) {
  const userAgent = req.headers.get("user-agent") || "";
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type || "desktop";

  if (deviceType !== "desktop") {
    return NextResponse.redirect(new URL("/unsupported", req.url));
  }

  const path = new URL(req.url).pathname;
  if (authRequiredPages.some((page) => path.startsWith(page))) {
    const token = await getToken({ req: req as any });
    if (!token) {
      return NextResponse.redirect(
        new URL("/signin?error=auth_required", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!unsupported|api|_next/static|_next/image|images|favicon.ico).*)",
  ],
};
