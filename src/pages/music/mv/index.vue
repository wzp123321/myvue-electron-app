<template>
  <div class="mv-content">
    <MvHeader @change="menuChange"></MvHeader>
    <div class="area-div">
      <span></span>
    </div>
    <div class="type-div">
      <span></span>
    </div>
    <div class="mv-item">
      <MvInfo v-for="(item,index) in mvlist" :key="index" :mvInfo="item"></MvInfo>
    </div>
  </div>
</template>
<script>
import MvHeader from "./mvheader";
import MvInfo from "./mvitem";
import HttpApi from "@/assets/api/index";
import { Loading } from "element-ui";

let loadingService;
export default {
  name: "MvModule",
  components: {
    MvHeader,
    MvInfo
  },
  data() {
    return {
      offset: 0, // 当前页码
      total: 10, // 总数
      mvlist: []
    };
  },
  methods: {
    menuChange(val) {
      if (val === "1") {
        this.getTotalMvList();
      } else if (val === "2") {
        this.getNewMvList();
      } else if (val === "3") {
        this.getRecommendMvList();
      } else {
        this.getWyMvList();
      }
    },
    // 获取全部mv列表
    async getTotalMvList() {
      loadingService = Loading.service({ fullscreen: true });
      const res = await HttpApi.getMvListByAreaType({ limit: 20, offset: 0 });
      if (res && res.data) {
        const mvlist = res.data.data;
        const total = res.data.count;
        this.mvlist = mvlist;
        this.total = total;
        loadingService.close();
      }
    },
    // 获取最新mv列表
    async getNewMvList() {
      loadingService = Loading.service({ fullscreen: true });
      const res = await HttpApi.getNewMvList({ limit: 20 });
      if (res && res.data) {
        const mvlist = res.data.data;
        this.mvlist = mvlist;
        loadingService.close();
      }
    },
    // 获取推荐mv列表
    async getRecommendMvList() {
      loadingService = Loading.service({ fullscreen: true });
      const res = await HttpApi.getRecommendMvList({ limit: 20 });
      if (res && res.data) {
        const mvlist = res.data.result;
        this.mvlist = mvlist;
        loadingService.close();
      }
    },
    // 获取网易出品mv列表
    async getWyMvList() {
      loadingService = Loading.service({ fullscreen: true });
      const res = await HttpApi.getWYMvList({ limit: 20 });
      if (res && res.data) {
        const mvlist = res.data.data;
        this.mvlist = mvlist;
        loadingService.close();
      }
    }
  },
  created() {
    this.getTotalMvList();
  }
};
</script>
<style lang="less" scoped>
.mv-content {
  display: flex;
  flex-direction: column;
  .mv-item {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>