import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001', //接口域名
        changeOrigin: true, //是否跨域
        ws: true, //是否代理 websockets
        secure: false, //是否https接口
        pathRewrite: {
          //路径重置
          '^/api': '',
        },
      },
    },
  },
})
