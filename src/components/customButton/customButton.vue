<template>
  <div class="custom-button" @click="doCustom()">
    <a :href="path">{{btnText}}</a>
  </div>
</template>

<script>
export default {
  props: ['btnText', 'path'],
  methods: {
    doCustom () {
      this.$emit('tap')
    }
  }
}
</script>

<style scoped lang="scss">
  .custom-button{
    width: 600px;
    height: 70px;
    margin: 0 auto;
    border-radius: 50px;
    background: #00b2bc;
    a{
      color: #fff;
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 70px;
    }
  }
</style>