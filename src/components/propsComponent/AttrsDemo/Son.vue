<template>
    <div style="background-color: #d3f9d8; padding: 20px; margin-top: 15px; border-radius: 8px;">

        <h4>👦 儿子组件 (Son)</h4>
        <p>爷爷的钱<strong>{{ grandpaMoney }}</strong></p>

        <p>玩具数量：<strong>{{ sonToys }}</strong> 个</p>
        <button @click="onSpendMoney">买新玩具</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 儿子自己的独立变量
const sonToys = ref(3)
 defineProps(['grandpaMoney', 'onSpendMoney'])

</script>
