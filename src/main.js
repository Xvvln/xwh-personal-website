/* eslint-disable no-undef */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 初始化AOS动画库
document.addEventListener('DOMContentLoaded', function() {
  // 检查AOS是否存在
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 100
    });
  } else {
    console.error('AOS库未加载，检查CDN链接是否有效');
  }
});

// 路由变化时重新初始化AOS
router.afterEach(() => {
  setTimeout(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, 100);
});

// 创建Vue应用实例
const app = createApp(App)

// 使用路由
app.use(router)

// 挂载应用
app.mount('#app')
