<template>
  <div class="app-title">
    <ul>
      <li><img class="app-title-logo" src="~@/assets/images/common/logo.png"></li>
      <li>{{title}}</li>
      <li><i class="fa fa-bars"></i></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'AppHeader',
  data () {
    return {};
  },
  computed: {
    ...mapState(['title','footerFlag'])
  }
}
</script>

<style scoped lang="less">
  .app-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #5ed063;
    color: #fff;
    overflow: hidden;
    >ul{
      width: 100%;
      overflow: auto;
      >li:nth-child(1) {
        float: left;
        padding: 0 10px;
        width: 20%;
        text-align: left;
        .app-title-logo {
          margin: 10.5px 0;
          height: 24px;
        }
      }
      >li:nth-child(2) {
        float: left;
        padding: 0 10px;
        width: 60%;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
      }
      >li:nth-child(3) {
        float: left;
        padding: 0 10px;
        width: 20%;
        text-align: right;
        font-size: 22px;
      }
    }
  }
</style>
