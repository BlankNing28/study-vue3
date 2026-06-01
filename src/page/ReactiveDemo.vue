<template>
    <h5>ref的基本响应数据</h5>
    <ul>
        <li v-for="item in userList" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="changeName">更换名字</button>
    <h5>直接修改整体对象</h5>
    <p>名字：{{ userInfo.name }} age: {{ userInfo.age }}</p>
    <button @click="changeUser">修改user</button>
</template>

<script setup>
    import { reactive } from 'vue'
    let userList = reactive([
        {name: '占山', id: 1},
        {name: '往往', id: 2},
    ])
    let userInfo = reactive({ name: '得到', age: '14', id: 1 },)

    function changeName() {
        userList[0].name = '得到'
    }

    const changeUser = () => {
        // reactive必须浅拷贝
        userInfo =  Object.assign(userInfo, { name: '李连杰', age: '15', id: 2 })
    }
</script>