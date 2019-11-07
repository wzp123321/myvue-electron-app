<template>
  <div class="footer-view">
    <a-player
      :autoplay="true"
      ref="audio"
      :showLrc="true"
      @ended="playEnd"
      :music="{
        title:song.musicname,
        artist: song.singername,
        src,
        pic: song.pic,
        lrc
      }"
      :list="playList"
    ></a-player>
  </div>
</template>
<script>
import VueAplayer from "vue-aplayer";
import { mapGetters, mapActions } from "vuex";
import { Message } from "element-ui";
import HttpApi from "@/assets/api/index";
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
  data() {
    return {
      lrc: "",
      src: "ddddddddd"
    };
  },
  methods: {
    ...mapActions(["setCurrentSong"]),
    async getMusicLyricById() {
      const res = await HttpApi.getMusicLyricById({ id: this.song.id });

      if (res && res.data && res.data.lrc && res.data.lrc.lyric) {
        const lrc = res.data.lrc.lyric;
        this.lrc = lrc;
      }
    },
    async getMusicUrlById() {
      const res = await HttpApi.getMusicUrlById({ id: this.song.id });
      if (res && res.data && res.data.data[0].url) {
        const src = res.data.data[0].url;
        this.src = src;
      } else {
        // 暂停播放
        this.$refs.audio.pause();
        Message.error("sorry，该歌曲暂无版权!");
      }
    },
    playEnd() {
      const song = this.song;
      let sort = 0;
      this.playList.map((item, index) => {
        if (item.id === song.id) {
          sort = index === this.playList.length - 1 ? 0 : index + 1;
        }
      });
      this.setCurrentSong(this.playList[sort]);
    }
  },
  watch: {
    song: function(newVal, oldVal) {
      if (JSON.stringify(newVal) !== "{}") {
        document
          .getElementsByTagName("audio")[0]
          .setAttribute("autoplay", true);
        this.$refs.audio.play();
        this.getMusicLyricById();
        this.getMusicUrlById();
      }
    }
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