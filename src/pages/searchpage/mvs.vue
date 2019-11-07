<template>
  <div class="mv-wrap">
    <MvInfo v-for="(item,index) in mvs" :key="index" :mvInfo="item"></MvInfo>
  </div>
</template>
<script>
import MvInfo from "@/pages/music/mv/mvinfo";
export default {
  name: "MvModule",
  components: {
    MvInfo
  },
  props: {
    mvs: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.mv-wrap {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>