<template>
  <div class="search">
    <div class="logo-search-trolley">
      <div class="content-main">
        <div class="logo">
          <Logo></Logo>
        </div>
        <div class="search">
          <Search :key-word="keyword" :placeholder-name="placeholder"></Search>
        </div>
        <div class="shopping">
          <Trolley></Trolley>
        </div>
      </div>
    </div>
    <div class="content-main">
      <div class="result-list">
        <div class="reuslt-side"></div>
        <div class="result-main">
          <Main></Main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Trolley from "@/modules/home/Trolley";
import Main from "@/modules/search/main/index";
export default {
  data() {
    return {
      keyword: "",
      placeholder: "618购物节"
    };
  },
  components: {
    Logo,
    Search,
    Trolley,
    Main
  }
};
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  .logo-search-trolley {
    background: #fff;
    height: 100px;
    .content-main {
      width: 1200px;
      margin: 0 auto;
      height: 100%;
    }
    .logo {
      width: 200px;
      height: 80px;
      float: left;
      margin-right: 100px;
      margin-top: 10px;
    }
    .search {
      width: 500px;
      float: left;
      margin-right: 80px;
      margin-top: 30px;
    }
    .shopping {
      width: 200px;
      height: 33px;
      float: left;
      margin-top: 33.5px;
    }
  }
  .content-main {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .result-list {
    .reuslt-side {
      width: 180px;
      margin-right: 10px;
      float: left;
    }
    .result-main {
      width: 1010px;
      float: left;
    }
  }
}
</style>
