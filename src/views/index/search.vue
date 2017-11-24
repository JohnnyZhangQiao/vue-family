<template>
  <div class="search-main" 
      @touchstart="$refs.slideUpdate.pullGet($event)" 
      @touchmove="$refs.slideUpdate.pullCount($event)" 
      @touchend="$refs.slideUpdate.pullUpdate($refs.slideUpdate.showAlert,$event)"
  >
    <slide-update ref="slideUpdate"></slide-update>
  	<router-link :to="{name:'interesting'}">
  		<section class="search-item">
    		<p class="search-icon"><img src="~@/assets/images/search/one.png" alt=""></p>
    		<p class="search-content">有趣</p>
  		</section>
  	</router-link>
  	<router-link :to="{name:'interesting'}">
      <section class="search-item">
  		  <p class="search-icon"><img src="~@/assets/images/search/two.png" alt=""></p>
  		  <p class="search-content">圈子</p>
      </section>
  	</router-link>
  	<router-link :to="{name:'interesting'}">
      <section class="search-item">
  		  <p class="search-icon"><img src="~@/assets/images/search/three.png" alt=""></p>
  		  <p class="search-content">闲逛</p>
      </section>
  	</router-link>
    <router-link :to="{name:'interesting'}">
      <section class="search-item">
        <p class="search-icon"><img src="~@/assets/images/search/four.png" alt=""></p>
        <p class="search-content">珍品</p>
      </section>
    </router-link>
  </div>
</template>
<script>
import SlideUpdate from '@/components/slideUpdate.vue'
export default {
  name: 'searchPage',
  components:{
    SlideUpdate
  },
  created() {
  	this.$store.dispatch('inSearch');
  },
  data() {
  	return {
  	}
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
	.search-main {
		width: 100%;
		.search-item {
			margin: 15px auto;
		    padding: 10px 10px;
		    width: 100%;
		    background-color: #fff;
		    text-align: left;
		    font-size: 0;
		    box-shadow: 0 1px 3px 0 #eaeaea;
			>.search-icon {
				vertical-align: top;
				display: inline-block;
				width: 40px;
				img {
					height: 20px;
				}
			}
			>.search-content {
				display: inline-block;
				width: calc(~'100% - 40px');
				font-size: 14px;
			}
		}
	}
</style>