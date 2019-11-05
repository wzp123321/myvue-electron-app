<template>
  <div class="list-wrapper">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(bannerItem,index) in banners" :key="index">
        <img :src="bannerItem.imageUrl" alt class="bannerimg" />
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <h2>为您推荐歌单</h2>
      <span v-for="(typeItem,index) in types" :key="index" class="type-span">{{typeItem.name}}</span>
    </div>
    <div class="list">
      <PlayList v-for="(listItem,index) in playlists" :key="index" :playInfo="listItem"></PlayList>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from "element-ui";
import HttpApi from "@/assets/api/index";
import PlayList from "./playlistInfo";
export default {
  name: "ListModule",
  components: {
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem,
    PlayList
  },
  data() {
    return {
      banners: [],
      types: [],
      playlists: []
    };
  },
  methods: {
    async getBannersList() {
      const res = await HttpApi.getPCBannersList({ type: 0 });
      if (res && res.data) {
        const banners = res.data.banners;
        this.banners = banners;
      }
    },
    async getPlayListType() {
      const res = await HttpApi.getPlayListTypeList();
      if (res && res.data) {
        const types = res.data.sub.splice(0, 8);
        this.types = types;
      }
    },
    async getPlayList() {
      const res = await HttpApi.getIntroPlayList();
      if (res && res.data) {
        const playlists = res.data.result.splice(0, 12);
        this.playlists = playlists;
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.getBannersList();
      this.getPlayListType();
      this.getPlayList();
    });
  }
};
</script>
<style lang="less" scoped>
.list-wrapper {
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
  margin: 0 20px;
  .bannerimg {
    width: 100%;
    height: 100%;
  }
  .title {
    text-align: left;
    h2 {
      margin: 10px 0;
    }
    .type-span {
      display: inline-block;
      padding: 10px 21px;
      margin-right: 10px;
      background: #fff;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .playlist {
      margin: 10px;
    }
  }
}
</style>