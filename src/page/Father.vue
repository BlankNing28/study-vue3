<template>
    <div class="father">
        <h3>我是父组件</h3>

        <!-- 父传子：直接写在子组件标签上 -->
        <Son :msg="msg" :list="fruitList"/>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Son from '../components/Son.vue' // 引入子组件

// 要传给子的 普通变量
const msg = ref('我是父组件的消息')

// 要传给子的 数组
const fruitList = ref(['苹果', '香蕉', '橙子', '西瓜'])
</script>