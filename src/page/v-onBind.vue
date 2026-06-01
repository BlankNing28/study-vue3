<template>
    <p>num {{ num }}</p>
    <button @click="num++">点击加1</button>
</template>
<script>
    export default {
        data() {
            return {
                num: 0
            }
        }
    }
</script>