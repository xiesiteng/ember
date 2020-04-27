<template>
  <div class="customer-main">
    <custom-header title="联系客服"></custom-header>
    <p class="customer-title">遇到问题？可点击下方客服热线拨打电话联系我们</p>
    <h3 class="customer-phone">
      <a :href="'tel:' + phoneNumber">{{phoneNumber}}</a>
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return{
      phoneNumber: '400-8023-8823'
    }
  }
}
</script>

<style scoped lang="scss">
  .customer-main{
    .customer-title{
      padding: 80px 30px 30px;
      box-sizing: border-box;
    }
    .customer-phone{
      padding: 0 30px;
      box-sizing: border-box;
      a{
        font-size: 36px;
      }
    }
  }
</style>