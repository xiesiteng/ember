<template>
  <div class="ipad-main">
    <!-- logo -->
    <div class="logo-wrap">
      <img src="@/assets/images/ipad-logo.png" alt="">
    </div>
    <!-- 五个图标 -->
    <div class="icon-wrap">
      <img src="@/assets/images/five-icon.png" alt="">
    </div>
    <!-- 名称 -->
    <h3 class="pro-name flex-center">智慧防癌+DNA甲基化检测</h3>
    <!-- 登录方式 -->
    <div class="login-type flex-between">
      <!-- 手机登录 -->
      <a href="/phoneLogin">
        <div class="type-phone flex-center">
          <img src="@/assets/images/tel-icon.png" alt="">
          <span>手机登录</span>
      </div>
      </a>
      <!-- 手机登录end -->
      <!-- 微信登录 -->
        <a href="/sweepCodeLogin">
          <div class="type-wx flex-center">
            <img src="@/assets/images/wx-icon.png" alt="">
            <span>微信登录</span>
          </div>
        </a>
      <!-- 微信登录end -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backShow: false
    }
  }
}
</script>

<style scoped lang="scss">
  .ipad-main{
    background: #fafafa url('~@/assets/images/ipad-bg.png') no-repeat;
    background-size: 100% 100%;
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    // logo
    .logo-wrap{
      width: 310px;
      height: auto;
      margin: 0 auto;
      padding-top: 120px;
      box-sizing: border-box;
      img{
        width: 100%;
        height: 215px;
      }
    }
    // 五个图标
    .icon-wrap{
      width: 645px;
      height: 275px;
      margin: -20px auto 45px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    // 名称
    .pro-name{
      font-size: 30px;
      color: #fff;
      margin-bottom: 100px;
    }
    // 登录方式
    .login-type{
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      .type-phone{
        width: 340px;
        height: 100px;
        border-radius: 50px;
        background: url('~@/assets/images/tp-tel.png') no-repeat;
        background-size: 100% 100%;
        color: #d9bf2c;
      }
      .type-wx{
        width: 340px;
        height: 100px;
        border-radius: 50px;
        background: url('~@/assets/images/tp-wx.png') no-repeat;
        background-position: cover;
        background-size: 100% 100%;
        color: #50b674;
      }
      .type-phone,.type-wx{
        font-size: 30px;
        img{
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-right: 20px;
        }
      }
    }
  }
</style>