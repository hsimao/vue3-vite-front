import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
