import { RouteConfig } from 'vue-router'
import { mdiCogs, mdiOrderBoolDescending, mdiAccountGroup, mdiCogTransfer, mdiHomeAnalytics } from '@mdi/js'

const main = () => import('~/pages/layouts/main.vue').then(m => m.default || m)
const home = () => import('~/pages/home/index.vue').then(m => m.default || m)
const login = () => import('~/pages/login/index.vue').then(m => m.default || m)
const order = () => import('~/pages/order/index.vue').then(m => m.default || m)
const systemSetting = () => import('~/pages/setting/system/index.vue').then(m => m.default || m)
const rolesSetting = () => import('~/pages/setting/roles/index.vue').then(m => m.default || m)

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
      name: '首页',
      icon: mdiHomeAnalytics
    }
  },
  {
    path: '/order',
    name: 'order',
    component: order,
    meta: {
      name: '订单',
      auth: 'order',
      icon: mdiOrderBoolDescending
    }
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      name: '设置',
      auth: 'setting',
      icon: mdiCogs
    },
    component: main,
    children: [{
      path: 'roles',
      name: 'rolesSetting',
      component: rolesSetting,
      meta: {
        name: '角色管理',
        auth: 'setting-roles',
        icon: mdiAccountGroup
      }
    }, {
      path: 'system',
      name: 'systemSetting',
      component: systemSetting,
      meta: {
        name: '系统设置',
        auth: 'setting-system',
        icon: mdiCogTransfer
      }
    }]
  }
]