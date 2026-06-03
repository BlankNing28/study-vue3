<template>
    {{ name }}
    {{ age }}
</template>


<script setup lang="ts">


    const props = defineProps<{
        name: string
        age: number
    }>()
</script>