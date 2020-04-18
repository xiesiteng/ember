
const allRouters = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    title: '首页',
    component: () => import('@/views/index/index'),
  },
  {
    path: '/result',
    name: 'result',
    title: '问卷评测结果',
    component: () => import('@/views/result/result'),
  },
  {
    path: '/submitTest',
    name: 'submitTest',
    title: '提交页面',
    component: () => import('@/views/submitTest/submitTest'),
  },
  {
    path: '/scheme',
    name: 'scheme',
    title: '套餐方案',
    component: () => import('@/views/scheme/scheme'),
  },
  {
    path: '/schemeDetail',
    name: 'schemeDetail',
    title: '套餐详情',
    component: () => import('@/views/schemeDetail/schemeDetail'),
  },
  {
    path: '/agreement',
    name: 'agreement',
    title: '阅读协议',
    component: () => import('@/views/agreement/agreement'),
  },
  {
    path: '/pay',
    name: 'pay',
    title: '支付',
    component: () => import('@/views/pay/pay'),
  },
  {
    path: '/paySuccess',
    name: 'paySuccess',
    title: '支付成功',
    component: () => import('@/views/pay/paySuccess'),
  },
  {
    path: '/payFail',
    name: 'payFail',
    title: '支付失败',
    component: () => import('@/views/pay/payFail'),
  },
  {
    path: '/wxLogin',
    name: 'wxLogin',
    title: '微信登录',
    component: () => import('@/views/login/wxLogin'),
  },
  {
    path: '/testPaper',
    name: 'testPaper',
    title: '问卷测评',
    component: () => import('@/views/testPaper/testPaper'),
  },
  {
    path: '/bindPhone',
    name: 'bindPhone',
    title: '绑定手机号码',
    component: () => import('@/views/bindPhone/bindPhone'),
  }
]

export const routers = [...allRouters];