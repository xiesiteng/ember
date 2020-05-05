<template>
  <div class="ipad-main flex-around">
    <div class="flex-center-col qrCode">
      <span>微信</span>
      <img :src="$base + wxQrCode" alt="">
      <!-- <img src="http://img3.imgtn.bdimg.com/it/u=2743786503,3895901848&fm=26&gp=0.jpg" alt=""> -->
    </div>
    <div class="flex-center-col qrCode">
      <span>支付宝</span>
      <img src="http://img3.imgtn.bdimg.com/it/u=2743786503,3895901848&fm=26&gp=0.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      wxQrCode: ''
    }
  },
  mounted () {
    this.initQrCode()
  },
  methods: {
    // 获取支付的二维码
    initQrCode () {
      this.$api.getQrCode({
        order_id: this.$store.state.chooseSubscribeId
      }).then(res => {
        this.wxQrCode = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .ipad-main{
    // padding: 15px 60px;
    // box-sizing: border-box;
    margin-top: 100px;
    .qrCode{
      color: #666;
      font-size: 28px;
      img{
        width: 300px;
        height: 300px;
        margin: 50px 0;
      }
    }
  }
</style>