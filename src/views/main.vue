<template>
  <div>
    <el-container class="container" id="main">
      <el-container style="position: relative;">
        <el-aside width="230px" class="aside">
          <aside-view />
        </el-aside>
        <el-container>
          <el-header class="header" height="50px" style="-webkit-app-region: drag">
            <header-view height="50px" />
          </el-header>
          <el-main class="main">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
      <el-footer class="footer" height="70px">
        <footer-view height="70px" />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import { Container, Header, Main, Footer, Aside } from "element-ui";
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
    "el-aside": Aside
  }
};
</script>
<style lang="less" scoped>
.aside {
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #efefef, #efefef);
}

.container {
  height: 100vh;
}

.header {
  background: #fafafa;
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

.footer {
  width: 100%;
  background: #f7f7f7;
  padding: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
</style>
