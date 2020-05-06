<template>
  <div class="detail-main">
    <custom-header title="套餐详情"></custom-header>
    <!-- 套餐内容 -->
    <div class="detail-wrap">
      <h3>{{info.title}}</h3>
      <p class="detail-name">{{info.subtitle}}</p>
      <p class="detail-price">{{$fmtMoney(info.price)}} 元 / 人次</p>
      <p class="detail-intro" v-if="info.gift.length !== 0">购买客户尊享赠品：</p>
      <p class="detail-present" v-for="(item, index) in info.gift" :key="index">{{item.title}}</p>
      <p class="detail-total">套餐总价值：18280 元</p>
      <!-- 此处原为套餐升级，经商议后暂时废弃，2020-05-05 -->
      <!-- <div class="detail-option flex-center">
        <div class="detail-option-inner flex">
          <span :class="['default', active ? 'default-active' : '']" @click="pick()"></span>
          <p>赠送的A/B套餐可以直接升级到D套餐，升级后只需支付：D 减 A或B</p>
        </div>
      </div> -->
      <!-- 附加 -->
      <div class="detail-add ">{{info.intro}}</div>
    </div>
    <!-- 立即购买 -->
    <custom-button btnText="下一步" class="buySpace" @tap="next()"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false, // 勾选项
      id: '',        // 套餐对应的id
      info: {},
      voucherMsg: '暂无可用'
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.init()
  },
  methods: {
    // 勾选项check，此处原为套餐升级的方法，经商议后暂时废弃，2020-05-05
    // pick () {
    //   this.active = !this.active
    // },
    // 获取套餐详情
    init () {
      this.$api.getGoodsDetail({
        goodsId: this.id
      }).then(res => {
        this.info = res.data
        console.log(this.info.gift.length)
      })
    },
    // 点击下一步升级套餐
    next () {
      this.$api.updateMeal({
        order_id: this.$store.state.chooseSubscribeId,
        selected_goods_id: this.info.id
      }).then(res => {
        this.$router.push('/agreement')
      })
    }
  }
}
</script>

<style scoped lang="scss">
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  .detail-wrap{
    // height: 700px!important;
    margin-bottom: 40px!important;
  }
}
  .detail-main{
    background: #fafafa url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    .detail-wrap{
      width: 600px;
      min-height: 750px;
      box-sizing: border-box;
      height: 100%;
      border-radius: 30px;
      background-color: #fff;
      margin: 50px auto 80px;
      text-align: center;
      box-shadow: 0 0 10px #e5e5e5;
      position: relative;
      // 套餐标题
      h3{
        padding: 30px 0;
        font-size: 32px;
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
        padding: 20px 0 30px;
      }
      // 套餐勾选项
      // .detail-option{
      //   .detail-option-inner{
      //     width: 440px;
      //     align-items: baseline;
      //     .default {
      //       display: inline-block;
      //       width: 17px;
      //       height: 17px;
      //       border: 3px solid #F2F2F2;
      //       border-radius: 5px;
      //       background-color: #F2F2F2;
      //       margin-right: 10px;
      //     }
      //     .default-active{
      //       background-color: #00b2bc;
      //     }
      //     p{
      //       width: 410px;
      //       color: #999;
      //       font-size: 24px;
      //       text-align: left;
      //     }
      //   }
      // }
      // 套餐附加
      .detail-add{
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
        line-height: 1.5;
        font-size: 22px;
        color: #c0c0c0;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    // 立即购买
    .buySpace{
      margin: 50px auto;
    }
  }
</style>