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
  }
}
