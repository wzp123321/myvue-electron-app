<template>
  <div class="singer-header">
    <h2>歌手分类</h2>
    <div class="tag-item">
      <div
        @click="getTagId(tagItem.id)"
        :class="{'active' : id===tagItem.id }"
        class="tagbtn"
        v-for="(tagItem,index) in singertags"
        :key="index"
      >{{tagItem.name}}</div>
    </div>
  </div>
</template>
<script>
import { singertags } from "@/common/index";
export default {
  name: "SingerHeader",
  props: {
    id: {
      type: String,
      default: "0"
    }
  },
  components: {},
  data() {
    return {
      singertags: []
    };
  },
  methods: {
    getTagId(id) {
      this.$emit("gettagid", id);
    }
  },
  created() {
    this.singertags = singertags;
  }
};
</script>
<style lang="less" scoped>
.singer-header {
  display: flex;
  flex-direction: column;
  h2 {
    margin-left: 10px;
    font-size: 20px;
  }
  .tag-item {
    display: flex;
    flex-wrap: wrap;
    .tagbtn {
      width: 83px;
      /*flex: 1;*/
      /*flex-shrink: 0;*/
      background-color: white;
      margin-left: 5px;
      text-align: center;
      font-size: 10px;
      color: #555;
      line-height: 30px;
      cursor: pointer;
      margin-bottom: 15px;
      border-radius: 7px;
      margin-right: 10px;
    }
    .tagbtn:hover {
      opacity: 0.8;
    }
    .active {
      color: #31c27c;
    }
  }
}
</style>