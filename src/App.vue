<template>



        <div class="wrapper" id="app">
          <nav-bar />
          <router-view />
          <Footer />
        </div>



</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">


.wrapper {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}
</style>>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
    height: 100vh;
    min-height: 700px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
