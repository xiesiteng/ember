
const allRouters = [
  { path: '/', redirect: '/shopIndex' },
  {
    path: '/index',
    name: 'index',
    title: '测评首页',
    component: () => import('@/views/index/index'),
    meta: { requireAuth: false }
  },
  // {
  //   path: '/result',
  //   name: 'result',
  //   title: '问卷评测结果',
  //   component: () => import('@/views/result/result'),
  //   meta: { requireAuth: false }
  // },
  {
    path: '/submitTest',
    name: 'submitTest',
    title: '提交页面',
    component: () => import('@/views/submitTest/submitTest'),
    meta: { requireAuth: false }
  },
  {
    path: '/scheme',
    name: 'scheme',
    title: '套餐方案',
    component: () => import('@/views/scheme/scheme'),
    meta: { requireAuth: false }
  },
  {
    path: '/schemeDetail',
    name: 'schemeDetail',
    title: '套餐详情',
    component: () => import('@/views/schemeDetail/schemeDetail'),
    meta: { requireAuth: false }
  },
  {
    path: '/agreement',
    name: 'agreement',
    title: '阅读协议',
    component: () => import('@/views/agreement/agreement'),
    meta: { requireAuth: false }
  },
  {
    path: '/pay',
    name: 'pay',
    title: '支付',
    component: () => import('@/views/pay/pay'),
    meta: { requireAuth: false }
  },
  {
    path: '/paySuccess',
    name: 'paySuccess',
    title: '支付成功',
    component: () => import('@/views/pay/paySuccess'),
    meta: { requireAuth: false }
  },
  {
    path: '/payFail',
    name: 'payFail',
    title: '支付失败',
    component: () => import('@/views/pay/payFail'),
    meta: { requireAuth: false }
  },
  {
    path: '/wxLogin',
    name: 'wxLogin',
    title: '微信登录',
    component: () => import('@/views/login/wxLogin'),
    meta: { requireAuth: false }
  },
  {
    path: '/testPaper',
    name: 'testPaper',
    title: '问卷测评',
    component: () => import('@/views/testPaper/testPaper'),
    meta: { requireAuth: false }
  },
  {
    path: '/bindPhone',
    name: 'bindPhone',
    title: '绑定手机号码',
    component: () => import('@/views/bindPhone/bindPhone'),
    meta: { requireAuth: false }
  },
  {
    path: '/phoneLogin',
    name: 'phoneLogin',
    title: '手机号码登录',
    component: () => import('@/views/login/phoneLogin'),
    meta: { requireAuth: false }
  },
  {
    path: '/passwordLogin',
    name: 'passwordLogin',
    title: '密码登录',
    component: () => import('@/views/login/passwordLogin'),
    meta: { requireAuth: false }
  },
  {
    path: '/sweepCodeLogin',
    name: 'sweepCodeLogin',
    title: '扫码登录',
    component: () => import('@/views/login/sweepCodeLogin'),
    meta: { requireAuth: false }
  },
  {
    path: '/shopIndex',
    name: 'shopIndex',
    title: '商城首页',
    component: () => import('@/views/shopmall/mall/shopIndex/shopIndex'),
    meta: { requireAuth: false }
  },
  {
    path: '/mine',
    name: 'mine',
    title: '个人中心',
    component: () => import('@/views/shopmall/mine/home/mine'),
    meta: { requireAuth: false }
  },
  {
    path: '/voucher',
    name: 'voucher',
    title: '抵用券',
    component: () => import('@/views/shopmall/mine/voucher/voucher'),
    meta: { requireAuth: true }
  },
  {
    path: '/customer',
    name: 'customer',
    title: '联系客服',
    component: () => import('@/views/shopmall/mine/customer/customer'),
    meta: { requireAuth: false }
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    title: '我的预约',
    component: () => import('@/views/shopmall/mine/subscribe/subscribe'),
    meta: { requireAuth: true }
  },
  {
    path: '/subscribeDetail',
    name: 'subscribeDetail',
    title: '预约详情',
    component: () => import('@/views/shopmall/mine/subscribe/subscribeDetail'),
    meta: { requireAuth: true }
  },
  {
    path: '/report',
    name: 'report',
    title: '报告解读',
    component: () => import('@/views/shopmall/mine/subscribe/report'),
    meta: { requireAuth: true }
  },
  {
    path: '/orderStatus',
    name: 'orderStatus',
    title: '订单状态',
    component: () => import('@/views/shopmall/mine/orderStatus/orderStatus'),
    meta: { requireAuth: true }
  },
  {
    path: '/shopDetail',
    name: 'shopDetail',
    title: '详情',
    component: () => import('@/views/shopmall/mall/shopDetail/shopDetail'),
    meta: { requireAuth: false }
  },
  {
    path: '/chooseSubscribe',
    name: 'chooseSubscribe',
    title: '选择预约',
    component: () => import('@/views/chooseSubscribe/chooseSubscribe'),
    meta: { requireAuth: true }
  },
  {
    path: '/testResult',
    name: 'testResult',
    title: '测评结果',
    component: () => import('@/views/testResult/testResult'),
    meta: { requireAuth: true }
  }
]

export const routers = [...allRouters];