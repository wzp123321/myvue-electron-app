<template>
  <div class="info-wrap">
    <div class="info-header fr-start">
      <el-image :src="playInfo.coverImgUrl" style="width:160px"></el-image>
      <div class="header-title">
        <h1>{{playInfo.name}}</h1>
        <div class="avatar-div" v-if="playInfo.creator">
          <el-avatar :size="20" :src="playInfo.creator.avatarUrl"></el-avatar>
          <span>{{playInfo.creator.nickname}}</span>
        </div>
        <div>
          <el-button
            @click="playAll"
            size="mini"
            type="primary"
            icon="iconfont icon-bofangsanjiaoxing"
          >播放全部</el-button>
          <el-button size="mini" icon="iconfont icon-shoucang">收藏</el-button>
          <el-button size="mini" icon="iconfont icon-xiazai2">下载</el-button>
          <el-button size="mini" icon="iconfont icon-piliangcaozuo">批量操作</el-button>
          <el-button size="mini" icon="iconfont icon-20">分享</el-button>
        </div>
        <div class="desc">{{playInfo.description}}</div>
      </div>
    </div>
    <el-table class="info-content" :data="playInfo.tracks" style="width: 100%">
      <el-table-column label="序号">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column label="歌手">
        <template slot-scope="scope">{{scope.row.ar[0].name}}</template>
      </el-table-column>
      <el-table-column label="歌名">
        <template slot-scope="scope">{{scope.row.name}}</template>
      </el-table-column>
      <el-table-column label="时长">
        <template slot-scope="scope">{{format(scope.row.dt)}}</template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <i
            class="iconfont iconbofang"
            @click="playMusic(scope.row.id,scope.row.ar[0].name,scope.row.name,scope.row.al.picUrl)"
          ></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { Image, Avatar, Button, Table, TableColumn } from "element-ui";
import HttpApi from "@/assets/api/index";
import { formatDuring } from "@/utils/formatDate";
import { mapActions } from "vuex";
export default {
  name: "PlayInfo",
  components: {
    "el-image": Image,
    "el-avatar": Avatar,
    "el-button": Button,
    "el-table": Table,
    "el-table-column": TableColumn
  },
  data() {
    return {
      playInfo: {}
    };
  },
  methods: {
    ...mapActions(["setPlayList", "setCurrentSong"]),
    async getPlayInfo() {
      const id = this.$route.params.id;
      const res = await HttpApi.getPlayListDetailById({ id });
      if (res && res.data) {
        const playInfo = res.data.playlist;
        this.playInfo = playInfo;
      }
    },
    format(time) {
      return formatDuring(time);
    },
    setplayList() {
      const playList = this.playInfo.tracks.map(item => {
        return {
          id: item.id,
          singername: item.ar[0].name,
          musicname: item.al.name,
          pic: item.al.picUrl
        };
      });
      this.setPlayList(playList);
    },
    playMusic(id, singername, musicname, pic) {
      this.setCurrentSong({ id, singername, musicname, pic });
      this.setplayList();
    },
    playAll() {
      const id = this.playInfo.tracks[0].id;
      const singername = this.playInfo.tracks[0].al.name;
      const musicname = this.playInfo.tracks[0].ar[0].name;
      const pic = this.playInfo.tracks[0].al.picUrl;
      this.setCurrentSong({ id, singername, musicname, pic });
      this.setplayList();
    }
  },
  created() {
    this.getPlayInfo();
  }
};
</script>
<style lang="less" scoped>
.info-wrap {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  .info-header {
    .header-title {
      margin-left: 10px;
      h1 {
        margin: 5px 0;
      }
      .avatar-div {
        position: relative;
        span:last-child {
          font-size: 12px;
          position: absolute;
          top: 2px;
          left: 26px;
        }
      }
      .desc {
        font-size: 12px;
      }
    }
  }
  .info-content {
    padding: 10px;
  }
}
</style>