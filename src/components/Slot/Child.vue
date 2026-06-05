<template>
  <div class="child-box">
    <h3>我是子组件</h3>
    <!-- 插槽：父组件传什么，我就显示什么 -->
    <slot name="s2">默认内容：我是插槽默认显示~</slot>
    <h3>具名插槽</h3>
    <slot name="s1"></slot>
     <h3>作用域插槽</h3>
  <slot name="v3" :str="str"></slot>
  </div>

 
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const str = ref('这是作用域插槽，可以在父组件差异展示子组件的数据')
</script>

<style scoped>
.child-box {
  border: 2px solid #42b983;
  padding: 20px;
  margin: 20px;
}
</style>