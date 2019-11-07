<template>
  <div class="singer-wrap">
    <SingerHeader :id="id" @gettagid="getTagId"></SingerHeader>
    <div class="item">
      <SingerItem v-for="(item,index) in singers" :key="index" :singerInfo="item"></SingerItem>
    </div>
  </div>
</template>
<script>
import SingerHeader from "./sinerHeader";
import HttpApi from "@/assets/api/index";
import SingerItem from "./singerItem";
import { Loading } from "element-ui";
let loadingService;
export default {
  name: "SingerModule",
  components: {
    SingerHeader,
    SingerItem
  },
  data() {
    return {
      id: "0",
      singers: []
    };
  },
  methods: {
    getTagId(id) {
      this.id = id;
    },
    async getSingerListById() {
      loadingService = Loading.service({ fullscreen: true });
      const method =
        this.id === "0" ? "getHotSingerList" : "getSingerListByCat";
      const params = this.id === "0" ? {} : { cat: this.id };
      const res = await HttpApi[method](params);

      if (res && res.data) {
        const singers = res.data.artists;
        this.singers = singers;
        loadingService.close();
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.getSingerListById();
    });
  },
  watch: {
    id: function(newVal, oldVal) {
      this.getSingerListById();
    }
  }
};
</script>
<style lang="less" scoped>
.singer-wrap {
  display: flex;
  flex-direction: column;
  .item {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>