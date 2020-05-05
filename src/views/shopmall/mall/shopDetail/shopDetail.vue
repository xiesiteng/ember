<template>
  <div class="detail-main">
    <!-- swiper -->
    <div class="swiper-wrap">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item v-for="(item, index) in info.atlas" :key="index">
          <img :src="$base + item.url" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 信息 -->
    <div class="shop-item">
      <p class="shop-item-name">{{info.title}}</p>
      <div class="shop-item-info flex-between">
        <div class="price-wrap">
          <span class="price"><i>¥ </i>{{$fmtMoney(info.price)}}</span>
          <span class="pre-price">¥{{$fmtMoney(info.price_old)}}</span>
        </div>
        <p class="already-sale">库存 {{info.goods_num}} 件</p>
      </div>
    </div>
    <!-- 详情标题 -->
    <div class="detail-title flex-center">商品详情</div>
    <!-- 详情富文本 -->
    <div class="detail-wrap" v-html="content"></div>
    <!-- 底部 -->
    <div class="detail-bottom">
      <button class="detail-buy" @click="toBuy()">立即购买</button>
    </div>
    <!-- 绑定手机组件 -->
    <bind-mobile></bind-mobile>
    <!-- 购买弹窗组件 -->
    <buy-info :buyInfo="buyInfo"></buy-info>
  </div>
</template>

<script>
import bindMobile from './bindMobile/bindMobile'
import buyInfo from './buyInfo/buyInfo'
export default {
  data () {
    return {
      mobileShow: false, // 绑定手机组件
      buyShow: false,
      info: {},
      buyInfo: {}, // 购买弹框信息
      content: ''  // 详情富文本内容
    }
  },
  components: {
    bindMobile,
    buyInfo
  },
  created () {
    this.$nextTick(() => {
      this.goodsId = this.$route.query.goodsId
      this.init()
    })
  },
  mounted () {
    /* 
     *   1. 点击购买时，先判断是否登录，未登录跳转到登录，登录成功后回到当前页
     *   2. 已登录状态下，点击购买先判断是否绑定手机号，未绑定则弹出绑定手机组件
     *   3. 手机已绑定，点击购买弹出购买窗口进行数量选择和支付
     */
  },
  methods: {
    // 获取商品详情信息
    init () {
      this.$api.getGoodsDetail({
        goodsId: this.goodsId
      }).then(res => {
        this.info = res.data
        this.content = res.data.content.replace(/\<img/gi,'<img style="max-width:100%;height:auto;vertical-align:bottom;"')
      })
    },
    toBuy () {
      // this.$store.state.mobileShow = true
      this.buyInfo = this.info
      this.$store.state.infoShow = true
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-main{
    min-height: 100vh;
    background-color: #f7f7f7;
    padding-bottom: 100px;
    box-sizing: border-box;
    // 轮播
    .swiper-wrap{
      width: 100%;
      height: 500px;
      .my-swipe{
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 信息
    .shop-item{
        // height: 650px;
        width: 100%;
        padding: 10px 15px 30px;
        box-sizing: border-box;
        margin-bottom: 15px;
        background-color: #fff;
        // 图片
        .shop-item-img{
          width: 100%;
          height: 500px;
          display: block;
        }
        // 名称
        .shop-item-name{
          padding: 20px 0;
        }
        // 单个商品信息
        .shop-item-info{
          align-items: baseline;
          // 价格
          .price-wrap{
            .price{
              font-size: 36px;
              font-weight: bold;
              color: #00b2bc;
              i{
                font-size: 28px;
                font-style: normal;
                font-weight: bold;
              }
            }
            .pre-price{
              font-size: 28px;
              color: #999;
              text-decoration: line-through;
              margin-left: 20px;
            }
          }
          // 已售
          .already-sale{
            font-size: 28px;
            color: #999;
          }
        }
      }
      // 详情标题
      .detail-title{
        padding: 20px 0;
        font-size: 24px;
        color: #666;
        position: relative;
        &::before{
          content: '';
          width: 100px;
          height: 1px;
          background-color: #999;
          margin-right: 30px;
        }
        &::after{
          content: '';
          width: 100px;
          height: 1px;
          background-color: #999;
          margin-left: 30px;
        }
      }
      // 详情
      .detail-wrap{
        background-color: #fff;
        padding: 30px;
        box-sizing: border-box;
        max-width: 100vw;
        width: 100%;
        img{
          max-width: 100vw;
          width: 100%;
          height: auto;
        }
      }
      // 底部
      .detail-bottom{
        width: 100%;
        height: 100px;
        background-color: lightskyblue;
        position: fixed;
        bottom: 0;
        .detail-buy{
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
          color: #fff;
        }
      }
  }

</style>

<style >
  .is-active{
    background: #00b2bc!important;
    opacity: 1;
  }
</style>