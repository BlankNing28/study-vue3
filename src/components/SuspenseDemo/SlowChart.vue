<template>
  <!-- ✅ 根本不需要 v-if="loading" 了！ -->
  <div class="box text-box">📝 我是普通的文本信息</div>
</template>

<script setup>
// 即使它只需 1 秒，Suspense 也会等上面的图表(3秒)一起就绪后再渲染
await new Promise(resolve => setTimeout(resolve, 1000)); 
console.log('文本数据加载完毕');
</script>