<template>
  <div class="header">
    <div class="content-main">
      <ul>
        <li class="left">
          <City></City>
        </li>
        <li>手机YO</li>
        <li>丨</li>
        <li>网站导航</li>
        <li>丨</li>
        <li>客户服务</li>
        <li>丨</li>
        <li>
          <router-link :to="{ path: '/order', query: { id: 123 } }"
            >我的订单</router-link
          >
        </li>
        <li>丨</li>
        <li
          v-if="token !== undefined && token !== '' && userName !== undefined"
          @click="logout()"
          style="cursor: pointer;"
        >
          退出
        </li>
        <li
          v-if="token !== undefined && token !== '' && userName !== undefined"
        >
          丨
        </li>
        <li
          v-if="(token === undefined || token === '') && userName === undefined"
        >
          <router-link to="/login">您好，请登录</router-link>
        </li>
        <li
          v-if="(token === undefined || token === '') && userName !== undefined"
        >
          <router-link to="/login">{{ userName }} ，请登录</router-link>
        </li>
        <li
          v-if="token !== undefined && token !== '' && userName !== undefined"
        >
          {{ userName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import City from "@/components/City";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    City
  },
  computed: {
    ...mapGetters(["token", "userName"])
  },
  methods: {
    logout() {
      this.$store
        .dispatch("resetToken")
        .then(() => {})
        .catch(err => {
          console.log("退出失败：" + err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 30px;
  background: #eee;
  .content-main {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    .left {
      float: left;
    }
    ul li {
      float: right;
      line-height: 30px;
      margin-right: 10px;
      color: #666;
      a:hover {
        color: #f00;
      }
    }
  }
}
</style>
