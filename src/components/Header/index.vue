<template>
  <div class="flex-space header-wrapper">
    <div style="-webkit-app-region: no-drag" class="left">
      <i
        class="iconfont iconwebicon214"
        style="display:inline-block;margin-right:10px"
        @click="routeBack"
      ></i>
      <!-- <i class="iconfont iconxiangyou" @click="routeGo"></i> -->
      <div>
        <i class="iconfont iconshuaxin" @click="reloadWindow"></i>
      </div>
      <div class="search">
        <el-input
          size="mini"
          prefix-icon="el-icon-search"
          v-model="searchValue"
          placeholder="搜索音乐、MV、歌单、用户"
        ></el-input>
      </div>
    </div>
    <div class="right-icon" style="-webkit-app-region: no-drag">
      <i class="iconfont iconzuixiaohua1" @click="minimizeWindow"></i>
      <i class="iconfont iconzuidahua1 icon" v-show="isNormal" @click="normalWindow"></i>
      <i class="iconfont iconzuidahuazhijiao icon" v-show="!isNormal" @click="maximizeWindow"></i>
      <i class="iconfont iconguanbi2" @click="closeWindow"></i>
    </div>
  </div>
</template>
<script>
const { ipcRenderer } = require("electron");
import { MessageBox, Input } from "element-ui";
import HttpApi from "@/assets/api/index";
export default {
  name: "HeaderView",
  components: {
    "el-input": Input
  },
  props: {
    height: {
      type: String,
      default:'50'
    }
  },
  data() {
    return {
      isNormal: false,
      searchValue: ""
    };
  },
  methods: {
    // 刷新页面
    reloadWindow() {
      ipcRenderer.send("page-refresh");
    },
    // 最小化
    minimizeWindow() {
      ipcRenderer.send("all-window-mini");
    },
    // 最大化
    maximizeWindow() {
      this.isNormal = true;
      ipcRenderer.send("all-window-maxi");
    },
    // 正常化
    normalWindow() {
      this.isNormal = false;
      ipcRenderer.send("all-window-normal");
    },
    // 关闭窗口  ipcRenderer的send事件
    closeWindow() {
      MessageBox.confirm("此操作将关闭拼嘻嘻音乐, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          ipcRenderer.send("all-window-close");
        })
        .catch(() => {});
    },
    routeBack() {
      this.$router.back();
    }
    // routeGo(){
    //   this.$router.go()
    // }
  },
  async created() {}
};
</script>
<style lang="less" scoped>
.header-wrapper {
  padding: 10px 8px;
  .left {
    display: flex;
    flex-direction: row;
    .iconfont {
      display: inline-block;
      margin-top: 5px;
    }
    .search {
      margin-left: 15px;
      width: 200px;
      .el-input__inner {
        border: none;
        border-radius: 30px;
        background: #e9e9e9;
        color: #8c8c8c;
      }
    }
  }
  .right-icon {
    .iconfont {
      font-size: 12px;
      display: inline-block;
    }
    .iconfont:hover {
      color: #06a5ff;
    }
    .icon {
      padding: 0 15px;
    }
  }
}
</style>