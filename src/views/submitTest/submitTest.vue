<template>
  <div class="submit-main">
    <custom-header title="问卷测评"></custom-header>
    <!-- 顶部渐变 -->
    <div class="top-module">
      <div class="success flex-center">
        <img src="@/assets/images/success.png" alt="">
      </div>
    </div>
    <!-- 问卷测评提交文字信息 -->
    <p class="submit-title">问卷测评完成</p>
    <p class="submit-second-title">您的问卷测评已提交，请耐心等待结果...</p>
    <custom-button btn-text="查看结果" path="/result"></custom-button>
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
  .submit-main{
    .top-module{
      width: 100%;
      height: 350px;
      background-image: linear-gradient(to right, #0ebcbb, #3ddfb7);
      position: relative;
      margin-bottom: 150px;
      .success{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -100px;
        img{
          width: 170px;
          height: 170px;
          border-radius: 50%;
          animation: trans .6s ease-in-out;
        }
      }
    }
    // 测评提交文字信息
    .submit-title{
      font-size: 32px;
      text-align: center;
      margin-bottom: 30px;
      position: relative;
      animation: leftIn .6s ease-in-out;
    }
    .submit-second-title{
      color: #999;
      font-size: 26px;
      text-align: center;
      margin-bottom: 60px;
      position: relative;
      animation: rightIn .6s ease-in-out;
    }
  }

  @keyframes trans{
    from{background-color: #00b2bc;}
    to{background-color: #fff;}
  }
</style>