<template>
  <div class="app-title">
    <ul>
      <li>
        <img id="app_back" class="app-title-icon" src="~@/assets/images/common/backIcon.png" @click="appBack">
        <img id="app_close" class="app-title-icon" style="margin-left: 15px" src="~@/assets/images/common/close.png" @click="appClose">
      </li>
      <li>{{title}}</li>
      <li></li>
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
  },
  methods: {
    appBack: function() {
      window.history.go(-1);
    },
    appClose: function() {
      if (this.footerFlag !== '') {
        this.$router.push({ path: this.footerFlag })
      } else {
        this.$router.push({ path: 'index/push' })
      }
    }
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
    >ul{
      width: 100%;
      overflow: auto;
      >li:nth-child(1) {
        float: left;
        padding: 0 10px;
        width: 25%;
        text-align: left;
        .app-title-icon {
          margin: 12.5px 0;
          height: 20px;
        }
      }
      >li:nth-child(2) {
        float: left;
        padding: 0 10px;
        width: 50%;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
      }
      >li:nth-child(3) {
        float: left;
        padding: 0 10px;
        width: 25%;
        text-align: right;
        font-size: 22px;
      }
    }
  }
</style>
