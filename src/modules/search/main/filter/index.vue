<template>
  <div class="filters-wrap">
    <div class="filters-top"></div>
    <div class="filters-bottom">
      <span>配送至：</span>
      <el-cascader
        v-model="cityName"
        :options="cityList"
        @change="handleChange"
        size="mini"
        :props="props"
      ></el-cascader>
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
      }
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
.filters-wrap {
  .filters-top {
    height: 40px;
    background: #f1f1f1;
    padding: 6px 8px;
    border-bottom: 1px solid #e7e3e7;
  }
  .filters-bottom {
    height: 40px;
    padding: 6px 8px;
    border-bottom: 1px solid #e7e3e7;
    background: #f9f9f9;
  }
}
</style>
