import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx(), vueDevTools()],
  define: {
    global: {},
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_module/, /crypto-browserify/],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      util: 'util',
    },
  },
})
