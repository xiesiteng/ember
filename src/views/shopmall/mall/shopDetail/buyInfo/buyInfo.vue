<template>
  <div class="info-main">
    <van-popup 
    v-model="$store.state.infoShow"
    position="bottom"
    >
    <!-- 购买选项 -->
    <div class="info">
      <div class="info-head">
        <img src="http://img95.699pic.com/desgin_photo/40057/8784_list.jpg!/fh/300" alt="" class="pro-img">
        <div class="info-inner">
          <div class="flex info-price">
            <p>¥1690.00</p>
            <span>¥1900.00</span>
          </div>
          <p class="info-name">恩贝尔健康检测套餐抵用券</p>
        </div>
        <img src="@/assets/images/close.png" alt="" class="close-img" @click="close()">
      </div>
      <!-- 规格 -->
      <div class="info-guige flex-between">
        <span>规格</span>
        <p>恩贝尔健康检测套餐抵用券</p>
      </div>
      <!-- 数量 -->
      <div class="info-number flex-between">
        <span>数量</span>
        <van-stepper v-model="value" />
      </div>
      <!-- 立即购买 -->
      <button class="buyNow">立即购买</button>
    </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  methods: {
    close () {
      this.$store.commit('updateInfoShow', false)
    }
  }
}
</script>

<style scoped lang="scss">
  .info-main{
    .info{
      width: 100%;
      height: 480px;
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
          width: 30px;
          height: 30px;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          right: 20px;
        }
      }
      // 规格
      .info-guige{
        padding: 20px 20px 30px;
        box-sizing: border-box;
        position: relative;
        &::after{
          content: '';
          width: 95%;
          box-sizing: border-box;
          height: 1px;
          background-color: #f7f7f7;
          position: absolute;
          bottom: 0;
        }
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
        span{
          font-size: 26px;
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