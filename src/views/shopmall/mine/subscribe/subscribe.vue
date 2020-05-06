<template>
  <div class="subscribe-main">
    <custom-header title="我的预约"></custom-header>
    <!-- 无预约纪录 -->
    <empty-data text="您还没有相关预约纪录" v-if="list.length == 0"></empty-data>
    <!-- 预约 -->
    <div class="subscribe-wrap" v-else>
      <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="已经到底啦"
        :immediate-check="false"
        @load="onLoad"
      > -->
        <div class="subscribe-item" v-for="(item, index) in list" :key="index">
          <!-- 预约编号 -->
          <div class="subscribe-item-number flex-between">
            <p>预约编号：{{item.open_ordernumber}}</p>
            <span class="subscribe-status">{{$statusByType(item.type)}}</span>
          </div>
          <!-- 预约信息 -->
          <div class="subscribe-info">
            <h3 class="subscribe-name flex"><span class="left-title">预约套餐：</span><p>{{item.goods_title}}</p></h3>
            <p class="flex-center-y"><span class="left-title">套餐价格：</span><span class="subscribe-price">¥ {{$fmtMoney(item.goods_price)}}</span></p>
            <p class="flex-center-y"><span class="left-title">预约姓名：</span>{{item.user_name}}</p>
            <p class="flex-center-y"><span class="left-title">联系方式：</span>{{item.appoint_tel}}</p>
            <p class="flex-center-y"><span class="left-title">预约时间：</span>{{$timeFmt(item.appoint_time, 3)}}</p>
          </div>
        </div>
      <!-- </van-list> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      list: [],
      loading: false,
      finished: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 获取我的预约列表
    init () {
      this.$api.getSubscribe().then(res => {
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
    //       this.list.push({orderNumber: 'EC202004281015', orderStatus: 0, orderName: '恩贝尔健康检测套餐抵用券A', orderPrice: '1688'});
    //     }
    //     // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.list.length >= 10) {
    //       this.finished = true;
    //     }
    //   }, 100);
    // },

  }
}
</script>

<style scoped lang="scss">
  .subscribe-main{
    min-height: 100vh;
    background-color: #F2F2F2;
    .subscribe-wrap{
      // margin-top: 15px;
      // 每条预约
      .subscribe-item{
        width: 100%;
        background-color: #fff;
        // 预约编号
        .subscribe-item-number{
          width: 100%;
          padding: 15px 30px;
          box-sizing: border-box;
          border-top: 1px solid #f3f3f3;
          border-bottom: 1px solid #f3f3f3;
          background-color: #F5F5F5;
          font-size: 28px;
          .subscribe-status{
            color: #04b5bc;
          }
        }
        // 预约信息
        .subscribe-info{
          width: 100%;
          padding: 30px;
          box-sizing: border-box;
          font-size: 28px;
          p{
            margin-bottom: 15px;
          }
          .left-title{
            width: 23%;
            color: #666;
            display: flex;
            justify-content: flex-end;
          }
          .subscribe-name{
            font-size: 30px;
            margin-bottom: 20px;
            height: 42px;
            p{
              width: 78%;
              height: 42px;
              overflow: hidden;
              margin-bottom: 0;
            }
            span{
              color: #333;
            }
          }
          .subscribe-price{
            color: #04b5bc;
          }
        }
      }
    }
  }
</style>