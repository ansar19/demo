<template>
  <div class="wrapper" id="app">
    <nav-bar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>>
