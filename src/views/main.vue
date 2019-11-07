<template>
  <div>
    <el-container class="container" id="main">
      <el-container class="top">
        <el-aside width="180px" class="aside">
          <aside-view />
        </el-aside>
        <el-container>
          <el-header class="header" height="50px" style="-webkit-app-region: drag">
            <header-view height="50px" />
          </el-header>
          <el-scrollbar class="scroll-page">
            <el-main class="main">
              <router-view></router-view>
            </el-main>
          </el-scrollbar>
        </el-container>
      </el-container>
      <el-footer class="footer" height="100px">
        <footer-view height="100px" />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import { Container, Header, Main, Footer, Aside, Scrollbar } from "element-ui";
import AsideView from "@/components/Aside";
import HeaderView from "@/components/Header";
import FooterView from "@/components/Footer";

export default {
  components: {
    AsideView,
    HeaderView,
    FooterView,
    "el-container": Container,
    "el-header": Header,
    "el-main": Main,
    "el-footer": Footer,
    "el-aside": Aside,
    "el-scrollbar": Scrollbar
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100vh;
  .top {
    height: 500px;
    .aside {
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, #efefef, #efefef);
    }

    .header {
      background: #fafafa;
      padding: 0 8px !important;
    }

    .main {
      background: #fafafa;
      padding: 0;
      margin: 0;
      overflow: hidden;
      display: flex;
      flex: 1;
      flex-shrink: 0;
    }
  }
  .footer {
    background: #f7f7f7;
    padding: 0;
  }
}
.scroll-page {
  overflow: hidden;
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>
