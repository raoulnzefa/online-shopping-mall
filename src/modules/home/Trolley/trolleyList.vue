<template>
  <div class="shopping_list_info" v-show="count > 0">
    <div class="shopping_title">
      <h4>最新加入的商品</h4>
    </div>
    <div class="shopping_info">
      <div
        class="shopping_info_single"
        v-for="(item, key) in shoppingList"
        :key="key"
      >
        <div class="shopping_discounts">
          小计：￥{{ item.count * item.price }}
        </div>
        <div class="shopping_content">
          <div class="shopping_photo">
            <img :src="item.img" />
          </div>
          <div class="shopping_name">{{ item.name }}</div>
          <div class="shopping_price">
            <p>￥ {{ item.price }} x {{ item.count }}</p>
            <el-button type="text" size="mini" @click="removeShopping(item)"
              >删除</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="shopping_pay">
      共
      <span>{{ count }}</span
      >件商品，共计￥
      <span>{{ price }}</span>
      <el-button
        type="danger"
        size="mini"
        style="float:right;margin-right:10px;"
        >去购物车</el-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    shoppingList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters(["count", "price"])
  },
  methods: {
    removeShopping(item) {
      this.$store
        .dispatch("removeShopping", item)
        .then(() => {
          this.shoppingList.splice(item, 1);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.shopping_list_info {
  .shopping_title {
    height: 25px;
    padding: 6px 8px;
    line-height: 25px;
    box-sizing: content-box;
    h4 {
      margin: 0;
      color: #666;
    }
  }
  .shopping_info {
    .shopping_info_single {
      .shopping_discounts {
        background-color: #bffab1;
        padding: 5px;
        height: 25px;
        line-height: 25px;
        box-sizing: content-box;
        text-align: right;
        color: #666;
      }
      .shopping_content {
        padding: 5px;
        box-sizing: content-box;
        .shopping_photo,
        .shopping_name,
        .shopping_price {
          float: left;
        }
        .shopping_photo {
          width: 20%;
        }
        .shopping_name {
          width: 40%;
        }
        .shopping_price {
          width: 40%;
          text-align: right;
        }
      }
      .shopping_content:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
        zoom: 1;
      }
    }
  }
  .shopping_pay {
    padding: 8px;
    line-height: 28px;
    color: #666;
    span {
      font-weight: bold;
    }
  }
  .shopping_pay:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
    zoom: 1;
  }
}
</style>
