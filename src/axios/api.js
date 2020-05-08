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
  getQrCode: data => post('/api/wechatpay/getWachatPayQrcode', data),

  // ipad端微信支付结果接口
  getCodeResult: data => post('/api/wechatpay/isScanPaySuccess', data),

  // 手机端微信登录
  wxLogin: data => post('/api/login/wxOfficialLogin', data),

  // ipad端扫码微信登录
  getIpadLogin: data => post('/api/login/wxOpenplatformLogin', data),

  // 手机商城判断用户是否绑定了手机号
  whetherBindPhone: data => post('/api/user/userTelIsbind', data),

  // 手机商城用户绑定手机号码
  shopBindPhone: data => post('/api/user/wechatUserBindTel', data),

  // 手机端商城下单
  createdOrder: data => post('/api/goodsorder/insertGoodsOrder', data),

  // 手机端商城商品详情页shopDetail.vue微信支付
  shopDetailWxPay: data => post('/api/wechatpay/officialPay', data),

  // 查询登录客户的电子券
  getVoucher: data => post('/api/coupon/getUserCouponList', data),

  // 查询登录客户的订单状态
  getOrder: data => post('/api/goodsorder/getGoodsOrderList', data),

  // 手机端测评后支付 pay.vue
  testOverPay: data => post('/api/wechatpay/serviceOfficialPay', data)

}

export default api