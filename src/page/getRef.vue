<template>
    <p ref="aref">a</p>
    <p>b</p>
    <button @click="getAref">获取元素</button>
</template>

<script setup>
import { ref, defineExpose} from 'vue';
    let aref = ref()
    function getAref() {
        console.log(aref.value)
    }

    // 如果外部想获取子组件的元素  需要用这个导出
    defineExpose(aref)
</script>