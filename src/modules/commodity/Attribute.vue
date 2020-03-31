<template>
  <div class="content-middle">
    <div class="commodity-title">
      荣耀智慧屏55英寸OSCA-550A
      2G+16G开关机无广告远场语音4K超高清人工智能液晶教育电视华为全面屏
    </div>
    <div class="commodity-summary">
      <div class="commodity-price">
        <div class="dt">Yo 价</div>
        <div class="dd">
          <span class="p-price"
            ><span>￥</span><span class="price">100.00</span></span
          >
        </div>
      </div>
    </div>
    <div class="commodity-address">
      <span style="margin-right:10px;">配送至</span>
      <el-cascader
        v-model="cityName"
        :options="cityList"
        @change="handleChange"
        size="mini"
        :props="props"
      ></el-cascader>
    </div>
    <div class="commodity-attribute"></div>
    <div class="commodity-choose-btn">
      <el-input-number v-model="num" :min="1" :max="999"></el-input-number>
      <el-button type="danger" style="margin-left:20px;">加入购物车</el-button>
    </div>
  </div>
</template>

<script>
import { cityArrList } from "@/util/city";
export default {
  data() {
    return {
      cityList: cityArrList,
      props: {
        value: "code",
        label: "name"
      },
      num: 1
    };
  },
  computed: {
    cityName: {
      get: function() {
        return this.$store.getters.cityName;
      },
      set: function(value) {
        this.$store.commit("SET_CITYNAME", value);
      }
    }
  },
  methods: {
    handleChange(value) {
      this.cityName = value;
    }
  }
};
</script>

<style lang="less" scoped>
.content-middle {
  width: 720px;
  float: left;
  margin-left: 30px;
  .commodity-title {
    font: 700 16px Arial, "microsoft yahei";
    color: #666;
    padding-top: 10px;
    line-height: 28px;
    margin-bottom: 5px;
  }
  .commodity-summary {
    padding: 10px;
    margin-bottom: 5px;
    background: #eee;
    .commodity-price {
      .dt {
        float: left;
        padding-left: 10px;
        color: #999;
        font-size: 14px;
        line-height: 27px;
      }
      .dd {
        margin-left: 50px;
        .p-price {
          color: #e4393c;
          margin-right: 10px;
          span {
            font-size: 16px;
          }
          .price {
            font-size: 22px;
          }
        }
      }
    }
  }
  .commodity-address {
    padding-top: 10px;
    line-height: 28px;
    margin-bottom: 5px;
  }
  .commodity-choose-btn {
    margin-top: 15px;
  }
}
</style>
