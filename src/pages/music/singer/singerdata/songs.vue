<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="序号">
      <template slot-scope="scope">{{scope.$index+1}}</template>
    </el-table-column>
    <el-table-column label="歌手">
      <template slot-scope="scope">{{scope.row.ar[0].name}}</template>
    </el-table-column>
    <el-table-column label="歌名">
      <template slot-scope="scope">{{scope.row.name}}</template>
    </el-table-column>
    <el-table-column label="所属专辑">
      <template slot-scope="scope">{{scope.row.al.name}}</template>
    </el-table-column>
    <el-table-column class="icon-column">
      <template slot-scope="scope">
        <i class="iconfont iconxihuan" style="color:pink"></i>
        <i
          class="iconfont iconbofang"
          @click="playMusic(scope.row.id,scope.row.ar[0].name,scope.row.name,scope.row.al.picUrl)"
        ></i>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { Table, TableColumn } from "element-ui";
import { mapActions } from "vuex";
export default {
  name: "SingerSong",
  props: {
    tableData: {
      type: Array
    }
  },
  components: {
    "el-table": Table,
    "el-table-column": TableColumn
  },
  methods: {
    ...mapActions(["setCurrentSong", "setPlayList", "setHistoryList"]),
    playMusic(id, singername, musicname, pic) {
      this.setCurrentSong({ id, singername, musicname, pic });
      this.setHistoryList({ id, singername, musicname, pic });
      const playList = this.tableData.map(item => {
        return {
          id: item.id,
          singername: item.ar[0].name,
          musicname: item.al.name,
          pic: item.al.picUrl
        };
      });
      this.setPlayList(playList);
    }
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  display: inline-block;
  margin: 0 5px;
}
.iconfont:hover {
  color: #06a5ff;
  cursor: pointer;
}
</style>