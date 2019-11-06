const music = {
  state: {
    song: {
      musicname: '拼嘻嘻音乐',
      singername: '拼嘻嘻'
    },
    playList: []
  },
  getters: {
    song: function (state) {
      return state.song
    },
    playList: function (state) {
      return state.playList
    }
  },
  actions: {
    setCurrentSong({
      commit
    }, data) {
      commit('getcurrentsong', data)
    },
    setPlayList({
      commit
    }, data) {
      commit('getplaylist', data)
    }
  },
  mutations: {
    getcurrentsong: (state, data) => {
      state.song = data
    },
    getplaylist: (state, data) => {
      state.playList = data
    }
  }
}

export default music
