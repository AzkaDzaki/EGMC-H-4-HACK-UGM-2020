<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  background-color: #ffffff;
}

.router-link-exact-active{
  li{
    a{
        color: #336CFB !important;
    }
  }
}

body{
    background-color: #F6F8FB;

}
</style>
