// 管理直接更新states的方法
export default {
  // getAddress (state, {xxx}) {
  //   state.xxx = xxx
  // }
  
  // 改变isPad的状态
  updateIsPad (state, data) {
    sessionStorage.setItem('isPad', data)
    state.isPad = data
  },
  // 改变mobileShow的状态
  updateMobileShow (state, data) {
    state.mobileShow = data
  },
  // 改变infoShow的状态
  updateInfoShow (state, data) {
    state.infoShow = data
  },
  // 存储chooseSubscribeId的值
  setChooseSubscribeId (state, data) {
    sessionStorage.setItem('chooseSubscribeId', data)
    state.chooseSubscribeId = sessionStorage.getItem('chooseSubscribeId')
  },
  // 存储goods_id的值
  setGoodsId (state, data) {
    sessionStorage.setItem('goods_id', data)
    state.goods_id = sessionStorage.getItem('goods_id')
  },
  // 登录之后改变用户头像
  setFace (state, data) {
    state.face = data
    // state.face = JSON.parse(localStorage.getItem('user').face)
  },
  // 登录之后改变用户头像
  setNickname (state, data) {
    state.nickname = data
    // state.nickname = JSON.parse(localStorage.getItem('user').nickname)
  }
}
