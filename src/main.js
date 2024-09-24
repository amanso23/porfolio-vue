import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './index.css'
import pinia from './stores/store'

createApp(App).use(router).use(pinia).mount('#app')
