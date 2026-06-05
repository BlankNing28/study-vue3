<template>
  <!-- 根据 isDark 动态绑定 CSS 类名 -->
  <div class="card" :class="{ 'dark-theme': isDark }">
    <h3>📄 文章标题</h3>
    <p>这是文章的内容，当父组件切换主题时，这里的背景色会跟着变。</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 声明接收父组件传过来的 prop
const car = ref(11)
defineProps<{
  isDark: boolean
}>()

defineExpose({car})
</script>

<style scoped>
.card { padding: 15px; border-radius: 8px; margin-top: 10px; transition: all 0.3s; background-color: #ffffff; color: #333; }
.dark-theme { background-color: #333333; color: #ffffff; border: 1px solid #555; }
</style>