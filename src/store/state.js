// 状态对象
export default {
  isPad: true, // 当前访问设备是否为ipad
  mobileShow: false, // 商城单个商品详情页，控制弹出绑定手机组件的标识
  infoShow: false, // 商城单个商品详情页，控制弹出购买信息的标识
  chooseSubscribeId: sessionStorage.getItem('chooseSubscribeId') ? sessionStorage.getItem('chooseSubscribeId') : 1 // 选择测评时，点击某一个测评存储该预约信息的id
}
