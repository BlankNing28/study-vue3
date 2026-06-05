<template>
  <h3>父组件</h3>
  <Son2 @sendMsg="getMsg" @sendList="getList" />
</template>

<script setup>
import Son2 from './Son2.vue'
const getMsg = (val) => {
  console.log('子传的普通值：', val)
}
const getList = (val) => {
  console.log('子传的普通值：', val)
}

</script>