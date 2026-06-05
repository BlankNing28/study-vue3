import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from "pinia";
import Hello from '@/page/Hello.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('Hello', Hello);


app.directive('beauty', (el, binding) => {
  // el: 绑定了该指令的 DOM 元素
  // binding.value: 传入的值
  
  // 修改元素的文本内容
  el.innerText += ` (${binding.value})`;
  
  // 修改元素的样式
  el.style.borderRadius = '8px';        // 圆角
  el.style.textAlign = 'center'
});
app.use(pinia)
app.use(router) // 挂载
app.use(ElementPlus)
app.mount('#app')