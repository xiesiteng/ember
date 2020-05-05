<template>
  <div class="grow">
    <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0
    }
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 数值渐渐增长
    grow () {
      let step = 5
      let timer = setInterval(() => {
        if (this.value == this.percent) {
          clearInterval(timer)
          return false
        }
        //  console.log(this.val)
        this.value += step
      }, 20);
    }
  }
}
</script>

<style lang="scss" scoped>
  .grow{
    span{
      font-size: 22px;
      margin-right: 3px;
    }
  }
</style>