import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/evgeni-vue3/',
      build: {
        outDir: 'dist',
    },
  publicDir: 'assets',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) } ]
  },
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/styles/_variables.scss";`
    }
  }
},
})
