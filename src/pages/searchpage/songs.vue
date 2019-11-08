<template>
  <el-table :data="songs" style="width: 100%" @row-dblclick="rowDbClick">
    <el-table-column label="序号">
      <template slot-scope="scope">{{scope.$index+1}}</template>
    </el-table-column>
    <el-table-column label="歌手">
      <template slot-scope="scope">{{scope.row.artists[0].name}}</template>
    </el-table-column>
    <el-table-column label="歌名">
      <template slot-scope="scope">{{scope.row.name}}</template>
    </el-table-column>
    <el-table-column label="时长">
      <template slot-scope="scope">{{format(scope.row.duration)}}</template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <i
          class="iconfont iconbofang"
          @click="playMusic(scope.row.id,scope.row.artists[0].name,scope.row.name,scope.row.artists[0].img1v1Url)"
        ></i>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { Table, TableColumn } from "element-ui";
import { formatDuring } from "@/utils/formatDate";
import { mapActions } from "vuex";
export default {
  name: "SongsModule",
  components: {
    "el-table": Table,
    "el-table-column": TableColumn
  },
  props: {
    songs: {
      type: Array
    }
  },
  methods: {
    ...mapActions(["setCurrentSong", "setPlayList"]),
    format(time) {
      return formatDuring(time);
    },
    rowDbClick(row, column, e) {
      this.playMusic(
        row.id,
        row.artists[0].name,
        row.name,
        row.artists[0].img1v1Url
      );
    },
    playMusic(id, singername, musicname, pic) {
      this.setCurrentSong({ id, singername, musicname, pic });
      const playList = this.songs.map(item => {
        return {
          id: item.id,
          singername: item.artists[0].name,
          musicname: item.name,
          pic: item.artists[0].img1v1Url
        };
      });
      this.setPlayList(playList);
    }
  }
};
</script>
<style lang='less' scoped>
table {
  tbody {
    tr:hover {
      .iconfont {
        transform: 300ms all;
        font-size: 18px;
      }
    }
  }
}
</style>