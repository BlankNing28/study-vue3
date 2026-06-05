<template>
  <!-- ✅ 根本不需要 v-if="loading" 了！ -->
  <div class="box chart-box">📊 我是复杂的图表数据</div>
</template>

<script setup>
// 只需要在顶层写 await，Vue 会自动识别这是一个异步依赖
await new Promise(resolve => setTimeout(resolve, 3000)); 
console.log('图表数据加载完毕');
</script>