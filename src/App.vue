<template>
  <div id="app">
    <keep-alive include="testPaper">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
</script>



<style lang="scss">
@import url('../node_modules/mint-ui/lib/style.css');
@import url('../node_modules/vant/lib/index.css');
@import url('~@/assets/css/common.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 28px;
  overflow-x: hidden;
}
body{margin: 0;font-size: 28px;}

// vant的dialog提示框中的文字
.van-dialog__message{
  font-size: 18px;
}

</style>
