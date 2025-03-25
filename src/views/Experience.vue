<template>
  <div class="experience-page">
    <div class="container">
      <h1 class="page-title">工作经历</h1>
      
      <div class="timeline">
        <div class="timeline-item" v-for="(job, index) in workExperience" :key="index" :class="{'timeline-left': index % 2 === 0, 'timeline-right': index % 2 !== 0}">
          <div class="timeline-dot">
            <i :class="getJobIcon(job.role)"></i>
          </div>
          <div class="timeline-date">
            <span>{{ job.period }}</span>
          </div>
          <div class="timeline-content">
            <h3 class="job-title">{{ job.role }}</h3>
            <h4 class="company-name">{{ job.company }}</h4>
            <p class="job-description">{{ job.description }}</p>
            <div class="responsibilities">
              <h5><i class="fas fa-tasks"></i> 主要职责:</h5>
              <ul>
                <li v-for="(responsibility, rIndex) in job.responsibilities" :key="rIndex">
                  {{ responsibility }}
                </li>
              </ul>
            </div>
            <div class="achievements">
              <h5><i class="fas fa-trophy"></i> 成果:</h5>
              <ul>
                <li v-for="(achievement, aIndex) in job.achievements" :key="aIndex">
                  {{ achievement }}
                </li>
              </ul>
            </div>
            <div class="technologies">
              <span class="tech-tag" v-for="(tech, tIndex) in job.technologies" :key="tIndex">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencePage',
  data() {
    return {
      workExperience: [
        {
          role: '高级前端开发工程师',
          company: 'ABC科技有限公司',
          period: '2023年 - 2025年',
          description: '负责公司电商平台的前端开发和维护工作，优化用户体验和页面性能。',
          responsibilities: [
            '负责公司电商平台的前端开发和维护工作，优化用户体验和页面性能。',
            '使用React框架进行组件化开发，与后端团队协作完成接口对接和数据交互。',
            '参与项目需求分析和技术选型，提出合理的技术方案和优化建议。',
            '指导初级开发人员，提升团队整体技术水平。'
          ],
          achievements: [
            '电商平台页面加载速度提升30%，用户满意度显著提高。',
            '成功上线多个新功能模块，如个性化推荐、用户评价系统等，为公司带来显著的业务增长。'
          ],
          technologies: ['React', 'Redux', 'Node.js', 'GraphQL', 'Webpack']
        },
        {
          role: '移动应用开发工程师',
          company: 'DEF软件有限公司',
          period: '2021年 - 2023年',
          description: '使用Flutter框架开发公司智能家居控制APP，实现跨平台兼容。',
          responsibilities: [
            '使用Flutter框架开发公司智能家居控制APP，实现跨平台兼容。',
            '负责APP的界面设计、功能实现和性能优化，确保应用流畅运行。',
            '与硬件团队协作，完成设备连接和控制功能的开发。',
            '参与项目测试和上线流程，及时修复问题并优化用户体验。'
          ],
          achievements: [
            'APP上线后用户下载量突破100万，获得多个应用商店的推荐。',
            '通过优化代码和资源管理，APP启动时间缩短50%，内存占用降低40%。'
          ],
          technologies: ['Flutter', 'Dart', 'Firebase', 'RESTful API']
        },
        {
          role: '前端开发工程师',
          company: 'GHI互联网公司',
          period: '2019年 - 2021年',
          description: '参与公司官网和多个业务系统的前端开发工作，使用HTML、CSS和JavaScript进行页面布局和交互设计。',
          responsibilities: [
            '参与公司官网和多个业务系统的前端开发工作，使用HTML、CSS和JavaScript进行页面布局和交互设计。',
            '使用Vue.js框架进行项目开发，实现组件化和模块化开发，提高开发效率和代码可维护性。',
            '与UI设计师和后端开发人员紧密合作，确保项目按时上线和高质量交付。'
          ],
          achievements: [
            '官网用户访问量提升50%，页面跳出率降低20%。',
            '成功上线多个业务系统，如客户管理系统、数据分析平台等，为公司业务运营提供有力支持。'
          ],
          technologies: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Vuex']
        }
      ]
    }
  },
  methods: {
    getJobIcon(role) {
      if (role.includes('前端')) {
        return 'fas fa-laptop-code';
      } else if (role.includes('移动')) {
        return 'fas fa-mobile-alt';
      } else if (role.includes('后端')) {
        return 'fas fa-server';
      } else if (role.includes('全栈')) {
        return 'fas fa-code';
      } else {
        return 'fas fa-briefcase';
      }
    }
  }
}
</script>

