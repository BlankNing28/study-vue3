<template>
    <p>数字{{ count}}，放大十倍：{{ bigSum }}</p>
    <button @click="addCount">点击增加</button>
</template>

<script setup lang="ts">
import { storeToRefs} from 'pinia'
    import useCount from '@/store/Count'
    const countStore = useCount()

    // pinia用storeToRefs性能好 避免toRefs
    const { count, bigSum }  = storeToRefs(countStore)
    const addCount = () => {
        // 方法一直接加
        // countStore.count += 1

        // 方法二
        // countStore.$patch({
        //     count: 10
        // })

        // 方法三
        countStore.increment(10)
    }


</script>