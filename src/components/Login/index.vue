<template>
  <el-dialog :visible.sync="loginVisiable" width="400px" :before-close="close">
    <div class="frc">
      <img src="@/assets/imgs/icon.jpg" style="width:30px;height:30px;" alt />
      <span class="login-title">拼嘻嘻音乐</span>
    </div>
    <el-form ref="loginForm" :model="form" class="form">
      <el-form-item :rules="[
      { required: true, message: '用户名不能为空'},
    ]">
        <el-input style="width:80%" v-model="form.username" placeholder="请输入用户名">
          <i slot="prefix" class="iconfont iconyonghuming"></i>
        </el-input>
      </el-form-item>
      <el-form-item :rules="[
      { required: true, message: '密码不能为空'},
    ]">
        <el-input
          style="width:80%"
          v-model="form.password"
          :type="canSee ? 'text':'password'"
          placeholder="请输入密码"
        >
          <i slot="prefix" class="iconfont iconmima"></i>
          <i
            slot="suffix"
            :class="canSee ? 'iconfont iconjurassic_openeyes': 'iconfont iconbiyan'"
            style="font-size:20px"
            @click="()=>{canSee = !canSee}"
          ></i>
        </el-input>
      </el-form-item>
      <el-form-item style="text-align:center;margin-top:40px">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { Dialog, Form, FormItem, Input, Button } from "element-ui";
export default {
  name: "LoginView",
  components: {
    "el-button": Button,
    "el-dialog": Dialog,
    "el-form": Form,
    "el-form-item": FormItem,
    "el-input": Input
  },
  props: {
    loginVisiable: {
      type: Boolean,
      default: false
    },
    loginClose: {
      type: Function
    }
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      canSee: false // 密码可见性
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log("valid", valid);
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    close() {
      this.$emit("loginClose");
    }
  }
};
</script>
<style lang="less" scoped>
.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  font-family: cursive;
}
.form {
  text-align: center;
}
</style>