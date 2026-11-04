import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});

const openNextConfig = {
  ...config,
  buildCommand: "next build",
};

export default openNextConfig;
