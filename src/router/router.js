import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
  {
    path:'/',
    redirect:'/login',
    meta:{
      title:"首页"
    }
  },
  {
    path:'/login',
    meta:{
      title:'登陆页',
    },
    component: () => import('../views/user/login.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})

export default router

