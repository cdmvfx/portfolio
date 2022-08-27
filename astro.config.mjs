import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});