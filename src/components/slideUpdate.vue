<template>
  <div class="update" :style="{height:this.distance+'px'}">{{loadingMsg}}</div>
</template>

<script>

export default {
  name: 'SlideUpdate',
  created() {
    [this.startY,this.endY,this.distance,this.startY] = [0,0,0,'下拉刷新'];
  },
  data() {
    return {
      startY: 0,
      endY: 0,
      distance: 0,
      loadingMsg: '下拉刷新'
    }
  },
  methods: {
    pullGet: function(e) {
      if (document.body.scrollTop == 0) {
        this.startY = e.touches[0].screenY;
        window.event? window.event.cancelBubble = true : e.stopPropagation();
      }
    },
    pullCount: function(e) {
      if (document.body.scrollTop <= 0) {
        this.distance = (e.touches[0].screenY - this.startY)/5;
        if (this.distance > 0) {
          if (this.distance >= 50) {
            this.loadingMsg = '释放刷新';
          } else {
            this.loadingMsg = '下拉刷新';
          }
          window.event? window.event.returnValue = false : e.preventDefault();
        }
      }

    },
    pullUpdate: function(fn,e) {
      if (this.distance > 0) {
        if (this.distance >= 50) {
          this.loadingMsg = '刷新中';
          fn();
        }
        let _scroll = setInterval(function(){
          this.distance -= 2;
          if (this.distance <= 0) {
            clearInterval(_scroll);
          }
        }.bind(this),8);
        window.event? window.event.cancelBubble = true : e.stopPropagation();
      }
    },
    showAlert: function() {
      alert('刷新成功')
    }
  },
}
</script>

<style scoped lang="less">
  .update {
    width: 100%;
    height: 0;
    line-height: 60px;
    text-align: center;
    overflow: hidden;
  }
</style>
