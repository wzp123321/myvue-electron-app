import {
  Message,
  MessageBox
} from 'element-ui'

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
      id: 77131,
      musicname: "有多少爱可以重来",
      pic: "http://p1.music.126.net/TIQMdKKvWY0dDr-yKBaBeQ==/19000660439853455.jpg",
      singername: "迪克牛仔",
    }, {
      id: 176496,
      musicname: "爱我的人和我爱的人",
      pic: "http://p1.music.126.net/0GN5mg4qzxmqGES0H3AdhQ==/98956046505536.jpg",
      singername: "游鸿明",
    }, {
      id: 25714352,
      musicname: "空白格 (Live)",
      pic: "http://p1.music.126.net/s2rrkEZ6S7UVAJI-D1M4lA==/2258396883454110.jpg",
      singername: "杨宗纬",
    }, {
      id: 452986458,
      musicname: "红昭愿",
      pic: "http://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg",
      singername: "音阙诗听",
    }, {
      id: 441491828,
      musicname: "水星记",
      pic: "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      singername: "郭顶",
    }, {
      id: 190072,
      musicname: "黄昏",
      pic: "http://p2.music.126.net/Y91B_GXc5d9t-0X0Uu_7xw==/109951163063096750.jpg",
      singername: "周传雄",
    }, {
      id: 1330348068,
      musicname: "起风了",
      pic: "http://p2.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg",
      singername: "买辣椒也用券",
    }, {
      id: 553310243,
      musicname: "后来的我们",
      pic: "http://p2.music.126.net/s6bXQX0M-H9EoeqGfr4wrg==/109951163250238942.jpg",
      singername: "五月天",
    }, {
      id: 86363,
      musicname: "此生不换",
      pic: "http://p1.music.126.net/2-_sPmCBnN6VfwFmONRy2Q==/46179488378975.jpg",
      singername: "青鸟飞鱼",
    }, {
      id: 1348548292,
      musicname: "伪装",
      pic: "http://p1.music.126.net/0lTZqHtNKlSNUladoc0DZQ==/109951163903233984.jpg",
      singername: "大壮",
    }, {
      id: 256081,
      musicname: "天后",
      pic: "http://p1.music.126.net/vO5aWlp5cO2OnIUFbToMCQ==/109951163167564366.jpg",
      singername: "刘力扬",
    },
    {
      id: 167799,
      musicname: "怎么说我不爱你",
      pic: "http://p1.music.126.net/mM9MlfEcfh6i7rupRo-jyA==/109951163188726567.jpg",
      singername: "萧敬腾",
    }, {
      id: 516728102,
      musicname: "浪子回头",
      pic: "http://p2.music.126.net/emWwYFceRZ2plNWgnGUDfg==/109951163333175426.jpg",
      singername: "茄子蛋",
    }, {
      id: 569213220,
      musicname: "像我这样的人",
      pic: "http://p2.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg",
      singername: "毛不易",
    }, {
      id: 1348548292,
      musicname: "伪装",
      pic: "http://p1.music.126.net/0lTZqHtNKlSNUladoc0DZQ==/109951163903233984.jpg",
      singername: "大壮",
    }, {
      id: 486218073,
      musicname: "BINGBIAN病变（prod.jurrivh）",
      pic: "http://p1.music.126.net/FcW4qPSjTLRJORMWNHeElA==/109951162955696086.jpg",
      singername: "Cubi",
    }
    ]
  },
  getters: {
    historyList: function (state) {
      return state.historyList
    }
  },
  mutations: {
    gethistorylist: function (state, data) {
      state.historyList.push(data)
    },
    gethisttoryitemdelete: function (state, data) {
      MessageBox.confirm("确认删除该条歌曲吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          state.historyList.splice(data, 1)
          Message.success('删除成功')
        })
        .catch(() => {});

    }
  },
  actions: {
    setHistoryList({
      commit
    }, data) {
      commit('gethistorylist', data)
    },
    getHistoryDel({
      commit
    }, data) {
      commit('gethisttoryitemdelete', data)
    }
  },
}

export default history
