<template>
  <div class="tabbar-main flex-center-y">
    <a :href="item.path" v-for="(item, index) in list" :key="index">
      <div class="tabbar-item flex-center-col">
        <img :src="active == index ? item.activeUrl : item.url" alt="">
        <span>{{item.name}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {url: require('@/assets/images/home.png'), activeUrl: require('@/assets/images/home_pick.png'), name: '首页', path: '/shopIndex'},
        {url: require('@/assets/images/assess.png'), activeUrl: require('@/assets/images/assess_pick.png'), name: '测评', path: '/index'},
        {url: require('@/assets/images/mine.png'), activeUrl: require('@/assets/images/mine_pick.png'), name: '我的', path: '/mine'},
      ],
      active: 0
    }
  },
  created () {
    this.getActive()
  },
  methods: {
    // 根据路由名称来设置active的值
    getActive () {
      let value = this.$route.name
      if (value == 'shopIndex') {
        this.active = 0
      } else{
        this.active = 2
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tabbar-main{
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    border-top: 1px solid #eee;
    background-color: #f7f7f7;
    z-index: 50;
    .tabbar-item{
      height: 100%;
      width: 250px;
      img{
        width: 60px;
        height: 60px;
      }
      span{
        font-size: 24px;
        color: #333;
      }
    }
  }
</style>