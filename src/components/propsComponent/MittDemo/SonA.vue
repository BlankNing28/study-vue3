<script setup lang="ts">
import { ref  } from 'vue'
import eventBus from '@/utils/eventBus'; 

const sonAMoney = ref(1000)
const getAllowance = () => {
  sonAMoney.value += 200
}

const sendMoney = () => {
  console.log('大儿子发出了500块钱...')
  // 触发事件：第一个参数是事件名，第二个参数是传递的数据
  sonAMoney.value -= 500
   eventBus.emit('give-money', 500); 
}
</script>

<template>
  <div style="background-color: #d3f9d8; padding: 20px; border-radius: 8px; flex: 1;">
    <h4>🧒 大儿子 (Son A)</h4>
    <p>零花钱：<strong>{{ sonAMoney }}</strong> 元</p>
    <button @click="getAllowance">找妈要200块</button>
    <button @click="sendMoney">给弟弟转500块</button>
  </div>
</template>