<style scoped>
.experience-page {
  padding: 60px 0;
  background-color: #f8f9fa;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="126" height="84" viewBox="0 0 126 84"%3E%3Cg fill="%231976d2" fill-opacity="0.03"%3E%3Cpath d="M63 0L31.5 42 0 84h126L94.5 42 63 0zm0 26.25L75.25 42 63 57.75 50.75 42 63 26.25z"%3E%3C/path%3E%3C/g%3E%3C/svg%3E');
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  color: var(--text-color);
}

.page-title:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
  transform: translateX(-50%);
}

.timeline {
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 3px;
  background-color: var(--primary-light);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  display: flex;
  width: 100%;
}

.timeline-left {
  justify-content: flex-start;
}

.timeline-right {
  justify-content: flex-end;
}

.timeline-dot {
  position: absolute;
  top: 0;
  left: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  border: 5px solid var(--white);
  border-radius: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 0 0 4px rgba(25, 118, 210, 0.2);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(1.1);
  box-shadow: 0 0 0 6px rgba(25, 118, 210, 0.3);
}

.timeline-dot i {
  color: var(--white);
  font-size: 1.2rem;
}

.timeline-date {
  position: absolute;
  top: 0;
  width: 150px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 20px;
  text-align: center;
  font-weight: 500;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-left .timeline-date {
  right: calc(50% + 40px);
}

.timeline-right .timeline-date {
  left: calc(50% + 40px);
}

.timeline-item:hover .timeline-date {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.timeline-content {
  width: calc(50% - 50px);
  padding: 30px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 60px;
  transition: all 0.3s ease;
}

.timeline-content:before {
  content: '';
  position: absolute;
  top: 20px;
  width: 20px;
  height: 20px;
  background-color: var(--white);
  transform: rotate(45deg);
}

.timeline-left .timeline-content:before {
  right: -10px;
}

.timeline-right .timeline-content:before {
  left: -10px;
}

.timeline-item:hover .timeline-content {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.job-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.company-name {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 15px;
  font-weight: 500;
}

.job-description {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-light);
}

.responsibilities, .achievements {
  margin-bottom: 20px;
}

.responsibilities h5, .achievements h5 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--text-color);
  display: flex;
  align-items: center;
}

.responsibilities h5 i, .achievements h5 i {
  margin-right: 8px;
  color: var(--primary-color);
}

.responsibilities ul, .achievements ul {
  padding-left: 25px;
}

.responsibilities li, .achievements li {
  margin-bottom: 5px;
  color: var(--text-light);
  line-height: 1.5;
  position: relative;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 5px 10px;
  background-color: rgba(25, 118, 210, 0.1);
  color: var(--primary-color);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 992px) {
  .timeline:before {
    left: 30px;
  }
  
  .timeline-item {
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 60px;
  }
  
  .timeline-dot {
    left: 30px;
    transform: translateX(-50%);
  }
  
  .timeline-date {
    position: relative;
    width: auto;
    left: 0 !important;
    right: auto !important;
    top: -30px;
    margin-bottom: -20px;
    transform: translateY(0);
  }
  
  .timeline-content {
    width: 100%;
    margin-top: 15px;
  }
  
  .timeline-content:before {
    display: none;
  }
}

@media (max-width: 768px) {
  .job-title {
    font-size: 1.3rem;
  }
  
  .company-name {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .timeline-item {
    margin-left: 40px;
  }
  
  .timeline:before {
    left: 20px;
  }
  
  .timeline-dot {
    width: 30px;
    height: 30px;
    left: 20px;
  }
  
  .timeline-dot i {
    font-size: 0.9rem;
  }
  
  .timeline-content {
    padding: 20px;
  }
}
</style> 