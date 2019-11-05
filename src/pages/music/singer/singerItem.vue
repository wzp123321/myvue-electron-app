<template>
  <div class="singer-item">
    <img :src="singerInfo.picUrl" alt />
    <h1>{{singerInfo.name}}</h1>
  </div>
</template>
<script>
export default {
  name: "SingerItem",
  props: {
    singerInfo: {
      type: Object
    }
  }
};
</script>
<style lang="less" scoped>
.singer-item {
  width: 150px;
  height: 160px;
  background: #f0f0f0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  border: 1px solid #eee;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  h1 {
    margin-top: 2px;
    margin-left: 5px;
    margin: 0px;
    font-size: 12px;
  }
  h1:hover {
    cursor: pointer;
  }
}
</style>