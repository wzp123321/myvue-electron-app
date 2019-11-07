const history = {
  state: {
    historyList: [{
      id: 27867397,
      musicname: "世界第一等(Live)",
      pic: "http://p1.music.126.net/6Lod8Ys5E6fiKZ9xrqCXug==/109951163100347037.jpg",
      singername: "伍佰"
    }, {
      id: 188204,
      musicname: "沉默是金",
      pic: "http://p1.music.126.net/cmvsHFnVKXO409hZdrbacA==/102254581395221.jpg",
      singername: "张国荣"
    }, {
      id: 135848,
      musicname: "涛声依旧",
      pic: "http://p1.music.126.net/LH5ZrinpdjwO2n_bDmp8Zg==/109951163025052159.jpg",
      singername: "毛宁"
    }, {
      id: 346075,
      musicname: "真的爱你",
      pic: "http://p1.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg",
      singername: "Beyond",
    }, {
      id: 5279696,
      musicname: "我的未来不是梦",
      pic: "http://p1.music.126.net/qVUJ9aDeRop5pj3QDixIsQ==/109951163353510177.jpg",
      singername: "张雨生",
    }, {
      id: 5253894,
      musicname: "别哭,我最爱的人",
      pic: "http://p1.music.126.net/_AI9r84Dx79hnwL7tGiHlA==/124244813956670.jpg",
      singername: "郑智化",
    }, {
      id: 77131,
      musicname: "有多少爱可以重来",
      pic: "http://p1.music.126.net/TIQMdKKvWY0dDr-yKBaBeQ==/19000660439853455.jpg",
      singername: "迪克牛仔",
    }, {
      id: 176496,
      musicname: "爱我的人和我爱的人",
      pic: "http://p1.music.126.net/0GN5mg4qzxmqGES0H3AdhQ==/98956046505536.jpg",
      singername: "游鸿明",
    }]
  },
  getters: {
    historyList: function (state) {
      return state.historyList
    }
  },
  mutations: {
    gethistorylist: function (state, data) {
      state.historyList.push(data)
    }
  },
  actions: {
    setHistoryList({
      commit
    }, data) {
      commit('gethistorylist', data)
    }
  }
}

export default history
