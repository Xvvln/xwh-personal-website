<template>
  <div class="projects-page">
    <div class="projects-header">
      <div class="container">
        <h1 class="page-title" data-aos="fade-up">项目展示</h1>
        <p class="page-description" data-aos="fade-up" data-aos-delay="100">
          以下是我的部分项目作品，展示了我的技术能力和创意思维。
          每个项目都是我专业成长的一部分，凝聚了我的努力和热情。
        </p>
        
        <div class="project-filters" data-aos="fade-up" data-aos-delay="200">
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'all' }"
            @click="filterProjects('all')"
          >
            <i class="fas fa-th-large"></i> 全部
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'web' }"
            @click="filterProjects('web')"
          >
            <i class="fas fa-laptop-code"></i> 网站开发
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'mobile' }"
            @click="filterProjects('mobile')"
          >
            <i class="fas fa-mobile-alt"></i> 移动应用
          </button>
          <button 
            class="filter-btn" 
            :class="{ active: currentFilter === 'other' }"
            @click="filterProjects('other')"
          >
            <i class="fas fa-cubes"></i> 其他项目
          </button>
        </div>
      </div>
    </div>
      
    <div class="container">
      <div class="projects-grid">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="index"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="project-image">
            <div class="project-placeholder">
              <i :class="project.icon"></i>
            </div>
            <div class="project-overlay">
              <div class="project-details">
                <span class="project-year">{{ project.year }}</span>
                <h3 class="project-title-overlay">{{ project.title }}</h3>
                <div class="project-actions">
                  <a :href="project.liveUrl" v-if="project.liveUrl" target="_blank" class="project-action-btn">
                    <i class="fas fa-external-link-alt"></i> 查看
                  </a>
                  <a :href="project.codeUrl" v-if="project.codeUrl" target="_blank" class="project-action-btn">
                    <i class="fab fa-github"></i> 代码
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="project-info">
            <div class="project-meta">
              <span class="project-category" :class="project.category">
                <i :class="getCategoryIcon(project.category)"></i>
                {{ getCategoryName(project.category) }}
              </span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span class="tech-tag" v-for="(tech, techIndex) in project.technologies" :key="techIndex">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="projects-footer" data-aos="fade-up">
        <p>对我的项目感兴趣？想了解更多细节或有合作意向？</p>
        <router-link to="/contact" class="btn primary">
          <i class="fas fa-paper-plane"></i> 联系我
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      currentFilter: 'all',
      isInView: false,
      projects: [
        {
          title: '个人网站开发',
          description: '使用HTML、CSS、JavaScript和Vue.js开发的个人网站，包含个人简历、作品展示、自媒体信息等模块，响应式设计，适配多种设备。',
          category: 'web',
          technologies: ['Vue.js', 'JavaScript', 'CSS3', 'HTML5'],
          year: '2023',
          liveUrl: 'https://zhangweiitblog.com',
          codeUrl: 'https://github.com/zhangwei-dev/personal-website',
          icon: 'mdi mdi-web'
        },
        {
          title: 'ABC电商平台',
          description: '作为前端开发工程师，参与电商平台的前端开发工作。负责页面布局、交互设计和性能优化，使用React框架和Node.js后端接口对接，实现商品展示、购物车、订单系统等功能。',
          category: 'web',
          technologies: ['React', 'Node.js', 'Redux', 'Ant Design'],
          year: '2022',
          liveUrl: 'https://abc.com',
          icon: 'mdi mdi-shopping'
        },
        {
          title: '智能家居控制APP',
          description: '开发了一款基于Android和iOS平台的智能家居控制APP，用户可以通过手机远程控制家中的智能设备，如灯光、窗帘、空调等。使用Flutter框架进行跨平台开发，与后端物联网平台进行数据交互。',
          category: 'mobile',
          technologies: ['Flutter', 'Dart', 'RESTful API', 'Firebase'],
          year: '2021',
          liveUrl: '',
          codeUrl: 'https://github.com/zhangwei/smart-home-app',
          icon: 'mdi mdi-home-automation'
        },
        {
          title: '在线教育平台',
          description: '为某教育机构开发的在线学习平台，提供课程管理、视频播放、作业提交、师生互动等功能。使用Vue.js开发前端界面，Express.js搭建后端服务。',
          category: 'web',
          technologies: ['Vue.js', 'Express.js', 'MongoDB', 'WebRTC'],
          year: '2022',
          liveUrl: 'https://edu-platform.com',
          icon: 'mdi mdi-school'
        },
        {
          title: '健康数据分析工具',
          description: '一个用于分析健康数据的工具，可以导入各种运动手环和健康设备的数据，进行可视化分析和提供健康建议。',
          category: 'other',
          technologies: ['Python', 'Pandas', 'D3.js', 'Flask'],
          year: '2020',
          codeUrl: 'https://github.com/zhangwei/health-analytics',
          icon: 'mdi mdi-chart-line'
        },
        {
          title: '新闻阅读APP',
          description: '一款聚合新闻阅读应用，根据用户阅读习惯推荐内容，支持离线阅读和深色模式等功能。',
          category: 'mobile',
          technologies: ['React Native', 'Redux', 'GraphQL', 'AWS'],
          year: '2021',
          liveUrl: 'https://news-app.com',
          icon: 'mdi mdi-newspaper'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projects
      }
      return this.projects.filter(project => project.category === this.currentFilter)
    }
  },
  methods: {
    filterProjects(filter) {
      this.currentFilter = filter
    },
    getProjectIcon(category) {
      switch(category) {
        case 'web': return 'fas fa-desktop fa-2x';
        case 'mobile': return 'fas fa-mobile-alt fa-2x';
        case 'other': return 'fas fa-cubes fa-2x';
        default: return 'fas fa-code fa-2x';
      }
    },
    getCategoryIcon(category) {
      switch(category) {
        case 'web': return 'fas fa-globe';
        case 'mobile': return 'fas fa-mobile-alt';
        case 'other': return 'fas fa-cubes';
        default: return 'fas fa-code';
      }
    },
    getCategoryName(category) {
      switch(category) {
        case 'web': return '网站';
        case 'mobile': return '移动应用';
        case 'other': return '其他项目';
        default: return '项目';
      }
    },
    checkIfInView() {
      const cards = this.$refs.projectCards
      if (cards && cards.length) {
        cards.forEach(card => {
          const rect = card.getBoundingClientRect()
          const inView = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          )
          if (inView) {
            card.classList.add('show')
          }
        })
      }
    }
  },
  mounted() {
    this.isInView = true
    window.addEventListener('scroll', this.checkIfInView)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.checkIfInView)
  }
}
</script>

