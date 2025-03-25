<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>xwh<span class="dot">.</span></h2>
          <p>专注于打造优质用户体验与高性能前端应用</p>
        </div>
        <div class="footer-links">
          <div class="footer-section">
            <h3>导航</h3>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于我</router-link></li>
              <li><router-link to="/projects">项目展示</router-link></li>
              <li><router-link to="/experience">工作经历</router-link></li>
              <li><router-link to="/blog">博客</router-link></li>
              <li><router-link to="/contact">联系我</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>联系方式</h3>
            <p>邮箱：zhangwei@email.com</p>
            <p>电话：13800138000</p>
          </div>
          <div class="footer-section">
            <h3>关注我</h3>
            <div class="social-links">
              <a href="https://weibo.com/zhangweiit" target="_blank"><i class="fab fa-weibo"></i> 微博</a>
              <a href="#" target="_blank"><i class="fab fa-weixin"></i> 微信</a>
              <a href="https://space.bilibili.com/zhangweiit" target="_blank"><i class="fas fa-video"></i> B站</a>
              <a href="https://blog.zhangweitech.cn" target="_blank"><i class="fas fa-rss"></i> 博客</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>&copy; {{ currentYear }} xwh. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-logo {
  flex: 0 0 100%;
  margin-bottom: 30px;
}

.footer-logo h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.footer-section {
  flex: 0 0 30%;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: var(--text-light);
  text-decoration: none;
  transition: var(--transition);
}

.footer-section a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
}

.social-links a {
  margin-right: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.footer-copyright {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--gray-light);
}

@media (max-width: 768px) {
  .footer-section {
    flex: 0 0 48%;
  }
}

@media (max-width: 480px) {
  .footer-section {
    flex: 0 0 100%;
  }
}
</style> 