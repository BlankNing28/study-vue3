<script>
    export default {
        data(){
            return {
                msg: "你好",
                number: 12,
                rawhtml: '<em>倾斜</em>',
                message: '你好呀'
            }
        }
    }
</script>
<template>
    <p>message:{{  msg }}</p>
    <div>数字：{{ number + 1 }}</div>
    <p v-html="rawhtml"></p>
    <p>{{ message.split('').reverse().join('') }}</p>
</template>