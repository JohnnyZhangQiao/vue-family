<template>
	<div id="index">
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
import AppHeader from '@/components/index/header.vue'
import AppFooter from '@/components/index/footer.vue'
export default {
  name: 'index',
  components: {
  	AppHeader,
  	AppFooter
  }
}
</script>