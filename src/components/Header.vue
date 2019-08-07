<template>
  <div class="header">
    <div class="content-main">
      <ul>
        <li class="left">
          <Address></Address>
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
        <li v-if="token === undefined && userName === undefined">
          <router-link to="/login">您好，请登录</router-link>
        </li>
        <li v-if="token === undefined && userName !== undefined">
          <router-link to="/login">{{ userName }} ，请登录</router-link>
        </li>
        <li v-if="token !== undefined && userName !== undefined">
          {{ userName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Address from "@/components/Address";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Address
  },
  computed: {
    ...mapGetters(["token", "userName"])
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
