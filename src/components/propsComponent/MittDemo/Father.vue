<script setup lang="ts">
import { ref } from 'vue'
import SonA from './SonA.vue'
import SonB from './SonB.vue'

// 父亲自己的独立变量
const fatherMoney = ref(20000)
const earnMoney = () => {
  fatherMoney.value += 5000
}
</script>

<template>
  <div style="background-color: #d0ebff; padding: 20px; border-radius: 8px;">
    <h3>👨 父亲组件 (Father)</h3>
    <p>私房钱：<strong>{{ fatherMoney }}</strong> 元</p>
    <button @click="earnMoney" style="margin-bottom: 15px;">加班赚5000</button>

    <!-- 嵌套两个儿子，使用 flex 布局让他们并排显示 -->
    <div style="display: flex; gap: 15px; margin-top: 15px;">
      <SonA />
      <SonB />
    </div>
  </div>
</template>