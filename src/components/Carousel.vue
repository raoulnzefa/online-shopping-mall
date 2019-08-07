<template>
  <div>
    <el-carousel :height="height">
      <slot></slot>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    },
    height: {
      type: String,
      default: "500px"
    }
  }
};
</script>
