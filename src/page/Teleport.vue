<template>
  <div style="padding: 20px;">
    <!-- 1. 触发按钮 -->
    <button @click="showModal = true">打开模态框</button>

    <!-- 2. 使用 Teleport 将内容传送到 body 下 -->
    <Teleport to="body">
      <!-- 用 v-if 控制显示和隐藏 -->
      <div 
        v-if="showModal" 
        class="modal-overlay" 
        @click.self="showModal = false"
      >
        <div class="modal-content">
          <h3>我是被传送过来的模态框！</h3>
          <p>虽然我在代码里写在下面，但在浏览器中我已经跑到 body 下了。</p>
          <button @click="showModal = false">关闭</button>
          <p>和ReactDOM.createPortal()一样</p>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 控制弹窗显示的开关
const showModal = ref(false);
</script>

<style scoped>
/* 全屏半透明遮罩 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 确保在最上层 */
}

/* 中间的白色内容区 */
.modal-content {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
}

.modal-content button {
  margin-top: 15px;
  padding: 6px 15px;
  cursor: pointer;
}
</style>