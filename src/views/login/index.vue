<template>
  <el-container>
    <el-header>
      <div class="login-header">
        <img src="../../assets/logo-ectype.png" />
      </div>
    </el-header>
    <el-main>
      <div class="login-main">
        <div class="login-box">
          <el-card>
            <div slot="header" class="clearfix">
              <span>欢迎登陆</span>
            </div>
            <el-form ref="loginForm" :model="loginForm" :rules="rules">
              <el-form-item prop="loginName">
                <el-input
                  v-model="loginForm.loginName"
                  placeholder="用户名"
                  type="text"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password" :error="errorMessage">
                <el-input
                  v-model="loginForm.password"
                  placeholder="密码"
                  name="password"
                  type="password"
                ></el-input>
              </el-form-item>
              <router-link to="/register" style="float:right"
                ><el-button type="text">立即注册</el-button></router-link
              >
              <el-button
                type="primary"
                style="width:100%;"
                @click.native.prevent="handleLogin"
                >登陆</el-button
              >
            </el-form>
          </el-card>
        </div>
      </div>
    </el-main>
    <el-footer style="height:86px">
      <div class="login-footer">
        <div class="footer-nav">
          <span>关于我们</span>
          <span>丨</span>
          <span>联系我们</span>
          <span>丨</span>
          <span>人才招聘</span>
          <span>丨</span>
          <span>商家入驻</span>
          <span>丨</span>
          <span>广告服务</span>
        </div>
        <div class="copyright">版权信息归个人所有</div>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    const validateLoginName = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        loginName: "2212358384@qq.com",
        password: "123456"
      },
      rules: {
        loginName: [
          { required: true, trigger: "blur", validator: validateLoginName }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      errorMessage: ""
    };
  },
  methods: {
    handleLogin() {
      this.errorMessage = "";
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("login", this.loginForm)
            .then(res => {
              this.errorMessage = "";
              this.getUserInfo(res.userId);
            })
            .catch(err => {
              this.errorMessage = err;
            });
        }
      });
    },
    getUserInfo(userId) {
      this.$store
        .dispatch("getUserInfo", userId)
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          console.log("error");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.login-main {
  background-color: #eee;
  height: 500px;
  position: relative;
  .login-box {
    position: absolute;
    width: 400px;
    top: 50%;
    right: 5%;
    transform: translate(0%, -50%);
    .el-card {
      height: 100%;
      span {
        font-size: 16px;
      }
    }
  }
}
.login-footer {
  margin: 0 auto;
  padding: 10px 0;
  color: #666;
  .footer-nav {
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
