<template>
  <div class="pay-main">
    <custom-header title="付款"></custom-header>
    <!-- 支付金额 -->
    <div class="pay-total flex-between">
      <span>支付金额</span>
      <span>¥182080.00</span>
    </div>
    <div class="pay-voucher flex-between" @click="toastVoucher()">
      <span>电子抵用券</span>
      <div class="more flex-center">
        <span>{{voucherMsg}}</span>
        <img src="@/assets/images/rightArrow.png" alt="" class="more-arrow">
      </div>
    </div>
    <!-- 支付方式 -->
    <div class="pay-type-title">支付方式</div>
    <!-- ipad用户展示 -->
    <ipad-user v-if="$store.state.isPad"></ipad-user>
    <!-- 手机用户展示 -->
    <phone-user v-else></phone-user>
    <!-- 抵用券弹出层 -->
    <van-popup v-model="voucherShow" position="bottom">
      <div class="voucher-wrap">
        <img src="@/assets/images/close.png" alt="" class="close-img" @click="voucherShow = false">
        <div class="voucher-item" v-for="(item, index) in 2" :key="index">
          <p class="voucher-name">恩贝尔健康检测套餐A抵用券</p>
          <div class="voucher-price flex">
            <span>¥</span>
            <p>1600.00</p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import phoneUser from './components/phoneUser'
import ipadUser from './components/ipadUser'
export default {
  data () {
    return {
      voucherMsg: '暂无可用',
      voucherShow: false
    }
  },
  components: {
    phoneUser,
    ipadUser
  },
  mounted () {
    this.$judgeUserAgent()
  },
  methods: {
    // 弹出抵用券弹出层
    toastVoucher () {
      this.voucherShow = true
    }
  }
}
</script>

<style scoped lang="scss">
  .pay-main{
    // 支付金额
    .pay-total{
      padding: 15px 80px;
      box-sizing: border-box;
      font-size: 26px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin: 40px auto;
    }
    // 支付电子抵用券
    .pay-voucher{
      padding: 15px 80px;
      box-sizing: border-box;
      font-size: 26px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin: 40px auto;
      .more{
        align-items: baseline;
        font-size: 24px;
        color: #999;
      }
    }
    // 支付方式
    .pay-type-title{
      padding: 15px 80px;
      box-sizing: border-box;
      font-size: 26px;
      color: #666;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-bottom: 25px;
    }
    // 抵用券弹出层
    .voucher-wrap{
      height: 70vh;
      width: 100%;
      min-width: 100vw;
      background-color: #fff;
      padding: 100px 30px;
      box-sizing: border-box;
      position: relative;
      // 关闭
      .close-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        top: 30px;
        right: 30px;
      }
      .voucher-item{
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        background-color: #f2f2f2;
        border-radius: 10px;
        margin-bottom: 20px;
        .voucher-name{
          color: #333;
          height: 40px;
          line-height: 40px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .voucher-price{
          align-items: baseline;
          color: #05B6BC;
          font-weight: bold;
          span{
            font-size: 22px;
          }
        }
      }
    }
  }
</style>

<style>
  .pay-main .van-popup--bottom{
    border-radius: 30px 30px 0 0;
  }
</style>