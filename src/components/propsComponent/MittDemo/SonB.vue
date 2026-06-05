<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import eventBus from '@/utils/eventBus'; // 引入独立的 eventBus

// 二儿子自己的独立变量
const sonBMoney = ref(800)
const buySnack = () => {
  if (sonBMoney.value >= 50) {
    sonBMoney.value -= 50
  }
}
const receiveMoney = (amount: number) => {
  console.log(`二儿子收到了 ${amount} 块钱！`)
  sonBMoney.value += amount
}
onMounted(() => {
  eventBus.on('give-money', receiveMoney);
});

// 【关键】组件销毁前必须取消监听，避免内存泄漏
onBeforeUnmount(() => {
  eventBus.off('give-money', receiveMoney); 
});
</script>

<template>
  <div style="background-color: #fff9db; padding: 20px; border-radius: 8px; flex: 1;">
    <h4>👦 二儿子 (Son B)</h4>
    <p>零花钱：<strong>{{ sonBMoney }}</strong> 元</p>
    <button @click="buySnack">花50块买零食</button>
  </div>
</template>