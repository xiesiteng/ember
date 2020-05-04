import {get, post} from './axios'

const api = {
  // getIndex: data => post('/api/index/index', data) 示例

  // 获取问卷测评的所有题目
  getAllTest: data => post('/api/subject/getSubjectList', data),

  // 提交问卷测评
  submitAllTest: data => post('/api/subject/setAnswer', data),

  // 获取商城所有商品
  getGoods: data => post('/api/goods/getGoodsList', data),

  // 获取商城单个商品的详情
  getGoodsDetail: data => post('/api/Goods/getGoodsDetail', data),

  // 获取我的预约列表
  getSubscribe: data => post('/api/order/getOrderList', data),

  // 手机登录获取验证码
  getCode: data => post('/api/sms/sendSms', data),

  // 手机短信登录
  phoneLogin: data => post('/api/login/messageLogin', data)

}

export default api