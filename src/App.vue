<template>
  <div id="app">
    <keep-alive include="testPaper">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
   /(iPhone|iPad|iPhone OS|Phone|iPod|iOS)/i.test(navigator.userAgent)&&(head=document.getElementsByTagName('head'),viewport=document.createElement('meta'),viewport.name='viewport',viewport.content='target-densitydpi=device-dpi, width=480px, user-scalable=no',head.length>0&&head[head.length-1].appendChild(viewport));
</script>



<style lang="scss">
@import url('../node_modules/mint-ui/lib/style.css');
@import url('~@/assets/css/common.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 30px;
  overflow-x: hidden;
}
body{margin: 0;font-size: 30px!important;}


</style>
