import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
// 引入Mint UI
import './myMint.js'
// 引入工具包JS文件
import './utils/utils'

Vue.config.productionTip = false

// 全局注册头部导航组件
import customHeader from '@/components/customHeader/customHeader'
Vue.component('customHeader', customHeader)

// 全局注册通用按钮组件
import customButton from '@/components/customButton/customButton'
Vue.component('customButton', customButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


