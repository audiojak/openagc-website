import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site moved from openagc.actual.ai to kaluta.org in October 2026.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "openagc.actual.ai" }],
        destination: "https://kaluta.org/:path*",
        permanent: true,
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
