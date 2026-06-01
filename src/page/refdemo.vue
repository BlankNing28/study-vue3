<template>
    <h5>ref的基本响应数据</h5>
    <p>{{ name }}</p>
    <button @click="changeName">更换名字</button>
    <h5>对象类型</h5>
    <p>名字：{{ userInfo.name }} age: {{ userInfo.age }}</p>
    <button @click="changeObj">修改user</button>
</template>

<script setup>
import { ref } from 'vue'
let name = ref('张三')
let userInfo = ref(
    { name: '得到', age: '14', id: 1 },
)

function changeName() {
    // 这里要用.value
    name.value = '李四'
    console.log(name, '==')
}

const changeObj = () => {
    userInfo.value = { name: '李连杰', age: '15', id: 2 }
    }
</script>