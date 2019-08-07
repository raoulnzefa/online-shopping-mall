<template>
  <el-container style="min-width:1200px">
    <el-header style="height:30px;">
      <Header></Header>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer style="height:200px;">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
