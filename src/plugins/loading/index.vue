<template>
  <div class="total-page" v-if="show">
    <div class="position-wrap loading-wrap">
      <img src="./loading_green.gif" class="loading-ico" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
<style scoped>
.total-page {
  position: relative;
  width: 100%;
  height: 100%;
}
.position-wrap {
  position: absolute;
  top: 40%;
  left: 50%;
}
.loading-wrap {
  padding-left: 8px;
  z-index: 999;
  margin-left: 5px;
  border-radius: 5px;
  width: 55px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loading-ico {
  width: 24px;
  height: 24px;
}
.loading-title {
  margin-top: 25px;
  margin-left: -22px;
  color: #06a5ff;
  font-size: 12px;
}
</style>