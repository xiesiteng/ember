<template>
  <div class="sweep-code">
    <custom-header title="微信登录" :backShow="backShow"></custom-header>
    <div class="code-wrap">
      <div class="code">
        <img src="http://img3.imgtn.bdimg.com/it/u=2743786503,3895901848&fm=26&gp=0.jpg" alt="">
        <p>扫一扫上方二维码，登录微信</p>
      </div>
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
  .sweep-code{
    background: #fbfbfb url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    .code-wrap{
      padding-top: 80px;
      .code{
        width: 670px;
        height: 680px;
        border-radius: 15px;
        background-color: #fff;
        margin: 0 auto;
        position: relative;
        img{
          width: 395px;
          height: 395px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
        p{
          color: #666;
          font-size: 24px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 35px;
        }
      }
    }
  }
</style>