<template>
  <el-container>
    <el-header>
      <div class="register-header">
        <img src="../../assets/logo-ectype.png" />
      </div>
    </el-header>
    <el-main>
      <div class="register-main">
        <div class="register-box">
          <el-card>
            <div slot="header" class="clearfix">
              <span>欢迎注册</span>
            </div>
            <el-form ref="registerForm" :model="registerForm" :rules="rules">
              <el-form-item prop="email" :error="errorMessage">
                <el-input
                  v-model="registerForm.email"
                  placeholder="邮箱"
                  type="text"
                ></el-input>
              </el-form-item>
              <el-form-item prop="name">
                <el-input
                  v-model="registerForm.name"
                  placeholder="用户名"
                  type="text"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="registerForm.password"
                  placeholder="密码"
                  name="password"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item prop="confirmPassword">
                <el-input
                  v-model="registerForm.confirmPassword"
                  placeholder="确认密码"
                  name="password"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-button
                type="danger"
                style="width:100%;"
                @click.native.prevent="handleregister"
                >注册</el-button
              >
            </el-form>
          </el-card>
        </div>
      </div>
    </el-main>
    <el-footer style="height:86px">
      <div class="register-footer">
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
import { verifyEmail } from "@/util/index";
export default {
  data() {
    const validateregisterEmail = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("邮箱不能为空"));
      } else {
        if (!verifyEmail(value)) {
          callback(new Error("邮箱格式有误"));
        } else {
          callback();
        }
      }
    };
    const validateregisterName = (rule, value, callback) => {
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
    const validateconfirmPassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else if (value != this.registerForm.password) {
        callback(new Error("二次密码不一致"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        registerType: 1
      },
      rules: {
        email: [
          { required: true, trigger: "blur", validator: validateregisterEmail }
        ],
        name: [
          { required: true, trigger: "blur", validator: validateregisterName }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        confirmPassword: [
          {
            required: true,
            trigger: "blur",
            validator: validateconfirmPassword
          }
        ]
      },
      errorMessage: ""
    };
  },
  methods: {
    handleregister() {
      this.errorMessage = "";
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("register", this.registerForm)
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
.register-main {
  background-color: #eee;
  height: 500px;
  position: relative;
  .register-box {
    position: absolute;
    width: 400px;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    .el-card {
      height: 100%;
      span {
        font-size: 16px;
      }
    }
  }
}
.register-footer {
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
