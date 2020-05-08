<template>
  <div class="info-main" v-if="!$isblank(info.id)">
    <van-popup
    v-model="$store.state.infoShow"
    position="bottom"
    >
    <!-- 购买选项 -->
    <div class="info">
      <div class="info-head">
        <img :src="$base + info.atlas[0].url" alt="" class="pro-img">
        <div class="info-inner">
          <div class="flex info-price">
            <p>¥{{$fmtMoney(totalMoney)}}</p>
            <span>¥{{$fmtMoney(info.price_old)}}</span>
          </div>
          <p class="info-name">{{info.title}}</p>
        </div>
        <img src="@/assets/images/close.png" alt="" class="close-img" @click="close()">
      </div>
      <div class="info-about">
        <!-- 规格 -->
        <div class="info-guige flex-between">
          <span>规格</span>
          <p>{{info.subtitle}}</p>
        </div>
        <!-- 数量 -->
        <div class="info-number flex-between">
          <span>数量</span>
          <van-stepper v-model="value" min="1" max="10" integer/>
        </div>
      </div>
      <!-- 赠品 -->
      <div class="info-gift" v-if="info.gift.length !== 0">
        <div class="gift-title">附赠：</div>
        <p class="gift-item" v-for="(item, index) in info.gift" :key="index">{{item.title}}</p>
      </div>
      <!-- 立即购买 -->
      <button class="buyNow" @click="pay()">立即购买</button>
    </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1,
      info: {}
    }
  },
  props: ['buyInfo'],
  computed: {
    // 购买总价
    totalMoney: function () {
      if (this.$isblank(this.value)) {
        return this.info.price
      } else{
        return this.info.price * this.value
      }
    }
  },
  watch: {
    buyInfo: function () {
      this.info = this.buyInfo
    }
    
  },
  mounted () {

  },
  methods: {
    // 关闭弹窗
    close () {
      this.$store.commit('updateInfoShow', false)
    },
    // 立即购买支付
    async pay () {
      let result = await this.$api.createdOrder({ goods_id: this.info.id, number: this.value })
      this.$api.shopDetailWxPay({
        goodsorder_id: result.data
      }).then(res => {
        console.log(res)
        let payData = res.data.data
        if (payData) {
          console.log(payData)
          this.$callPay(payData)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .info-main{
    .info{
      width: 100%;
      min-height: 500px;
      height: 100%;
      padding-bottom: 100px;
      box-sizing: border-box;
      background-color: #fff;
      position: relative;
      .info-head{
        position: relative;
        height: 140px;
        // 商品图
        .pro-img{
          width: 140px;
          height: 140px;
          border-radius: 20px;
          position: absolute;
          left: 20px;
          top: -40px;
        }
        // 价格
        .info-inner{
          position: absolute;
          left: 180px;
          top: 20px;
          .info-price{
            align-items: baseline;
            margin-bottom: 10px;
            p{
              font-size: 30px;
              color: red;
            }
            span{
              font-size: 26px;
              color: #999;
              text-decoration: line-through;
              margin-left: 20px;
            }
          }
          .info-name{
            font-size: 28px;
            color: #333;
          }
        }
        // 关闭
        .close-img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          right: 20px;
        }
      }
      .info-about{
        padding: 0 20px;
        box-sizing: border-box;
        // 规格
        .info-guige{
          padding: 20px 20px 30px;
          box-sizing: border-box;
          border-bottom: 1px solid #f5f5f5;
          span{
            font-size: 26px;
          }
          p{
            font-size: 26px;
            background-color: #eee;
            padding: 5px 10px;
          }
        }
        // 数量
        .info-number{
          padding: 30px 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #f5f5f5;
          span{
            font-size: 26px;
          }
        }
      }
      // 赠品
      .info-gift{
        padding: 20px 40px;
        box-sizing: border-box;
        font-size: 26px;
        .gift-title{
          padding-bottom: 5px;
          box-sizing: border-box;
        }
        .gift-item{
          @extend .gift-title;
          color: #666;
          font-size: 24px;
        }
      }
      // 立即购买
      .buyNow{
        display: block;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
        line-height: 100px;
        text-align: center;
        color: #fff;
        position: absolute;
        bottom: 0;
      }
    }
  }
</style>

<style>
  .info-main .van-popup{
    overflow: inherit!important;
  }
</style>