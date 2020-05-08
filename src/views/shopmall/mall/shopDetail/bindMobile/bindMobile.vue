<template>
  <div class="mobile-main">
    <van-popup 
      v-model="$store.state.mobileShow"
      position="left"
      >
      <!-- 绑定手机 -->
      <div class="mobile-wrap flex-center-col">
        <input type="number" maxlength="11" placeholder="请先绑定手机号码" v-model="phone" class="tel-input" pattern="[0-9]*" oninput="if(value.length > 11)value = value.slice(0, 11)">
        <div class="yzm-wrap flex-between">
          <input type="number" v-model="code" placeholder="验证码" pattern="[0-9]*" oninput="if(value.length > 4)value = value.slice(0, 4)">
          <button class="yzm" @click="sendMsg()">获取验证码</button>
        </div>
        <button class="sure" @click="bind()">确定</button>
        <img src="@/assets/images/close.png" alt="" class="close-btn" @click="close()">
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return{
      phone: '', // 手机号码
      code: ''   // 验证码
    }
  },
  methods: {
    // 关闭弹窗，改变store中mobileShow的状态
    close () {
      this.phone = ''
      this.code = ''
      this.$store.commit('updateMobileShow', false)
    },
    // 获取验证码
    sendMsg () {
      if (this.$isblank(this.phone)) {
        this.$toast('请输入正确的手机号码')
        return false
      }
      this.$api.getCode({
        account: this.phone
      }).then(res => {
        this.$toast('验证码发送成功')
      })
    },
    // 绑定手机号
    bind () {
      if (this.$isblank(this.phone)) {
        this.$toast('请输入手机号码')
        return false
      }
      this.$api.shopBindPhone({
        account: this.phone,
        code: this.code
      }).then(res => {
        this.close()
        this.$toast('绑定成功')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .mobile-main{
    .mobile-wrap{
      min-width: 600px;
      height: 600px;
      width: 100%;
      background-color: #fff;
      position: relative;
      .tel-input{
        padding: 20px 30px;
        box-sizing: border-box;
        margin: -100px auto 0px;
        // border-radius: 50px;
        border-bottom: 1px solid #eee;
        width: 450px;
      }
      .yzm-wrap{
        width: 450px;
        border-bottom: 1px solid #eee;
        margin-top: 30px;
        input{
          padding: 20px 30px;
          box-sizing: border-box;
          width: 200px;
        }
        .yzm{
          padding: 5px 10px;
          box-sizing: border-box;
          background-color: #fff;
        }
      }
      .sure{
        background-color: #00b2bc;
        width: 450px;
        height: 80px;
        border-radius: 50px;
        color: #fff;
        position: absolute;
        bottom: 120px;
      }
      .close-btn{
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 30px;
        right: 30px;
      }
    }
  }
</style>

<style>
  .mobile-main .van-popup--left{
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 10px;
  }
</style>