<template>
  <div class="channel-type">
    <ul>
      <li
        v-for="(item, key) in channelList"
        :key="key"
        @mouseenter="mouseenter(item.type)"
      >
        <span v-for="(it, index) in item.list" :key="index">
          <span>{{ it.name }}</span>
          <span v-if="index !== item.list.length - 1"> / </span>
        </span>
      </li>
    </ul>
    <div class="channel-item">
      <Details v-if="detailsshow" :channel="channel"></Details>
    </div>
  </div>
</template>

<script>
const Details = () => import("@/modules/home/Channel/details");
import { channelArrList } from "@/util";
export default {
  data() {
    return {
      channelList: channelArrList,
      detailsshow: false,
      channel: null
    };
  },
  components: {
    Details
  },
  methods: {
    mouseenter(val) {
      this.detailsshow = true;
      this.channel = val;
    }
  }
};
</script>

<style lang="less" scoped>
.channel-type {
  position: relative;
  ul {
    margin: 10px 0 0 0;
    li {
      font-size: 14px;
      height: 24px;
      line-height: 24px;
      padding: 0 0 0 18px;
      color: #333;
    }
    li:hover {
      background: #d9d9d9;
    }
  }
  .channel-item {
    background-color: #fff;
    width: 998px;
    height: 450px;
    position: absolute;
    left: 191px;
    top: -10px;
    z-index: 99;
    box-shadow: 2px 0 10px #d9d9d9;
    display: none;
  }
}
.channel-type:hover .channel-item {
  display: block;
}
</style>
