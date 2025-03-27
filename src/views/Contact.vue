<template>
  <div class="contact-page">
    <div class="contact-header">
      <div class="container">
        <h1 class="page-title" data-aos="fade-up">联系我</h1>
        <p class="page-description" data-aos="fade-up" data-aos-delay="100">
          无论您是有项目合作、技术咨询还是职业机会，我都很乐意与您交流。
          请通过以下方式与我取得联系，我会尽快回复您。
        </p>
      </div>
    </div>
    
    <div class="container">
      <div class="contact-content">
        <div class="contact-info" data-aos="fade-right">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div class="contact-text">
              <h3>邮箱</h3>
              <p>xwh@example.com</p>
              <a href="mailto:xwh@example.com" class="contact-action">
                <i class="fas fa-paper-plane"></i> 发送邮件
              </a>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div class="contact-text">
              <h3>电话</h3>
              <p>+86 188-8888-8888</p>
              <a href="tel:+8618888888888" class="contact-action">
                <i class="fas fa-phone-alt"></i> 拨打电话
              </a>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div class="contact-text">
              <h3>地址</h3>
              <p>中国·上海</p>
              <a href="https://maps.google.com/?q=Shanghai,China" target="_blank" class="contact-action">
                <i class="fas fa-map"></i> 查看地图
              </a>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-comments"></i>
            <div class="contact-text">
              <h3>社交媒体</h3>
              <div class="social-contact">
                <a href="https://weibo.com/zhangweiit" target="_blank" class="social-link"><i class="fab fa-weibo"></i> 微博</a>
                <a href="#" target="_blank" class="social-link"><i class="fab fa-weixin"></i> 微信</a>
                <a href="https://space.bilibili.com/zhangweiit" target="_blank" class="social-link"><i class="fas fa-video"></i> B站</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form" data-aos="fade-left">
          <h2>发送消息</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">姓名</label>
              <div class="input-wrapper">
                <i class="fas fa-user"></i>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  placeholder="请输入您的姓名"
                  :class="{'input-error': errors.name}"
                  required
                >
              </div>
              <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
            </div>
            
            <div class="form-group">
              <label for="email">邮箱</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope"></i>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  placeholder="请输入您的邮箱"
                  :class="{'input-error': errors.email}"
                  required
                >
              </div>
              <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
            </div>
            
            <div class="form-group">
              <label for="subject">主题</label>
              <div class="input-wrapper">
                <i class="fas fa-tag"></i>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject" 
                  placeholder="请输入消息主题"
                  :class="{'input-error': errors.subject}"
                  required
                >
              </div>
              <div v-if="errors.subject" class="error-message">{{ errors.subject }}</div>
            </div>
            
            <div class="form-group">
              <label for="message">消息内容</label>
              <div class="input-wrapper textarea">
                <i class="fas fa-comment-alt"></i>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  placeholder="请输入您的消息内容"
                  :class="{'input-error': errors.message}"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
            </div>
            
            <button type="submit" class="btn primary" :disabled="isSubmitting">
              <i class="fas fa-paper-plane"></i> {{ isSubmitting ? '发送中...' : '发送消息' }}
              <span class="btn-overlay"></span>
            </button>
            
            <!-- 提交状态提示 -->
            <div v-if="submitStatus === 'success'" class="submit-message success">
              <i class="fas fa-check-circle"></i> 消息已成功发送！我会尽快回复您。
            </div>
            <div v-if="submitStatus === 'error'" class="submit-message error">
              <i class="fas fa-exclamation-circle"></i> 发送失败，请稍后再试！
            </div>
          </form>
        </div>
      </div>
    </div>
    
    <div class="map-section" data-aos="fade-up">
      <div class="container">
        <div class="map-container">
          <div class="map-placeholder">
            <i class="fas fa-map-marked-alt"></i>
            <span>中国 · 上海</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: null // 'success', 'error', null
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      // 重置错误信息
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      // 名称验证
      if (!this.formData.name.trim()) {
        this.errors.name = '请输入您的姓名';
        isValid = false;
      }
      
      // 邮箱验证
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email.trim()) {
        this.errors.email = '请输入您的邮箱';
        isValid = false;
      } else if (!emailRegex.test(this.formData.email)) {
        this.errors.email = '请输入有效的邮箱地址';
        isValid = false;
      }
      
      // 主题验证
      if (!this.formData.subject.trim()) {
        this.errors.subject = '请输入消息主题';
        isValid = false;
      }
      
      // 消息验证
      if (!this.formData.message.trim()) {
        this.errors.message = '请输入消息内容';
        isValid = false;
      } else if (this.formData.message.trim().length < 10) {
        this.errors.message = '消息内容至少需要10个字符';
        isValid = false;
      }
      
      return isValid;
    },
    submitForm() {
      // 表单验证
      if (!this.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      this.submitStatus = null;
      
      // 创建表单数据对象
      const formData = {
        name: this.formData.name,
        email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message
      };
      
      // 发送到Formspree
      fetch('https://formspree.io/f/movenaay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('网络响应不正常');
      })
      .then(() => {
        this.submitStatus = 'success';
        this.resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
        this.submitStatus = 'error';
      })
      .finally(() => {
        this.isSubmitting = false;
      });
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;
}

