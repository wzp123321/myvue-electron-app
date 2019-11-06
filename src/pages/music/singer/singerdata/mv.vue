<template>
  <div class="mv-wrap">
    <div v-for="(item,index) in mvs" :key="index" class="mvitem">
      <el-image :src="item.imgurl" style="width:125px;height:90px"></el-image>
      <h2>{{item.name}}</h2>
      <div class="artist">
        <span>{{item.artistName}}</span>
        <span>{{item.publishTime}}</span>
      </div>
      <div class="icon frs">
        <span>
          <i class="iconfont iconshizhong"></i>
          {{item.duration}}
        </span>
        <span>
          <i class="iconfont iconbofang"></i>
          {{item.playCount}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { Image } from "element-ui";
export default {
  name: "SingerMv",
  components: {
    "el-image": Image
  },
  props: {
    mvs: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.mv-wrap {
  display: flex;
  flex-wrap: wrap;
  .mvitem {
    margin: 10px;
    width: 125px;
    height: 155px;
    border: 1px solid #eee;
    display: flex;
    position: relative;
    flex-direction: column;
    h2 {
      font-size: 10px;
    }
    .artist {
      font-size: 10px;
    }
    .icon {
      width: 100%;
      height: 30px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 61px;
      left: 0;
      align-content: center;
      span {
        font-size: 8px;
        display: inline-block;
        padding-top: 5px;
        color: #fff;
      }
    }
  }
}
</style>