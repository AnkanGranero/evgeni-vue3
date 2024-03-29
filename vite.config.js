import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginRewriteAll from 'vite-plugin-rewrite-all' 

// https://vitejs.dev/config/
export default defineConfig({
  base: '/evgeni-vue3/',
  root: './',
      build: {
        outDir: 'dist',
    },
  publicDir: 'assets',
  plugins: [vue(), pluginRewriteAll()], 
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
