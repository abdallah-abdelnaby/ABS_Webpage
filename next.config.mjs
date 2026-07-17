import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Keep worker-mailer out of the webpack bundle so its ESM `import` of
  // `cloudflare:sockets` is preserved (webpack would rewrite it to a `require`,
  // which becomes a throwing stub in the ESM Worker bundle). OpenNext's esbuild
  // pass bundles it and leaves `cloudflare:sockets` as a runtime ESM import.
  serverExternalPackages: ["worker-mailer"],
};

export default nextConfig;

// Populates getCloudflareContext() during `next dev`; no-ops outside development.
initOpenNextCloudflareForDev();
