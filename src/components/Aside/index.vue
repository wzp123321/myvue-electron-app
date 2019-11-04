<template>
  <div class="aside fcc">
    <UserIfo></UserIfo>
    <MenuList style="flex:1"></MenuList>
  </div>
</template>
<script>
import UserIfo from "./userinfo";
import MenuList from "./menulist";
export default {
  name: "AsideView",
  components: {
    UserIfo,
    MenuList
  }
};
</script>
<style lang="less" scoped>
</style>