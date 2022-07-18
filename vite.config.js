import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path, { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要緩存的 icons 資料夾
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定 symbolId 格式
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    // 軟連結
    alias: {
      // @/components/about.vue => /src/components/about.vue
      '@': join(__dirname, '/src')
    }
  },
  server: {
    // 代理配置 - 解決本地開發 api 跨域
    proxy: {
      // 代理所有 /api 請求
      '/api': {
        target: 'https://api.imooc-front.lgdsunday.club',
        changeOrigin: true
      }
    }
  }
})
