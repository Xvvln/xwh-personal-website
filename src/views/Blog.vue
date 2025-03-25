<template>
  <div class="blog-page">
    <div class="container">
      <h1 class="page-title">博客文章</h1>
      
      <div class="blog-container">
        <div class="blog-content">
          <div v-if="selectedPost" class="blog-post">
            <div class="post-header">
              <h2 class="post-title">{{ selectedPost.title }}</h2>
              <div class="post-meta">
                <span class="post-date">{{ selectedPost.date }}</span>
                <span class="post-category">{{ selectedPost.category }}</span>
              </div>
              <div class="post-tags">
                <span class="tag" v-for="(tag, index) in selectedPost.tags" :key="index">
                  #{{ tag }}
                </span>
              </div>
            </div>
            <div class="post-content" v-html="selectedPost.content"></div>
            <div class="post-actions">
              <button class="btn secondary" @click="clearSelectedPost">
                <span class="icon">←</span> 返回文章列表
              </button>
            </div>
          </div>
          
          <div v-else class="blog-list">
            <div class="blog-card" v-for="post in posts" :key="post.id" @click="selectPost(post)">
              <div class="blog-card-image">
                <div class="blog-image-placeholder">{{ post.title.charAt(0) }}</div>
              </div>
              <div class="blog-card-content">
                <div class="blog-category">{{ post.category }}</div>
                <h3 class="blog-title">{{ post.title }}</h3>
                <p class="blog-excerpt">{{ post.excerpt }}</p>
                <div class="blog-meta">
                  <span class="blog-date">{{ post.date }}</span>
                  <span class="blog-read-more">阅读全文 <span class="arrow">→</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="blog-sidebar">
          <div class="sidebar-widget categories-widget">
            <h3 class="widget-title">文章分类</h3>
            <ul class="categories-list">
              <li 
                v-for="(cat, index) in categories" 
                :key="index"
                :class="{ active: selectedCategory === cat }"
                @click="filterByCategory(cat)"
              >
                {{ cat }}
              </li>
            </ul>
          </div>
          
          <div class="sidebar-widget tags-widget">
            <h3 class="widget-title">热门标签</h3>
            <div class="tags-cloud">
              <span 
                class="tag"
                v-for="(tag, index) in tags"
                :key="index"
                :class="{ active: selectedTag === tag }"
                @click="filterByTag(tag)"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
          
          <div class="sidebar-widget recent-widget">
            <h3 class="widget-title">最新文章</h3>
            <ul class="recent-posts">
              <li v-for="post in recentPosts" :key="post.id" @click="selectPost(post)">
                <div class="recent-post-title">{{ post.title }}</div>
                <div class="recent-post-date">{{ post.date }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      selectedPost: null,
      selectedCategory: null,
      selectedTag: null,
      posts: [
        {
          id: 1,
          title: 'Vue.js 3.0新特性详解',
          excerpt: 'Vue.js 3.0 带来了诸多新特性和性能优化，本文将详细介绍Composition API、Teleport、Fragments等新功能...',
          date: '2025-03-15',
          category: '前端开发',
          tags: ['Vue.js', '前端框架', 'JavaScript'],
          content: `
            <p>Vue.js 3.0是一个重大的版本更新，它带来了许多令人兴奋的新特性和性能优化。在本文中，我将详细介绍Vue.js 3.0的主要变化和新功能，帮助大家快速掌握这些新特性。</p>
            
            <h3>1. Composition API</h3>
            <p>Composition API是Vue.js 3.0中最重要的变化之一，它提供了一种新的组织组件逻辑的方式。相比于Vue.js 2.x中的Options API，Composition API允许我们按照逻辑关注点组织代码，而不是按照选项类型。</p>
            <pre><code>
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    // 响应式状态
    const count = ref(0)
    
    // 计算属性
    const doubleCount = computed(() => count.value * 2)
    
    // 方法
    function increment() {
      count.value++
    }
    
    // 生命周期钩子
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    // 暴露给模板
    return {
      count,
      doubleCount,
      increment
    }
  }
}
            </code></pre>
            
            <h3>2. Teleport组件</h3>
            <p>Teleport是一个新的内置组件，它可以将组件的内容渲染到DOM中的任何位置，而不受父组件DOM结构的限制。这对于模态框、弹出菜单等需要脱离当前组件DOM层次结构的场景非常有用。</p>
            
            <h3>3. Fragments</h3>
            <p>在Vue.js 3.0中，组件可以有多个根节点，这就是所谓的Fragments。这意味着我们不再需要为组件添加一个额外的包装元素。</p>
            
            <h3>4. 性能优化</h3>
            <p>Vue.js 3.0在性能方面进行了显著优化：</p>
            <ul>
              <li>更小的包体积</li>
              <li>更好的Tree-shaking支持</li>
              <li>响应式系统的重写</li>
              <li>虚拟DOM的优化</li>
            </ul>
            
            <h3>5. TypeScript支持</h3>
            <p>Vue.js 3.0是用TypeScript重写的，因此它提供了更好的TypeScript支持，包括组件属性类型推断和类型检查。</p>
            
            <h3>总结</h3>
            <p>Vue.js 3.0带来了许多令人兴奋的新特性和优化，这些变化使Vue.js更加强大和灵活。随着Vue.js生态系统的不断发展，我们可以期待更多基于Vue.js 3.0的优秀工具和库的出现。</p>
          `
        },
        {
          id: 2,
          title: 'Flutter在企业级应用中的实践经验',
          excerpt: '本文分享了我在企业级应用中使用Flutter进行跨平台开发的经验和最佳实践，包括架构设计、状态管理、性能优化等方面...',
          date: '2025-02-28',
          category: '移动开发',
          tags: ['Flutter', '跨平台', 'Dart', '移动应用'],
          content: `
            <p>作为一名移动应用开发工程师，我在过去几年中使用Flutter开发了多个企业级应用。在这篇文章中，我将分享我的实践经验和学到的经验教训。</p>
            
            <h3>1. 架构设计</h3>
            <p>企业级应用通常比较复杂，需要一个清晰的架构来确保代码的可维护性和可扩展性。在Flutter应用中，我通常采用类似Clean Architecture的分层架构：</p>
            <ul>
              <li>表示层（UI）</li>
              <li>业务逻辑层</li>
              <li>数据层</li>
            </ul>
            
            <h3>2. 状态管理</h3>
            <p>在Flutter企业级应用中，状态管理尤为重要。我尝试过多种状态管理方案，包括Provider、Bloc、GetX和Riverpod等。每种方案都有其优缺点，选择哪一种取决于项目的复杂度和团队的熟悉程度。</p>
            
            <h3>3. 性能优化</h3>
            <p>企业级应用通常需要处理大量数据，因此性能优化至关重要。以下是一些我常用的性能优化技巧：</p>
            <ul>
              <li>使用const构造函数</li>
              <li>避免在build方法中进行复杂计算</li>
              <li>使用ListView.builder来处理长列表</li>
              <li>适当使用缓存</li>
              <li>优化图片加载</li>
            </ul>
            
            <h3>4. 网络请求处理</h3>
            <p>企业级应用通常需要与后端API进行频繁的交互。我通常使用Dio库来处理网络请求，并结合Retrofit生成API客户端代码，使网络层更加清晰和易于维护。</p>
            
            <h3>5. 测试策略</h3>
            <p>测试是保证应用质量的关键。在Flutter企业级应用中，我通常采用以下测试策略：</p>
            <ul>
              <li>单元测试：测试业务逻辑和数据处理</li>
              <li>widget测试：测试UI组件的行为</li>
              <li>集成测试：测试多个组件的交互</li>
            </ul>
            
            <h3>6. 持续集成与部署</h3>
            <p>在企业环境中，持续集成和部署是提高开发效率的重要手段。我通常使用GitHub Actions或Jenkins来自动化构建、测试和部署过程。</p>
            
            <h3>总结</h3>
            <p>Flutter是一个强大的跨平台开发框架，适合开发企业级应用。通过合理的架构设计、状态管理、性能优化和测试策略，可以打造出高质量的Flutter企业级应用。</p>
          `
        },
        {
          id: 3,
          title: '前端性能优化实战指南',
          excerpt: '本文总结了前端性能优化的关键策略和实践技巧，从网络请求优化、资源加载、渲染性能到代码层面的优化...',
          date: '2025-01-20',
          category: '前端开发',
          tags: ['性能优化', '前端技术', 'Web开发'],
          content: `
            <p>性能优化是前端开发中永恒的话题。随着Web应用变得越来越复杂，性能优化变得更加重要。在本文中，我将分享一些前端性能优化的实战技巧和策略。</p>
            
            <h3>1. 网络请求优化</h3>
            <p>网络请求是前端应用的重要性能瓶颈之一。以下是一些优化网络请求的技巧：</p>
            <ul>
              <li>减少HTTP请求：合并CSS和JavaScript文件，使用CSS Sprites和图标字体</li>
              <li>使用CDN：将静态资源部署到CDN上，减少服务器负载并提高资源加载速度</li>
              <li>启用Gzip压缩：减少传输数据的大小</li>
              <li>利用浏览器缓存：设置适当的缓存头，减少不必要的请求</li>
              <li>使用HTTP/2：利用多路复用和服务器推送等特性提高性能</li>
            </ul>
            
            <h3>2. 资源加载优化</h3>
            <p>优化资源加载可以显著提高页面加载速度：</p>
            <ul>
              <li>懒加载：只加载当前视口内的图片和组件</li>
              <li>预加载：在空闲时预加载后续可能需要的资源</li>
              <li>资源压缩：压缩图片、CSS和JavaScript文件</li>
              <li>选择合适的图片格式：根据需求选择JPEG、PNG、WebP或SVG</li>
              <li>提取关键CSS：内联首屏关键CSS，避免阻塞渲染</li>
            </ul>
            
            <h3>3. 渲染性能优化</h3>
            <p>优化渲染性能可以提高用户体验：</p>
            <ul>
              <li>避免重排和重绘：减少DOM操作，使用CSS transform和opacity进行动画</li>
              <li>使用requestAnimationFrame：在适当的时机执行动画</li>
              <li>虚拟列表：渲染大量数据时只渲染可见区域的内容</li>
              <li>使用Web Workers：将复杂计算移至后台线程</li>
              <li>利用GPU加速：使用transform: translateZ(0)或will-change属性</li>
            </ul>
            
            <h3>4. JavaScript优化</h3>
            <p>优化JavaScript代码可以提高应用的响应速度：</p>
            <ul>
              <li>避免内存泄漏：及时清理不再使用的事件监听器和引用</li>
              <li>使用防抖和节流：控制高频事件的执行频率</li>
              <li>代码分割：按需加载代码，减少初始加载时间</li>
              <li>使用Web Worker：将耗时计算移至后台线程</li>
              <li>避免长任务：将任务分解为小块，避免阻塞主线程</li>
            </ul>
            
            <h3>5. 性能监控与分析</h3>
            <p>持续监控和分析性能是优化的关键：</p>
            <ul>
              <li>使用Lighthouse进行性能评估</li>
              <li>监控核心Web指标（Core Web Vitals）</li>
              <li>使用Performance API收集真实用户数据</li>
              <li>设置性能预算并持续跟踪</li>
            </ul>
            
            <h3>总结</h3>
            <p>前端性能优化是一个持续的过程，需要从多个层面进行综合优化。通过网络请求优化、资源加载优化、渲染性能优化和JavaScript优化，结合持续的性能监控和分析，可以显著提高前端应用的性能和用户体验。</p>
          `
        },
        {
          id: 4,
          title: 'React与Vue的对比分析：如何选择适合的前端框架',
          excerpt: '本文对React和Vue两大流行的前端框架进行了全面对比，从性能、生态系统、学习曲线等多个维度分析各自的优缺点...',
          date: '2024-12-05',
          category: '前端开发',
          tags: ['React', 'Vue.js', '前端框架', '技术选型'],
          content: `
            <p>React和Vue是当前最流行的两大前端框架，它们各有特色和适用场景。在本文中，我将从多个维度对这两个框架进行对比分析，帮助开发者选择适合自己项目的框架。</p>
            
            <h3>1. 基本理念与设计哲学</h3>
            <p><strong>React</strong>：由Facebook开发，强调"一切皆组件"，采用JSX语法，倾向于函数式编程，提倡单向数据流和不可变性。</p>
            <p><strong>Vue</strong>：由尤雨溪个人开发，强调渐进式框架，采用模板语法，结合了React和Angular的优点，提供更多开箱即用的功能。</p>
            
            <h3>2. 性能对比</h3>
            <p>在性能方面，React和Vue都进行了充分的优化，差异不大。React使用虚拟DOM和Fiber架构，Vue则使用模板编译时优化和虚拟DOM。在大多数场景下，两者性能相当。</p>
            
            <h3>3. 学习曲线</h3>
            <p><strong>React</strong>：学习曲线相对陡峭，需要理解JSX、函数式编程、不可变性等概念。没有官方的路由或状态管理解决方案，需要学习第三方库。</p>
            <p><strong>Vue</strong>：学习曲线较平缓，模板语法接近HTML，对新手更友好。提供官方的路由和状态管理解决方案，降低了学习负担。</p>
            
            <h3>4. 生态系统</h3>
            <p><strong>React</strong>：拥有庞大的生态系统，有丰富的第三方库和工具。React Native可用于跨平台移动应用开发。</p>
            <p><strong>Vue</strong>：生态系统也很健全，官方提供了Vue Router、Vuex等核心库。虽然不如React生态系统庞大，但足以满足大多数需求。</p>
            
            <h3>5. 适用场景</h3>
            <p><strong>React</strong>适合：</p>
            <ul>
              <li>大型、复杂的应用</li>
              <li>需要与React Native结合的项目</li>
              <li>团队熟悉函数式编程</li>
              <li>需要高度定制化的项目</li>
            </ul>
            
            <p><strong>Vue</strong>适合：</p>
            <ul>
              <li>中小型项目</li>
              <li>快速原型开发</li>
              <li>渐进式升级现有项目</li>
              <li>团队包含前端新手</li>
            </ul>
            
            <h3>6. 社区支持</h3>
            <p>React由Facebook支持，拥有庞大的社区和企业支持。Vue虽然最初由个人开发，但现在也有大量公司支持和使用，社区也非常活跃。</p>
            
            <h3>总结</h3>
            <p>React和Vue都是优秀的前端框架，选择哪一个取决于项目需求、团队技能水平和个人偏好。React更适合大型、复杂的应用和熟悉函数式编程的团队，而Vue则更适合快速开发和有前端新手的团队。在实际项目中，两者都能胜任大多数前端开发需求。</p>
          `
        },
        {
          id: 5,
          title: '如何构建高性能的Node.js微服务架构',
          excerpt: '本文分享了我在构建Node.js微服务架构过程中的经验和最佳实践，覆盖了服务拆分、通信模式、数据一致性等关键问题...',
          date: '2024-11-10',
          category: '后端开发',
          tags: ['Node.js', '微服务', '架构设计', '服务器端'],
          content: `
            <p>微服务架构已经成为构建大型应用的主流方式。作为一名全栈开发者，我在过去几年中使用Node.js构建了多个微服务系统。在本文中，我将分享我的经验和最佳实践。</p>
            
            <h3>1. 服务拆分策略</h3>
            <p>合理拆分服务是微服务架构的关键。我通常采用以下策略：</p>
            <ul>
              <li><strong>按业务能力拆分</strong>：根据业务功能划分服务边界，例如用户服务、订单服务、支付服务等</li>
              <li><strong>单一职责原则</strong>：每个服务只负责一个特定的业务功能</li>
              <li><strong>考虑团队结构</strong>：服务边界可以与团队结构保持一致，便于管理和维护</li>
            </ul>
            
            <h3>2. 服务间通信</h3>
            <p>服务间通信是微服务架构的核心挑战。在Node.js微服务中，我通常使用以下通信模式：</p>
            <ul>
              <li><strong>RESTful API</strong>：适用于同步通信场景</li>
              <li><strong>消息队列</strong>：使用RabbitMQ或Kafka进行异步通信</li>
              <li><strong>gRPC</strong>：适用于高性能、低延迟的服务间通信</li>
              <li><strong>GraphQL</strong>：适用于前端需要灵活查询数据的场景</li>
            </ul>
            
            <h3>3. 数据管理</h3>
            <p>在微服务架构中，每个服务通常拥有自己的数据存储。这带来了一系列挑战：</p>
            <ul>
              <li><strong>数据一致性</strong>：使用Saga模式或事件溯源处理分布式事务</li>
              <li><strong>查询效率</strong>：使用CQRS模式分离读写操作</li>
              <li><strong>数据冗余</strong>：适当冗余数据以提高查询性能</li>
            </ul>
            
            <h3>4. 服务发现与负载均衡</h3>
            <p>在Node.js微服务架构中，我通常使用以下工具进行服务发现和负载均衡：</p>
            <ul>
              <li><strong>Consul</strong>或<strong>etcd</strong>：进行服务注册与发现</li>
              <li><strong>Nginx</strong>或<strong>Traefik</strong>：作为API网关和负载均衡器</li>
            </ul>
            
            <h3>5. 监控与可观察性</h3>
            <p>监控对于微服务架构至关重要。我通常使用以下工具建立全面的监控系统：</p>
            <ul>
              <li><strong>Prometheus</strong>：收集和存储指标数据</li>
              <li><strong>Grafana</strong>：可视化监控数据</li>
              <li><strong>ELK Stack</strong>：集中式日志管理</li>
              <li><strong>Jaeger</strong>或<strong>Zipkin</strong>：分布式追踪</li>
            </ul>
            
            <h3>6. 部署与扩展</h3>
            <p>微服务架构需要高效的部署和扩展策略：</p>
            <ul>
              <li><strong>容器化</strong>：使用Docker打包服务</li>
              <li><strong>容器编排</strong>：使用Kubernetes管理容器</li>
              <li><strong>CI/CD</strong>：建立自动化构建、测试和部署流程</li>
              <li><strong>自动扩展</strong>：根据负载自动调整服务实例数量</li>
            </ul>
            
            <h3>7. 安全性</h3>
            <p>微服务架构中的安全挑战：</p>
            <ul>
              <li><strong>认证与授权</strong>：使用JWT或OAuth 2.0进行身份验证</li>
              <li><strong>服务间通信安全</strong>：使用mTLS加密服务间通信</li>
              <li><strong>API网关安全</strong>：实施速率限制、IP过滤等措施</li>
            </ul>
            
            <h3>总结</h3>
            <p>Node.js凭借其事件驱动、非阻塞I/O的特性，非常适合构建微服务架构。通过合理的服务拆分、通信模式选择、数据管理策略，结合适当的监控和部署工具，可以构建出高性能、可扩展的Node.js微服务系统。</p>
          `
        }
      ]
    }
  },
  computed: {
    categories() {
      const cats = ['全部', ...new Set(this.posts.map(post => post.category))]
      return cats
    },
    tags() {
      const allTags = this.posts.reduce((acc, post) => {
        return [...acc, ...post.tags]
      }, [])
      return [...new Set(allTags)]
    },
    recentPosts() {
      return [...this.posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3)
    }
  },
  methods: {
    selectPost(post) {
      this.selectedPost = post
      window.scrollTo(0, 0)
    },
    clearSelectedPost() {
      this.selectedPost = null
    },
    filterByCategory(category) {
      if (category === '全部') {
        this.selectedCategory = null
      } else {
        this.selectedCategory = category
      }
      this.selectedTag = null
    },
    filterByTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag
      this.selectedCategory = null
    }
  }
}
</script>

