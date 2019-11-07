<template>
  <div class="info-wrap">
    <el-table
      class="info-content"
      :data="historyList"
      style="width: 100%"
      @row-dblclick="playMusic(scope.row.id,scope.row.singername,scope.row.musicname,scope.row.pic)"
    >
      <el-table-column label="序号">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column label="歌手">
        <template slot-scope="scope">{{scope.row.singername}}</template>
      </el-table-column>
      <el-table-column label="歌名">
        <template slot-scope="scope">{{scope.row.musicname}}</template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <i
            class="iconfont iconbofang"
            @click="playMusic(scope.row.id,scope.row.singername,scope.row.musicname,scope.row.pic)"
          ></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { Table, TableColumn } from "element-ui";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "PlayHistory",
  computed: mapGetters(["historyList"]),
  components: {
    "el-table": Table,
    "el-table-column": TableColumn
  },
  methods: {
    ...mapActions(["setPlayList", "setCurrentSong", "setHistoryList"]),
    playMusic(id, singername, musicname, pic) {
      this.setCurrentSong({ id, singername, musicname, pic });
      this.setPlayList(this.historyList);
    }
  }
};
</script>
<style lang="less" scoped>
.info-wrap {
  width: 100%;
}
</style>