<template>
    <p>{{  users.name }}{{ users.age }}</p>
    <button @click="changeUser">点击更新</button>
</template>

<script setup>
import { toRefs, reactive } from 'vue';
    let users= reactive({
        name: '张三',
        age: 14,
    })
    const { name, age } = toRefs(users)
    //toref是给单个值用的
    // const nameRef = toRef(users, 'name')

    const changeUser = () => {
        name.value = '李四'
        users.age = 22
    }
</script>