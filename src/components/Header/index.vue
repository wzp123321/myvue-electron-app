<template>
  <div class="flex-space">
    <div>
      <!-- <i class="iconfont iconwebicon214"></i>
      <i class="iconfont iconxiangyou"></i>-->
      <i class="iconfont iconshuaxin"></i>
    </div>
    <div>
      <i class="iconfont iconzuidahua" @click="miniWindow"></i>
      <i class="iconfont iconzuixiaohua" @click="maxiWindow"></i>
      <i class="iconfont iconguanbi" @click="closeWindow"></i>
    </div>
  </div>
</template>
<script>
const { BrowserWindow, ipcRenderer } = require("electron");
import { MessageBox } from "element-ui";
export default {
  name: "HeaderView",
  components: {},
  data() {
    return {};
  },
  methods: {
    // 最小化
    miniWindow() {},
    // 最大化
    maxiWindow() {},
    // 关闭窗口
    closeWindow() {
      MessageBox.confirm("此操作将关闭拼嘻嘻音乐, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          ipcRenderer.on("all-window-close");
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
</style>