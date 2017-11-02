<template>
	<div>
		<div class="push-item" v-for="item in data">
	    	<div class="push-item-title">
	    		<p>热榜指数：{{item.influence}}</p>
	    		<p>{{item.date}}</p>
	    	</div>
	    	<a :href="item.url">
		    	<div class="push-item-content">
					<p><img class="item-img" :src="item.img"></p>
					<p>{{item.newinfo}}</p>
		    	</div>
	    	</a>
	    </div>
	</div>
</template>
<script>
export default {
  name: 'pushPage',
  components:{
  },
  created(){
  	//派遣事件到vuex执行相应改变
  	this.$store.dispatch('inPush')
    let that = this;

    //vue-resource请求数据
    this.$http.post(
    	this.apiUrl,{
    		showapi_appid:this.showapi_appid,
    		showapi_sign:this.showapi_sign,
    		typeId:this.typeId,
    		space:this.space
    	},
    	{emulateJSON:true}
    )
    .then((res) => {
        that.data = res.body.showapi_res_body.pagebean.contentlist;
    }),function(error){
      
    }
  },
  activated() {
  	//派遣事件到vuex执行相应改变
  	this.$store.dispatch('inPush')
  },
  data () {
    return {
       apiUrl:"http://route.showapi.com/254-1",
       showapi_sign:"096d1aafcdf9431aa1fa3ab7034369dd",
       showapi_appid:"49036",
       typeId:1,
       space:'day',
       data:'',
    }
  },
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
			width: 30%;
		}
		>p:nth-child(2) {
			width: 70%;
			text-align: right;
		}
	}
	.push-item-content {
		width: 100%;
		height: 100px;
		>p {
			display: inline-block;
		}
		>p:nth-child(1) {
			width: 30%;
			>.item-img {
				margin: 10px auto;
				height: 80px;
			}
		}
		>p:nth-child(2) {
			margin: 10px 0;
			padding-left: 10px;
			width: 70%;
		    height: 80px;
		    letter-spacing: 1px;
		    font-size: 14px;
		    overflow: hidden;
		}
	}
}
</style>