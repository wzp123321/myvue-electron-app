/**
 * 包含n个接口请求函数的模块
 */
import {
  getRequest
} from './ajax.js'

export default {
  $$path: {
    getpcbanners: '/banner',
    getintroduceplaylist: '/personalized',
    getplaylisttypelist: '/playlist/catlist',
    getintroducealbumlist: '/top/album',
    gettopmusiclist: '/top/list',
    getmusicurl: '/song/url',
    getmusicdetail: '/song/detail',
    getmusiclyricbyid: '/lyric',
    getsingerlistbycat: '/artist/list',
    gethotsingerlist: '/top/artists',
    getsingerdescbyid: '/artist/desc',
    getsingerartist: '/artists',
    getsingermvlist: '/artist/mv',
    getmvdetailbyid: '/mv/detail',
    getmvcommentlist: '/comment/mv',
    getdjbannerlist: '/dj/banner',
    gethotdjlist: '/dj/hot',
    getsearchdata: '/search',
    getmvbytypearea: '/mv/all',
    getuserloginbyphone: '/login/cellphone',
    getuserloginbyemail: '/login',
    getalbuminfobyid: '/album',
    getalbumdatacountbyid: '/album/detail/dynamic',
    getvideoinfo: '/video/detail',
    getvideourlbyid: '/video/url',
    getvideocommentbyid: '/comment/video',
    getplaylistinfo: '/playlist/detail'
  },
  //   推荐页面banner
  getPCBannersList(params) {
    return getRequest(this.$$path.getpcbanners, params)
  },
  //   推荐歌单
  getIntroPlayList(params) {
    return getRequest(this.$$path.getintroduceplaylist, params)
  },
  //  歌单分类
  getPlayListTypeList(params) {
    return getRequest(this.$$path.getplaylisttypelist, params)
  },
  //    新碟上市
  getAlbumList(params) {
    return getRequest(this.$$path.getintroducealbumlist, params)
  },
  //    获取排行榜歌曲列表
  getTopMusicList(params) {
    return getRequest(this.$$path.gettopmusiclist, params)
  },
  //    根据id获取歌曲播放地址
  getMusicUrlById(params) {
    return getRequest(this.$$path.getmusicurl, params)
  },
  //    根据id获取歌曲信息
  getMusicDetailById(params) {
    return getRequest(this.$$path.getmusicdetail, params)
  },
  //    根据id获取歌曲歌词
  getMusicLyricById(params) {
    return getRequest(this.$$path.getmusiclyricbyid, params)
  },
  //    获取入驻歌手 & 根据type获取歌手
  getSingerListByCat(params) {
    return getRequest(this.$$path.getsingerlistbycat, params)
  },
  //    获取热门歌手
  getHotSingerList(params) {
    return getRequest(this.$$path.gethotsingerlist, params)
  },
  //    根据id获取歌手描述
  getSingerDescbyId(params) {
    return getRequest(this.$$path.getsingerdescbyid, params)
  },
  //    根据id获取歌手
  getSingerArtist(params) {
    return getRequest(this.$$path.getsingerartist, params)
  },
  //    根据id获取歌手MV
  getSingerMVList(params) {
    return getRequest(this.$$path.getsingermvlist, params)
  },
  //    根据id获取MV细节
  getMvDetailByd(params) {
    return getRequest(this.$$path.getmvdetailbyid, params)
  },
  //    根据id获取mv评论
  getMvCommentByid(params) {
    return getRequest(this.$$path.getmvcommentlist, params)
  },
  //    获取电台banner
  getDJBannerList(params) {
    return getRequest(this.$$path.getdjbannerlist, params)
  },
  //    获取热门电台
  getHotDJList(params) {
    return getRequest(this.$$path.gethotdjlist, params)
  },
  //    搜索
  getSearchData(params) {
    return getRequest(this.$$path.getsearchdata, params)
  },
  //    根据地区 类型获取mv
  getMvListByAreaType(params) {
    return getRequest(this.$$path.getmvbytypearea, params)
  },
  //    用户手机号码登录
  getUserLoginByPhone(params) {
    return getRequest(this.$$path.getuserloginbyphone, params)
  },
  //    用户邮箱登录
  getUserLoginByEmail(params) {
    return getRequest(this.$$path.getuserloginbyemail, params)
  },
  //    根据id获取专辑信息
  getAlbumInfoById(params) {
    return getRequest(this.$$path.getalbuminfobyid, params)
  },
  // 调用此接口 , 传入专辑 id, 可获得专辑动态信息,如是否收藏,收藏数,评论数,分享数
  getAlbumDataCountById(params) {
    return getRequest(this.$$path.getalbumdatacountbyid, params)
  },
  //    根据id获取视频信息
  getVideoInfoById(params) {
    return getRequest(this.$$path.getvideoinfo, params)
  },
  // 根据id获取视频播放地址
  getVideoUrlById(params) {
    return getRequest(this.$$path.getvideourlbyid, params)
  },
  // 根据id获取视频评论
  getVideoCommentById(params) {
    return getRequest(this.$$path.getvideocommentbyid, params)
  },
  // 根据id获取歌单详情
  getPlayListDetailById(params) {
    return getRequest(this.$$path.getplaylistinfo, params)
  },
}
