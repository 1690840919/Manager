import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import store from './store/storage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).use(store).mount('#app')
