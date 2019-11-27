<template>
  <div class="footer-view">
    <a-player
      :autoplay="true"
      ref="audio"
      :showLrc="true"
      @ended="playEnd('right')"
      :music="{
        title:song.musicname,
        artist: song.singername,
        src,
        pic: song.pic,
        lrc
      }"
      :list="playList"
    ></a-player>
    <div class="icon">
      <i class="iconfont iconshangyishou" @click="playEnd('left')"></i>
      <i class="iconfont iconxiayishou" @click="playEnd('right')"></i>
    </div>
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
    playEnd(type) {
      const song = this.song;
      let sort = 0;
      this.playList.map((item, index) => {
        if (item.id === song.id) {
          if (type === "right") {
            // 下一首
            sort = index === this.playList.length - 1 ? 0 : index + 1;
          } else {
            // 上一首
            sort = index === 0 ? this.playList.length - 1 : index - 1;
          }
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
  .icon {
    position: absolute;
    top: 34px;
    left: 100px;
    .iconfont {
      font-size: 22px;
      color: #706a6a;
      display: inline-block;
      margin: 0 5px;
    }
    .iconfont:hover {
      font-size: 24px;
      color: #31c27c;
    }
  }
}
</style>