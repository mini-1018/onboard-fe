import { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    domains: ["mini1018-image.s3.ap-northeast-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
        port: "",
        pathname: "/profiles/**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

const sentryWebpackPluginOptions = {
  org: "onboard-xn",
  project: "javascript-nextjs",
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  silent: !process.env.CI,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
