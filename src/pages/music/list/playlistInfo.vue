<template>
  <div class="playlist">
    <img :src="playInfo.picUrl" alt />
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
export default {
  name: "PlayList",
  props: {
    playInfo: {
      type: Object
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
  img {
    width: 100%;
    height: 110px;
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
</style>