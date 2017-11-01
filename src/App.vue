<template>
  <div id="app">
  	<app-header></app-header>
    <router-view></router-view>
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


