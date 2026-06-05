<template>
  <div class="dashboard">
    <h3>作用：异步组件</h3>
    <h2>后台仪表盘 (Suspense版)</h2>
    
    <!-- 🚀 核心魔法在这里 -->
    <Suspense>
      <!-- #default: 放需要等待的异步内容 -->
      <template #default>
        <div class="content-wrapper">
          <SlowChart />
          <FastText />
        </div>
      </template>
      
      <!-- #fallback: 只要里面有任何一个没准备好，就显示这个 -->
      <template #fallback>
        <div class="box loading-box">⏳ 正在为您准备所有数据，请稍候...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import SlowChart from '@/components/SuspenseDemo/SlowChart.vue';
import FastText from '@/components/SuspenseDemo/FastText.vue';
</script>

<style scoped>
.dashboard { padding: 20px; font-family: sans-serif; }
.content-wrapper { display: flex; gap: 15px; }
.box { padding: 20px; border-radius: 8px; width: 200px; text-align: center; }
.chart-box { background-color: #e6f7ff; border: 1px solid #91d5ff; }
.text-box { background-color: #f6ffed; border: 1px solid #b7eb8f; }
.loading-box { background-color: #fffbe6; border: 1px solid #ffe58f; color: #d48806;}
</style>