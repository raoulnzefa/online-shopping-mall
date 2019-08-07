<template>
  <div class="shopping_trolley" @mouseenter="mouseenter()">
    <div class="shopping_icon">
      <svg-icon icon-class="trolley" style="color:red"></svg-icon>
      <el-badge :value="count" class="item">
        <span>我的购物车</span>
      </el-badge>
    </div>
    <div class="shopping_list">
      <div class="shopping_empty" v-show="count === 0">
        <svg-icon
          icon-class="trolley"
          style="color:#999;width:3rem;height:3rem;vertical-align: middle;margin-right:10px;"
        ></svg-icon
        >购物车中还没有商品，赶紧选购吧！
      </div>
      <trolleylist
        v-if="trolleyshow"
        :shopping-list="shoppingList"
      ></trolleylist>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const trolleylist = () =>
  import(/* webpackPrefetch: true */ "@/modules/home/Trolley/trolleyList");
export default {
  data() {
    return {
      trolleyshow: false,
      shoppingList: []
    };
  },
  computed: {
    ...mapGetters(["count", "price"])
  },
  components: {
    trolleylist
  },
  methods: {
    mouseenter() {
      this.getTrolleyShopping();
      this.trolleyshow = true;
    },
    getTrolleyShopping() {
      this.$store
        .dispatch("getTrolleyShopping")
        .then(response => {
          this.shoppingList = response.shoppingList;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@white: #ffffff;
@red: #f00;
.shopping_trolley {
  position: relative;
  .shopping_icon {
    text-align: center;
    line-height: 30px;
    position: relative;
    background-color: @white;
    border: 1px solid #ccc;
    z-index: 5;
    span {
      margin-left: 5px;
      color: @red;
    }
  }
}
.shopping_trolley:hover .shopping_icon {
  border-bottom: none;
  cursor: pointer;
}
.shopping_trolley:hover .shopping_list {
  display: block;
}
.shopping_list {
  position: absolute;
  width: 308px;
  right: 0;
  top: 30px;
  border: 1px solid #ccc;
  background-color: @white;
  z-index: 3;
  display: none;
  .shopping_empty {
    padding: 10px 0;
    text-align: center;
    color: #999;
  }
}
</style>
