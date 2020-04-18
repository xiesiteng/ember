<template>
  <div class="result-main">
     <div class="result-wrap">
        <div class="result-inner">
          <!-- 进度条图形 -->
          <div class="circle-progress">
            <circle-progress
              :percent="percent"
              :stroke-width="6"
              :trail-width="6"
              stroke-color="#00b2bc"
              trail-color="#ededed"/>
          </div>
          <!-- 得分百分比 -->
          <div class="result-score-outside"></div>
          <div class="result-score flex-center">
            <div class="percent-num">
              <number-grow :percent="percent" ref="numFade"></number-grow>
              <span>%</span>
            </div>
          </div>
          <!--风险指数-->
          <p class="rask-mark">结直肠风险指数 <span>有点偏高</span></p>
          <p class="result-recom">为您推荐极佳检测方案</p>
          <!-- 查看按钮 -->
          <custom-button btnText="查看检测方案" class="result-scan" path="/scheme"></custom-button>
        </div>
      </div>

  </div>
</template>

<script>
import circleProgress from '@/components/circleProgress/circleProgress'
import numberGrow from '@/components/numberGrow/numberGrow'
export default {
  data () {
    return {
      percent: 0,
      val: 0
    }
  },
 components:{
   circleProgress,
   numberGrow
 },
 mounted () {
   setTimeout(()=>{
     this.percent = 60
     this.$refs.numFade.grow()
   }, 100)
 },
 methods: {
   
 }
}
</script>

<style scoped lang="scss">
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
    .rask-mark{top: 500px!important;}
    .result-scan{top: 620px!important;}
    .result-recom{top: 550px!important;}
  }
  .result-main{
    background: url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 220px;
    min-height: 100vh;
    position: relative;
  }
  .result-wrap{
    position: absolute;
    top: 200px;
    width: 100%;
    height: calc(100vh - 200px);
    .result-inner{
      width: 100%;
      height: 100%;
      position: relative;
      // 环形进度图
      .circle-progress{
        width: 400px;
        height: 400px;
        transform: rotate(-135deg) translateX(50%);
        -ms-transform: rotate(-135deg) translateX(50%); /* Internet Explorer */
        -moz-transform: rotate(-135deg) translateX(50%); /* Firefox */
        -webkit-transform: rotate(-135deg) translateX(50%); /* Safari 和 Chrome */
        -o-transform: rotate(-135deg) translateX(50%); /* Opera */
        position: absolute;
        left: 43%;
        top: 280px;
      }
      // 得分百分比
      .result-score-outside{
        width: 370px;
        height: 370px;
        border-radius: 50%;
        background-color: #f6f6f6;
        position: absolute;
        left: 50%;
        transform: translateX(-48.5%);
        top: 105px;
      }
      .result-score{
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: #e5e5e5;
        box-shadow: 0 0 15px #cfcfcf;
        position: absolute;
        left: 50%;
        transform: translateX(-48.5%);
        top: 140px;
        font-size: 60px;
        color: #013e41;
        font-weight: bold;
        .percent-num{
          display: flex;
          align-items: baseline;
        }
      }
      // 风险指数
      .rask-mark{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 520px;
        font-size: 30px;
        color: #666;
        span{
          color: #00b2bc;
        }
      }
      // 推荐方案
      .result-recom{
        color: #999;
        font-size: 28px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 580px;
      }
      // 查看按钮
      .result-scan{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 680px;
      }
    } 
  }

</style>