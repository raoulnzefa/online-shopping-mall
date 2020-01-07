<template>
  <div class="result-good">
    <div class="result-title">商品精选</div>
    <div class="result-list">
      <ul>
        <li>
          <div class="p-image"><img src="" /></div>
          <div class="p-price">￥ 9999</div>
          <div class="p-title">
            adfadsfasdfasdfadfadsfasdfasdfadfadsfasdfasdf
          </div>
          <div class="p-evaluate">已有0人评价</div>
        </li>
        <li>
          <div class="p-image"><img src="" /></div>
          <div class="p-price">￥ 9999</div>
          <div class="p-title">
            adfadsfasdfasdfadfadsfasdfasdfadfadsfasdfasdf
          </div>
          <div class="p-evaluate">已有0人评价</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.result-good {
  border: 1px solid #ddd;
  margin-bottom: 10px;
  .result-title {
    padding: 10px;
    font-size: 16px;
  }
  ul li {
    padding: 9px;
    font-size: 14px;
    color: #666;
    .p-image {
      width: 160px;
      height: 160px;
      margin-bottom: 5px;
      background: #eee;
    }
    .p-title {
      word-wrap: break-word;
      word-break: break-all;
    }
    .p-price {
      color: #e4393c;
      margin-bottom: 5px;
    }
    .p-evaluate {
      font-size: 12px;
      margin-top: 5px;
    }
  }
}
</style>
