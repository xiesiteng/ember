<template>
  <div class="fail-main">
    <custom-header title="支付结果"></custom-header>
    <div class="fail-top flex-center-col">
      <img src="@/assets/images/fail.png" alt="">
      <p>支付失败</p>
    </div>
    <!-- 提示 -->
    <p class="tips flex-center">支付遇到问题，请尝试重新支付</p>
    <!-- 重新支付 -->
    <custom-button btnText="重新支付" @tap="rePay()"></custom-button>
    <!-- 退出登录 -->
    <div class="bottom-btn">
      <a href="javascript:void(0)">退出登录</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 重新支付
    rePay () {
      this.$toast('重新发起支付!!!')
    }
  }
}
</script>

<style scoped lang="scss">
  .fail-main{
    .fail-top{
      margin: 100px 0;
      img{
        width: 130px;
        height: 130px;
        border-radius: 50%;
      }
      p{
        font-size: 34px;
        margin-top: 20px;
      }
    }
    // 提示
    .tips{
      font-size: 20px;
      color: #c6c6c6;
      margin-bottom: 60px;
    }
    .bottom-btn{
      width: 600px;
      height: 70px;
      margin: 40px auto 0;
      border-radius: 50px;
      background-color: #fff;
      border: 1px solid #00b2bc;
      a{
        color: #00b2bc;
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 70px;
      }
    }
  }
</style>