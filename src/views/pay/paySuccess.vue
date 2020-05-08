<template>
  <div class="success-main">
    <custom-header title="支付结果"></custom-header>
    <div class="success-top flex-center-col">
      <img src="@/assets/images/success.png" alt="">
      <p>支付成功</p>
    </div>
    <!-- 订单编号 -->
    <!-- <div class="order-number">订单编号：000006</div> -->
    <!-- 订单信息 -->
    <!-- <div class="order-info">
      <p>购买套餐：A套餐</p>
      <p>支付金额：18100.00</p>
      <p>支付时间：2020-04-15 10:04</p>
    </div> -->
    <!-- 温馨提示 -->
    <p class="tips flex-center">温馨提示：关注公众号，可以实时查看自己的订单进度。</p>
    <!-- 按钮 -->
    <custom-button btnText="退出登录" v-if="$store.state.isPad"></custom-button>
    <custom-button btnText="返回首页" v-else @tap="toPage()"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return{
      // info: {},
    }
  },
  mounted () {
    this.$judgeUserAgent()
  },
  methods: {
    toPage () {
      this.$router.push('/shopIndex')
    }
  }
}
</script>

<style scoped lang="scss">
  .success-main{
    .success-top{
      margin: 100px 0 40px;
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
    // 订单编号
    .order-number{
      padding: 30px 80px;
      box-sizing: border-box;
      font-size: 26px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      color: #666;
    }
    // 订单信息
    .order-info{
      @extend .order-number;
      border-top: none;
      padding: 15px 80px;
      p{
        padding: 10px 0;
      }
    }
    // 温馨提示
    .tips{
      color: #c6c6c6;
      font-size: 20px;
      padding: 20px 0;
      margin-bottom: 100px;
    }
  }
</style>