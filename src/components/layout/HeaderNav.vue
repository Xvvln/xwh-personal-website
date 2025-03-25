<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <h1>xwh<span class="dot">.</span></h1>
          </router-link>
        </div>
        <div class="mobile-nav-toggle" @click="toggleMenu">
          <i v-if="!isMenuOpen" class="fas fa-bars"></i>
          <i v-else class="fas fa-times"></i>
        </div>
        <nav class="nav-menu" :class="{ 'active': isMenuActive }">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">关于我</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">项目展示</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/experience" class="nav-link">工作经历</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link">博客</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">联系我</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      isMenuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>

<style scoped>
.header {
  padding: 20px 0;
  position: sticky;
  top: 0;
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
}

.logo a {
  text-decoration: none;
}

.dot {
  color: var(--primary-color);
}

.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-item {
  margin-left: 30px;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  padding: 5px 0;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-link:hover, .router-link-active {
  color: var(--primary-color);
}

.nav-link:hover:after, .router-link-active:after {
  width: 100%;
}

.mobile-nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-nav-toggle i {
  font-size: 1.5rem;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .mobile-nav-toggle {
    display: flex;
    z-index: 101;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--white);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    justify-content: center;
    transition: var(--transition);
  }
  
  .nav-menu.active {
    right: 0;
  }
  
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-item {
    margin: 15px 0;
  }
}
</style> 