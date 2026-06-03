import { createRouter, createWebHistory } from 'vue-router'

// 1. 引入页面
import Vue2 from '../views/Vue2.vue'
import Vue3 from '../views/Vue3.vue'
import Pinia from '../views/Pinia.vue'
import ParamsDemo from '../components/routerChild/params.vue'
import RouterDemo from '../views/RouterDemo.vue'
import { routerChild } from './children.ts'


// 2. 路由规则
const routes = [
  {
    path: '/',
    redirect: '/vue3'   // 👈 这一行就是重定向！
  },
  {
    path: '/vue2',
    name: 'vue2',
    component: Vue2
  },
  {
    path: '/vue3',
    name: 'vue3',
    component: Vue3
  },
  {
    path: '/routerDemo',
    name: 'routerDemo',
    component: RouterDemo,
    redirect: '/routerDemo/params', 
    children: routerChild.map((item) => ({
      path: item.path,
      name: item.key,
      component: item.component,
      props: (router) => {
        return item.type === 'query' ? router.query : router.params
      }

    }))
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: Pinia
  },
]

// 3. 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 4. 导出
export default router