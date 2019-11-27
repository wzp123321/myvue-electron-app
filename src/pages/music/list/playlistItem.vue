<template>
  <div class="playlist" @click="getToInfo(playInfo.id)">
    <el-image
      style="width:100%;height:110px"
      :src="playInfo.picUrl || playInfo.coverImgUrl"
      fit="fill"
    ></el-image>
    <h4>{{playInfo.name}}</h4>
    <div class="icon frs">
      <div>
        <i class="iconfont iconerji"></i>
        {{playInfo.playCount}}
      </div>
      <div class="play">
        <i class="iconfont iconbofang"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { Image } from "element-ui";
export default {
  name: "PlayList",
  props: {
    playInfo: {
      type: Object
    }
  },
  components: {
    "el-image": Image
  },
  methods: {
    getToInfo(id) {
      this.$router.push("/music/playlist/info/" + id);
    }
  }
};
</script>
<style lang="less" scoped>
.playlist {
  width: 122px;
  height: 160px;
  border: 1px solid #eee;
  position: relative;
  bottom: 0;
  .el-image:hover {
    opacity: 0.7;
  }
  h4 {
    margin: 3px;
    font-size: 11px;
    text-align: left;
  }
  .icon {
    position: absolute;
    top: 81px;
    left: 0;
    width: 100%;
    font-size: 10px;
    padding: 6px 0px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    .play {
      display: none;
    }
    .play:hover {
      color: #06a5ff;
    }
  }
  .icon:hover {
    .play {
      display: inline-block;
    }
  }
}
.playlist:hover {
  bottom: 3px;
}
</style>