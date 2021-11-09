import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: "首页"
    },
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path: '',
        component: ()=>import('../views/content/welcome.vue')
      },
      {
        path: 'welcome',
        meta: {
          title: "欢迎页"
        },
        component: ()=>import('../views/content/welcome.vue')
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: '登陆页',
    },
    component: () => import('../views/user/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

