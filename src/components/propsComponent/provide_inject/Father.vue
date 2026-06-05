<script setup lang="ts">
import { ref } from 'vue'
import Son from './Son.vue'

// 父亲自己的独立变量
const fatherSalary = ref(10000)
const addSalary = () => {
  fatherSalary.value += 1000
}
</script>

<template>
  <div style="background-color: #d0ebff; padding: 20px; margin-top: 15px; border-radius: 8px;">
    <h3>👨 父亲组件 (Father)</h3>
    <p>工资：<strong>{{ fatherSalary }}</strong> 元</p>
    <button @click="addSalary" style="margin-bottom: 15px;">涨工资啦</button>
    
    <!-- 嵌套儿子组件 -->
    <Son />
  </div>
</template>