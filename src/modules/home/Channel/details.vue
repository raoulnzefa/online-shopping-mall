<template>
  <div>
    <div
      class="details-item"
      v-for="(item, key) in dataList"
      :key="key"
      v-show="item.id === channel"
    >
      <div class="details-left">
        <div class="details-channel">
          <div
            class="details-channel-single"
            v-for="(it, channel) in item.channelList"
            :key="channel"
          >
            {{ it.content }} >
          </div>
        </div>
        <div class="details-list"></div>
      </div>
      <div class="details-right">
        <div class="details-brand">
          <div
            class="details-brand-single"
            v-for="(is, brand) in item.brandList"
            :key="brand"
          >
            <img :src="is.image" />
          </div>
        </div>
        <div class="details-promotion">
          <div
            class="details-promotion-single"
            v-for="(ia, promotion) in item.promotionList"
            :key="promotion"
          >
            <img :src="ia.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getChannelType } from "@/api/home";
export default {
  props: {
    channel: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.getChannelType();
  },
  methods: {
    getChannelType() {
      getChannelType()
        .then(res => {
          this.dataList = res.data.channel;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.details-item {
  padding: 20px 0 0 0;
  .details-left {
    float: left;
    width: 800px;
    padding-left: 10px;
    .details-channel {
      padding-left: 20px;
      .details-channel-single {
        float: left;
        height: 24px;
        line-height: 24px;
        padding: 0 5px;
        background: #000;
        color: #fff;
        cursor: pointer;
        margin-right: 10px;
      }
      .details-channel-single:hover {
        background: #ff000f;
      }
    }
  }
  .details-right {
    float: left;
    width: 198px;
    .details-brand {
      width: 168px;
      margin: auto;
      .details-brand-single {
        width: 83px;
        height: 35px;
        margin: 0 0 1px 1px;
        display: inline-block;
        overflow: hidden;
      }
    }
    .details-promotion {
      width: 168px;
      margin: auto;
      .details-promotion-single {
        width: 168px;
        height: 134px;
        margin-bottom: 1px;
      }
    }
  }
}
</style>
