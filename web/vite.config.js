import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  clearScreen: false,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    hmr: {
      overlay: false,
      protocol: 'ws',
      host: 'venti.example.com',
      clientPort: 80,
    },
    host: true,
    proxy: {
      '/user': {
        target: 'http://localhost:8080',
      },
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
})
