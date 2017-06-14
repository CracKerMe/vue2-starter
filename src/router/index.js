import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Index from '@/pages/Index'
import News from '@/pages/News'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
