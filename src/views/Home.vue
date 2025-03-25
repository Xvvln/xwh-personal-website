<template>
  <div class="home">
    <section class="hero">
      <div class="hero-background">
        <div class="hero-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <div class="profile-image" data-aos="zoom-in" data-aos-delay="300">
            <div class="profile-icon">
              <i class="mdi mdi-account"></i>
            </div>
          </div>
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="400">xwh <span class="highlight">|</span> 前端开发工程师</h1>
          <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="500">专注于打造优质用户体验与高性能前端应用</p>
          <div class="hero-buttons" data-aos="fade-up" data-aos-delay="600">
            <router-link to="/projects" class="btn primary"><i class="fas fa-code"></i> 查看项目</router-link>
            <router-link to="/contact" class="btn secondary"><i class="fas fa-envelope"></i> 联系我</router-link>
          </div>
          <div class="social-links" data-aos="fade-up" data-aos-delay="700">
            <a href="https://weibo.com/zhangweiit" target="_blank" class="social-link"><i class="fab fa-weibo"></i> 微博</a>
            <a href="https://space.bilibili.com/zhangweiit" target="_blank" class="social-link"><i class="fas fa-video"></i> B站</a>
            <a href="https://github.com/zhangwei-dev" target="_blank" class="social-link"><i class="fab fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">专业技能</h2>
        <div class="skills-grid">
          <div class="skill-card" data-aos="flip-left" data-aos-delay="100">
            <div class="skill-icon">
              <i class="fab fa-html5"></i>
            </div>
            <h3>前端开发</h3>
            <p>精通HTML5, CSS3, JavaScript等前端技术，擅长构建响应式和跨浏览器兼容的网站。</p>
            <div class="skill-level">
              <div class="skill-bar" style="width: 95%"></div>
            </div>
          </div>
          <div class="skill-card" data-aos="flip-left" data-aos-delay="200">
            <div class="skill-icon">
              <i class="fab fa-vuejs"></i>
            </div>
            <h3>Vue.js</h3>
            <p>深入理解Vue生态系统，熟练使用Vue Router, Vuex进行复杂单页应用的开发。</p>
            <div class="skill-level">
              <div class="skill-bar" style="width: 90%"></div>
            </div>
          </div>
          <div class="skill-card" data-aos="flip-left" data-aos-delay="300">
            <div class="skill-icon">
              <i class="fab fa-react"></i>
            </div>
            <h3>React</h3>
            <p>掌握React框架及其核心概念，能够使用React Hook和Redux进行状态管理。</p>
            <div class="skill-level">
              <div class="skill-bar" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-card" data-aos="flip-left" data-aos-delay="400">
            <div class="skill-icon">
              <i class="fab fa-node-js"></i>
            </div>
            <h3>Node.js</h3>
            <p>熟悉使用Node.js和Express构建后端服务，实现全栈JavaScript开发。</p>
            <div class="skill-level">
              <div class="skill-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">精选项目</h2>
        <div class="projects-grid">
          <div class="project-card" data-aos="fade-up" data-aos-delay="100">
            <div class="project-image">
              <div class="project-placeholder">
                <i class="mdi mdi-web"></i>
                <div class="project-overlay">
                  <router-link to="/projects" class="project-view-btn">查看详情</router-link>
                </div>
              </div>
            </div>
            <div class="project-info">
              <span class="project-category">网站开发</span>
              <h3 class="project-title">个人网站开发</h3>
              <p class="project-description">使用Vue.js开发的个人品牌网站，展示作品和技能。采用现代化UI设计和响应式布局。</p>
            </div>
          </div>
          <div class="project-card" data-aos="fade-up" data-aos-delay="200">
            <div class="project-image">
              <div class="project-placeholder">
                <i class="mdi mdi-shopping"></i>
                <div class="project-overlay">
                  <router-link to="/projects" class="project-view-btn">查看详情</router-link>
                </div>
              </div>
            </div>
            <div class="project-info">
              <span class="project-category">网站开发</span>
              <h3 class="project-title">电商平台</h3>
              <p class="project-description">基于React开发的现代电商平台，实现了商品展示、购物车、订单管理等核心功能。</p>
            </div>
          </div>
          <div class="project-card" data-aos="fade-up" data-aos-delay="300">
            <div class="project-image">
              <div class="project-placeholder">
                <i class="mdi mdi-cellphone"></i>
                <div class="project-overlay">
                  <router-link to="/projects" class="project-view-btn">查看详情</router-link>
                </div>
              </div>
            </div>
            <div class="project-info">
              <span class="project-category">移动应用</span>
              <h3 class="project-title">智能家居控制APP</h3>
              <p class="project-description">使用Flutter开发的跨平台移动应用，实现智能家居设备的远程控制和管理。</p>
            </div>
          </div>
        </div>
        <div class="view-all-projects" data-aos="fade-up">
          <router-link to="/projects" class="btn secondary">
            <i class="fas fa-project-diagram"></i> 查看全部项目
          </router-link>
        </div>
      </div>
    </section>

    <section class="media-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">社交媒体</h2>
        <div class="media-grid">
          <div class="media-card" v-for="(channel, index) in mediaChannels" :key="index" data-aos="zoom-in" :data-aos-delay="index * 100">
            <div class="media-icon">
              <i :class="getMediaIcon(channel.title)"></i>
            </div>
            <h3>{{ channel.title }}</h3>
            <p>{{ channel.handle }}</p>
            <a :href="channel.url" target="_blank" class="media-link">访问 <i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      mediaChannels: [
        {
          title: '微博',
          handle: '@xwh的IT世界',
          icon: '微',
          url: 'https://weibo.com/zhangweiit'
        },
        {
          title: '微信公众号',
          handle: 'xwh的IT小站',
          icon: '微信',
          url: '#'
        },
        {
          title: 'B站',
          handle: 'xwh的IT频道',
          icon: 'B',
          url: 'https://space.bilibili.com/zhangweiit'
        },
        {
          title: '个人博客',
          handle: 'blog.zhangweitech.cn',
          icon: '博',
          url: 'https://blog.zhangweitech.cn'
        }
      ]
    }
  },
  methods: {
    getMediaIcon(title) {
      switch(title) {
        case '微博': return 'fab fa-weibo';
        case '微信公众号': return 'fab fa-weixin';
        case 'B站': return 'mdi mdi-television-play';
        case '个人博客': return 'fas fa-rss';
        default: return 'fas fa-link';
      }
    },
    checkScrollForAnimation() {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    }
  },
  mounted() {
    // 监听滚动事件以添加动画效果
    window.addEventListener('scroll', this.checkScrollForAnimation);
    // 初始检查
    this.checkScrollForAnimation();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScrollForAnimation);
  }
}
</script>

