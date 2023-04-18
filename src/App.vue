<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.$store.dispatch("categoryList");
    if (this.$route.path != "/home") {
      this.show = false;
    }
  }
};
</script>

<style>
</style>
