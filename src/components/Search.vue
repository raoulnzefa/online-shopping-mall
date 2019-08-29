<template>
  <div>
    <el-autocomplete
      v-model="name"
      :placeholder="placeholder"
      type="text"
      :fetch-suggestions="historySearch"
      style="width:80%"
    >
      <template slot-scope="{ item }">
        <div class="name">
          {{ item.value }}
          <span class="clear-text" @click="deleteHistory(item.value)"
            >清空历史</span
          >
        </div>
      </template>
    </el-autocomplete>
    <el-button type="danger" @click="getSearch()">查询</el-button>
  </div>
</template>

<script>
export default {
  props: {
    keyWord: {
      type: String,
      default: ""
    },
    placeholderName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name: this.keyWord,
      placeholder: this.placeholderName,
      history: this.$store.getters.history || []
    };
  },
  methods: {
    historySearch(queryString, cb) {
      var restaurants = this.history;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return history => {
        return (
          history.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    getSearch() {
      this.name = this.name || this.placeholder;
      this.$store.dispatch("getSearch", this.name).then(() => {});
      this.$router.push({ path: "/search", query: { keyword: this.name } });
    },
    deleteHistory(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="less">
.search {
  .el-input__inner {
    border-radius: 0;
  }
  .el-button {
    border-radius: 0;
  }
}
.el-autocomplete-suggestion {
  .clear-text {
    float: right;
  }
}
</style>
