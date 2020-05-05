<template>
  <div class="scheme-main">
    <custom-header title="套餐种类"></custom-header>
      <div class="scheme-wrap">
        <div class="scheme-item flex-center-y" v-for="(item, index) in list" :key="index">
          <!-- item 左 -->
          <div class="item-left">
            <div class="flex-between scheme-meal">
              <span>{{item.title}}</span>
              <!-- <p>{{item.price / 100}}元/人次</p> -->
            </div>
            <p class="intro">{{$fmtMoney(item.price)}} 元 / 人次</p>
          </div>
          <!-- item 右 -->
          <div class="item-right flex-end">
            <button @click="$router.push({path: '/schemeDetail', query: {id: item.id}})">查看详情</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$api.getGoods().then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .scheme-main{
    overflow-x: hidden;
    background: #fafafa url('~@/assets/images/scheme-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    .scheme-wrap{
      width: 698px;
      margin: 80px auto 0;
      .scheme-item:nth-child(2n){
        animation: leftIn .6s cubic-bezier(0.215, 0.610, 0.355, 1);
      }
      .scheme-item:nth-child(2n+1){
        animation: rightIn .6s cubic-bezier(0.215, 0.610, 0.355, 1);
      }
      .scheme-item{
        background-color: #fff;
        border-radius: 30px;
        padding: 30px;
        box-sizing: border-box;
        margin-bottom: 20px;
        box-shadow: 0 0 10px #f6f6f6;
        position: relative;
        .item-left{
          width: 75%;
          .scheme-meal{
            span{
              font-size: 26px;
              display: inline-block;
              width: 100%;
              height: 50px;
              line-height: 50px;
              overflow: hidden;
            }
            // p{
            //   font-size: 34px;
            //   font-weight: bold;
            // }
          }
          .intro{
            font-size: 28px;
            color: #333;
            height: 40px;
            line-height: 40px;
            overflow: hidden;
            font-weight: bold;
          }
        }
        .item-right{
          width: 25%;
          button{
            width: 150px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            display: inline-block;
            border-radius: 50px;
            background-color: #00b2bc;
            font-size: 22px;
            color: #fff;
          }
        }
      }
    }
  }
</style>