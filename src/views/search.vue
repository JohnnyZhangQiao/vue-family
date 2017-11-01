<template>
    <div>
        发现页面
    </div>
</template>
<script>
export default {
  name: 'searchPage',
  components:{
  },
  created() {
  	this.$store.dispatch('inSearch')
  }
}
</script>
<style scoped lang="less">

</style>