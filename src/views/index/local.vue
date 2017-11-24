<template>
  <div>
    <div class="local-position"><span class="fa fa-map-marker"></span>  当前位置：{{city}}</div>
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

export default {
  name: 'localPage',
  components:{
  },
  created(){
    //派遣事件到vuex执行相应改变
    this.$store.dispatch('inLocal')
    this.loadLocal()
  },
  activated() {
    //派遣事件到vuex执行相应改变
    this.$store.dispatch('inLocal');
  },
  data () {
    return {
       apiUrl:"http://route.showapi.com/170-47",
       showapi_sign:"414254414fbe470eb92f0972f805d568",
       showapi_appid:"48654",
       region:'',
       city:'',
       data:'',
    }
  },
  methods: {
    getRegion: function() { //获取所在地址信息
      let that = this;
      return (
        api.Push('post', 'http://route.showapi.com/632-1', {
          showapi_appid:this.showapi_appid,
          showapi_sign:this.showapi_sign,
        })
        .then(res => {
          that.region = res.showapi_res_body.region;
          that.city = res.showapi_res_body.city;
        })
      )
    },

    getLocalNews: function() { //获取地区新闻
      this.$store.dispatch('setLoading',{loading:true});
      let that = this;
      return (
        api.Push('post', this.apiUrl, {
          showapi_appid:this.showapi_appid,
          showapi_sign:this.showapi_sign,
          areaName:this.region,
        })
        .then(res => {
          that.data = res.showapi_res_body.pagebean.contentlist;
          this.$store.dispatch('setLoading',{loading:false});
        })
      )
    },

    loadLocal: async function() {
      try {
        await this.getRegion()
        await this.getLocalNews()
      } catch(err) {}
    }
  }
}
</script>
<style scoped lang="less">
.local-position {
  margin: 10px 0;
  padding: 0 5px;
  width: 100%;
  text-align: left;
  color: #1eb17c;
}
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