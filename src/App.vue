<template>
	<div id="app">
		<transition name="fade">
			<div class="loading-page" v-show="this.loading">
				<img class="loading-icon" src="~@/assets/images/common/loading.gif" />
			</div>
		</transition>
		<router-view></router-view>
	</div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  name: 'app',
  store,
  components:{},
  data() {
  	return {
  		
  	}
  },
  computed: {
  	...mapState(['loading'])
  }
}
</script>

<style lang="less">
.loading-page {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #fff;
	text-align: center;
	z-index: 99999;
	>.loading-icon {
		margin: 30% auto 0 auto;
		height: 100px;
	}
}
.fade-leave-active {
  transition: all .8s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