<style scoped>
.projects-page {
  padding-bottom: 80px;
}

.projects-header {
  padding: 100px 0 60px;
  background: var(--primary-gradient);
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;
}

.projects-header::before,
.projects-header::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;
}

.projects-header::before {
  top: -150px;
  right: -100px;
}

.projects-header::after {
  bottom: -150px;
  left: -150px;
}

.page-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  color: var(--white);
  z-index: 1;
}

.page-description {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.7;
  font-size: 1.1rem;
  z-index: 1;
  position: relative;
}

.project-filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.filter-btn {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 30px;
  color: var(--white);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.filter-btn i {
  margin-right: 8px;
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--white);
  color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.project-card {
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  color: var(--white);
  transition: all 0.5s ease;
}

.project-placeholder i {
  font-size: 4rem;
  opacity: 0.8;
  transition: all 0.5s ease;
  z-index: 1;
}

.project-card:hover .project-placeholder i {
  transform: scale(1.1);
  opacity: 0.4;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(25, 118, 210, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  padding: 20px;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-details {
  text-align: center;
  color: var(--white);
  transform: translateY(20px);
  transition: all 0.4s ease;
  width: 100%;
}

.project-card:hover .project-details {
  transform: translateY(0);
}

.project-year {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 10px;
  backdrop-filter: blur(5px);
}

.project-title-overlay {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.project-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.project-action-btn {
  padding: 8px 20px;
  background-color: var(--white);
  color: var(--primary-color);
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.project-action-btn i {
  margin-right: 5px;
}

.project-action-btn:hover {
  background-color: var(--primary-dark);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.project-info {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.project-category {
  font-size: 0.8rem;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.project-category.web {
  background-color: rgba(25, 118, 210, 0.1);
  color: var(--primary-color);
}

.project-category.mobile {
  background-color: rgba(76, 175, 80, 0.1);
  color: var(--success);
}

.project-category.other {
  background-color: rgba(255, 152, 0, 0.1);
  color: var(--warning);
}

.project-category i {
  margin-right: 5px;
}

.project-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--text-color);
  font-weight: 600;
}

.project-description {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  background-color: var(--secondary-color);
  color: var(--text-light);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background-color: var(--primary-light);
  color: var(--white);
  transform: translateY(-2px);
}

.projects-footer {
  text-align: center;
  margin-top: 40px;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}

.projects-footer p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: var(--text-color);
}

@media (max-width: 992px) {
  .page-title {
    font-size: 2.4rem;
  }
  
  .projects-header {
    padding: 80px 0 50px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-description {
    font-size: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .projects-footer {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }
  
  .filter-btn {
    padding: 8px 15px;
    font-size: 0.8rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    max-width: 100%;
  }
}
</style> 