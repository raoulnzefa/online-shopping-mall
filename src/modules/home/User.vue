<template>
  <div>
    <div class="user">
      <div v-if="token === undefined">
        <p>Hi~欢迎逛YO</p>
        <router-link to="/login"
          ><el-button type="text" class="text">登录</el-button></router-link
        >
        |
        <router-link to="/login"
          ><el-button type="text" class="text">注册</el-button></router-link
        >
        <div class="user_profit">
          <el-button type="danger" size="mini" round>新人福利</el-button>
          <router-link to="/login"
            ><el-button type="danger" size="mini" round
              >YO会员</el-button
            ></router-link
          >
        </div>
      </div>
    </div>
    <div class="news">
      <p class="news_title">YO快报</p>
      <div class="news_list">
        <p v-for="(item, key) in newsList" :key="key">{{ item.content }}</p>
      </div>
    </div>
    <div class="service"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getNews } from "@/api/home";
export default {
  computed: {
    ...mapGetters(["token", "userName"])
  },
  data() {
    return {
      newsList: []
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      getNews().then(res => {
        this.newsList = res.data.newsList;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  height: 102px;
  border-bottom: 1px solid #eee;
  p {
    margin: 5px 0;
    color: #666666;
    font-size: 14px;
  }
  .text {
    font-size: 12px;
    margin: 0;
    padding: 5px 0;
    color: #666666;
  }
  .user_profit {
    margin-top: 15px;
    .el-button {
      display: inline-block;
      padding: 7px 13px;
      margin-right: 5px;
    }
  }
}
.news {
  height: 130px;
  border-bottom: 1px solid #eee;
  .news_title {
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0;
  }
  .news_list {
    p {
      margin: 0 0 8px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.service {
  height: 238px;
}
</style>
