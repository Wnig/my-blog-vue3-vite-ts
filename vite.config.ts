import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import pxtovw from 'postcss-px-to-viewport'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  unitToConvert: "px",
  viewportWidth: 750,
  unitPrecision: 3,
  propList: ["*"],
  viewportUnit: "vw",
  fontViewportUnit: "vw",
  selectorBlackList: [".ignore"],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: /(\/|\\)(node_modules)(\/|\\)/
})

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      https: false,
      proxy: {
        "/api/myApi": {
          // target: "http://www.xxxiwnig.com",
          target: "http://192.168.110.29:8085/my-blog-vue3-vite-ts",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        "/api/ws": {
          target: "https://apis.map.qq.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        "/api": {
          target: "https://tianqiapi.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/scss/common.scss";'
      }
    },
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
})
