<template>
    <div class="search-main">
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
export default {
  name: 'searchPage',
  components:{
  },
  created() {
  	this.$store.dispatch('inSearch');
    this.$store.dispatch('setLoading',{loading:true});
    setTimeout(function(){
      this.$store.dispatch('setLoading',{loading:false});
    }.bind(this),2000);
  },
  data() {
  	return {

  	}
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