<template>
  <div class="singer">
    <SingerItem v-for="(item,index) in artists" :key="index" :singerInfo="item"></SingerItem>
  </div>
</template>
<script>
import SingerItem from "@/pages/music/singer/singerItem";
export default {
  name: "ArtistModule",
  components: {
    SingerItem
  },
  props: {
    artists: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.singer {
  display: flex;
  flex-wrap: wrap;
}
</style>