.contact-page:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%231976d2" fill-opacity="0.03" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"%3E%3C/path%3E%3C/svg%3E');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  z-index: -1;
}

.contact-page:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%231976d2" fill-opacity="0.03" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"%3E%3C/path%3E%3C/svg%3E');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  z-index: -1;
}

.contact-header {
  padding: 100px 0 60px;
  background: var(--primary-gradient);
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
}

.contact-header::before,
.contact-header::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.contact-header::before {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
}

.contact-header::after {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 10%;
}

.page-title {
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  color: var(--white);
}

.page-description {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: var(--white);
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.contact-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 0;
  background: var(--primary-gradient);
  transition: all 0.4s ease;
  z-index: -1;
}

.contact-item:hover::before {
  height: 100%;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.contact-item i {
  font-size: 1.8rem;
  color: var(--primary-color);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(25, 118, 210, 0.1);
  border-radius: 10px;
  transition: all 0.4s ease;
}

.contact-item:hover i {
  transform: scale(1.1);
  background: var(--primary-gradient);
  color: var(--white);
}

.contact-text {
  flex: 1;
}

.contact-text h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--text-color);
  font-weight: 600;
}

.contact-text p {
  color: var(--text-light);
  margin-bottom: 15px;
}

.contact-action {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.contact-action i {
  width: auto;
  height: auto;
  font-size: 0.9rem;
  background: transparent;
  margin-right: 8px;
}

.contact-action:hover {
  color: var(--primary-dark);
}

.contact-action:hover i {
  transform: none;
  background: transparent;
}

.social-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.social-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  background-color: rgba(25, 118, 210, 0.1);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
}

.social-link i {
  width: auto;
  height: auto;
  font-size: 0.9rem;
  background-color: transparent;
  margin-right: 8px;
  color: var(--primary-color);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2);
}

.social-link:hover i {
  transform: none;
  background-color: transparent;
  color: var(--white);
}

.contact-form {
  background: var(--white);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: var(--primary-gradient);
  border-radius: 0 10px 0 100%;
  opacity: 0.1;
  z-index: -1;
}

.contact-form:hover {
  box-shadow: var(--hover-shadow);
}

.contact-form h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
  color: var(--primary-color);
}

.contact-form h2:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 60px;
  height: 3px;
  background: var(--primary-gradient);
  transform: translateX(-50%);
  border-radius: 3px;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper i {
  position: absolute;
  left: 15px;
  color: var(--text-light);
  transition: all 0.3s ease;
}

.input-wrapper.textarea i {
  top: 15px;
}

input, textarea {
  width: 100%;
  padding: 12px 15px 12px 45px;
  border: 1px solid var(--gray-light);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: var(--white);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);
}

input:focus + i, textarea:focus + i {
  color: var(--primary-color);
}

.input-error {
  border-color: var(--error) !important;
  background-color: rgba(244, 67, 54, 0.02);
}

.input-error + i {
  color: var(--error) !important;
}

.error-message {
  color: var(--error);
  font-size: 0.85rem;
  margin-top: 5px;
  display: flex;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.error-message::before {
  content: "⚠️";
  margin-right: 5px;
  font-size: 0.85rem;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

button[type="submit"] {
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.5s ease;
  z-index: -1;
}

button[type="submit"]:hover .btn-overlay {
  width: 300px;
  height: 300px;
}

button[type="submit"] i {
  margin-right: 8px;
}

/* 提交状态样式 */
.submit-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  animation: fadeIn 0.5s ease;
}

.submit-message i {
  margin-right: 10px;
  font-size: 1.2rem;
}

.submit-message.success {
  background-color: rgba(76, 175, 80, 0.1);
  color: #4caf50;
  border-left: 4px solid #4caf50;
}

.submit-message.error {
  background-color: rgba(244, 67, 54, 0.1);
  color: #f44336;
  border-left: 4px solid #f44336;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.map-section {
  margin-top: 60px;
}

.map-container {
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #e9f3ff 0%, #b9d7ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.map-placeholder i {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.7;
}

.map-placeholder span {
  font-size: 1.5rem;
  font-weight: 500;
}

@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .contact-header {
    padding: 80px 0 50px;
  }
  
  .page-title {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-description {
    font-size: 1rem;
  }
  
  .contact-form {
    padding: 30px;
  }
  
  .map-container {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .contact-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
  }
  
  .contact-text {
    text-align: center;
  }
  
  .social-contact {
    justify-content: center;
  }
  
  .map-placeholder i {
    font-size: 3rem;
  }
  
  .map-placeholder span {
    font-size: 1.2rem;
  }
}
</style> 