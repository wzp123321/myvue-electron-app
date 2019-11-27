<template>
  <div class="mv-wrap" @click="toMvDetail(mvInfo.id)">
    <el-image style="width: 140px;height:80px" :src="mvInfo.cover" fit="contain"></el-image>
    <div class="name">{{mvInfo.name}}</div>
    <div class="name">{{mvInfo.artistName}}</div>
    <div class="desc">
      <span>{{mvInfo.briefDesc || '暂无描述'}}</span>
    </div>
    <div class="icon frs">
      <span>
        <i class="iconfont iconshizhong"></i>
        {{mvInfo.duration}}
      </span>
      <span>
        <i class="iconfont iconbofang"></i>
        {{mvInfo.playCount}}
      </span>
    </div>
  </div>
</template>
<script>
import { Image } from "element-ui";
export default {
  name: "MvInfo",
  props: {
    mvInfo: {
      type: Object
    }
  },
  components: {
    "el-image": Image
  },
  methods: {
    toMvDetail(id) {
      this.$router.push("/music/mv/info/" + id);
    }
  }
};
</script>
<style lang="less" scoped>
.mv-wrap {
  width: 140px;
  height: 160px;
  margin: 5px 10px;
  position: relative;
  bottom: 0;
  font-size: 10px;
  text-align: left;
  .el-image:hover {
    opacity: 0.8;
  }
  .name {
    font-size: 12px;
    padding: 3px 2px;
  }
  .desc {
    text-align: left;
  }
  .icon {
    font-size: 10px;
    width: 100%;
    padding: 9px 0;
    position: absolute;
    left: 0;
    top: 50px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    span {
      display: inline-block;
    }
    .iconfont {
      font-size: 8px;
    }
  }
}
.mv-wrap:hover {
  bottom: 3px;
}
</style>