<style scoped>
.blog-page {
  padding: 60px 0;
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

.blog-container {
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 40px;
}

/* 博客列表 */
.blog-content {
  margin-bottom: 40px;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.blog-card {
  display: flex;
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.blog-card-image {
  flex: 0 0 200px;
  overflow: hidden;
}

.blog-image-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-light);
  color: var(--white);
  font-size: 3rem;
  font-weight: bold;
}

.blog-card-content {
  flex: 1;
  padding: 25px;
}

.blog-category {
  display: inline-block;
  padding: 5px 10px;
  background-color: var(--primary-light);
  color: var(--white);
  font-size: 0.8rem;
  border-radius: 20px;
  margin-bottom: 15px;
}

.blog-title {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.blog-excerpt {
  color: var(--text-light);
  margin-bottom: 20px;
  line-height: 1.6;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-light);
  font-size: 0.9rem;
}

.blog-read-more {
  color: var(--primary-color);
  display: flex;
  align-items: center;
  transition: var(--transition);
}

.arrow {
  margin-left: 5px;
  transition: var(--transition);
}

.blog-read-more:hover .arrow {
  transform: translateX(5px);
}

/* 单篇博客样式 */
.blog-post {
  background: var(--white);
  padding: 30px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

.post-header {
  margin-bottom: 30px;
  border-bottom: 1px solid var(--gray-light);
  padding-bottom: 20px;
}

.post-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.post-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  color: var(--text-light);
  font-size: 0.9rem;
}

.post-category {
  color: var(--primary-color);
  font-weight: 500;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 5px 10px;
  background-color: #f0f0f0;
  color: var(--text-color);
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: var(--transition);
}

.tag:hover, .tag.active {
  background-color: var(--primary-light);
  color: var(--white);
}

.post-content {
  line-height: 1.8;
  color: var(--text-light);
}

.post-content h3 {
  margin: 30px 0 15px;
  color: var(--text-color);
}

.post-content p {
  margin-bottom: 20px;
}

.post-content ul, .post-content ol {
  margin-bottom: 20px;
  padding-left: 20px;
}

.post-content li {
  margin-bottom: 10px;
}

.post-content pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  overflow: auto;
  margin-bottom: 20px;
}

