<template>
    <p v-if="option === 'a'">我是a</p>
    <p v-else-if="option === 'b'">我是b</p>
    <p v-else="option === 'c'">我是c</p>
    <p v-show="option === 'b'">v-show</p>
</template>

<script>
    export default {
        data () {
            return {
                option: 'b'
            }
        }
    }
</script>