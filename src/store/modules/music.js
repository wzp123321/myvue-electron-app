const music = {
  state: {
    song: {
      title: '海阔天',
      author: 'dddd',
      url: 'http://m10.music.126.net/20191105210811/9c29273f6d2f7ee14cd9b6a5cca914c1/ymusic/071d/ca5f/ab5b/97adc83065f23caf6f4b409e961f0f0c.mp3',
      pic: 'https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg'
    },
    playList: [{
      title: '海阔dddd天',
      author: 'dddd',
      url: 'http://m10.music.126.net/20191105210811/9c29273f6d2f7ee14cd9b6a5cca914c1/ymusic/071d/ca5f/ab5b/97adc83065f23caf6f4b409e961f0f0c.mp3',
      pic: 'https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg'
    },
    {
      title: '海阔dddaaa天',
      author: 'dddd',
      url: 'http://m10.music.126.net/20191105210811/9c29273f6d2f7ee14cd9b6a5cca914c1/ymusic/071d/ca5f/ab5b/97adc83065f23caf6f4b409e961f0f0c.mp3',
      pic: 'https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg'
    },
    {
      title: '海dsadasd阔天',
      author: 'dddd',
      url: 'http://m10.music.126.net/20191105210811/9c29273f6d2f7ee14cd9b6a5cca914c1/ymusic/071d/ca5f/ab5b/97adc83065f23caf6f4b409e961f0f0c.mp3',
      pic: 'https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg'
    },
    {
      title: '海dasdasd阔天',
      author: 'dddd',
      url: 'http://m10.music.126.net/20191105210811/9c29273f6d2f7ee14cd9b6a5cca914c1/ymusic/071d/ca5f/ab5b/97adc83065f23caf6f4b409e961f0f0c.mp3',
      pic: 'https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg'
    },
    ]
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
    getCurrentSong({
      commit
    }, data) {
      commit('getcurrentsong', data)
    },
    getPlayList({
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
