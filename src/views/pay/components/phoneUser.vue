<template>
  <div class="phone-main">
    <div class="pay-type-wrap">
      <!-- 支付宝 -->
      <div class="pay-type flex-between">
        <div class="type-name flex-center-y">
          <img src="@/assets/images/zfb.png" alt="">
          <span>支付宝</span>
        </div>
        <span :class="['cir', ZFB ? 'cir-active' : '']" @click="pickType(0)"></span>
      </div>
      <!-- 微信 -->
      <div class="pay-type flex-between">
        <div class="type-name flex-center-y">
          <img src="@/assets/images/wx.png" alt="">
          <span>微信</span>
        </div>
        <span :class="['cir', WX ? 'cir-active' : '']" @click="pickType(1)"></span>
      </div>
    </div>
    <!-- 立即支付 -->
    <custom-button btnText="立即支付" @tap="pay()"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ZFB: false,
      WX: true
    }
  },
  methods: {
    // 勾选项
    pickType (val) {
      // val， 0：支付宝   1：微信
      if (val == 0) {
        this.ZFB = true
        this.WX = false
      } else {
        this.WX = true
        this.ZFB = false
      }
    },
    // 支付
    pay () {
      // 发起微信支付
      if (this.WX) {
        this.$api.testOverPay({
          // goods_id: this.$store.state.goods_id
          order_id,
          coupon_id
        }).then(res => {
          console.log(res)
          let payData = res.data.data
          if (payData) {
            this.$callPay(payData)
          }
        })
      } else {
        // 发起支付宝支付
        this.$router.push('/payFail')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  .pay-type-wrap{
    margin-bottom: 240px!important;
  }
}
  .phone-main{
    .pay-type-wrap{
      margin-bottom: 360px;
        .pay-type{
        padding: 15px 80px;
        box-sizing: border-box;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        font-size: 28px;
        margin-bottom: 20px;
        .type-name{
          img{
            width: 60px;
            height: 60px;
            border-radius: 5px;
            margin-right: 20px;
          }
        }
        // 选项框
        .cir{
          width: 23px;
          height: 23px;
          border: 2px solid #eee;
          border-radius: 50%;
          background-color: #f0f0f0;
        }
        .cir-active{
          width: 23px;
          height: 23px;
          border: 2px solid #eee;
          background-color: #00b2bc;
        }
      }
    }
  }
</style>