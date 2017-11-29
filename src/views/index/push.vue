<template>
	<div
		@touchstart="$refs.slideUpdate.pullGet($event)" 
		@touchmove="$refs.slideUpdate.pullCount($event)" 
		@touchend="$refs.slideUpdate.pullUpdate(pushData,$event)"
	>
		<slide-update ref="slideUpdate"></slide-update>
		<div class="push-item" v-for="item in data">
	    	<div class="push-item-title">
	    		<p>来源：{{item.source}}</p>
	    		<p>{{item.pubDate}}</p>
	    	</div>
	    	<a :href="item.link">
		    	<div class="push-item-content">
					<p>{{item.title}}</p>
					<p>{{item.desc}}</p>
		    	</div>
	    	</a>
	    </div>
	</div>
</template>
<script>
import api from '@/fetch/api'
import SlideUpdate from '@/components/slideUpdate.vue'

export default {
  name: 'pushPage',
  components:{
	SlideUpdate
  },
  created(){
  	//派遣事件到vuex执行相应改变
  	this.$store.dispatch('inPush')
  	this.pushData()
  },
  activated() {
  	//派遣事件到vuex执行相应改变
  	this.$store.dispatch('inPush');
    console.log(this.$route.params.userName);
  },
  data () {
    return {
       apiUrl:"http://route.showapi.com/109-35",
       showapi_sign:"414254414fbe470eb92f0972f805d568",
       showapi_appid:"48654",
       needAllList:0,
       data:'',
    }
  },
  methods : {
  	pushData: function() {
  		this.$store.dispatch('setLoading',{loading:true});
	    let that = this;
	    //axios请求数据
	    api.Push('post', this.apiUrl, {
			showapi_appid:this.showapi_appid,
			showapi_sign:this.showapi_sign,
			needAllList:this.needAllList,
		})
		.then(res => {
			that.data = res.showapi_res_body.pagebean.contentlist;
	      	this.$store.dispatch('setLoading',{loading:false});
		})
		.catch(error => {
			console.log(error)
		});
  	},
  	updatePush: function() {
		this.$store.dispatch('setLoading',{loading:true});
		let that = this;
		//axios请求数据
		api.Push('post', this.apiUrl, {
			showapi_appid:this.showapi_appid,
			showapi_sign:this.showapi_sign,
			needAllList:this.needAllList,
		})
		.then(res => {
			that.data = res.showapi_res_body.pagebean.contentlist;
		  	this.$store.dispatch('setLoading',{loading:false});
		})
		.catch(error => {
			console.log(error)
		});
    }
  }
}
</script>
<style scoped lang="less">
.push-item {
	margin-bottom: 15px;
    padding: 0 10px;
    width: 100%;
    background-color: #fff;
    text-align: left;
    font-size: 0;
    box-shadow: 0 1px 5px 0 #ccc;
	.push-item-title {
		width: 100%;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #ddd;
		>p {
			display: inline-block;
			font-size: 12px;
			color: #999;
		}
		>p:nth-child(1) {
			width: 40%;
		}
		>p:nth-child(2) {
			width: 60%;
			text-align: right;
		}
	}
	.push-item-content {
	    width: 100%;
	    height: 100px;
	    >p:nth-child(1) {
	      margin: 10px 0;
	      width: 100%;
	      font-size: 16px;
	      color: #000;
	      text-overflow: ellipsis;
	      overflow: hidden;
	      white-space: nowrap;
	    }
	    >p:nth-child(2) {
	      width: 100%;
	      height: 60px;
	      letter-spacing: 1px;
	      font-size: 14px;
	      overflow: hidden;
	      color: #999;
	    }
	}
}
</style>