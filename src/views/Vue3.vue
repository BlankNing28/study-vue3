<script setup lang="ts">
import { ref } from 'vue'

// 引入所有组件
import Setup from '../page/setup.vue'
import RefDemo from '../page/refdemo.vue'
import ReactiveDemo from '../page/ReactiveDemo.vue'
import ToRefsDemo from '../page/toRefs.vue'
import ComputedDemo from '../page/computed.vue'
import WatchDemo from '../page/watch.vue'
import getRefDemo from '../page/getRef.vue'
import FatherDemo from '../page/Father.vue'
import Father2Demo from '../page/Father2.vue'
import HookDemo from '../page/HooksDemo.vue'

// Tabs 激活状态
const activeName = ref('Setup')
</script>

<template>
  <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
    <h1 style="text-align: center;">Vue3 语法大全学习</h1>

    <el-tabs v-model="activeName" type="card" style="margin-top: 20px;">
      
      <el-tab-pane label="setup 语法糖" name="Setup">
        <p>文件名：setup.vue</p>
        <Setup />
      </el-tab-pane>

      <el-tab-pane label="ref 基本类型" name="RefDemo">
        <p>文件名：refdemo.vue</p>
        <RefDemo />
      </el-tab-pane>

      <el-tab-pane label="reactive 对象" name="ReactiveDemo">
        <p>文件名：ReactiveDemo.vue</p>
        <ReactiveDemo />
      </el-tab-pane>

      <el-tab-pane label="toRefs 解构" name="ToRefsDemo">
        <p>文件名：toRefs.vue</p>
        <ToRefsDemo />
      </el-tab-pane>

      <el-tab-pane label="computed 计算属性" name="ComputedDemo">
        <p>文件名：computed.vue</p>
        <ComputedDemo />
      </el-tab-pane>

      <el-tab-pane label="watch 监听" name="WatchDemo">
        <p>文件名：watch.vue</p>
        <WatchDemo />
      </el-tab-pane>

      <el-tab-pane label="ref 获取DOM" name="getRefDemo">
        <p>文件名：getRef.vue</p>
        <getRefDemo />
      </el-tab-pane>

      <el-tab-pane label="父传子" name="FatherDemo">
        <p>文件名：Father.vue</p>
        <FatherDemo />
      </el-tab-pane>

      <el-tab-pane label="子传父" name="Father2Demo">
        <p>文件名：Father2.vue</p>
        <Father2Demo />
      </el-tab-pane>

      <el-tab-pane label="自定义Hook" name="HookDemo">
        <p>文件名：HooksDemo.vue</p>
        <HookDemo />
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<style>
.el-tabs {
  --el-tabs-card-border-color: #ddd;
}
.el-tab-pane {
  padding: 20px 10px;
}
p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}
</style>