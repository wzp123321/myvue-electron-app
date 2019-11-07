<template>
  <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="(item,index) in mvMenuList" :key="index" :index="item.key">{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script>
import { Menu, MenuItem } from "element-ui";
import { mvMenuList } from "@/common/index";
export default {
  name: "MvHeader",
  components: {
    "el-menu": Menu,
    "el-menu-item": MenuItem
  },
  data() {
    return {
      mvMenuList: []
    };
  },
  methods: {
    // 头部改变
    handleSelect(key, keyPath) {
      this.$emit("change", key);
    }
  },
  created() {
    this.mvMenuList = mvMenuList;
  }
};
</script>
<style lang="less" scoped>
.el-menu-demo {
  height: 80px;
}
</style>