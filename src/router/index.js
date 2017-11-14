import Vue from 'vue'
import Router from 'vue-router'

//注入的页面
import pushPage from '@/views/push.vue'
import localPage from '@/views/local.vue'
import searchPage from '@/views/search.vue'
import myPage from '@/views/my.vue'

Vue.use(Router)

//export全局路由对象，把需要单应用页面都配置在这
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/push', //重定向第一个显示页面
      name: 'index',
      component: {}
    },
    {
      path: '/push',
      name: 'push',
      component: pushPage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/local',
      name: 'local',
      component: localPage
    },
    {
      path: '/search',
      name: 'search',
      component: searchPage
    },
    {
      path: '/my',
      name: 'my',
      component: myPage
    }
  ]
})
