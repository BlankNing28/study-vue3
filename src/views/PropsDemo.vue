<script setup lang="ts">
import { ref, shallowRef } from 'vue'

// 引入所有组件
import propsDemo from '@/components/propsComponent/propsDemo/Father.vue'
import defineEmits from '@/components/propsComponent/defineEmits/Father2.vue'
import ProvideInject from '@/components/propsComponent/provide_inject/Grandpa.vue'
import MittDemo from '@/components/propsComponent/MittDemo/Father.vue'
import AttrsDemo from '@/components/propsComponent/AttrsDemo/Grandpa.vue'
import RefsParents from '@/components/propsComponent/Refs_parents/ThemePanel.vue'

// 当前激活的组件
const currentComponent = shallowRef(propsDemo)

// 配置菜单列表，方便后续扩展
const menuList = [
  { label: '父传子', component: propsDemo },
  { label: '子传父', component: defineEmits },
  { label: 'Provide和Inject', component: ProvideInject },
  { label: '$mitt', component: MittDemo },
  { label: '$attrs', component: AttrsDemo },
  { label: '$refs-$parent', component: RefsParents },
]
</script>

<template>
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