<template>
  <div class="order-main">
    <custom-header title="订单状态"></custom-header>
    <!-- 导航栏 -->
    <ul class="order-nav flex-center-y">
      <li
        v-for="(item, index) in orderNav" :key="index"
        :class="['order-nav-item', active == index ? 'order-nav-item-active' : '']"
        @click="choose(index)"
      >
        {{item}}
      </li>
    </ul>
    <!-- 数据为空 -->
    <empty-data v-if="list.length == 0" text="您还没有相关的订单"></empty-data>
    <!-- 订单 -->
    <div class="order-wrap" v-else>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="已经到底啦"
        :immediate-check="false"
        @load="onLoad"
      >
        <div class="order-item" v-for="(item, index) in list" :key="index">
          <!-- 订单编号 -->
          <div class="order-item-number flex-between">
            <p>订单编号：{{item.orderNumber}}</p>
            <span :class="[item.orderStatus == 0 ? 'wait-pay' : 'already-pay']">{{item.orderStatus == 0 ? '待支付' : '已支付'}}</span>
          </div>
          <!-- 订单内容 -->
          <div class="order-item-info flex-between">
            <div class="info-left">
              <img src="http://img95.699pic.com/desgin_photo/40057/8784_list.jpg!/fh/300" alt="">
            </div>
            <div class="info-right">
              <p class="order-item-name">{{item.orderName}}</p>
              <p class="order-item-price">{{item.orderStatus == 0 ? '待支付' : '已支付'}}金额：<span>¥{{item.orderPrice}}</span></p>
              <div class="button-group flex-end" v-show="item.orderStatus == 0">
                <button class="cancel-order" @click="cancelOrder()">取消订单</button>
                <button class="go-pay">去支付</button>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      orderNav: ['全部', '待支付', '已支付'],
      active: 0, // 菜单激活状态
      loading: false,
      finished: false,
      list: [
        {orderNumber: 'EC202004281015', orderStatus: 0, orderName: '恩贝尔健康检测套餐抵用券A', orderPrice: '1688'},
        {orderNumber: 'EC202004281015', orderStatus: 1, orderName: '恩贝尔健康检测套餐抵用券B', orderPrice: '1688'},
        {orderNumber: 'EC202004281015', orderStatus: 0, orderName: '恩贝尔健康检测套餐抵用券C', orderPrice: '1688'},
        {orderNumber: 'EC202004281015', orderStatus: 1, orderName: '恩贝尔健康检测套餐抵用券D', orderPrice: '1688'},
        {orderNumber: 'EC202004281015', orderStatus: 0, orderName: '恩贝尔健康检测套餐抵用券E', orderPrice: '1688'},
      ]
    }
  },
  mounted () {},
  methods: {
    // 菜单栏切换
    choose (index) {
      this.active = index
    },
    // 上拉加载
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        console.log('on Load')
        setTimeout(() => {
        // this.loading = true
        for (let i = 0; i < 3; i++) {
          this.list.push({orderNumber: 'EC202004281015', orderStatus: 0, orderName: '恩贝尔健康检测套餐抵用券A', orderPrice: '1688'});
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 100);
    },
    // 取消订单
    cancelOrder () {
      this.$dialog.confirm({
        message: '确定要取消订单吗'
      })
      .then(() => {
        // on confirm
        console.log('sure')
      })
      .catch(() => {
        // on cancel
        console.log('cancel')
      });
    }
  }
}
</script>

<style scoped lang="scss">
  .order-main{
    min-height: 100vh;
    background-color: #F2F2F2;
    // 导航菜单
    .order-nav{
      width: 100%;
      background-color: #fff;
      .order-nav-item{
        width: 250px;
        padding: 20px 0;
        box-sizing: border-box;
        text-align: center;
        font-size: 28px;
      }
      .order-nav-item-active{
        color: #04b5bc;
        position: relative;
        &::after{
          content: '';
          width: 60px;
          height: 8px;
          border-radius: 10px;
          background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
      }
    }
    // 订单
    .order-wrap{
      width: 100%;
      margin: 15px auto 0;
      box-sizing: border-box;
      .order-item{
        background-color: #fff;
        // 订单编号
        .order-item-number{
          width: 100%;
          padding: 15px 30px;
          box-sizing: border-box;
          border-top: 1px solid #f3f3f3;
          border-bottom: 1px solid #f3f3f3;
          background-color: #FDFDFD;
          font-size: 28px;
          .wait-pay{
            color: #04b5bc;
          }
          .already-pay{
            color: #999;
          }
        }
        // 订单内容
        .order-item-info{
          width: 100%;
          padding: 30px;
          box-sizing: border-box;
          // 左边图片
          .info-left{
            width: 200px;
            height: 200px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
          // 右边文字区域
          .info-right{
            width: 460px;
            height: 200px;
            padding: 10px 0;
            box-sizing: border-box;
            .order-item-name{
              font-size: 30px;
              height: 40px;
              overflow: hidden;
              margin-bottom: 20px;
            }
            .order-item-price{
              color: #999;
              font-size: 24px;
              margin-bottom: 30px;
              span{
                color: #04b5bc;
                font-size: 30px;
              }
            }
            // 按钮组
            .button-group{
              .cancel-order{
                width: 150px;
                height: 56px;
                line-height: 58px;
                color: #666;
                border: 1px solid #BBB;
                border-radius: 28px;
                font-size: 26px;
                margin-right: 30px;
                background-color: #fff;
              }
              .go-pay{
                width: 150px;
                height: 56px;
                line-height: 58px;
                font-size: 26px;
                color: #15B0AE;
                border: 1px solid #15B0AE;
                border-radius: 28px;
                background-color: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>