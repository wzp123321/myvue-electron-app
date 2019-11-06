<template>
  <div>
    <div v-if="JSON.stringify(introduction) !== '[]'">
      <div class="descitem" v-for="(item,index) in introduction" :key="index">
        <h3>{{item.ti}}</h3>
        <div>{{item.txt}}</div>
      </div>
    </div>
    <div v-else class="nodata">
      <i class="iconfont iconsign102"></i>
      <h5>暂无数据</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "Singerdesc",
  props: {
    introduction: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
.descitem {
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  div {
    font-size: 12px;
    background: #eee;
  }
}
.nodata {
  width: 100%;
  height: 300px;
  text-align: center;
  .iconfont {
    font-size: 30px;
  }
  h5 {
    margin: 0;
  }
}
</style>