<style scoped>
.hero {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f3ff 100%);
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%231976d2" fill-opacity="0.05" d="M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,144C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"%3E%3C/path%3E%3C/svg%3E');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: var(--primary-color);
  opacity: 0.1;
  animation: floatAnimation 10s infinite alternate ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -100px;
  animation-duration: 15s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-duration: 18s;
  animation-delay: 2s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 40%;
  right: 20%;
  animation-duration: 12s;
  animation-delay: 1s;
}

@keyframes floatAnimation {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(20px, 20px) rotate(5deg);
  }
  100% {
    transform: translate(-20px, 10px) rotate(-5deg);
  }
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.profile-image {
  width: 160px;
  height: 160px;
  margin: 0 auto 40px;
  border-radius: 50%;
  background: var(--primary-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(25, 118, 210, 0.3);
  border: 6px solid #ffffff;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

.profile-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: skewX(-25deg);
  transition: all 0.75s ease;
}

.profile-image:hover::before {
  left: 100%;
}

.profile-image:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 15px 35px rgba(25, 118, 210, 0.4);
}

.profile-icon {
  color: white;
  font-size: 80px;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.hero-title .highlight {
  color: var(--accent-color);
  -webkit-text-fill-color: var(--accent-color);
  font-weight: 400;
  margin: 0 10px;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--text-light);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-light);
  padding: 10px 15px;
  border-radius: 30px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.social-link i {
  margin-right: 8px;
  font-size: 1.1rem;
}

.social-link:hover {
  color: var(--white);
  background: var(--primary-gradient);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.3);
}

/* 技能部分 */
.skills-section {
  padding: 100px 0;
  background-color: var(--white);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.skill-card {
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  border-top: 4px solid transparent;
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
  border-top-color: var(--primary-color);
}

.skill-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  color: var(--white);
  border-radius: 12px;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2);
  transition: all 0.5s ease;
}

.skill-card:hover .skill-icon {
  transform: rotateY(360deg);
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.4);
}

.skill-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--text-color);
}

.skill-card p {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
}

