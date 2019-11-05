<template>
  <div class="footer-view">
    <a-player
      :showLrc="true"
      mode="single"
      :music="{
        title: song.title,
        author: song.author,
        url:song.url,
        pic: song.pic,
        lrc:''
    }"
    :list="playList"
    ></a-player>
  </div>
</template>
<script>
import VueAplayer from "vue-aplayer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Footer",
  components: {
    "a-player": VueAplayer
  },
  computed: mapGetters(["song", "playList"]),
  props: {
    height: {
      type: String,
      default: "70"
    }
  },
  methods: {
    ...mapActions(["getCurrentSong", "getPlayList"])
  },
  created() {
    console.log(this.song);
  }
};
</script>
<style lang="less" scoped>
.footer-view {
  height: 90px;
  position: relative;
  z-index: 200;
  padding-bottom: 10px;
}
</style>