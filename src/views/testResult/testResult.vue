<template>
  <div class="test-result">
    <!-- 头部 -->
    <custom-header title="测评结果"></custom-header>
    <!-- 测评内容 -->
    <div class="result-wrap">
      <!-- 单个癌症检测 -->
      <div class="result-item" v-for="(item, index) in list" :key="index">
        <p class="item-name">{{item.txt}}检测推荐指数</p>
        <div class="item-progress-wrap flex-center-y">
          <div class="item-progress-inner">
            <div class="item-progress flex">
              <div :style="{width: item.ratio + '%'}" class="current-progress">
                <div class="flex-center-y ratio-value"><span>{{item.ratio}}</span><span>%</span></div>
              </div>
            </div>
          </div>
          <span class="item-progress-total">100%</span>
        </div>
      </div>
    </div>
    <!-- 推荐套餐（推荐套餐与预约套餐相同时，仅显示预约套餐，以下 v-if 即为具体实现） -->
    <div class="result-recom" @click="toDetail(recommendGoods.id)" v-if="recommendGoods.id !== appointGoods.goods_id">
      <h3>推荐套餐</h3>
      <div class="recom-wrap flex-between">
        <p>{{recommendGoods.title}}</p>
        <div class="flex-center-y more-detail">
          <span>查看详情</span>
          <img src="@/assets/images/rightArrow.png" alt="" class="more-arrow">
        </div>
      </div>
    </div>
    <!-- 预约套餐 -->
    <div class="result-recom" @click="toDetail(appointGoods.goods_id)">
      <h3>预约套餐</h3>
      <div class="recom-wrap flex-between">
        <p>{{appointGoods.goods_title}}</p>
        <div class="flex-center-y more-detail">
          <span>查看详情</span>
          <img src="@/assets/images/rightArrow.png" alt="" class="more-arrow">
        </div>
      </div>
    </div>
    <!-- 全部套餐 -->
    <custom-button btnText="查看全部套餐" class="scanAll" path="/scheme"></custom-button>
  </div>
</template>

<script>
import numberGrow from '@/components/numberGrow/numberGrow'
export default {
  data () {
    return {
      score: 60,
      totalScore: 100,
      list: [0,0,0,0,0],
      recommendGoods: {}, // 推荐套餐
      appointGoods: {}   // 预约套餐
    }
  },
  components:{
   numberGrow
 },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化获取测评结果和推荐套餐
    init () {
      this.$api.getResult({
        order_id: this.$store.state.chooseSubscribeId
      }).then(res => {
        this.list = res.data.risk
        this.recommendGoods = res.data.recommendGoods
        this.appointGoods = res.data.appointGoods
      })
    },
    // 跳转套餐详情
    toDetail (id) {
      this.$router.push(
        {
          path: '/schemeDetail',
          query: {id: id}
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
  .test-result{
    // 五癌测评结果
    .result-wrap{
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
      .result-item{
        width: 100%;
        margin-bottom: 20px;
        .item-name{
          margin-bottom: 10px;
          position: relative;
          animation: leftIn .5s ease-in-out;
        }
        .item-progress-wrap{
          width: 100%;
          height: 60px;
          box-sizing: border-box;
          background-color: #fff;
          border-radius: 8px;
          .item-progress-inner{
            width: calc(100% - 60px);
            padding: 5px;
            box-sizing: border-box;
            background-color: #e3e3e3;
            border-radius: 30px;
            .item-progress{
              width: 100%;
              height: 30px;
              background-color: #e3e3e3;
              border-radius: 30px;
              animation: wdFade .5s ease-in-out;
              .current-progress{
                height: 30px;
                border-radius: 20px;
                background-image: linear-gradient(to right, #33dfb7, #33dfb1, #04b5bc);
                transition: all .5s ease-in-out;
                position: relative;
                .ratio-value{
                  font-size: 22px;
                  color: #fff;
                  position: absolute;
                  right: 15px;
                  top: 50%;
                  transform: translateY(-45%);
                  max-height: 30px;
                }
              }
            }
          }
          // 进度条总值
          .item-progress-total{
            display: inline-block;
            width: 100px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: #666;
          }
        }
      }
    }
    // 推荐套餐
    .result-recom{
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      margin-bottom: 50px;
      h3{
        margin-bottom: 10px;
        font-size: 36px;
      }
      .recom-wrap{
        background-color: #eee;
        width: 100%;
        padding: 20px 15px;
        box-sizing: border-box;
        border-radius: 10px;
        p{
          max-width: 500px;
          max-height: 35px;
          overflow: hidden;
        }
        .more-detail{
          font-size: 22px;
          color: #666;
        }
      }
    }
    // 查看全部套餐
    .scanAll{
      margin: 80px auto;
    }
  }
</style>