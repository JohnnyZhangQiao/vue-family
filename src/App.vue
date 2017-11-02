<template>
  <div id="app">
  	<app-header></app-header>
    <keep-alive>
      <!-- 缓存组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不缓存组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import store from '@/vuex/store'
import AppHeader from '@/components/header.vue'
import AppFooter from '@/components/footer.vue'
export default {
  name: 'app',
  store,
  components: {
  	AppHeader,
  	AppFooter
  }
}
</script>


