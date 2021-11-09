import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import store from './store/storage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import storage from './utils/storage'
import request from './api/request'
const app = createApp(App)
app.config.globalProperties.$storage = storage
app.config.globalProperties.$request = request 
app.use(router).use(ElementPlus).use(store)
app.mount('#app')
