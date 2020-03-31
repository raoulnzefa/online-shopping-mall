<template>
  <div class="commodity-details">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="商品介绍" name="detail"
        ><Detail></Detail
      ></el-tab-pane>
      <el-tab-pane label="累计评价" name="evaluate"
        ><Evaluate></Evaluate
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Detail from "./components/Describe";
import Evaluate from "./components/Evaluate";
export default {
  data() {
    return {
      activeName: "detail"
    };
  },
  components: {
    Detail,
    Evaluate
  }
};
</script>

<style lang="less" scoped>
.commodity-details {
  width: 990px;
  float: right;
}
</style>
