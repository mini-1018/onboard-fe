import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const authRequiredPages = ["/setting", "/posts/create", "/posts/edit"];

export async function middleware(req: NextRequest) {
  const path = new URL(req.url).pathname;

  // 기존 인증 체크 로직
  if (authRequiredPages.some((page) => path.startsWith(page))) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      return NextResponse.redirect(
        new URL("/signin?error=auth_required", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {};
