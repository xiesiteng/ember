<template>
  <div class="empty-main flex-center">
    <div class="empty-wrap flex-center-col">
      <img src="@/assets/images/empty_data.png" alt="">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props:{
    text: {
      type: String,
      default: '暂无相关数据哟'
    }
  }
}
</script>

<style scoped lang="scss">
  .empty-main{
    width: 100%;
    .empty-wrap{
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      img{
        width: 500px;
        height: 400px;
      }
      p{
        margin-top: -50px;
        font-size: 24px;
        color: #999;
      }
    }
  }
</style>