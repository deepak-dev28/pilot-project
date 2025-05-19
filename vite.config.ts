import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), sentryVitePlugin({
    org: "simform-e4",
    project: "pilot-project"
  })],
  optimizeDeps: {
    exclude: ['chunk-73TC7OGH.js']
  },
  build: {
    sourcemap: true
  }
})