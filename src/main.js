import { createApp } from 'vue'
import './styles/index.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import mLibs from './libs'
import { initRem } from '@/utils/flexible'
// vite-plugin-svg-icons 註冊
import 'virtual:svg-icons-register'

initRem()

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).use(mLibs).mount('#app')
