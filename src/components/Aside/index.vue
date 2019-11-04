<template>
  <div class="aside fcc">
    <UserIfo></UserIfo>
    <MenuList></MenuList>
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