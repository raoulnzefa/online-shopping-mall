<template>
  <div>
    <el-button @click="getOrder()">测试</el-button>
  </div>
</template>

<script>
import { getOrder } from "@/api/order";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getOrder() {
      getOrder().then(res => {
        console.log(res);
      });
    }
  }
};
</script>
