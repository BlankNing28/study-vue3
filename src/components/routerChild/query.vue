<template>
    <p>{{ myName }}</p>
    <p>{{ myAge }}</p>
    <button @click="changeName">改变name</button>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted, toRefs } from 'vue'
const route = useRoute()
const { query } = route

const myName = ref('')
const myAge = ref(0)

onMounted(() => {
    console.log(props.name)
    myName.value =props.name as string || ''
    myAge.value = props.age as number || 0  
})
const changeName = () => {
    myName.value = '李四'
    console.log(myName.value)
}

const props = defineProps<{
  name: string
  age: number
}>()
</script>