.skill-level {
  height: 6px;
  background-color: var(--gray-light);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.skill-bar {
  height: 100%;
  background: var(--primary-gradient);
  border-radius: 3px;
  position: relative;
  animation: skillAnimation 1.5s ease-in-out;
}

@keyframes skillAnimation {
  0% {
    width: 0;
  }
}

/* 项目部分 */
.featured-projects {
  padding: 100px 0;
  background-color: #f9f9f9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.project-card {
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: all 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.project-image {
  height: 220px;
  overflow: hidden;
  position: relative;
}

.project-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  color: var(--white);
  font-size: 5rem;
  opacity: 0.9;
  transition: all 0.5s ease;
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-view-btn {
  padding: 8px 20px;
  background-color: var(--white);
  color: var(--primary-color);
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transform: translateY(20px);
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.project-view-btn i {
  font-size: 0.8rem;
}

.project-card:hover .project-view-btn {
  transform: translateY(0);
  background-color: var(--primary-color);
  color: var(--white);
  box-shadow: 0 8px 25px rgba(25, 118, 210, 0.4);
}

.project-info {
  padding: 25px;
}

.project-category {
  display: inline-block;
  padding: 6px 15px;
  background-color: rgba(25, 118, 210, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 15px;
}

.project-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--text-color);
  font-weight: 600;
}

.project-description {
  color: var(--text-light);
  margin-bottom: 0;
  line-height: 1.6;
}

.view-all-projects {
  text-align: center;
}

/* 媒体部分 */
.media-section {
  padding: 100px 0;
  background-color: var(--white);
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.media-card {
  padding: 40px 30px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-bottom: 3px solid transparent;
}

.media-card:before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background-color: var(--primary-light);
  opacity: 0.1;
  border-radius: 50%;
  z-index: -1;
  transition: all 0.6s ease;
}

.media-card:hover:before {
  width: 300%;
  height: 300%;
}

.media-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
  border-bottom-color: var(--primary-color);
}

.media-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  color: var(--white);
  border-radius: 50%;
  font-size: 28px;
  font-weight: bold;
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2);
  transition: all 0.5s ease;
}

.media-card:hover .media-icon {
  transform: rotateY(360deg);
  box-shadow: 0 10px 25px rgba(25, 118, 210, 0.4);
}

.media-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text-color);
}

.media-card p {
  color: var(--text-light);
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.media-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.media-link i {
  margin-left: 5px;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.media-link:hover {
  color: var(--primary-dark);
}

.media-link:hover i {
  transform: translateX(3px);
}

@media (max-width: 992px) {
  .hero {
    padding: 80px 0;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .skill-card, .project-card, .media-card {
    transform: none !important;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .project-card {
    margin: 0 10px;
  }
  
  .project-image {
    height: 200px;
  }
  
  .project-info {
    padding: 20px;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .project-description {
    font-size: 0.9rem;
  }
  
  .project-view-btn {
    padding: 6px 16px;
    font-size: 0.85rem;
  }
  
  .skills-section, .featured-projects, .media-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .skill-card {
    padding: 20px;
  }
  
  .skill-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .skill-card h3 {
    font-size: 1.3rem;
  }
  
  .skill-card p {
    font-size: 0.9rem;
  }
  
  .media-card {
    padding: 30px 20px;
  }
  
  .media-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .media-card h3 {
    font-size: 1.2rem;
  }
  
  .media-card p {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 40px 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .profile-image {
    width: 120px;
    height: 120px;
  }
  
  .profile-icon {
    font-size: 50px;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 12px;
    padding: 0 20px;
  }
  
  .btn {
    width: 100%;
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .social-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
  }
  
  .social-link {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .project-card {
    margin: 0;
  }
  
  .project-image {
    height: 180px;
  }
  
  .project-placeholder i {
    font-size: 3rem;
  }
  
  .project-info {
    padding: 15px;
  }
  
  .project-category {
    font-size: 0.75rem;
    padding: 4px 12px;
  }
  
  .project-title {
    font-size: 1.2rem;
  }
  
  .project-description {
    font-size: 0.85rem;
  }
  
  .project-view-btn {
    padding: 5px 15px;
    font-size: 0.8rem;
  }
  
  .skills-grid {
    gap: 15px;
  }
  
  .skill-card {
    padding: 15px;
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  
  .skill-card h3 {
    font-size: 1.2rem;
  }
  
  .skill-card p {
    font-size: 0.85rem;
  }
  
  .media-grid {
    gap: 15px;
  }
  
  .media-card {
    padding: 20px 15px;
  }
  
  .media-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  
  .media-card h3 {
    font-size: 1.1rem;
  }
  
  .media-card p {
    font-size: 0.8rem;
  }
  
  .media-link {
    font-size: 0.85rem;
  }
}
</style> 