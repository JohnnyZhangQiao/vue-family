import Vue from 'vue'
import Router from 'vue-router'

//异步注入的页面
const index = r => require.ensure([], () => r(require('@/views/index/index.vue')), 'index')
const pushPage = r => require.ensure([], () => r(require('@/views/index/push.vue')), 'push')
const localPage = r => require.ensure([], () => r(require('@/views/index/local.vue')), 'local')
const searchPage = r => require.ensure([], () => r(require('@/views/index/search.vue')), 'search')
const myPage = r => require.ensure([], () => r(require('@/views/index/my.vue')), 'my')
const aaa = r => require.ensure([], () => r(require('@/views/index/aaa.vue')), 'aaa')
const interesting = r => require.ensure([], () => r(require('@/views/interesting.vue')), 'interesting')

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
