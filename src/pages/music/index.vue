<template>
  <div class="content-index">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
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