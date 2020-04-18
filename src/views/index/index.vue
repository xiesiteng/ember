<template>
  <div class="index-main">
    <div class="inner-wrap">
      <!-- 封面图 -->
      <div class="face-img flex-center">
        <img src="@/assets/images/health-test.png" alt="">
      </div>
      <!-- 健康测试 -->
      <h3 class="test-title">健康测试</h3>
      <!-- 20题 / 10分钟 -->
      <h3 class="test-info">20题 / 10分钟</h3>
      <!-- 完成测试人数 -->
      <div class="test-cense">
        已有<span>1325</span>人完成测试
      </div>
      <!-- 开始测试 -->
      <custom-button btnText="开始测评" path="/testPaper"></custom-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
  .index-main{
    background: url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    .inner-wrap{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-top: 168px;
      // 封面图
      .face-img{
        width: 100%;
        height: 330px;
        margin-bottom: 65px;
        img{
          width: 430px;
          height: 100%;
          border-radius: 30px;
          box-shadow: 10px 10px 20px #cecece;
        }
      }
      // 健康测试
      .test-title{
        width: 100%;
        text-align: center;
        margin-bottom: 40px;
        font-size: 36px;
      }
      // 20题 10分钟
      .test-info{
        font-size: 32px;
        text-align: center;
        margin-bottom: 25px;
      }
      // 完成测试统计
      .test-cense{
        color: #999;
        font-size: 30px;
        text-align: center;
        margin-bottom: 50px;
        span{
          color: #00b2bc;
        }
      }
    }
  }
</style>