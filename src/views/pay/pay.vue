<template>
  <div class="pay-main">
    <custom-header title="付款"></custom-header>
    <!-- 支付金额 -->
    <div class="pay-total flex-between">
      <span>支付金额</span>
      <span>¥{{$fmtMoney(totalMoney)}}</span>
    </div>
    <div class="pay-voucher flex-between" @click="toastVoucher()">
      <span>电子抵用券</span>
      <div class="more flex-center">
        <span>{{voucherMsg}}</span>
        <img src="@/assets/images/rightArrow.png" alt="" class="more-arrow" v-show="voucherList.length !== 0">
      </div>
    </div>
    <!-- 支付方式 -->
    <div class="pay-type-title">支付方式</div>
    <!-- ipad用户展示 -->
    <ipad-user v-if="$store.state.isPad"></ipad-user>
    <!-- 手机用户展示 -->
    <phone-user :coupon_id="coupon_id" v-else></phone-user>
    <!-- 抵用券弹出层，本应封装组件调用，但介于这个页面代码并不多，组件调用参数传来传去处理复杂，所以弹出层直接写在本页面 -->
    <van-popup v-model="voucherShow" position="bottom" @click="closeVoucher()">
        <div class="voucher-wrap" @click.stop="">
          <img src="@/assets/images/close.png" alt="" class="close-img" @click="closeVoucher()">
          <div class="voucher-inner">
            <div 
              :class="['voucher-item', item.checked ? 'voucher-item-active' : '']"
              v-for="(item, index) in voucherList" :key="index"
              @click="pickVoucher(item)"
            >
              <p class="voucher-name">{{item.goods_title}}</p>
              <div class="voucher-price flex">
                <span>¥</span>
                <p>{{$fmtMoney(item.price)}}</p>
            </div>
            </div>
            <!-- 不使用电子券 -->
            <div :class="['voucher-item-nouse flex-center', flag ? 'voucher-item-active' : '']" @click="rejectVoucher()">不使用电子券</div>
          </div>
          <!-- 确定 -->
          <button class="voucher-item-sure flex-center" @click="sureVoucher()">确定</button>
        </div>
    </van-popup>
  </div>
</template>

<script>
import phoneUser from './components/phoneUser'
import ipadUser from './components/ipadUser'
export default {
  data () {
    return {
      moneyFromInterface: 390000, // 通过接口获取的当前套餐的价格
      voucherMsg: '暂无可用', // 是否有电子券的文案显示
      voucherShow: false,    // 电子券弹出层
      voucherList: [],       // 电子券列表
      flag: false, // 不使用电子券
      temp_id: -1,  // 临时存储电子券id
      temp_info: {},
      coupon_id: 0, // 选中的电子券id
      coupon_info: {
        price: 0
      }  // 选中的电子券对象
    }
  },
  components: {
    phoneUser,
    ipadUser
  },
  computed: {
    // 当前套餐的价格 减去 电子券抵用的价格
    totalMoney () {
      return this.moneyFromInterface - this.coupon_info.price
    }
  },
  created () {
    this.$judgeUserAgent()
    this.initVoucher()
  },
  methods: {
    // 弹出电子券弹出层
    toastVoucher () {
      if(this.voucherList.length !== 0) {
        this.voucherShow = true
      }
    },
    // 关闭电子券弹出层
    closeVoucher () {
      this.voucherShow = false
    },
    // 点击了电子券
    pickVoucher (item) {
      // 先关闭不使用电子券的标识flag
      this.flag = false
      // 再取消所有电子券的选中状态
      this.voucherList.forEach((item, index) => {
        item.checked = false
      })
      // 改变当前点击的电子券为选中状态
      item.checked = !item.checked
      // 临时存储选中的电子券id和相关信息, 在点击确定时才赋值给最终字段, 防止出现此情况：显示A套餐(如id=1),点击B套餐(id=2),点击B之后未点确定关闭了弹窗,此时显示A套餐,coupon_id却为B套餐的id
      if (item.checked) {
        this.temp_id = item.id
        this.temp_info = item
      }
    },
    // 不使用电子券
    rejectVoucher () {
      // 先关闭所有电子券的选中状态
      this.voucherList.forEach((item, index) => {
        item.checked = false
      })
      // 再设置不使用电子券的选中状态并临时存储相关信息
      this.flag = true
      this.temp_id = 0
      this.temp_info = { price: 0 }
    },
    // 确定电子券
    sureVoucher () {
      // 将临时存储的信息赋值给最终字段，并改变显示的文案
      this.coupon_info = this.temp_info
      this.coupon_id = this.temp_id
      console.log(this.coupon_id)
      this.voucherShow = false
      if (this.flag) {
        this.voucherMsg = '不使用电子券'
      } else{
        this.voucherMsg = `${this.coupon_info.goods_title}电子抵用券`
      }
    },
    // 获取可以使用的电子券
    initVoucher () {
      // coupon_state: 100,已使用； 200,未使用； 300,已过期； 支付时默认获取未使用的电子券
      this.$api.getVoucher({
        coupon_state: 200
      }).then(res => {
        this.voucherList = res.data
        this.voucherMsg = this.voucherList.length == 0 ? '暂无可用' : `电子抵用券${this.voucherList.length}张可用`
        // 为每个电子券对象添加是否选中的字段
        this.voucherList.forEach((item, index) => {
            this.$set(item, 'checked', false)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .pay-main{
    // 支付金额
    .pay-total{
      padding: 15px 80px;
      box-sizing: border-box;
      font-size: 26px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin: 40px auto;
    }
    // 支付电子抵用券
    .pay-voucher{
      padding: 15px 80px;
      box-sizing: border-box;
      font-size: 26px;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin: 40px auto;
      .more{
        // align-items: baseline;
        font-size: 24px;
        color: #999;
      }
    }
    // 支付方式
    .pay-type-title{
      padding: 15px 80px;
      box-sizing: border-box;
      font-size: 26px;
      color: #666;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      margin-bottom: 25px;
    }
    // 抵用券弹出层
    .voucher-wrap{
      height: 70vh;
      width: 100%;
      min-width: 100vw;
      background-color: #fff;
      padding: 100px 0;
      box-sizing: border-box;
      position: relative;
      // 关闭
      .close-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        top: 30px;
        right: 30px;
      }
      // 确定按钮
      .voucher-item-sure{
        height: 100px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #05B6BC;
        color: #fff;
      }
      .voucher-inner{
        padding: 0 30px 100px;
        box-sizing: border-box;
        // 不使用电子券
        .voucher-item-nouse{
          @extend .voucher-item;
          color: #666;
        }
        // 电子券选中
        .voucher-item-active{
          background-color: #05B6BC!important;
          color: #fff;
          .voucher-name,.voucher-price{
            color: #fff!important;
          }
        }
        .voucher-item{
          width: 100%;
          height: 150px;
          padding: 0 30px;
          box-sizing: border-box;
          background-color: #f2f2f2;
          border-radius: 10px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .voucher-name{
            color: #333;
            height: 40px;
            line-height: 40px;
            overflow: hidden;
            margin-bottom: 10px;
          }
          .voucher-price{
            align-items: baseline;
            color: #05B6BC;
            font-weight: bold;
            span{
              font-size: 22px;
            }
          }
        }
      }
    }
  }
</style>

<style>
  .pay-main .van-popup--bottom{
    border-radius: 15px 15px 0 0;
  }
</style>