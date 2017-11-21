<template>
	<div class="app-footer">
		<ul>
			<li>
				<router-link :to="{name:'push', params:{userName:'Johnny'}}" exact>
					<p class="fa fa-star-o footer-icon"></p>
					<p class="footer-content">推荐</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'local'}" exact>
					<p class="fa fa-map-marker footer-icon"></p>
					<p class="footer-content">本地</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'search'}" exact>
					<p class="fa fa-location-arrow footer-icon"></p>
					<p class="footer-content">发现</p>
				</router-link>
			</li>
			<li>
				<router-link :to="{name:'my'}" exact>
					<p class="fa fa-user-o footer-icon"></p>
					<p class="footer-content">我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'AppFooter',
	data () {
		return {}
	},
	computed : {
		//vuex监听页面变化从而改变footer的icon
		checkFooterItem(){
			return this.$store.state.footerFlag
		}
	}
}
</script>

<style scoped lang="less">
	.app-footer {
		position: fixed;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 50px;
	    background-color: #fff;
	    box-shadow: 0 -1px 4px 0 #e4e4e4;
		>ul{
			width: 100%;
			overflow: auto;
			text-align: center;
			>li {
				float: left;
				padding: 5px 10px;
			}
			>li:nth-child(1) {
				width: 25%;
			}
			>li:nth-child(2) {
				width: 25%;
			}
			>li:nth-child(3) {
				width: 25%;
			}
			>li:nth-child(4) {
				width: 25%;
			}
		}
		.footer-icon {    
			font-size: 20px;
    		line-height: 25px;
		}
		.footer-content {
			height: 15px;
			font-size: 12px;
		}
		.router-link-active {
			color: #5ed063;
		}
	}
</style>