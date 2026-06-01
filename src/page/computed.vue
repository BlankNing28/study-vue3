
<template>
    <p>{{ num1 }}</p>
    <p>{{ num2 }}</p>
    <p>{{ addnum }}</p>
    <button @click="changNum">直接改变计算的值</button>
</template>

<script setup>
import { ref, computed } from 'vue';
    let num1 = ref(31)
    let num2 = ref(12)

    let addnum = computed( {
        get(){
            return num1.value + num2.value
        },
        // 一般全选会用到set  平时直接不写get  set  直接return就好了
        set(val) {
            console.log(val)
            num1.value = 66
        }
    })

    function changNum () {
        addnum.value = 99
    }
</script>