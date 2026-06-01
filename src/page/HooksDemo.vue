<template>
    <ul>
        <li v-for="value in dogList">{{ value }}</li>
    </ul>
    <button @click="changedong">改变狗</button>
</template>

<script setup>
    import { useDogs} from '@/hooks/useDog'

    const { dogList, changedong} = useDogs()
</script>