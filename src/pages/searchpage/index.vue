<template>
  <el-tabs style="width:100%;height:100%" v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="单曲" name="first">
      <SongsModule :songs="songs"></SongsModule>
    </el-tab-pane>
    <el-tab-pane label="MV" name="second">
      <MvModule :mvs="mvs"></MvModule>
    </el-tab-pane>
    <el-tab-pane label="歌单" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="歌手" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
import HttpApi from "@/assets/api/index";
import { Tabs, TabPane } from "element-ui";
import SongsModule from "./songs";
import MvModule from "./mvs";
export default {
  name: "Searchmodule",
  components: {
    SongsModule,
    MvModule,
    "el-tabs": Tabs,
    "el-tab-pane": TabPane
  },
  data() {
    return {
      activeName: "first",
      songs: [],
      playlists: [],
      mvs: [],
      artists: []
    };
  },
  methods: {
    handleClick(e) {},
    async getSearchData() {
      const keywords = this.$route.params.key;
      const arrays = ["songs", "playlists", "mvs", "artists"];

      const PromiseAll = [
        HttpApi.getSearchData({ keywords, type: 1, limit: 50 }),
        HttpApi.getSearchData({ keywords, type: 1000, limit: 50 }),
        HttpApi.getSearchData({ keywords, type: 1004, limit: 50 }),
        HttpApi.getSearchData({ keywords, type: 100, limit: 50 })
      ];

      const resolveAll = await Promise.all(PromiseAll);

      if (resolveAll) {
        resolveAll.forEach((item, index) => {
          if (item && item.data && item.data.result) {
            const data = item.data.result[arrays[index]];
            this[arrays[index]] = data;
          }
        });
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.getSearchData();
    });
  }
};
</script>
<style lang="less" scoped>
</style>