<template>
  <div style="padding: 20px; font-family: sans-serif;">
    <h2>🔒 Readonly vs ShallowReadonly 演示</h2>

    <!-- 显示原始数据状态 -->
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
      <p><strong>原始数据：</strong>{{ originalData.name }} - {{ originalData.address.city }}</p>
      <p><strong>深只读 (readonly)：</strong>{{ deepReadOnly.name }} - {{ deepReadOnly.address.city }}</p>
      <p><strong>浅只读 (shallowReadonly)：</strong>{{ shallowReadOnly.name }} - {{ shallowReadOnly.address.city }}</p>
    </div>

    <!-- 按钮区域 -->
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <button @click="modifyLevel" style="padding: 8px;">
        修改原始数据
      </button>
      <button @click="modifyDeepTopLevel" style="padding: 8px;">
        ❌ 修改【深只读】顶层属性 (name)
      </button>

      <button @click="modifyDeepNested" style="padding: 8px;">
        ❌ 修改【深只读】嵌套属性 (address.city)
      </button>

      <hr />

      <button @click="modifyShallowTopLevel" style="padding: 8px;">
        ❌ 修改【浅只读】顶层属性 (name)
      </button>

      <button @click="modifyShallowNested" style="padding: 8px; background-color: #4caf50; color: white;">
        ✅ 修改【浅只读】嵌套属性 (address.city)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReadonly } from 'vue';

// 准备一个包含嵌套属性的原始响应式对象
let originalData = reactive({
  name: '张三', // 顶层属性
  address: {
    city: '北京', // 嵌套属性
    area: '朝阳区'
  }
});

// 创建两种只读代理
const deepReadOnly = readonly(originalData);
const shallowReadOnly = shallowReadonly(originalData);

// ========== 封装为独立函数 ==========

const modifyLevel = () => {
    Object.assign(originalData, { 
        name: '李四', 
        address: {
            city: '杭州', 
            area: '余杭'
        }
    });
}
    
// 1. 尝试修改【深只读】的顶层属性 -> 触发警告，修改失败
const modifyDeepTopLevel = () => {
  console.log('--- 点击了：修改【深只读】顶层属性 ---');
  deepReadOnly.name = '李四'; 
};

// 2. 尝试修改【深只读】的嵌套属性 -> 触发警告，修改失败
const modifyDeepNested = () => {
  console.log('--- 点击了：修改【深只读】嵌套属性 ---');
  deepReadOnly.address.city = '上海'; 
};

// 3. 尝试修改【浅只读】的顶层属性 -> 触发警告，修改失败
const modifyShallowTopLevel = () => {
  console.log('--- 点击了：修改【浅只读】顶层属性 ---');
  shallowReadOnly.name = '王五'; 
};

// 4. 尝试修改【浅只读】的嵌套属性 -> 【成功！】无警告，且视图会更新
const modifyShallowNested = () => {
  console.log('--- 点击了：修改【浅只读】嵌套属性 ---');
  shallowReadOnly.address.city = '深圳'; 
};
</script>