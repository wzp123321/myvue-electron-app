<template>
  <div class="singerinfo">
    <div class="info" v-if="singerInfo.artist">
      <img :src="singerInfo.artist.img1v1Url" style="width:100%;height:280px" alt />
      <el-tabs v-model="activeName" style="margin-top:20px" type="card" @tab-click="handleClick">
        <el-tab-pane label="热门歌曲" name="first">
          <SingerSong :tableData="singerInfo.hotSongs"></SingerSong>
        </el-tab-pane>
        <el-tab-pane label="MV" name="second">
          <SingerMv :mvs="singermvs"></SingerMv>
        </el-tab-pane>
        <el-tab-pane label="歌手介绍" name="third">
          <Singerdesc :introduction="introduction"></Singerdesc>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="desc">
      <h2>个人简介</h2>
      <div class="content">
        <div>{{description}}</div>
        <div>
          <span @click="()=>{isOpen = !isOpen}">
            {{isOpen ? '收起':'展开'}}
            <i class="iconfont" :class="isOpen ? 'iconup' : 'icondown'"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HttpApi from "@/assets/api/index";
import { Tabs, TabPane, Loading } from "element-ui";
import SingerMv from "./singerdata/mv";
import Singerdesc from "./singerdata/desc";
import SingerSong from "./singerdata/songs";
let loadingService;
export default {
  name: "SingerInfo",
  components: {
    "el-tabs": Tabs,
    "el-tab-pane": TabPane,
    Singerdesc,
    SingerSong,
    SingerMv
  },
  data() {
    return {
      id: "",
      singerInfo: {},
      singerDesc: {},
      introduction: [],
      singermvs: [],
      isOpen: false,
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, e) {},
    async getSingerDesc() {
      loadingService = Loading.service({ fullscreen: true });
      const { id } = this;
      const res = await HttpApi.getSingerDescbyId({ id });
      if (res && res.data) {
        const singerDesc = res.data;
        const introduction = res.data.introduction;
        this.singerDesc = singerDesc;
        this.introduction = introduction;
        loadingService.close();
      }
    },
    async getSingerMVList() {
      loadingService = Loading.service({ fullscreen: true });
      const { id } = this;
      const res = await HttpApi.getSingerMVList({ id });
      if (res && res.data) {
        const singermvs = res.data.mvs;
        this.singermvs = singermvs;
        loadingService.close();
      }
    },
    async getSingerArtist() {
      loadingService = Loading.service({ fullscreen: true });
      const { id } = this;
      const res = await HttpApi.getSingerArtist({ id });
      if (res && res.data) {
        const singerInfo = res.data;
        this.singerInfo = singerInfo;
        loadingService.close();
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.$nextTick(() => {
      this.getSingerMVList();
      this.getSingerDesc();
      this.getSingerArtist();
    });
  },
  computed: {
    description: {
      get() {
        if (
          this.singerDesc.briefDesc &&
          this.singerDesc.briefDesc.length > 45 &&
          !this.isOpen
        ) {
          return this.singerDesc.briefDesc.substring(0, 49) + "...";
        }
        return this.singerDesc.briefDesc;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.singerinfo {
  display: flex;
  flex-direction: row;
  justify-content: start;
  .info {
    flex: 1;
    margin: 10px;
    img {
      border-radius: 5px;
    }
  }
  .desc {
    width: 200px;
    padding-left: 10px;
    h2 {
      font-size: 24px;
      margin-bottom: 0;
    }
    .content {
      font-size: 12px;
      padding: 10px;
      div:last-child {
        text-align: right;
        color: #06a5ff;
        transition: 500ms all;
        span {
          .iconfont {
            display: inline-block;
            margin-top: 10px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>