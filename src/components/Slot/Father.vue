<template>
  <div class="parent-box">
    <h2>我是父组件</h2>

    <!-- 子组件 + 插槽 -->
    <Child>
      <!-- ✅ 具名插槽必须直接写在 Child 下，不能被 div 包裹 -->
      <template v-slot:s2>
        <h4>插槽里的列表：</h4>
        <ul>
          <li v-for="item in list" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </template>

      <template v-slot:s1>
        <p>这是具名插槽，命名后子组件接收 </p>
      </template>

      <template v-slot:v3="params">
        <p>{{ params.str }}</p>
      </template>
    </Child>
    <Child>
       <template v-slot:v3="params">
        <h1>{{ params.str }}</h1>
      </template>
    </Child>
  </div>
</template>

<script setup lang="ts">
import Child from './Child.vue'

const list = [
  { id: 1, name: 'Vue3 插槽学习' },
  { id: 2, name: '父组件传内容' },
  { id: 3, name: '子组件默认展示' },
  { id: 4, name: '列表循环渲染' }
]
</script>

<style scoped>
.parent-box {
  max-width: 600px;
  margin: 0 auto;
}
</style>