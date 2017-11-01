<template>
  <div class="app-title">
    <ul>
      <li><img class="app-title-back" src="./../assets/images/common/backIcon.png"></li>
      <li>{{this.$store.state.title}}</li>
      <li>操作</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {};
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
        width: 20%;
        text-align: left;
        .app-title-back {
          margin: 12.5px 0;
          height: 20px;
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
      }
    }
  }
</style>
