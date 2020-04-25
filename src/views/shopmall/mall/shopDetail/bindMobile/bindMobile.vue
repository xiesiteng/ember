<template>
  <div class="mobile-main">
    <van-popup 
      v-model="$store.state.mobileShow"
      position="left"
      >
      <!-- 绑定手机 -->
      <div class="mobile-wrap flex-center-col">
        <input type="tel" maxlength="11" placeholder="请绑定手机号码">
        <button>确定</button>
        <img src="@/assets/images/fail.png" alt="" class="close-btn" @click="close()">
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return{

    }
  },
  methods: {
    // 关闭弹窗，改变store中mobileShow的状态
    close () {
      this.$store.commit('updateMobileShow', false)
    }
  }
}
</script>

<style scoped lang="scss">
  .mobile-main{
    .mobile-wrap{
      min-width: 100vw;
      height: 600px;
      width: 100%;
      background-color: #fff;
      border-radius: 30px!important;
      position: relative;
      input{
        padding: 20px 30px;
        box-sizing: border-box;
        margin: 0 auto 100px;
        border-radius: 50px;
        border: 1px solid #eee;
        width: 400px;
      }
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
			  padding-left: 70px;
      }
      ::-moz-placeholder { /* Firefox 19+ */  
        padding-left: 70px;
      }
      :-ms-input-placeholder { /* IE 10+ */ 
        padding-left: 70px;
      }
      :-moz-placeholder { /* Firefox 18- */ 
        padding-left: 70px;
      }
      button{
        background-color: #00b2bc;
        width: 350px;
        height: 60px;
        border-radius: 30px;
        color: #fff;
      }
      .close-btn{
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        top: 30px;
        right: 30px;
      }
    }
  }
</style>