<template>
  <div class="bind-main">
    <!-- 顶部背景 -->
    <div class="bind-top">
      <!-- logo图 -->
      <div class="bind-logo flex-center">
        <img src="@/assets/images/wx.png" alt="">
      </div>
    </div>
    <div class="package-wrap">
      <!-- 手机号码 -->
      <div class="input-wrap">
        <input type="tel" placeholder="请输入手机号码" maxlength="11" v-model="phone">
      </div>
      <!-- 验证码 -->
      <div class="input-wrap flex-between">
        <input type="text" placeholder="请输入验证码" v-model="code">
        <button class="getCode" @click="sendMsg()">获取验证码</button>
      </div>
      <!-- 密码登录 -->
      <div class="password-login flex-end">
        <a href="/passwordLogin">使用密码登录</a>
      </div>
    </div>
    <!-- 确定 -->
    <custom-button btnText="确定" @tap="sure()"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '', // 手机号
      code: ''   // 验证码
    }
  },
  methods: {
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
    // 确定
    sure () {
      if (this.$isblank(this.phone)) {
        this.$toast('请输入正确的手机号码')
        return false
      }
      if (this.$isblank(this.code)) {
        this.$toast('请输入正确的手机验证码')
        return false
      }
      this.$api.phoneLogin({
        account: this.phone,
        code: this.code
      }).then(res => {
        console.log(res)
        let token = res.data.token
        localStorage.setItem('token', token)
        this.$router.push('/chooseSubscribe')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .bind-main{
    min-height: 100vh;
    // 顶部背景
    .bind-top{
      width: 100%;
      height: 240px;
      background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
      position: relative;
      margin-bottom: 230px;
      // logo
      .bind-logo{
        width: 220px;
        height: 220px;
        border-radius: 30px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -175px;
        img{
          width: 200px;
          height: 200px;
          border-radius: 30px;
        }
      }
    }
    .package-wrap{
      // 手机号码
      .input-wrap{
        width: 645px;
        padding: 20px 50px;
        box-sizing: border-box;
        margin: 0 auto 35px;
        border-bottom: 1px solid #eee;
        input{
          font-size: 26px;
          width: 100%;
        }
        .getCode{
          background-color: #fff;
          color: #999;
        }
      }
      .input-wrap:nth-child(2){
        margin-bottom: 15px;
        input{
          width: 400px;
        }
      }
      // 密码登录
      .password-login{
        width: 645px;
        margin: 0 auto 60px;
        padding: 0 50px;
        box-sizing: border-box;
        a{
          display: inline-block;
          font-size: 20px;
          color: #999;
        }
      }
    }
    
  }
</style>