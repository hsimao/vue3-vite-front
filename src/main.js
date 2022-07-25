import { createApp } from 'vue'
import './styles/index.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import mLibs from './libs'
import { initRem } from '@/utils/flexible'
// vite-plugin-svg-icons 註冊
import 'virtual:svg-icons-register'

initRem()

createApp(App).use(createPinia()).use(router).use(mLibs).mount('#app')
