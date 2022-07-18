import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import { initRem } from '@/utils/flexible'

initRem()

createApp(App).use(router).mount('#app')
