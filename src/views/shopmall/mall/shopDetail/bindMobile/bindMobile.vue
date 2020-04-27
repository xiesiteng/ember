<template>
  <div class="mobile-main">
    <van-popup 
      v-model="$store.state.mobileShow"
      position="left"
      >
      <!-- 绑定手机 -->
      <div class="mobile-wrap flex-center-col">
        <input type="number" maxlength="11" placeholder="请绑定手机号码" v-model="phone" pattern="[0-9]*" oninput="if(value.length > 11)value = value.slice(0, 11)">
        <!-- <input type="tel" maxlength="11" placeholder="请绑定手机号码" v-model="phone"> -->
        <button @click="bind()">确定</button>
        <img src="@/assets/images/close.png" alt="" class="close-btn" @click="close()">
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data () {
    return{
      phone: ''
    }
  },
  methods: {
    // 关闭弹窗，改变store中mobileShow的状态
    close () {
      this.$store.commit('updateMobileShow', false)
    },
    // 绑定手机号
    bind () {
      if (this.$isblank(this.phone)) {
        this.$toast('请输入手机号码')
        return false
      }
      this.$store.commit('updateMobileShow', false)
      this.$toast('绑定成功')
    }
  }
}
</script>

<style scoped lang="scss">
  .mobile-main{
    .mobile-wrap{
      min-width: 600px;
      height: 600px;
      width: 100%;
      background-color: #fff;
      position: relative;
      input{
        padding: 20px 30px;
        box-sizing: border-box;
        margin: 0 auto 80px;
        // border-radius: 50px;
        border-bottom: 1px solid #eee;
        width: 400px;
      }
      ::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
			  padding-left: 70px;
        color: #ccc;
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
        width: 450px;
        height: 80px;
        border-radius: 50px;
        color: #fff;
        position: absolute;
        bottom: 120px;
      }
      .close-btn{
        position: absolute;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 30px;
        right: 30px;
      }
    }
  }
</style>

<style>
  .mobile-main .van-popup--left{
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 10px;
  }
</style>