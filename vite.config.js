import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginRewriteAll from 'vite-plugin-rewrite-all' 

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  root: './',
      build: {
        outDir: 'dist',
    },
  publicDir: 'assets',
  plugins: [vue(), pluginRewriteAll({
      endpoint: 'index.html' // Konfigurera pluginet för att omdirigera alla förfrågningar till index.html
    })], 
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
