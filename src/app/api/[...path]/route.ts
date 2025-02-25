import { serverAxiosInstance } from "@/shared/api/axios";
import { NextRequest, NextResponse } from "next/server";

async function handler(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.pathname.replace("/api/", "");
  const method = request.method.toLowerCase();

  try {
    const config = {
      // headers: Object.fromEntries(request.headers),
    };

    console.log(
      "Attempting backend request to:",
      process.env.BACKEND_URL + "/" + path
    );

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

    console.log("Backend response:", response?.status, response?.data);

    if (!response || !response.data) {
      console.error("Invalid response:", response);
      throw new Error("Invalid response from server");
    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Backend request error:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });

    if (!error.response?.data) {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }

    return NextResponse.json(error.response.data, {
      status: error.response.data.statusCode || 500,
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
