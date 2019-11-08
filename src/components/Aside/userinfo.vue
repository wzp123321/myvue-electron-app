<template>
  <div>
    <!-- 未登录 -->
    <div class="userinfo-wrap">
      <i class="iconfont icontouxiang" @click="login"></i>
      <p @click="login" v-if="!isLogin">立即登录</p>
      <p v-else>{{userinfo.userName}}</p>
    </div>
    <!-- 登录对话框 -->
    <LoginView :loginVisiable="loginVisiable" @loginClose="loginClose" />
  </div>
</template>
<script>
import LoginView from "../Login/index";
import { mapGetters } from "vuex";
import HttpApi from "@/assets/api/index";
export default {
  name: "UserInfo",
  components: {
    LoginView
  },
  computed: mapGetters(["userinfo"]),
  data() {
    return {
      loginVisiable: false,
      isLogin: false
    };
  },
  watch: {
    userinfo: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isLogin = true;
        // this.getUserInfo();
      }
    }
  },
  methods: {
    login() {
      this.loginVisiable = true;
    },
    loginClose() {
      this.loginVisiable = false;
    },
    async getUserInfo() {
      const res = await HttpApi.getUserInfoById({ uid: this.userinfo.id });

      if (res && res.data) {
        console.log(res.data);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.userinfo-wrap {
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .iconfont {
    font-size: 48px;
    color: #06a5ff;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
  }
  p:hover {
    cursor: pointer;
  }
}
</style>