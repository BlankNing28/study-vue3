<template>
    <h4>子组件</h4>
    <button @click="sendToFather">点我传给父组件</button>
</template>

<script setup>
    const emit = defineEmits(['sendMsg', 'sendList'])

    const sendToFather = () => {
        emit('sendMsg', '我是子组件的消息')
    }

    emit('sendList', ['苹果', '香蕉', '橙子'])
</script>