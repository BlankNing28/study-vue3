<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/vue3">学习vue3</el-menu-item>
    <el-menu-item index="/vue2">学习vue2</el-menu-item>
    <el-menu-item index="/routerDemo">路由测试</el-menu-item>
    <el-menu-item index="/pinia">Pinia</el-menu-item>
  </el-menu>
  <router-view />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 引入路由
const router = useRouter()
const activeIndex = ref('/vue3') // 默认选中

const handleSelect = (key: string, keyPath: string[]) => {
  router.push(key)
}
</script>