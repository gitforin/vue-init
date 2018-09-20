import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

//modules
import login from './modules/login/index'
Vue.use(Vuex);

const state={
	userInfo:null
}
//导出STORE
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    login
  }
});;
