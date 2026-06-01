import { createRouter, createWebHistory } from 'vue-router'

// 1. 引入页面
import Vue2 from '../views/Vue2.vue'
import Vue3 from '../views/Vue3.vue'

// 2. 路由规则
const routes = [
  {
    path: '/vue2',
    name: 'vue2',
    component: Vue2
  },
  {
    path: '/vue3',
    name: 'vue3',
    component: Vue3
  }
]

// 3. 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 4. 导出
export default router