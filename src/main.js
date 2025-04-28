import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// 创建应用实例
// const app = createApp(App);

// // 添加一个全局方法来更新标题
// app.config.globalProperties.$updateTitle = function(title) {
//   document.title = title;
// };

// // 挂载应用实例
// app.mount('#app');