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
      },
      {
        path: 'leave',
        meta: {
          title: "休假申请"
        },
        component: ()=>import('../views/content/leave.vue')
      },
      {
        path: 'approve',
        meta: {
          title: "待我审批"
        },
        component: ()=>import('../views/content/approve.vue')
      },
      {
        path: 'dept',
        meta: {
          title: "部门管理"
        },
        component: ()=>import('../views/content/dept.vue')
      },
      {
        path: 'menu',
        meta: {
          title: "菜单管理"
        },
        component: ()=>import('../views/content/menu.vue')
      },
      {
        path: 'role',
        meta: {
          title: "角色管理"
        },
        component: ()=>import('../views/content/role.vue')
      },
      {
        path: 'user',
        meta: {
          title: "用户管理"
        },
        component: ()=>import('../views/content/user.vue')
      },
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

