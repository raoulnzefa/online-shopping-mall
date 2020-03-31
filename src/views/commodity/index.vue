<template>
  <div class="commodity">
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
    <div class="nav-line"></div>
    <div class="content-main">
      <div class="content-top">
        <Images></Images>
        <Attribute></Attribute>
      </div>
      <div class="content-bottom">
        <Store></Store>
        <Details></Details>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Trolley from "@/modules/home/Trolley";
import Images from "@/modules/commodity/Images";
import Attribute from "@/modules/commodity/Attribute";
import Store from "@/modules/commodity/Store";
import Details from "@/modules/commodity/details/index";
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
    Images,
    Attribute,
    Store,
    Details
  }
};
</script>

<style lang="less" scoped>
.commodity {
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
  .nav-line {
    width: 100%;
    height: 50px;
    background: #f2f2f2;
  }
  .content-main {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    .content-top {
      width: 100%;
      height: 100%;
      margin-top: 20px;
      display: inline-block;
    }
    .content-bottom {
      width: 100%;
      height: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
      display: inline-block;
    }
  }
}
</style>
