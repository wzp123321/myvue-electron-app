<template>
  <div class="aside">
    <UserIfo></UserIfo>
    <el-scrollbar>
      <MenuList></MenuList>
    </el-scrollbar>
  </div>
</template>
<script>
import UserIfo from "./userinfo";
import MenuList from "./menulist";
import { Scrollbar } from "element-ui";
export default {
  name: "AsideView",
  components: {
    UserIfo,
    MenuList,
    "el-scrollbar": Scrollbar
  }
};
</script>
<style lang="less" scoped>
.aside {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.scroll-page {
  overflow: hidden;
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>