<template>
    <div style="background-color: #d3f9d8; padding: 20px; margin-top: 15px; border-radius: 8px;">

        <h4>👦 儿子组件 (Son)</h4>
        <p>爷爷的钱<strong>{{ familyMoney }}</strong></p>

        <p>玩具数量：<strong>{{ sonToys }}</strong> 个</p>
        <button @click="buyToy">买新玩具</button>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

// 儿子自己的独立变量
const sonToys = ref(3)
const buyToy = () => {
   if (familyMoney.value > 0) {
    familyMoney.value -= 10
    sonToys.value++ // 花钱买玩具
  }
}

const familyMoney = inject('grandpaMoney', 0)
</script>
