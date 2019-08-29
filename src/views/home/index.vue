<template>
  <div class="home">
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
      <div class="shoppingType-slide-me mr-30">
        <div class="channel">
          <Channel></Channel>
        </div>
        <div class="banner">
          <Banner></Banner>
        </div>
        <div class="user">
          <User></User>
        </div>
      </div>
      <div class="shopping-seckill mr-30">
        <Seckill></Seckill>
      </div>
      <div class="shopping-ranking-quality-coupon mr-30">
        <div class="quality">
          <Quality></Quality>
        </div>
        <div class="rank">
          <Rank></Rank>
        </div>
        <div class="coupon">
          <Coupon></Coupon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import Logo from "@/components/Logo";
import Trolley from "@/modules/home/Trolley/index";
import Channel from "@/modules/home/Channel/index";
import User from "@/modules/home/User";
import Banner from "@/modules/home/Banner";
import Seckill from "@/modules/home/Seckill";
const Rank = () => import(/* webpackPrefetch: true */ "@/modules/home/Rank");
const Quality = () =>
  import(/* webpackPrefetch: true */ "@/modules/home/Quality");
const Coupon = () =>
  import(/* webpackPrefetch: true */ "@/modules/home/Coupon");
export default {
  data() {
    return {
      keyword: "",
      placeholder: "618购物节",
      show: false
    };
  },
  components: {
    Banner,
    Seckill,
    Search,
    Logo,
    Trolley,
    Quality,
    Rank,
    Coupon,
    Channel,
    User
  }
};
</script>

<style lang="less" scoped>
.home {
  background-color: #f0f3ef;
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
    .shoppingType-slide-me {
      height: 450px;
      margin-top: 10px;
      .channel {
        width: 190px;
        height: 100%;
        float: left;
        margin-right: 10px;
        background: #fff;
      }
      .banner {
        width: 790px;
        height: 100%;
        float: left;
        margin-right: 20px;
      }
      .user {
        width: 190px;
        height: 100%;
        float: left;
        background-color: #fff;
        padding: 15px;
      }
    }
    .shopping-seckill {
      height: 275px;
    }
    .shopping-ranking-quality-coupon {
      height: 450px;
      .quality,
      .rank,
      .coupon {
        float: left;
        width: 390px;
        margin-right: 15px;
        background-color: #fff;
        height: 100%;
      }
      .coupon {
        margin-right: 0;
      }
    }
    .mr-30 {
      margin-bottom: 30px;
    }
  }
}
</style>
