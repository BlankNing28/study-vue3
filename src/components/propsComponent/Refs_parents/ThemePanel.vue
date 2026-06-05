<template>

  <h1>弃用  不用看</h1>
  <div class="panel">
    <h2>🎛️ 控制面板</h2>
    <!-- 点击按钮，直接修改 isDark 的值 -->
    <button @click="isDark = !isDark">
      {{ isDark ? '☀️ 切换亮色模式' : '🌙 切换暗黑模式' }}
    </button>

    <!-- 将 isDark 作为 prop 传递给两个子组件 -->
    <ArticleCard ref="childARef" :is-dark="isDark" />
    <NavBar :is-dark="isDark" />

    <button @click="getAllRef()">获取所有ref</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ArticleCard from './ArticleCard.vue'
import NavBar from './NavBar.vue'
const childARef = ref(null)

// 核心变量：只需改变这一个值
const isDark = ref(false)
const getAllRef =() => {
  console.log(childARef.value)
}
</script>