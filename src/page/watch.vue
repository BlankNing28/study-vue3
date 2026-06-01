<template>
    <h5>基本类型监听</h5>
    <p>{{ num }}</p>
    <button @click="addnum">增加num</button>

    <h5>对象类型监听</h5>
    <p>{{ users.name }}{{ users.age }}</p>
    <button @click="changuserName">改变名字</button>
    <button @click="changeUser">改变人物对象</button>

    <h5>reactive监听</h5>
    <p>{{ reactiveWatch.name }}{{ reactiveWatch.age }} 爱好{{ reactiveWatch.hobby.name }} 时间{{ reactiveWatch.hobby.time }}</p>
    <button @click="changeReactiveName">改变名字</button>
    <button @click="changeReactive">改变人物对象</button>
    <button @click="changehoddy">改变人物爱好</button>

    <h5>watchEffect</h5>
    水温大于50或者水位大于60请求
    <p>水温 {{ waterTemp }}</p>
    <p>水位 {{ waterHeight }}</p>
    <button @click="changeWaterHeight">水位+10</button>
    <button @click="changeWaterTemp">水温+10</button>
</template>

<script setup>
import { ref, watch, reactive, watchEffect } from 'vue';
    let num = ref(0)
    let users = ref({name: 1, age: 2})
    let reactiveWatch = reactive({name: 1, age: 2, hobby: { name: '篮球', time: 88}})
    let waterHeight = ref(0)
    let waterTemp = ref(0)

    function addnum(){
        num.value++
    }

    const addwatch = watch(num, (newValue, oldValue) => {
        console.log(newValue)
        if(num > 10){
            // 停止监控
            addwatch()
        }
    })

    const changuserName = () => {
        users.value.name = '都是'
    }

    const changeUser = () => {
        users.value = { name: '多的', age: 22}
    }
    const changeReactive = () => {
        reactiveWatch = Object.assign(reactiveWatch, { name: '多的', age: 22})
    }
    const changeReactiveName = () => {
        reactiveWatch.name = '零零'
    }
    const changehoddy = () => {
        reactiveWatch.hobby = { name: '足球', time: 55}
    }

    const changeWaterHeight = () => {
        waterHeight.value += 10
    }
    const changeWaterTemp = () => {
        waterTemp.value += 10
    }

    watch(users, (newValue, oldValue) => {
        console.log(newValue.name, '==>')
        // deep是深层监听里面属性改变了也会触发监听，immediate是第一次就会直接执行一次
    }, {deep: true, immediate: true})

    watch(reactiveWatch, (newValue, oldValue) => {
        console.log(newValue, oldValue, '==>')
    }, )

    // 必须函数式才能监听到
    watch(() =>reactiveWatch.hobby, (newValue, oldValue) => {
        console.log(newValue, oldValue, '---<<')
    }, )

    // 一上来就会执行一次
    watchEffect(() => {
        if(waterTemp.value > 60 || waterHeight.value > 50){
            alert('请求了')
        }
    })


</script>