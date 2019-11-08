<template>
  <div class="flex-space header-wrapper">
    <div style="-webkit-app-region: no-drag" class="left">
      <i
        class="iconfont iconxiangzuo"
        style="display:inline-block;margin-right:15px"
        @click="routeBack"
      ></i>
      <!-- <i class="iconfont iconxiangyou" @click="routeGo"></i> -->
      <div>
        <i class="iconfont iconshuaxin" @click="reloadWindow"></i>
      </div>
      <div class="search">
        <el-input
          size="mini"
          v-model="searchValue"
          @keyup.enter.native="search"
          :placeholder="placeholder"
        >
          <i slot="suffix" class="iconfont iconsousuo" @click="search"></i>
        </el-input>
      </div>
    </div>
    <div class="right-icon" style="-webkit-app-region: no-drag">
      <span>
        <i class="iconfont iconzuixiaohua1" @click="minimizeWindow"></i>
      </span>
      <span v-show="isNormal">
        <i class="iconfont iconzuidahua1 icon" @click="normalWindow"></i>
      </span>
      <span v-show="!isNormal">
        <i class="iconfont iconzuidahuazhijiao icon" @click="maximizeWindow"></i>
      </span>
      <span>
        <i class="iconfont iconguanbi2" @click="closeWindow"></i>
      </span>
    </div>
  </div>
</template>
<script>
const { ipcRenderer } = require("electron");
import { MessageBox, Input, Message } from "element-ui";
import HttpApi from "@/assets/api/index";

export default {
  name: "HeaderView",
  components: {
    "el-input": Input
  },
  props: {
    height: {
      type: String,
      default: "50"
    }
  },
  data() {
    return {
      isNormal: false,
      searchValue: "",
      trueValue: "",
      placeholder: "搜索音乐、MV、歌单、用户"
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
    },
    search() {
      // if () {
      //   Message.error("兄嘚，输点东西再搜呗!");
      // } else {
      this.$router.push(
        "/search/" +
          encodeURIComponent(
            this.searchValue.trim() === "" ? this.trueValue : this.searchValue
          )
      );
      // }
    },
    // 获取默认搜索值
    async getDefaultSearchKey() {
      const res = await HttpApi.getSearchDefaultKey();
      if (res && res.data) {
        const trueValue = res.data.data.realkeyword;
        const placeholder = res.data.data.showKeyword;
        this.trueValue = trueValue;
        this.placeholder = placeholder;
      }
    }
  },
  async created() {
    this.getDefaultSearchKey();
  }
};
</script>
<style lang="less" scoped>
.header-wrapper {
  padding: 6px 0;
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
    span {
      display: inline-block;
      padding: 1px 7px;
      .iconfont {
        font-size: 12px;
      }
    }
    span:hover {
      background: #eee;
      .iconfont {
        color: #06a5ff;
      }
    }
    span:last-child:hover {
      background: red;
      .iconfont {
        color: #fff;
      }
    }
  }
}
</style>