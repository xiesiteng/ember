<template>
  <div class="detail-main">
    <!-- swiper -->
    <div class="swiper-wrap">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item, index) in 3" :key="index">
          <img src="@/assets/images/ipad-bg.png" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 信息 -->
    <div class="shop-item">
      <p class="shop-item-name">恩贝尔健康检测套餐抵用券A</p>
      <div class="shop-item-info flex-between">
        <div class="price-wrap">
          <span class="price"><i>¥ </i>1690.00</span>
          <span class="pre-price">¥1999.00</span>
        </div>
        <p class="already-sale">已售25件</p>
      </div>
    </div>
    <!-- 详情标题 -->
    <div class="detail-title flex-center">商品详情</div>
    <!-- 详情 -->
    <div class="detail-wrap">
      <img :src="item" alt="" v-for="(item, index) in proList" :key="index">
    </div>
    <!-- 底部 -->
    <div class="detail-bottom">
      <button class="detail-buy" @click="popupVisible = true">立即购买</button>
    </div>
    <!-- 绑定手机组件 -->

    <!-- 购买弹窗组件 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      proList: [
        require('@/assets/images/ipad-bg.png'),
        require('@/assets/images/wx.png'),
        require('@/assets/images/zfb.png'),
        require('@/assets/images/health-test.png'),
        require('@/assets/images/ipad-bg.png')
      ]
    }
  },
  mounted () {
    /* 
     *   1. 点击购买时，先判断是否登录，未登录跳转到登录，登录成功后回到当前页
     *   2. 已登录状态下，点击购买先判断是否绑定手机号，未绑定则弹出绑定手机组件
     *   3. 手机已绑定，点击购买弹出购买窗口进行数量选择和支付
     */
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .detail-main{
    min-height: 100vh;
    background-color: #f7f7f7;
    .swiper-wrap{
      width: 100%;
      height: 500px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    // 信息
    .shop-item{
        // height: 650px;
        width: 100%;
        padding: 10px 15px;
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
        img{
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