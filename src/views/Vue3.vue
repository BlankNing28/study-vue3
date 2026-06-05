<script setup lang="ts">
import { ref, shallowRef } from 'vue'

// 引入所有组件
import Setup from '../page/setup.vue'
import RefDemo from '../page/refdemo.vue'
import ReactiveDemo from '../page/ReactiveDemo.vue'
import ToRefsDemo from '../page/toRefs.vue'
import ComputedDemo from '../page/computed.vue'
import WatchDemo from '../page/watch.vue'
import getRefDemo from '../page/getRef.vue'
import HookDemo from '../page/HooksDemo.vue'
import SlotDemo from '@/components/Slot/Father.vue'
import ShallowDemo from "@/page/shallowRef.vue";
import ReadonlyDemo from "@/page/ReadonlyDemo.vue";
import ToRaw from "@/page/ToRaw.vue";
import CustomRef from "@/page/CustomRef.vue";
import TeleportDemo from "@/page/Teleport.vue";
import Suspense from "@/page/Suspense.vue";

// 当前激活的组件
const currentComponent = shallowRef(Setup)

// 配置菜单列表，方便后续扩展
const menuList = [
  { label: 'setup 语法糖', component: Setup },
  { label: 'ref 基本类型', component: RefDemo },
  { label: 'reactive 对象', component: ReactiveDemo },
  { label: 'toRefs 解构', component: ToRefsDemo },
  { label: 'computed 计算属性', component: ComputedDemo },
  { label: 'watch 监听', component: WatchDemo },
  { label: 'ref 获取DOM', component: getRefDemo },
  { label: '自定义Hook', component: HookDemo },
  { label: '插槽solt', component: SlotDemo },
  { label: 'ShallowRef', component: ShallowDemo },
  { label: 'ReadonlyDemo', component: ReadonlyDemo },
  { label: 'toRaw和markRaw', component: ToRaw },
  { label: 'CustomRef', component: CustomRef },
  { label: 'TeleportDemo', component: TeleportDemo },
  { label: 'Suspense', component: Suspense },
]
</script>

<template>
  <Hello />
  <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
    <h1 style="text-align: center;">Vue3 语法大全学习</h1>

    <!-- 使用 radio-group 作为按钮导航 -->
    <el-radio-group 
      v-model="currentComponent" 
      style="margin-top: 20px; flex-wrap: wrap;"
    >
      <el-radio-button 
        v-for="item in menuList" 
        :key="item.label" 
        :value="item.component"
         style="margin-bottom: 4px;"
      >
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>

    <!-- 动态渲染对应的组件 -->
    <div style="margin-top: 20px; border: 1px solid #eee; padding: 20px; border-radius: 4px;">
      <component :is="currentComponent" />
    </div>
  </div>
</template>