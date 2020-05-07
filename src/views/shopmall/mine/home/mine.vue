<template>
  <div class="mine-main">
    <div class="inner-wrap">
      <!-- 个人信息 -->
      <div class="person-info flex-center-col">
        <img :src="myFace" alt="" class="head-img">
        <span class="nickName" @click="Login()">{{myNickname}}</span>
      </div>
      <!-- 购买记录 -->
      <div class="content-wrap">
        <div class="content-item" v-for="(item, index) in menu" :key="index">
          <a :href="item.path" class="flex-between">
            <div class="flex-center-y">
              <img :src="item.icon" alt="" class="icon-size">
              <span class="item-txt">{{item.name}}</span>
            </div>
            <img src="@/assets/images/rightArrow.png" alt="" class="rightArrow">
          </a>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  data () {
    return{
      // 菜单项
      menu: [
        {icon: require('@/assets/images/m1.png'), name: '抵用券', path: '/voucher'},
        {icon: require('@/assets/images/m5.png'), name: '订单状态', path: '/orderStatus'},
        {icon: require('@/assets/images/m4.png'), name: '我的预约', path: '/subscribe'},
        // {icon: require('@/assets/images/m2.png'), name: '报告结果', path: 'javascript:void(0)'},
        {icon: require('@/assets/images/m3.png'), name: '联系客服', path: '/customer'},
      ]
    }
  },
  components: {
    tabbar
  },
  computed: {
    myFace () {
      return this.$store.state.face
    },
    myNickname () {
      return this.$store.state.nickname
    }
  },
  watch: {
    myFace: function () {
      this.myFace = JSON.parse(localStorage.getItem('user')).face
    },
    myFace: function () {
      this.myNickname = JSON.parse(localStorage.getItem('user')).nickname
    }
  },
  mounted () {

  },
  methods: {
    // 点击立即登录
    Login () {
      if (this.$store.state.nickname === '立即登录') {
        this.$doLogin()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .inner-wrap::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    background-color: rgba(240,240,240,0);
  }
  .inner-wrap{
    padding-bottom: 120px;
    box-sizing: border-box;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .mine-main{
    width: 100%;
    min-height: 100vh;
    background-color: #F2F2F2;
    overflow-x: hidden;
    box-sizing: border-box;
    .person-info{
      width: 100%;
      height: 300px;
      background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
      position: relative;
      &::after{
        content: '';
        width: 140%;
        height: 450px;
        position: absolute;
        left: -20%;
        bottom: -150px;
        border-radius: 0 0 50% 50%;
        background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
        z-index: 1;
      }
      .head-img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        z-index: 5;
      }
      .nickName{
        margin-top: 30px;
        color: #fff;
        z-index: 5;
      }
    }
    // 内容
    .content-wrap{
      width: 700px;
      min-height: calc(100vh - 450px);
      margin: -10px auto 0;
      box-shadow: 0 0 10px #eee;
      border-radius: 20px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 20px 40px;
      position: relative;
      z-index: 5;
      .content-item{
        border-bottom: 1px solid #F2F2F2;
        padding: 40px 0;
        box-sizing: border-box;
        .icon-size{
          width: 50px;
          height: 50px;
          margin-right: 30px;
        }
        .item-txt{
          font-size: 30px;
        }
      }
    }
  }
</style>