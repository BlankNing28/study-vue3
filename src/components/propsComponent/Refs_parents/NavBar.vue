<template>
  <nav class="navbar" :class="{ 'dark-theme': isDark }">
    <span>🏠 首页</span>
    <span>⚙️ 设置</span>
    <span>👤 个人中心</span>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()
</script>

<style scoped>
.navbar { display: flex; gap: 15px; padding: 10px; margin-top: 10px; border-radius: 8px; transition: all 0.3s; background-color: #f0f0f0; color: #333; }
.dark-theme { background-color: #444444; color: #fff; }
</style>