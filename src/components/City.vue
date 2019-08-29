<template>
  <div class="city">
    <div class="city-selected">
      <svg-icon icon-class="city" style="color:red"></svg-icon>
      <span>{{ cityName.name }}</span>
    </div>
    <div class="city-list">
      <div
        v-for="(item, key) in cityList"
        :key="key"
        class="item"
        :class="{ selected: item.code === cityName.code }"
        @click="changeCity(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { cityArrList } from "@/util/city";
export default {
  data() {
    return {
      cityList: cityArrList
    };
  },
  computed: {
    cityName: {
      get: function() {
        let city = new Object();
        this.cityList.forEach(item => {
          if (item.code === this.$store.getters.cityName[0]) {
            city = item;
          }
        });
        return city;
      },
      set: function(value) {
        this.$store.commit("SET_CITYNAME", value);
      }
    }
  },
  methods: {
    changeCity(item) {
      this.cityName = [item.code, item.children[0].code];
    }
  }
};
</script>

<style lang="less" scoped>
.city-selected {
  padding: 0 7px;
  position: relative;
  z-index: 5;
}
.city-list {
  width: 262px;
  position: absolute;
  top: 30px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  display: none;
  z-index: 3;
}
.city:hover > .city-selected {
  background-color: #fff;
  border: 1px solid #ccc;
  border-bottom: none;
  cursor: pointer;
}
.city:hover > .city-list {
  display: block;
}
.city-list .item {
  width: 60px;
  float: left;
  text-align: center;
}
.city-list .selected {
  background-color: #f00;
  color: #fff;
}
.city-list .item:hover {
  cursor: pointer;
  background-color: #eee;
  color: #f00;
}
.city-list .selected:hover {
  background-color: #f00;
  color: #fff;
}
</style>
