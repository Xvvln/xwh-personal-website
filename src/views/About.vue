<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="container">
        <h1 class="page-title">关于我</h1>
        <div class="about-content">
          <div class="about-image">
            <div class="image-placeholder">
              <i class="fas fa-user"></i>
              <div class="image-overlay">xwh</div>
            </div>
            <div class="about-image-decoration"></div>
          </div>
          <div class="about-text">
            <p>
              <i class="fas fa-laptop-code about-icon"></i>
              我是一名热爱编程和技术创新的IT工程师，拥有多年软件开发经验，擅长前端开发、移动应用开发和系统架构设计。
              我热衷于探索新技术，不断学习和提升自己的技术能力。
            </p>
            <p>
              <i class="fas fa-share-alt about-icon"></i>
              在业余时间，我喜欢通过自媒体分享技术经验，帮助更多的人了解和学习IT知识。
              我注重团队合作，善于沟通和解决问题，能够快速适应不同的工作环境和项目需求。
            </p>
            <div class="about-actions">
              <a href="/resume.pdf" target="_blank" class="btn primary">
                <i class="fas fa-download"></i> 下载简历
              </a>
              <router-link to="/contact" class="btn secondary">
                <i class="fas fa-envelope"></i> 联系我
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">技术技能</h2>
        <div class="skills-container">
          <div class="skill-category">
            <h3>编程语言</h3>
            <div class="skill-bar">
              <div class="skill-name">JavaScript</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 95%"></div>
              </div>
              <div class="skill-percentage">95%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">Python</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 80%"></div>
              </div>
              <div class="skill-percentage">80%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">Java</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 75%"></div>
              </div>
              <div class="skill-percentage">75%</div>
            </div>
          </div>
          <div class="skill-category">
            <h3>前端技术</h3>
            <div class="skill-bar">
              <div class="skill-name">React</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 90%"></div>
              </div>
              <div class="skill-percentage">90%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">Vue.js</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 92%"></div>
              </div>
              <div class="skill-percentage">92%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">HTML/CSS</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 88%"></div>
              </div>
              <div class="skill-percentage">88%</div>
            </div>
          </div>
          <div class="skill-category">
            <h3>后端技术</h3>
            <div class="skill-bar">
              <div class="skill-name">Node.js</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 85%"></div>
              </div>
              <div class="skill-percentage">85%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">Spring Boot</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 70%"></div>
              </div>
              <div class="skill-percentage">70%</div>
            </div>
          </div>
          <div class="skill-category">
            <h3>其他技能</h3>
            <div class="skill-bar">
              <div class="skill-name">Flutter</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 88%"></div>
              </div>
              <div class="skill-percentage">88%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">Git</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 90%"></div>
              </div>
              <div class="skill-percentage">90%</div>
            </div>
            <div class="skill-bar">
              <div class="skill-name">Docker</div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 75%"></div>
              </div>
              <div class="skill-percentage">75%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section">
      <div class="container">
        <h2 class="section-title">教育背景</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>XX大学</h3>
              <p class="timeline-period">2015 - 2019</p>
              <p>计算机科学与技术专业 本科</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>证书</h3>
              <p>计算机二级证书</p>
              <p>英语四级证书</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding-top: 40px;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.page-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
  transform: translateX(-50%);
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  margin-bottom: 60px;
}

.about-image {
  flex: 0 0 300px;
  position: relative;
}

.image-placeholder {
  width: 100%;
  height: 350px;
  background: linear-gradient(120deg, var(--primary-light) 0%, var(--primary-color) 100%);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.about-image:hover .image-placeholder {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.image-placeholder i {
  font-size: 6rem;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.about-image:hover .image-placeholder i {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 0;
}

.about-image-decoration {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 3px solid var(--primary-color);
  border-radius: 8px;
  bottom: -20px;
  right: -20px;
  z-index: 0;
}

.about-text {
  flex: 1;
  min-width: 300px;
}

.about-icon {
  color: var(--primary-color);
  margin-right: 10px;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: var(--text-light);
}

.about-actions {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.skills-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}

.skill-category h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
}

.skill-bar {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.skill-name {
  width: 100px;
  font-weight: 500;
}

.skill-progress {
  flex: 1;
  height: 10px;
  background-color: var(--gray-light);
  border-radius: 5px;
  overflow: hidden;
  margin: 0 15px;
}

.skill-progress-bar {
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  animation: progressAnimation 1.5s ease-in-out;
}

@keyframes progressAnimation {
  0% {
    width: 0;
  }
}

.skill-progress-bar:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px;
  animation: stripeAnimation 1s linear infinite;
  opacity: 0.3;
}

@keyframes stripeAnimation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 0;
  }
}

.skill-percentage {
  width: 40px;
  text-align: right;
  font-size: 14px;
  color: var(--text-light);
}

.education-section {
  padding: 80px 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: var(--primary-light);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -39px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 4px solid var(--white);
  box-shadow: 0 0 0 2px var(--primary-light);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
  box-shadow: 0 0 0 4px var(--primary-light);
}

.timeline-content {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.timeline-period {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
  
  .about-actions {
    justify-content: center;
  }
  
  .skill-category h3:after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .skill-category h3 {
    text-align: center;
  }
  
  .timeline {
    padding-left: 40px;
  }
}
</style> 