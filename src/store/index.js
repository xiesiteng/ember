import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import '../utils/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})