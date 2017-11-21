<template>
  <div id="interesting">
    <sub-header></sub-header>
    21212
  </div>
</template>


<script>
import SubHeader from '@/components/subHeader.vue'
export default {
  name: 'interesting',
  components:{
    SubHeader
  },
  created() {
  	this.$store.dispatch('inInteresting')
  },
  data() {
  	return {

  	}
  }
}
</script>
<style scoped lang="less">

</style>