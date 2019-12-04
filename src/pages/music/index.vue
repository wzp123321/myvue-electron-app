<template>
  <div class="content-index">
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    axios.get("http://localhost:3001/upload").then(res => {
      console.log("res", res);
    });
  }
};
</script>
<style lang="less" scoped>
.content-index {
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
}
</style>