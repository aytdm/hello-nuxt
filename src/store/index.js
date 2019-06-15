import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import state from './state'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
