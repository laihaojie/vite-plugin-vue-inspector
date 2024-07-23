import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Inspector from '@djie/vite-plugin-vue-inspector'
import Inspect from 'vite-plugin-inspect'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    Inspector({
      // enabled: true,
      // toggleButtonVisibility: 'always',
      openInEditorHost: 'http://localhost:5173',
    }),
    Inspect(),
    VueDevTools(),
  ],
})
