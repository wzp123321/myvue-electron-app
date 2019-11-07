const user = {
  state: {
    userinfo: {}
  },
  getters: {
    userinfo: function (state) {
      return state.userinfo
    }
  },
  mutations: {
    setuserinfo: function (state, data) {
      state.userinfo = data
    }
  },
  actions: {
    setUserInfo({
      commit
    }, data) {
      commit('setuserinfo', data)
    }
  }
}

export default user
