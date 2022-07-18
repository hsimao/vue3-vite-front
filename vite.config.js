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
  }
})
