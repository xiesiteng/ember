import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
// 引入Mint UI
import './myMint.js'
// 引入工具包JS文件
import './utils/utils'
// 引入接口调用文件
import api from './axios/api'
// api挂载至Vue原型
Vue.prototype.$api = api
// 引入微信jsdk
import wx from 'weixin-js-sdk';


Vue.config.productionTip = false

// 全局注册头部导航组件
import customHeader from '@/components/customHeader/customHeader'
Vue.component('customHeader', customHeader)

// 全局注册通用按钮组件
import customButton from '@/components/customButton/customButton'
Vue.component('customButton', customButton)

// 全局注册通用按钮组件
import emptyData from '@/components/emptyData/emptyData'
Vue.component('emptyData', emptyData)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


