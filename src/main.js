import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import store from './store/storage'
import ElementPlus from 'element-plus'
import * as ElIconModules from '@element-plus/icons'
import 'element-plus/dist/index.css'
import storage from './utils/storage'
import request from './api/request'
const app = createApp(App)
// 图标注册
for(let iconName in ElIconModules){
  app.component(iconName,ElIconModules[iconName])
}
app.config.globalProperties.$storage = storage
app.config.globalProperties.$request = request 
app.use(router).use(ElementPlus).use(store)
app.mount('#app')
