// 状态对象

export default {
  // 当前访问设备是否为ipad
  isPad: sessionStorage.getItem('isPad'),
  // 商城单个商品详情页，控制弹出绑定手机组件的标识
  mobileShow: false,
  // 商城单个商品详情页，控制弹出购买信息的标识
  infoShow: false,
  // 选择测评时，点击某一个测评存储该预约信息的id
  chooseSubscribeId: sessionStorage.getItem('chooseSubscribeId') ? sessionStorage.getItem('chooseSubscribeId') : 1,
  goods_id: sessionStorage.getItem('goods_id') ? sessionStorage.getItem('goods_id') : 1,
  // mine.vue中的用户头像和昵称，localstorage中若无则显示默认的头像和昵称
  face: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).face : `${require('@/assets/images/user_default.png')}`,
  nickname: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).nickname : '立即登录'
}
