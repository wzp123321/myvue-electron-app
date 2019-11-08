<template>
  <div class="mvinfo">
    <h1>{{mvinfo.name}}</h1>
    <h6>{{mvinfo.artistName }}</h6>
    <div class="button-div">
      <el-button size="mini" type="primary" icon="iconfont icon-shoucang">{{mvinfo.subCount}}</el-button>
      <el-button
        size="mini"
        type="success"
        icon="iconfont el-icon-s-comment"
      >{{mvinfo.commentCount}}</el-button>
      <el-button size="mini" type="info" icon="iconfont el-icon-video-play">{{mvinfo.playCount}}</el-button>
      <el-button size="mini" type="warning" icon="iconfont el-icon-share">{{mvinfo.shareCount}}</el-button>
    </div>
    <div class="video-div" v-if="mvinfo.brs">
      <video
        :src="mvinfo.brs[1080]"
        ref="vedioEle"
        :autoplay="false"
        volume="0.5"
        :loop="true"
        controls="controls"
        :poster="mvinfo.cover"
        @click="onVideoClick"
        @pause="getVideoPause"
        @play="getVideoPlay"
        @timeupdate="timeUpdateHandler"
        @ended="endHandler"
        :muted="isMuted"
      ></video>
      <div class="video-header">
        <router-link to="/">返回首页</router-link>|
        <span>{{mvinfo.name}}</span>
      </div>
      <div class="video-tool">
        <div class="speed">
          <ul class="speed-ul">
            <li v-for="(item,index) in speedlist" :key="index" @click="chooseSpeed(item)">{{item}}</li>
          </ul>
          <span class="current">{{speed}}X</span>
        </div>
      </div>
      <div class="play-icon" v-show="isLoaded">
        <!-- 暂停 -->
        <i v-if="!isplay" class="iconfont iconweibiaoti--" @click="getVideoPlay"></i>
        <!-- 播放 -->
        <i v-if="isplay && !isMouseStop" class="iconfont iconzanting1" @click="getVideoPause"></i>
      </div>
    </div>
  </div>
</template>
<script>
import HttpApi from "@/assets/api/index";
import { Button } from "element-ui";
import { setInterval } from "timers";

let interval = null;
export default {
  name: "Videoplay",
  components: {
    "el-button": Button
  },
  data() {
    return {
      mvinfo: {},
      isMuted: true,
      speed: 1.0,
      isLoaded: false,
      isplay: false,
      isMouseStop: true,
      speedlist: ["0,5", "1.0", "1.5", "2.0"]
    };
  },
  methods: {
    // video点击事件
    onVideoClick() {
      this.isplay = !this.isplay;
    },
    timeUpdateHandler() {},
    // 播放结束
    endHandler() {
      this.isplay = false;
      this.$refs.vedioEle.pause();
    },
    // 点击播放icon
    getVideoPlay() {
      this.isplay = true;
      this.$refs.vedioEle.play();
    },
    // 点击暂停icon
    getVideoPause() {
      this.isplay = false;
      this.$refs.vedioEle.pause();
    },
    // 播放速度
    chooseSpeed(value) {
      this.speed = value;
      this.$refs.vedioEle.playbackRate = Number(value);
    },
    // 监听鼠标移动事件
    listenMouseMove(e) {
      this.isMouseStop = false;
    },
    async getMvDetailById() {
      this.$myLoading.open();
      const res = await HttpApi.getMvDetailByd({ mvid: this.$route.params.id });
      if (res && res.data) {
        const mvinfo = res.data.data;
        this.mvinfo = mvinfo;
        this.isLoaded = true;
        this.$myLoading.hide();
      }
    }
  },
  created() {
    this.getMvDetailById();
    // 添加监听鼠标移动事件
    interval = setInterval(() => {
      this.isMouseStop = true;
    }, 3000);
    window.addEventListener("mousemove", this.listenMouseMove);
  },
  // 销毁前清楚定时器
  beforeDestroy() {
    clearInterval(interval);
  }
};
</script>
<style lang="less" scoped>
.mvinfo {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  margin-left: 10px;
  h1 {
    margin: 10px 0;
    font-size: 20px;
  }
  h6 {
    margin: 10px 0;
    font-size: 14px;
  }
  .button-div {
    display: flex;
    flex-direction: row;
  }
  .video-div {
    width: 750px;
    height: 400px;
    margin-top: 20px;
    position: relative;
    video {
      width: 100%;
      height: 100%;
      background: #000;
    }
    .video-header,
    .video-tool {
      position: absolute;
      color: #fff;
      font-size: 12px;
    }
    .video-header {
      left: 0;
      top: 0;
      margin-top: 3px;
      margin-left: 3px;
      a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        margin-right: 3px;
      }
      &:hover {
        font-size: 13px;
      }
    }
    .video-tool {
      bottom: 40px;
      right: 140px;
      .speed {
        width: 40px;
        height: 150px;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        ul {
          width: 40px;
          height: 90px;
          display: none;
          position: absolute;
          bottom: 7px;
          padding-left: 0px;
          opacity: 0.7;
          border-radius: 5px;
          right: 2px;
          li {
            list-style: none;
            display: block;
            padding: 4px 0;
          }
          li:hover {
            font-size: 13px;
            opacity: 0.9;
          }
        }
        .current {
          display: inline-block;
        }
      }
      .speed:hover {
        .speed-ul {
          background: #000;
          display: inline-block;
        }
      }
    }
    .play-icon {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 40%;
      left: 49%;
      color: #fff;
      z-index: 99;
      .iconfont {
        font-size: 48px;
      }
    }
  }
}
</style>