<template>
  <div class="shopIndex-main">
    <!-- 展示所有套餐 -->
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="已经到底啦"
          :immediate-check="false"
          @load="onLoad"
        >
          <div class="shop-wrap flex-wrap">
              <div class="shop-item" v-for="(item, index) in list" :key="index" @click="$router.push({path: '/shopDetail', query: {id: item}})">
                <img src="http://img95.699pic.com/desgin_photo/40057/8784_list.jpg!/fh/300" alt="" class="shop-item-img">
                <p class="shop-item-name">恩贝尔健康检测套餐抵用券A恩贝尔健康检测套餐抵用券A</p>
                <div class="shop-item-info flex-between">
                  <div class="price-wrap">
                    <span class="price"><i>¥ </i>1690.00</span>
                  </div>
                  <span class="pre-price">¥1999.00</span>
                  <!-- <button class="buyNow" @click="$router.push({path: '/shopDetail', query: {id: item}})">立即抢购</button> -->
                </div>
              </div>
          </div>
        </van-list>

    <!-- 底部 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  data () {
    return{
      list: ['1','1','1','1','1','1'],
      loading: false, // 控制上拉加载
      finished: false, // 数据全部加载完毕
    }
  },
  components: {
    tabbar
  },
  mounted () {

  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        console.log('on Load')
        setTimeout(() => {
        // this.loading = true
        for (let i = 0; i < 3; i++) {
          this.list.push('1');
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 100);

    }

  }
}
</script>

<style scoped lang="scss">
  .shopIndex-main{
    // min-height: 100vh;
    width: 100%;
    height: 100%;
    padding-bottom: 130px;
    background-color: #F2F2F2;
  }
  .shop-wrap{
      padding: 20px;
      box-sizing: border-box;
      height: 100%;
      width: 750px;
      // 每个item
      .shop-item{
        // height: 650px;
        width: 345px;
        padding: 15px;
        box-sizing: border-box;
        margin: 0 15px 15px 0;
        background-color: #fff;
        border-radius: 20px;
        &:nth-child(2n){
          margin-right: 0;
        }
        // 图片
        .shop-item-img{
          width: 100%;
          height: 400px;
          display: block;
        }
        // 名称
        .shop-item-name{
          margin: 20px 0;
          height: 80px;
          overflow: hidden;
        }
        // 单个商品信息
        .shop-item-info{
          // 价格
          .price-wrap{
            .price{
              font-size: 36px;
              font-weight: bold;
              color: #00b2bc;
              i{
                font-size: 28px;
                font-style: normal;
                font-weight: bold;
              }
            }
          }
          .pre-price{
              font-size: 28px;
              color: #999;
              text-decoration: line-through;
              // margin-left: 20px;
          }
          // 立即购买
          .buyNow{
            background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
            width: 180px;
            height: 60px;
            border-radius: 10px;
            font-size: 30px;
            color: #fff;
          }
        }
      }
    }
</style>