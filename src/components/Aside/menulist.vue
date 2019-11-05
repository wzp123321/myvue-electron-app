<template>
  <div class="menu-view">
    <div v-for="(item,index) in menulist" :key="index" class="menu-group">
      <div class="menu-title">{{item.title}}</div>
      <div
        v-for="(childItem,idx) in item.children"
        :key="idx"
        :class="['menu-item',$route.path === childItem.path ? 'active':'']"
      >
        <div class="left" @click="pageTo(childItem.path)">
          <i :class="`iconfont ${childItem.icon}`"></i>
          {{childItem.title}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { menulist } from "@/common/index.js";

export default {
  name: "MenuList",
  data() {
    return {
      menulist: []
    };
  },
  methods: {
    pageTo(path) {
      this.$router.push(path);
    }
  },
  created() {
    this.menulist = menulist;
  }
};
</script>
<style lang="less" scoped>
.menu-view {
  flex: 1;
  overflow: hidden;
  .menu-group {
    margin-bottom: 25px;
    padding: 0 20px;
    .menu-title {
      margin-bottom: 10px;
      font-size: 12px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      color: #666;
      .left {
        flex: 1;
      }
      .right {
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .iconfont {
          font-size: 14px;
          color: #888;
          margin-left: 10px;
        }
      }
    }
    .menu-item {
      text-align: left;
      padding: 5px 10px;
      font-size: 13px;
      border-radius: 2px;
      margin-bottom: 5px;
      cursor: pointer;
      .left {
        .iconfont {
          margin-right: 10px;
        }
        .iconfont.hot {
          color: #ff4400;
        }
      }
    }
    .menu-item:hover {
      background: #e6e7e7;
    }

    .menu-item.active {
      background: #31c27c;
      color: #fff;
    }
  }
}
</style>