<template>
  <div id="app">
    <header-nav />
    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <site-footer />
  </div>
</template>

<script>
import HeaderNav from './components/layout/HeaderNav.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    SiteFooter
  }
}
</script>

<style>
/* 全局变量和基础样式 */
:root {
  /* 主要色系 */
  --primary-color: #1976d2;
  --primary-light: #63a4ff;
  --primary-dark: #004ba0;
  --secondary-color: #f5f5f5;
  --text-color: #333333;
  --text-light: #666666;
  --white: #ffffff;
  --black: #000000;
  --gray-light: #e0e0e0;
  --gray: #9e9e9e;
  
  /* 强化色彩与梯度 */
  --primary-gradient: linear-gradient(135deg, #1976d2 0%, #63a4ff 100%);
  --secondary-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  --accent-color: #FF6B6B;
  --dark-accent: #45aaf2;
  
  /* 功能色彩 */
  --success: #4caf50;
  --warning: #ff9800;
  --error: #f44336;
  
  /* 设计参数 */
  --border-radius: 4px;
  --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  --hover-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
  --max-width: 1200px;
}

/* 重置样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 基础样式 */
body {
  font-family: 'Noto Sans SC', 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--white);
  overflow-x: hidden;
}

/* 应用容器 */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

/* 按钮样式 */
.btn {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: var(--transition);
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
  z-index: -1;
}

.btn:hover:after {
  transform: scaleX(1);
  transform-origin: left;
}

.btn.primary {
  background: var(--primary-gradient);
  color: var(--white);
  box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);
}

.btn.primary:hover {
  box-shadow: 0 6px 20px rgba(25, 118, 210, 0.5);
  transform: translateY(-2px);
}

.btn.secondary {
  background-color: var(--white);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn.secondary:hover {
  background-color: var(--primary-light);
  color: var(--white);
  border-color: var(--primary-light);
}

/* 标题样式 */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 60px;
  height: 4px;
  background: var(--primary-gradient);
  transform: translateX(-50%);
  border-radius: 2px;
}

/* 页面过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 滚动动画类 */
.fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>
