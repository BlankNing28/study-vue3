<template>
  <div style="padding: 20px; font-family: sans-serif;">
    
    <!-- ==================== 上半部分：toRaw() 演示 ==================== -->
    <h3>🔍 上半部分：toRaw() 演示（获取原始对象）</h3>
    <div style="background-color: #eef; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
      <p><strong>响应式对象：</strong>{{ reactiveUser.name }}</p>
      <p><strong>通过 toRaw 获取的原始对象：</strong>{{ rawUser?.name }}</p>
    </div>
    <button @click="testToRaw" style="padding: 8px 15px; cursor: pointer;">
      点击测试 toRaw (查看控制台)
    </button>
    <div> 什么时候用 toRaw()？</div>
    <div>
        对接第三方非响应式库：有些第三方库（如某些图表库、地图 SDK）内部有自己的状态管理，它们不认识 Vue 的 Proxy。如果你直接把响应式数据传给它们可能会报错或卡顿，这时候就需要用 toRaw() 剥离掉 Proxy 外壳，传给它一个纯净的 JS 对象。
避免循环引用：在某些复杂的数据处理算法中，Proxy 对象可能会导致无限递归，转成 Raw 可以安全地进行纯数据计算。
    </div>
    <hr style="margin: 30px 0;" />

    <!-- ==================== 下半部分：markRaw() 演示 ==================== -->
    <h3>🛡️ 下半部分：markRaw() 演示（拒绝被代理）</h3>
    <div style="background-color: #efe; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
      <p><strong>普通配置项：</strong>{{ state.normalConfig.theme }}</p>
      <p><strong>被 markRaw 标记的配置项：</strong>{{ state.markedConfig.theme }}</p>
    </div>
    <button @click="testMarkRaw" style="padding: 8px 15px; cursor: pointer;">
      点击测试 markRaw (查看控制台)
    </button>
    <div> 什么时候用 markRaw()？</div>
    <div>大型静态列表/表格数据：如果你从后端拉取了一个包含几千条数据的数组，并且这些数据只用来展示，绝对不需要修改。把它们放进 reactive 会导致 Vue 递归代理几千个对象，瞬间卡死。这时可以用 markRaw() 包裹每一条数据，告诉 Vue：“别管它们，它们不需要响应式”，性能会大幅提升。
实例化后的第三方类：比如 new ECharts(...) 或者 new Lodash() 产生的实例，这些实例本身就不需要参与 Vue 的视图更新，用 markRaw() 保护起来是最安全的做法。</div>
  </div>
  
</template>

<script setup lang="ts">
import { reactive, toRaw, markRaw, isReactive } from 'vue';

// ========== 上半部分：toRaw() 相关逻辑 ==========
const reactiveUser = reactive({ name: '张三' });
  const rawUser = toRaw(reactiveUser); 

const testToRaw = () => {
  // 使用 toRaw 拿到没有被 Proxy 包裹的纯 JS 对象
  
  console.log('--- toRaw 测试结果 ---');
  console.log('响应式对象:', reactiveUser);
  console.log('原始对象:', rawUser);
  
  // 修改原始对象，不会触发 Vue 视图更新
  rawUser.name = '李四'; 
  console.log('修改后页面不会变，因为绕过了响应式系统');
};


// ========== 下半部分：markRaw() 相关逻辑 ==========
const state = reactive({
  normalConfig: { theme: 'light' }, // 会被自动转换为响应式
  markedConfig: markRaw({ theme: 'dark' }) // 贴了免死金牌，不会被转换
});

const testMarkRaw = () => {
  console.log('--- markRaw 测试结果 ---');
  console.log('normalConfig 是响应式的吗?', isReactive(state.normalConfig)); // true
  console.log('markedConfig 是响应式的吗?', isReactive(state.markedConfig)); // false
  
  // 尝试修改被 markRaw 标记的对象
  state.markedConfig.theme = 'blue';
  console.log('修改了 markedConfig，但页面不会有任何变化！');
};
</script>