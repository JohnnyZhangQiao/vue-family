<template>
    <div>
        我的页面
    </div>
</template>
<script>
export default {
  name: 'myPage',
  components:{
  },
  created() {
  	this.$store.dispatch('inMy')
  }
}
</script>
<style scoped lang="less">

</style>