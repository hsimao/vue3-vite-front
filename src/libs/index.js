import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 獲取 libs 底下所有 .vue 檔案
    const components = import.meta.glob('./*/index.vue')

    // 將 components obj 轉成陣列遍歷
    for (const [fullPath, fn] of Object.entries(components)) {
      // 拿路徑來組成要註冊的組件名稱 './popup/index.vue' => 'm-popup'
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]

      // 註冊組件
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
}
