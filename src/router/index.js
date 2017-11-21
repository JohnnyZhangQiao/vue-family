import Vue from 'vue'
import Router from 'vue-router'

//注入的页面
import index from '@/views/index/index.vue'
import pushPage from '@/views/index/push.vue'
import localPage from '@/views/index/local.vue'
import searchPage from '@/views/index/search.vue'
import myPage from '@/views/index/my.vue'
import interesting from '@/views/interesting.vue'

Vue.use(Router)

//export全局路由对象，把需要单应用页面都配置在这
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/search', //重定向第一个显示页面
      name: 'home',
      component: {},
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: 'push',
          name: 'push',
          component: pushPage,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'local',
          name: 'local',
          component: localPage,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'search',
          name: 'search',
          component: searchPage
        },
        {
          path: 'my',
          name: 'my',
          component: myPage
        }
      ]
    },
    {
      path: '/interesting',
      name: 'interesting',
      component: interesting
    }
  ]
})
