<template>
  <div class="scheme-main">
    <custom-header title="套餐种类"></custom-header>
    <div 
    class="scheme-wrap"
    v-infinite-scroll="loadMore()"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="distance"
    :infinite-scroll-immediate-check="check"
    >
      <div class="scheme-item flex-center-y" v-for="(item, index) in list" :key="index">
        <!-- item 左 -->
        <div class="item-left">
          <div class="flex-between scheme-meal">
            <span>A套餐</span>
            <p>1600元 / 人次</p>
          </div>
          <p class="intro">( 结直肠防癌早检 )</p>
        </div>
        <!-- item 右 -->
        <div class="item-right flex-end">
          <a href="/schemeDetail">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1,1,1,1,1],
      loading: false,
      check: false,
      distance: '10'
    }
  },
  methods: {
    init () {
      console.log('loadmore')
    },
    loadMore () {
      if (this.list.length >= 10 ) {return false}
      this.loading = true;
        setTimeout(() => {
          if (!this.loading) {
            let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 3; i++) {
              this.list.push(last + i);
            }
            this.loading = false;
          }
        }, 2500);
    }
  }
}
</script>

<style scoped lang="scss">
  .scheme-main{
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
          width: 65%;
          .scheme-meal{
            span{
              font-size: 36px;
            }
            p{
              font-size: 34px;
              font-weight: bold;
            }
          }
          .intro{
            font-size: 20px;
            color: #666;
          }
        }
        .item-right{
          width: 35%;
          a{
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