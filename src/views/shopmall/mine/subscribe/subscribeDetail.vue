<template>
  <div class="sd-main">
    <custom-header title="预约详情"></custom-header>
    <!-- 套餐主图 名字 价格 状态 -->
    <div class="order-item">
      <!-- 订单内容 -->
      <div class="order-item-info flex-between">
        <div class="info-left">
          <img src="http://img95.699pic.com/desgin_photo/40057/8784_list.jpg!/fh/300" alt="">
        </div>
        <div class="info-right">
          <p class="order-item-name">恩贝尔A套餐</p>
          <p class="order-item-price">套餐价格：<span>¥1600.00</span></p>
          <p class="order-item-status">服务状态：<span>已问卷待支付</span></p>
        </div>
      </div>
    </div>
    <!-- 基本信息 -->
    <div class="basic-wrap">
      <div class="basic-title flex-center-y">
        <span></span>
        <p>基本信息</p>
      </div>
      <div class="basic-info">
        <div class="info-item flex-center-y">
          <span>预约编号：</span>
          <p>20200506112906</p>
        </div>
        <div class="info-item flex-center-y">
          <span>预约姓名：</span>
          <p>欧阳大大</p>
        </div>
        <div class="info-item flex-center-y">
          <span>联系方式：</span>
          <p>18888888888</p>
        </div>
        <div class="info-item flex-center-y">
          <span>预约时间：</span>
          <p>2020-05-06 11:53:07</p>
        </div>
        <div class="info-item flex-center-y">
          <span>冷链运输费：</span>
          <p>¥150.00</p>
        </div>
        <div class="info-item flex-center-y">
          <span>抽血服务费：</span>
          <p>¥150.00</p>
        </div>
        <div class="info-item flex-center-y">
          <span>电子券抵扣：</span>
          <p>¥150.00</p>
        </div>
        <div class="info-item flex-center-y">
          <span>实际支付价：</span>
          <p>¥150.00</p>
        </div>
      </div>
      <!-- 拨打电话 -->
      <a href="tel: 18283350462">
        <div class="callUs flex-center">
          <img src="@/assets/images/callUs.png" alt="" class="call-icon">
          <span>拨打电话联系我们</span>
      </div>
      </a>
    </div>
    <!-- 报告解读 -->
    <div class="report">
      <div class="report-title flex-center-y">
        <span></span>
        <p>报告解读</p>
      </div>
      <div class="report-createdTime">生成时间：2020-05-06 15:50:07</div>
      <button class="scan-report" @click="toReport()">查看报告</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return{
      count: 0
    }
  },
  mounted () {
    
  },
  methods: {
    toReport () {
      // do something to report
      this.$router.push('/report')
    }
  }
}
</script>

<style scoped lang="scss">
  .sd-main{
    min-height: 100vh;
    background-color: #f2f2f2;
    padding-bottom: 10px;
    box-sizing: border-box;
    // 套餐主图 名字 价格 状态
    .order-item{
      background-color: #fff;
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
      margin-bottom: 15px;
      // 订单内容
      .order-item-info{
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
          // 价格
          .order-item-price{
            color: #999;
            font-size: 24px;
            margin-bottom: 30px;
            span{
              color: #04b5bc;
              font-size: 30px;
            }
          }
          // 服务状态
          .order-item-status{
            font-size: 24px;
            color: #999;
            span{
              color: #04b5bc;
            }
          }
        }
      }
    }
    // 基本信息
    .basic-wrap{
      background-color: #fff;
      padding: 20px 0 0;
      box-sizing: border-box;
      margin-bottom: 15px;
      // 基本信息标题
      .basic-title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #333;
        padding: 0 20px;
        box-sizing: border-box;
        span{
          display: inline-block;
          width: 5px;
          height: 28px;
          border-radius: 20px;
          background-image: linear-gradient(to right, #33dfb7, #33dfb1, #04b5bc);
          margin-right: 20px;
        }
      }
      // 基本信息内容
      .basic-info{
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        .info-item{
          height: 60px;
          line-height: 60px;
          padding: 0px 30px;
          box-sizing: border-box;
          span{
            display: inline-block;
            width: 220px;
            font-size: 24px;
            color: #666;
          }
          p{
            font-size: 24px;
          }
        }
      }
      // 拨打电话联系我们
      .callUs{
        width: 100%;
        height: 100px;
        background-color: #fff;
        color: #666;
        .call-icon{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 15px;
        }
      }
    }
    // 报告解读
    .report{
      background-color: #fff;
      padding: 20px 0;
      box-sizing: border-box;
      margin-bottom: 15px;
      position: relative;
      .report-title{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #333;
        padding: 0 20px;
        box-sizing: border-box;
        span{
          display: inline-block;
          width: 5px;
          height: 28px;
          border-radius: 20px;
          background-image: linear-gradient(to right, #33dfb7, #33dfb1, #04b5bc);
          margin-right: 20px;
        }
      }
      .report-createdTime{
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        line-height: 60px;
      }
      .scan-report{
        position: absolute;
        right: 50px;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #33dfb7;
        border-radius: 30px;
        background-color: #fff;
        color: #33dfb7;
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>