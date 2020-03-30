import { RouteConfig } from 'vue-router'

const home = () => import('~/pages/home/index.vue').then(m => m.default || m)
const login = () => import('~/pages/login/index.vue').then(m => m.default || m)

export const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      name: '设置',
      auth: 'setting'
    }
  }
]
