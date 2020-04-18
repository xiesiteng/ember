<template>
  <div class="pay-main">
    <custom-header title="付款"></custom-header>
    <!-- 支付金额 -->
    <div class="pay-total flex-between">
      <span>支付金额</span>
      <span>¥182080.00</span>
    </div>
    <!-- 支付方式 -->
    <div class="pay-type-title">支付方式</div>
    <!-- ipad用户展示 -->
    <ipad-user v-if="$store.state.isPad"></ipad-user>
    <!-- 手机用户展示 -->
    <phone-user v-else></phone-user>
  </div>
</template>

<script>
import phoneUser from './components/phoneUser'
import ipadUser from './components/ipadUser'
export default {
  data () {
    return {

    }
  },
  components: {
    phoneUser,
    ipadUser
  },
  mounted () {
    this.$judgeUserAgent()
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
  }
</style>