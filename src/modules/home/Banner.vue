<template>
  <Carousel height="450px">
    <el-carousel-item v-for="(item, key) in carouselList" :key="key">
      <img :src="item.img" />
    </el-carousel-item>
  </Carousel>
</template>

<script>
import Carousel from "@/components/Carousel";
import { getCarousel } from "../../api/home";
export default {
  data() {
    return {
      carouselList: []
    };
  },
  components: {
    Carousel
  },
  mounted() {
    this.getCarousel();
  },
  methods: {
    getCarousel() {
      getCarousel()
        .then(res => {
          this.carouselList = res.data.carouselList;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
