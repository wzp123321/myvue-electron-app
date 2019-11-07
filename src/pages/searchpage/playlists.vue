<template>
  <div class="playlist">
    <PlayList v-for="(item,index) in playlists" :key="index" :playInfo="item"></PlayList>
  </div>
</template>
<script>
import PlayList from "@/pages/music/list/playlistItem";
export default {
  name: "",
  components: {
    PlayList
  },
  props: {
    playlists: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.playlist {
  display: flex;
  flex-wrap: wrap;
  .playlist {
    margin: 10px;
  }
}
</style>