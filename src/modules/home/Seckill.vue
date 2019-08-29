<template>
  <div class="seckill">
    <div class="seckill-time">
      <p>秒杀专区</p>
      <p>Seckill Area</p>
      <p>本场距离结束还剩</p>
      <div class="residue_time">
        <div class="item residue_hour">
          <span>00</span>
        </div>
        <div class="item residue_minute">
          <span>00</span>
        </div>
        <div class="item residue_second">
          <span>00</span>
        </div>
      </div>
    </div>
    <div class="seckill-main">
      <Carousel height="275px">
        <el-carousel-item v-for="(item, key) in seckillShoppingList" :key="key">
          <div class="seckill-shopping">
            <div
              class="seckill-shopping-single"
              v-for="(it, index) in item.seckillGroupList"
              :key="index"
            >
              <div class="shopping-image">
                <img :src="it.image" />
              </div>
              <div class="shopping-name">{{ it.name }}</div>
              <div class="shopping-price">
                <div class="shopping-price-before">￥{{ it.price }}</div>
                <div class="shopping-price-after">￥{{ it.oldprice }}</div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </Carousel>
    </div>
    <div class="seckill-brand">
      <Carousel height="275px">
        <el-carousel-item v-for="(item, key) in seckillBrandList" :key="key">
          <img :src="item.image" />
        </el-carousel-item>
      </Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import { getSeckillShopping } from "@/api/home";
export default {
  data() {
    return {
      seckillShoppingList: [],
      seckillBrandList: []
    };
  },
  components: {
    Carousel
  },
  mounted() {
    this.getSeckillShopping();
  },
  methods: {
    getSeckillShopping() {
      getSeckillShopping()
        .then(res => {
          this.seckillShoppingList = res.data.seckillShoppingList;
          this.seckillBrandList = res.data.seckillBrandList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.seckill {
  width: 100%;
  height: 275px;
  display: flex;
  .seckill-time {
    width: 20%;
    background-color: red;
    padding: 20px;
    box-sizing: border-box;
    p {
      font-size: 40px;
      text-align: center;
      color: #fff;
      margin: 0 0 10px 0;
    }
    p:nth-child(1) {
      margin-top: 20px;
    }
    p:nth-child(2) {
      font-size: 26px;
      opacity: 0.7;
    }
    p:nth-child(3) {
      font-size: 16px;
    }
    .residue_time {
      height: 40px;
      width: 130px;
      margin: 0 auto;
      .residue_hour,
      .residue_minute,
      .residue_second {
        position: relative;
        float: left;
        width: 40px;
        height: 40px;
        text-align: center;
        background-color: #2f3430;
        margin-right: 5px;
        span {
          position: relative;
          line-height: 40px;
          font-weight: bold;
          font-size: 20px;
          color: #fff;
        }
      }
      .residue_second {
        margin-right: 0;
      }
      .item:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        top: 50%;
        height: 1px;
        background: #e83632;
      }
    }
  }
  .seckill-main {
    width: 60%;
    background-color: #fff;
    .seckill-shopping {
      width: 100%;
      height: 100%;
      .seckill-shopping-single {
        width: 25%;
        height: 100%;
        float: left;
        border-left: 1px solid #eee;
        .shopping-image {
          width: 140px;
          height: 140px;
          margin: 40px auto 0;
        }
        .shopping-name {
          text-align: center;
          margin: 20px auto;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
        }
        .shopping-price {
          width: 160px;
          height: 20px;
          line-height: 20px;
          background-color: #e6382f;
          padding: 1px;
          color: #fff;
          margin: 0 auto;
          box-sizing: content-box;
          .shopping-price-before {
            width: 80px;
            height: 20px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            float: left;
          }
          .shopping-price-after {
            width: 80px;
            height: 20px;
            float: left;
            background-color: #fff;
            color: #b7bcb8;
            font-size: 12px;
            text-align: center;
            text-decoration: line-through;
          }
        }
      }
      .seckill-shopping-single:nth-child(1) {
        border-left: none;
      }
    }
  }
  .seckill-brand {
    width: 20%;
    background-color: #fff;
    border-left: 1px solid #eee;
  }
}
</style>
