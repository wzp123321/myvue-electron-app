<template>
  <el-container class="container">
    <el-container style="flex:1">
      <el-aside width="200px">
        <AsideView />
      </el-aside>
      <el-container>
        <el-header class="header">
          <HeaderView />
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <el-footer class="footer">Footer</el-footer>
  </el-container>
</template>
<script>
import { Container, Footer, Header, Aside, Main } from "element-ui";
import AsideView from "@/components/Aside/index";
import HeaderView from "@/components/Header/index";
export default {
  name: "Main",
  components: {
    "el-container": Container,
    "el-footer": Footer,
    "el-header": Header,
    "el-aside": Aside,
    "el-main": Main,
    AsideView,
    HeaderView
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .aside {
    display: flex;
    flex-direction: column;
    background: #fafafa;
  }

  .header {
    background: #fff;
  }

  .main {
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-shrink: 0;
    background: #fafafa;
  }

  .footer {
    background: #f7f7f7;
    padding: 0;
  }
}
</style>