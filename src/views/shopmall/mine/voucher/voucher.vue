<template>
  <div class="voucher-main">
    <!-- 头部 -->
    <custom-header title="抵用券"></custom-header>
    <!-- 切换栏 -->
    <ul class="nav flex-center-y">
      <li
      :class="['nav-item flex-center', active == item.type ? 'nav-item-active' : '']"
      v-for="(item, index) in navList" :key="index"
      @click="choose(item.type)"
      >
      {{item.name}}
      </li>
    </ul>
    <!-- 请求数据为空 -->
    <empty-data v-show="list.length == 0"></empty-data>
    <!-- 抵用券列表 -->
    <!-- <van-list
      v-show="list.length !== 0"
      v-model="loading"
      :finished="finished"
      finished-text="已经到底啦"
      :immediate-check="false"
      @load="onLoad"
    > -->
      <div class="shop-wrap">
          <div class="shop-item" v-for="(item, index) in list" :key="index">
            <!-- 接口中暂未返回，因此抵用券的图片数据暂未渲染 -->
            <img src="@/assets/images/health-test.png" alt="" class="shop-item-img">
            <p class="shop-item-name">{{item.goods_title}}</p>
            <div class="shop-item-info flex-between">
              <div class="price-wrap">
                <span class="price"><i>¥ </i>{{$fmtMoney(item.price)}}</span>
                <!-- <span class="pre-price">¥1999.00</span> -->
              </div>
            </div>
          </div>
      </div>
    <!-- </van-list> -->

  </div>
</template>

<script>
export default {
  data () {
    return{
      active: 200,
      navList: [
        {name: '未使用', type: 200},
        {name: '已使用', type: 100},
        {name: '已过期', type: 300},
      ],
      list: [],
      loading: false, // 控制上拉加载
      finished: false // 数据全部加载完毕
    }
  },
  mounted () {
    this.choose(this.active)
  },
  methods:{
    // 切换栏点击事件
    choose (type) {
      this.active = type
      this.init()
    },
    init () {
      this.$api.getVoucher({
        coupon_state: this.active
      }).then(res => {
        this.list = res.data
      })
    }
    // 预留上拉加载
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //     console.log('on Load')
    //     setTimeout(() => {
    //     // this.loading = true
    //     for (let i = 0; i < 3; i++) {
    //       this.list.push('1');
    //     }
    //     // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.list.length >= 9) {
    //       this.finished = true;
    //     }
    //   }, 100);
    // }

  }
}
</script>

<style scoped lang="scss">
  .voucher-main{
    min-height: 100vh;
    background-color: #F2F2F2;
    // 切换栏
    .nav{
      width: 100%;
      background-color: #fff;
      margin-bottom: 15px;
      .nav-item{
        // width: 250px;
        flex: 1;
        padding: 20px 0;
        font-size: 28px;
      }
      .nav-item-active{
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
    // 抵用券对应内容
    .shop-wrap{
      box-sizing: border-box;
      height: 100%;
      background-color: #F2F2F2;
      // 每个item
      .shop-item{
        // height: 650px;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        margin-bottom: 15px;
        background-color: #fff;
        // 图片
        .shop-item-img{
          width: 100%;
          height: auto;
          display: block;
        }
        // 名称
        .shop-item-name{
          padding: 20px 0;
        }
        // 单个商品信息
        .shop-item-info{
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
        }
      }
    }
  }
</style>