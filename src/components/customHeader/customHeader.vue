<template>
  <div class="custom-header">
    <img src="@/assets/images/backArrow.png" alt="" @click="goBack()" v-show="backShow">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    backShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  .custom-header{
    width: 100%;
    // height: 50px;
    padding: 50px 0;
    box-sizing: border-box;
    background-image: linear-gradient(to right, #04b5bc, #3ddfb7);
    position: relative;
    img{
      width: 15px;
      height: 25px;
      position: absolute;
      left: 40px;
      top: 50%;
      transform: translateY(-50%);
    }
    p{
      font-size: 32px;
      color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
</style>