<template>
  <div class="detail-main">
    <custom-header title="套餐详情"></custom-header>
    <!-- 套餐内容 -->
    <div class="detail-wrap">
      <h3>A套餐</h3>
      <p class="detail-name">（肠+胃+食道+肝）防癌检测</p>
      <p class="detail-price">3900元 / 人次</p>
      <p class="detail-intro">购买D套餐客户尊享赠品：</p>
      <p class="detail-present" v-for="(item, index) in list" :key="index">{{item}}</p>
      <p class="detail-total">套餐总价值：18280 元</p>
      <!-- 勾选项 -->
      <div class="detail-option flex-center">
        <div class="detail-option-inner flex">
          <span :class="['default', active ? 'default-active' : '']" @click="pick()"></span>
          <p>赠送的A/B套餐可以直接升级到D套餐，升级后只需支付：D 减 A或B</p>
        </div>
      </div>
      <!-- 附加 -->
      <div class="detail-add">加：采血服务费（150元）、冷链运输费（150元）</div>
    </div>
    <!-- 立即购买 -->
    <custom-button btnText="立即购买" path="/agreement"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        '赠送A套餐3份，价值4800元',
        '赠送B套餐1份，价值2900元',
        '赠送精美礼品1套，价值280元',
        '赠送500元的绿之源商城电子代金券',
      ],
      active: false // 勾选项
    }
  },
  methods: {
    // 勾选项check
    pick () {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  .detail-wrap{
    height: 700px!important;
    margin-bottom: 40px!important;
  }
}
  .detail-main{
    background: #fafafa url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    .detail-wrap{
      width: 600px;
      height: 750px;
      border-radius: 30px;
      background-color: #fff;
      margin: 0 auto 100px;
      text-align: center;
      box-shadow: 0 0 10px #e5e5e5;
      // 套餐标题
      h3{
        padding: 15px 0;
        font-size: 36px;
      }
      // 套餐名称
      .detail-name{
        font-size: 26px;
        color: #999;
      }
      // 套餐价格
      .detail-price{
        font-size: 30px;
        color: #00b2bc;
        padding: 25px 0;
      }
      // 套餐介绍
      .detail-intro{
        font-size: 24px;
        color: #999;
        padding-bottom: 25px;
      }
      // 套餐赠送
      .detail-present{
        font-size: 24px;
        color: #999;
        padding-bottom: 15px;
      }
      // 套餐总价值
      .detail-total{
        font-size: 30px;
        color: #00b2bc;
        font-weight: bold;
        padding-bottom: 20px;
      }
      // 套餐勾选项
      .detail-option{
        .detail-option-inner{
          width: 440px;
          align-items: baseline;
          .default {
            display: inline-block;
            width: 17px;
            height: 17px;
            border: 3px solid #F2F2F2;
            border-radius: 5px;
            background-color: #F2F2F2;
            margin-right: 10px;
          }
          .default-active{
            background-color: #00b2bc;
          }
          p{
            width: 410px;
            color: #999;
            font-size: 24px;
            text-align: left;
          }
        }
      }
      // 套餐附加
      .detail-add{
        margin-top: 30px;
        padding: 0 40px;
        box-sizing: border-box;
        font-size: 22px;
        color: #c0c0c0;
      }
    }
  }
</style>