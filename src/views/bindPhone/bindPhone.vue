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
        <input type="tel" placeholder="请输入手机号码" maxlength="11">
      </div>
      <!-- 密码 -->
      <div class="input-wrap">
        <input type="password" placeholder="请输入密码（选填）">
      </div>
      <!-- 验证码 -->
      <div class="input-wrap flex-between">
        <input type="text" placeholder="请输入验证码">
        <button class="getCode">获取验证码</button>
      </div>
    </div>
    <!-- 确定 -->
    <custom-button btnText="确定"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

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
      .input-wrap:nth-child(3){
        input{
          width: 400px;
        }
      }
      .input-wrap:last-child{
        margin-bottom: 60px;
      }
    }
    
  }
</style>