.post-content code {
  font-family: monospace;
}

.post-actions {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
}

.icon {
  margin-right: 5px;
}

/* 侧边栏 */
.blog-sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.sidebar-widget {
  background: var(--white);
  padding: 25px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
}

.widget-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.widget-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
}

.categories-list {
  list-style: none;
}

.categories-list li {
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-light);
  cursor: pointer;
  transition: var(--transition);
}

.categories-list li:last-child {
  border-bottom: none;
}

.categories-list li:hover, .categories-list li.active {
  color: var(--primary-color);
  padding-left: 10px;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.recent-posts {
  list-style: none;
}

.recent-posts li {
  padding: 15px 0;
  border-bottom: 1px solid var(--gray-light);
  cursor: pointer;
  transition: var(--transition);
}

.recent-posts li:last-child {
  border-bottom: none;
}

.recent-posts li:hover {
  color: var(--primary-color);
}

.recent-post-title {
  font-weight: 500;
  margin-bottom: 5px;
}

.recent-post-date {
  font-size: 0.8rem;
  color: var(--text-light);
}

@media (max-width: 992px) {
  .blog-container {
    grid-template-columns: 1fr;
  }
  
  .blog-sidebar {
    order: 1;
  }
  
  .blog-content {
    order: 2;
  }
  
  .sidebar-widget {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .blog-card {
    flex-direction: column;
  }
  
  .blog-card-image {
    flex: 0 0 150px;
  }
  
  .post-header {
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  
  .post-title {
    font-size: 1.5rem;
  }
}
</style> 