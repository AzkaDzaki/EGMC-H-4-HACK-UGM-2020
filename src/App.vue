<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light  mb-4 sticky-top">
      <div class="container">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
    <router-link to="/" style="text-decoration: none;">
    <li class="nav-item">
      <a class="nav-link">Beranda</a>
    </li>
    </router-link>
    <router-link to="/riwayat-layanan" style="text-decoration: none;">
    <li class="nav-item">
      <a class="nav-link">Riwayat Layanan</a>
    </li>
    </router-link>
    <li class="nav-item">
      <a class="nav-link">Dokter</a>
    </li>
    </ul>
  </div>
  </div>
</nav>

    <router-view/>
  </div>
</template>

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
