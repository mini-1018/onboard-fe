import { serverAxiosInstance } from "@/shared/api/axios";
import { NextRequest, NextResponse } from "next/server";

async function handler(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.pathname.replace("/api/", "");
  const method = request.method.toLowerCase();

  try {
    const config = {
      headers: Object.fromEntries(request.headers),
    };

    let body;
    if (!["get", "head", "delete"].includes(method)) {
      const contentType = request.headers.get("content-type");
      if (contentType?.includes("multipart/form-data")) {
        body = await request.formData();
      } else {
        body = await request.json().catch(() => undefined);
      }
    }

    const response = await serverAxiosInstance.request({
      method,
      url: path,
      data: body,
      ...config,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(error.response.data, {
      status: error.response.data.statusCode,
    });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;
export const HEAD = handler;
