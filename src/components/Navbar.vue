<template>
    <nav class="navbar navbar-expand-lg navbar-light  mb-4 sticky-top">
      <div class="container">
  <a class="navbar-brand" href="#">EGMC</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul v-if="user_bio.userId == 'USER-989c4fb3-865a-40c9-8e47-0084c6c5712a'" class="navbar-nav ml-auto">
    <router-link to="/admin/home" class="mb-auto mt-auto" style="text-decoration: none;">
    <li class="nav-item">
      <a class="nav-link">Beranda</a>
    </li>
    </router-link>
    <router-link to="/admin/statistik-pengunjung" class="mb-auto mt-auto" style="text-decoration: none;">
    <li class="nav-item">
      <a class="nav-link">Statistik</a>
    </li>
    </router-link>
    <template v-if="user.loggedIn">
    <div class="btn-group">
      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{user.data.displayName}}
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <router-link to="login"  style="text-decoration:none; cursor:pointer" >
        <button class="dropdown-item" type="button"  @click="signOut">Sign out</button>
        </router-link>
      </div>
    </div>
    </template>
    <template v-else>
    <li class="nav-item">
        <router-link to="login" class="nav-link">
            <button type="button" class="btn" style=" padding-left:20px; padding-right:20px;">Login</button>
        </router-link>
    </li>
    </template>
    </ul>
    <ul v-else-if="user_bio.userId == 'DOC-d096bd73-d9ec-4fae-aec4-72143e8ffc6f'" class="navbar-nav ml-auto">
    <template v-if="user.loggedIn">
    <div class="btn-group">
      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{user.data.displayName}}
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <router-link to="login"  style="text-decoration:none; cursor:pointer" >
        <button class="dropdown-item" type="button"  @click="signOut">Sign out</button>
        </router-link>
      </div>
    </div>
    </template>
    <template v-else>
    <li class="nav-item">
        <router-link to="login" class="nav-link">
            <button type="button" class="btn" style=" padding-left:20px; padding-right:20px;">Login</button>
        </router-link>
    </li>
    </template>
    </ul>
    <ul v-else class="navbar-nav ml-auto">
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
    <div class="btn-group">
      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{user.data.displayName}}
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <router-link to="login" style="text-decoration:none; cursor:pointer" >
        <button class="dropdown-item" type="button" @click="signOut">Sign out</button>
        </router-link>
      </div>
    </div>
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
      user: "user",
      user_bio: "user_bio"
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