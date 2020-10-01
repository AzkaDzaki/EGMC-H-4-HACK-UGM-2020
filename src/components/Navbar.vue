<template>
    <nav class="navbar navbar-expand-lg navbar-light  mb-4 sticky-top">
      <div class="container">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
    <router-link to="/" class="mb-auto mt-auto" style="text-decoration: none;">
    <li class="nav-item">
      <a class="nav-link">Beranda</a>
    </li>
    </router-link>
    <router-link to="/riwayat-layanan" class="mb-auto mt-auto" style="text-decoration: none;">
    <li class="nav-item">
      <a class="nav-link">Riwayat Layanan</a>
    </li>
    </router-link>
    <template v-if="user.loggedIn">
    <div class="nav-item">{{user.data.displayName}}</div>
    <li class="nav-item">
        <a class="nav-link" @click.prevent="signOut">Sign out</a>
    </li>
    </template>
    <template v-else>
    <li class="nav-item">
        <router-link to="login" class="nav-link">
            <button type="button" class="btn" style=" padding-left:20px; padding-right:20px;">Login</button>
        </router-link>
    </li>
    </template>
    </ul>
  </div>
  </div>
</nav>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    },
    
  }
};
</script>