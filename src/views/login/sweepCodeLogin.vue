<template>
  <div class="sweep-code">
    <custom-header title="微信登录" :backShow="backShow"></custom-header>
    <div class="code-wrap flex-center">
      <van-loading size="24px" vertical type="spinner">登录中...</van-loading>
      <!-- <div class="code"> -->
        <!-- <div id="login_container"></div> -->
        <!-- <img src="http://img3.imgtn.bdimg.com/it/u=2743786503,3895901848&fm=26&gp=0.jpg" alt=""> -->
        <!-- <p>扫一扫上方二维码，登录微信</p> -->
        <!-- <div id="login_container" class="flex-center ipad-code"></div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backShow: false
    }
  },
  created () {
    this.$ipadLogin()
  },
  mounted () {
    /* 
     *    ----------------------------------  因后期迭代可能产生的不确定因素，此页面中注释的代码都没有清理  ----------------------------------
     */
    // this.$ipadLogin()
    // this.initCode()
  },
  methods: {
    // 二维码嵌入页面中
    // initCode () {
    //   var obj = new WxLogin({
    //     self_redirect:true,
    //     id:"login_container", 
    //     appid: "wx589d4ad5efa584dd",
    //     scope: "snsapi_login", 
    //     redirect_uri: encodeURIComponent("http://customer.scember.com/sweepCodeLogin"),
    //     state: Math.ceil(Math.random()*1000), 
    //     style: "black",
    //     href: ""
    //   });
    // }
  }
}
</script>


<style scoped lang="scss">
  .sweep-code{
    background: #fbfbfb url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    overflow: auto;
    position: relative;
    .code-wrap{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      // .ipad-code{
      //   width: 670px;
      //   margin: 50px auto;
      //   border-radius: 15px;
      //   background-color: #fff;
      //   box-shadow: 0 0 10px #ccc;
      //   padding: 30px 0 0;
      //   box-sizing: border-box;
      //   // margin-top: -600px;
      // }
      // .code{
      //   width: 670px;
      //   height: 680px;
      //   border-radius: 15px;
      //   background-color: #fff;
      //   margin: 0 auto;
      //   position: relative;
      //   img{
      //     width: 395px;
      //     height: 395px;
      //     position: absolute;
      //     top: 50%;
      //     left: 50%;
      //     transform: translate(-50%,-50%);
      //   }
      //   p{
      //     color: #666;
      //     font-size: 24px;
      //     position: absolute;
      //     left: 50%;
      //     transform: translateX(-50%);
      //     bottom: 35px;
      //   }
      // }
    }
  }
</style>