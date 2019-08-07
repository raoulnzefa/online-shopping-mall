<template>
  <div>
    <el-input
      v-model="name"
      :placeholder="placeholder"
      type="text"
      style="width:80%"
    ></el-input>
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
      placeholder: this.placeholderName
    };
  },
  methods: {
    getSearch() {
      this.name = this.name || this.placeholder;
      this.$router.push({ path: "/search", query: { keyword: this.name } });
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
</style>
