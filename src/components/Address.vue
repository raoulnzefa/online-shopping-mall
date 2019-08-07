<template>
  <div class="address">
    <div class="address_selected">
      <svg-icon icon-class="address" style="color:red"></svg-icon>
      <span>{{ address }}</span>
    </div>
    <div class="address_list">
      <div
        v-for="(item, key) in addressList"
        :key="key"
        class="item"
        :class="{ selected: item === address }"
        @click="changeAddress(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import { addressArrList } from "@/util";
export default {
  data() {
    return {
      address: "北京市",
      addressList: addressArrList
    };
  },
  methods: {
    changeAddress(item) {
      this.address = item;
    }
  }
};
</script>

<style lang="less" scoped>
.address_selected {
  padding: 0 7px;
  position: relative;
  z-index: 5;
}
.address_list {
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
.address:hover > .address_selected {
  background-color: #fff;
  border: 1px solid #ccc;
  border-bottom: none;
  cursor: pointer;
}
.address:hover > .address_list {
  display: block;
}
.address_list .item {
  width: 60px;
  float: left;
  text-align: center;
}
.address_list .selected {
  background-color: #f00;
  color: #fff;
}
.address_list .item:hover {
  cursor: pointer;
  background-color: #eee;
  color: #f00;
}
.address_list .selected:hover {
  background-color: #f00;
  color: #fff;
}
</style>
