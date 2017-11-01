<template>
    <div>
        本地页面
    </div>
</template>
<script>
export default {
  name: 'localPage',
  components:{
  },
  created(){
    //用vuex设置状态
     this.$store.dispatch("inLocal");
  }
}
</script>
<style scoped lang="less">

</style>