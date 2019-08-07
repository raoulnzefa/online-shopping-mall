<template>
  <div class="footer">
    <div class="content-main">
      <div class="footer_service">
        <ul>
          <li>品类齐全</li>
          <li>多仓直发，极速配送</li>
          <li>正品行货，精致服务</li>
          <li>天天低价，畅选无忧</li>
        </ul>
      </div>
      <el-divider></el-divider>
      <div class="footer_copyright">
        <div class="footer_contact clearfix">
          <ul>
            <li>关于我们</li>
            <li>丨</li>
            <li>联系我们</li>
            <li>丨</li>
            <li>联系客服</li>
            <li>丨</li>
            <li>合作招商</li>
          </ul>
        </div>
        <div style="text-align: center;">京ICP证xxxxx号</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 200px;
  background-color: #f0f3ef;
  .content-main {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    .footer_service {
      height: 100px;
      ul li {
        float: right;
        width: 25%;
        line-height: 100px;
        color: #444;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
    }
    .footer_copyright {
      width: 90%;
      margin: 20px auto 0;
      .footer_contact {
        width: 22%;
        margin: 10px auto;
        ul li {
          float: right;
        }
      }
      .clearfix:after {
        content: "";
        display: block;
        visibility: hidden;
        clear: both;
        height: 0;
      }
      .clearfix {
        zoom: 1;
      }
    }
  }
}
</style>
