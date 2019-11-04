<template>
  <div class="flex-space header-wrapper">
    <div>
      <!-- <i class="iconfont iconwebicon214"></i>
      <i class="iconfont iconxiangyou"></i>-->
      <i class="iconfont iconshuaxin"></i>
    </div>
    <div class="right-icon">
      <i class="iconfont iconzuixiaohua1" @click="minimizeWindow"></i>
      <i class="iconfont iconzuidahua1" v-if="!isNormal" @click="normalWindow"></i>
      <i class="iconfont iconzuidahuazhijiao" v-if="isNormal" @click="maximizeWindow"></i>
      <i class="iconfont iconguanbi2" @click="closeWindow"></i>
    </div>
  </div>
</template>
<script>
const { ipcRenderer } = require("electron");
import { MessageBox } from "element-ui";
export default {
  name: "HeaderView",
  components: {},
  data() {
    return {
      isNormal: true
    };
  },
  methods: {
    // 最小化
    minimizeWindow() {
      ipcRenderer.send("all-window-mini");
    },
    // 最大化
    maximizeWindow() {
      ipcRenderer.send("all-window-maxi");
    },
    // 正常化
    normalWindow() {
      this.isNormal = true;
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
          this.isNormal = false;
          ipcRenderer.send("all-window-close");
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
.header-wrapper {
  padding-top: 10px;
  .right-icon {
    .iconfont {
      font-size: 12px;
      display: inline-block;
    }
    .iconfont:hover {
      color: #06a5ff;
    }
    .iconfont:nth-child(2) {
      padding: 0 15px;
    }
  }
}
</style>