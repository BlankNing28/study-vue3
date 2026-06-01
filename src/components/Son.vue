<template>
    <div class="son">
        <h4>我是子组件</h4>

        <!-- 直接用 -->
        <p>接收的普通变量：{{ msg }}</p>

        <ul>
            <!-- 数组循环 -->
            <li v-for="item in list" :key="item">
                水果：{{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  // 接收普通变量
  msg: {
    type: String,
    default: ''
  },
  // 接收数组
  list: {
    type: Array<string>,
    default: () => []
  }
})
</script>