<template>
  <div class="result-wrap">
    <div class="result-filter">
      <Filters></Filters>
    </div>
    <div class="result-shopping-list">
      <router-link :to="{ path: '/commodity' }"><List></List></router-link>
    </div>
  </div>
</template>

<script>
import Filters from "./filter/index";
import List from "./list/index";
export default {
  components: {
    Filters,
    List
  }
};
</script>

<style lang="less" scoped>
.result-wrap {
  .result-filter {
    border-top: 1px solid #ddd;
    margin-bottom: 5px;
  }
  .result-shopping-list {
    margin-bottom: 20px;
  }
}
</style>
