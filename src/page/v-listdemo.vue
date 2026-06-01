<template>
    <p v-for="item in names">{{ item }}</p>
    <p v-for="item in result">{{ item.name }}</p>
    <h6>对象遍历</h6>
    <p v-for="(value, key, index) in userObj">{{ key }} : {{ value }}</p>
</template>

<script>
export default {
    data() {
        return {
            names: ['百战程序员', "我是dj", '你好'],
            result: [
                { id: 1, name: '首页' },
                { id: 2, name: '分类' },
                { id: 3, name: '购物车' },
                { id: 4, name: '我的' }
            ],
            userObj: {
                id: 1,
                name: "张三",
                age: 22,
                gender: "男",
                phone: "13800138000",
                avatar: "头像地址",
                isVip: false
            }
        }
    }
}
</script>