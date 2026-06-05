<template>
    <div style="background-color: #e9ecef; padding: 20px; border-radius: 8px;">
        <h2>👴 爷爷组件 (Grandpa)</h2>
        <p>金钱：<strong>{{ grandpaMoney }}</strong></p>
        <button @click="addGrandpaAge" style="margin-bottom: 15px;">给爷爷加钱</button>

        <!-- 嵌套父组件 -->
        <Father />
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Father from './Father.vue'

const grandpaMoney = ref(70)
const addGrandpaAge = () => {
    grandpaMoney.value++
}

provide('grandpaMoney',  grandpaMoney)
</script>