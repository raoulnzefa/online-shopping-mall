<template>
  <div class="search">
    <div class="content-main">
      <div class="logo-search-shopping">
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
  </div>
</template>

<script>
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Trolley from "@/modules/home/Trolley";
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
    Trolley
  }
};
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  .content-main {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .logo-search-shopping {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 200px;
      height: 80px;
    }
    .search {
      width: 500px;
    }
    .shopping {
      width: 200px;
      height: 33px;
    }
  }
}
</style>
