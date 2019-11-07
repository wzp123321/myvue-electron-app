import Vue from 'vue'
import Vuex from 'vuex'

import music from './modules/music'
import history from './modules/playhistory'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    music,
    history,
    user
  }
})
