<template>
  <div class="empty-main flex-center">
    <div class="empty-wrap flex-center-col">
      <img src="@/assets/images/empty_data.png" alt="">
      <p>暂无相关数据哟</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
        width: 400px;
        height: 400px;
      }
      p{
        margin-top: -100px;
        font-size: 24px;
        color: #999;
      }
    }
  }
</style>