import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例

  // 获取问卷测评的所有题目
  getAllTest: data => post('/api/subject/getSubjectList', data),

  // 提交问卷测评
  submitAllTest: data => post('/api/subject/setAnswer', data),

  // 获取商城所有商品（获取所有套餐种类）
  getGoods: data => post('/api/goods/getGoodsList', data),

  // 获取商城单个商品的详情（获取单个套餐的详情）
  getGoodsDetail: data => post('/api/Goods/getGoodsDetail', data),

  // 获取我的预约列表
  getSubscribe: data => post('/api/order/getOrderList', data),

  // 手机登录获取验证码
  getCode: data => post('/api/sms/sendSms', data),

  // 手机短信登录
  phoneLogin: data => post('/api/login/messageLogin', data),

  // 测评结果，获取结果和推荐套餐
  getResult: data => post('/api/subject/getAnswer', data),

  // schemeDetail.vue中点击下一步升级套餐
  updateMeal: data => post('/api/order/upgradeSetmeal', data),

  // ipad端获取微信支付二维码
  getQrCode: data => post('/api/scanpay/getWachatPayQrcode', data),

  // ipad端微信支付结果接口
  getCodeResult: data => post('/api/scanpay/isScanPaySuccess', data)

}

export default api