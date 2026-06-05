<template>
  <div style="padding: 20px;">
    <h3>防抖输入框演示</h3>
    <!-- 绑定我们的自定义 ref -->
    <input v-model="searchQuery" placeholder="随便快速打字试试..." />
    <p>实际更新的查询词：{{ searchQuery }}</p>
  </div>
  <div>
    track()（依赖收集）：必须放在 get() 方法里。它的作用是告诉 Vue：“这个数据被读取了，请持续关注它，一旦变化就通知相关的组件。”
  </div>
  <div>
    trigger()（触发更新）：必须放在 set() 方法里。它的作用是告诉 Vue：“这个数据已经被我修改完了，你可以去刷新页面了
  </div>

  <h3>示例2</h3>

   <div style="padding: 20px;">
    <!-- 1. 这个输入框绑定了自定义的 ref -->
    <input v-model="myValue" placeholder="随便打字试试..." />
    
    <!-- 2. 显示页面上的值 -->
    <p>当前页面的值：{{ myValue }}</p>
    
    <!-- 3. 这是一个开关按钮 -->
    <button @click="toggleUpdate">
      {{ allowUpdate ? '关闭自动更新' : '开启允许更新' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { customRef } from 'vue';

// 封装一个防抖 ref 的工厂函数
function useDebouncedRef(initialValue: string, delay = 500) {
  let timeout: ReturnType<typeof setTimeout>;
  
  return customRef((track, trigger) => {
    let value = initialValue;
    
    return {
      get() {
        track(); // 正常收集依赖
        return value;
      },
      set(newValue) {
        // 【核心逻辑】每次输入都清除上一次的定时器
        clearTimeout(timeout);
        
        // 延迟指定时间后，才真正赋值并触发更新
        timeout = setTimeout(() => {
          value = newValue;
          trigger(); // 延迟触发视图更新
        }, delay);
      }
    };
  });
}

// 使用自定义的 ref，默认延迟 500ms
const searchQuery = useDebouncedRef('', 500);



let allowUpdate = true; // 控制是否允许页面刷新的开关

// ✅ 加上 <string> 告诉 TS 这是一个字符串类型的 ref
const myValue = customRef<string>((track, trigger) => {
  // 🔄 将 value 替换为 internalText，表示这是闭包内部维护的真实数据
  let internalText = ''; 
  
  return {
    get() {
      track(); // 【第一步】正常收集依赖
      return internalText; // 返回内部变量
    },
    set(newValue) {
      internalText = newValue; // 将新值赋给内部变量
      
      // 【第二步】核心魔法在这里！
      if (allowUpdate) {
        trigger(); // 只有当开关打开时，才通知 Vue 去刷新页面
      } else {
        console.log('数据已经改了，但我故意不让页面刷新~');
      }
    }
  };
});

// 切换开关的方法
const toggleUpdate = () => {
  allowUpdate = !allowUpdate;
};
</script>