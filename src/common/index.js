export const WINDOW_WIDTH = 1000;

export const WINDOW_HEIGHT = 600;

export const menulist = [{
  title: '在线音乐',
  path: '/music',
  children: [{
    icon: 'iconbangdan',
    title: '音乐榜单',
    path: '/music/list'
  },
  {
    icon: 'iconMV',
    title: 'MV',
    path: '/music/mv'
  },
  {
    icon: 'iconyinyue',
    title: '电台',
    path: '/music/radio'
  },
  {
    icon: 'icongeshou',
    title: '歌手榜单',
    path: '/music/singer'
  }]
},
{
  title: '我的音乐',
  path: '/personal',
  children: [{
    icon: 'iconxihuan',
    title: '我喜欢',
    path: '/personal/love'
  },
  {
    icon: 'icon31',
    title: '本地和下载',
    path: '/personal/download'
  },
  {
    icon: 'iconshizhong',
    title: '播放历史',
    path: '/personal/history'
  },
  {
    icon: 'iconyinleliebiao',
    title: '试听列表',
    path: '/personal/try'
  }]
}
]

export const singertags=[
  {name:"全部歌手",id:"0"},
  {name:"入驻歌手",id:"5001"},
  {name:"华语男歌手",id:" 1001"},
  {name:"华语女歌手",id:" 1002"},
  {name:"华语组合/乐队",id:" 1003"},
  {name:"欧美男歌手",id:" 2001"},
  {name:"欧美女歌手",id:" 2002"},
  {name:"欧美组合/乐队",id:" 2003"},
  {name:"日本男歌手",id:" 6001"},
  {name:"日本女歌手",id:" 6002"},
  {name:"日本组合/乐队",id:" 6003"},
  {name:"韩国男歌手",id:" 7001"},
  {name:"韩国女歌手",id:" 7002"},
  {name:"韩国组合/乐队",id:" 7003"},
  {name:"其他男歌手",id:" 4001"},
  {name:"其他女歌手",id:" 4002"},
  {name:"其他组合/乐队",id:" 4003"},
]


export const mvMenuList = [
  {
    key:'1',
    title:'全部',
  },
  {
    key:'2',
    title:'最新',
  },
  {
    key:'3',
    title:'推荐',
  },
  {
    key:'4',
    title:'网易出品',
  }
]