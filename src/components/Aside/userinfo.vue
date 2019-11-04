<template>
  <div>
    <!-- 未登录 -->
    <div class="userinfo-wrap">
      <i class="iconfont icontouxiang" @click="login"></i>
      <p @click="login">立即登录</p>
    </div>
    <!-- 已登录 -->
    <div></div>
    <!-- 登录对话框 -->
    <LoginView :loginVisiable="loginVisiable" @loginClose="loginClose" />
  </div>
</template>
<script>
import LoginView from "../Login/index";
export default {
  name: "UserInfo",
  components: {
    LoginView
  },
  data() {
    return {
      loginVisiable: false
    };
  },
  methods: {
    login() {
      this.loginVisiable = true;
    },
    loginClose() {
      this.loginVisiable = false;
    }
  }
};
</script>
<style lang="less" scoped>
.userinfo-wrap {
  width: 100%;
  padding: 40px 0;
  text-align: center;
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