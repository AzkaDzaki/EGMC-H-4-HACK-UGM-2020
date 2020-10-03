<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Masuk EGMC</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
            <div class="form-group">
                <label class="label" for="email">Email</label>
                <input
                id="email"
                type="email"
                class="form-control input"
                name="email"
                placeholder="Email"
                value
                required
                autofocus
                v-model="form.email" />
            </div>
            <div class="form-group">
                <label class="label" for="password" >Password</label>
                <input
                id="password"
                type="password"
                class="form-control input"
                name="password"
                placeholder="Password"
                required
                v-model="form.password"
                />
            </div>
            <button type="submit" class="btn btn-primary" @click="SET_USER_BIO(id)">Masuk</button>
            <br>
            <br>
            <p>Belum memiliki akun? <router-link to="/registrasi">Daftar</router-link> disini</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";


export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      id: 'USER-cbf04a13-8bdd-47be-b257-f43742e1456b',
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
        if(this.form.email == 'fa@fa.com'){
          this.$router.push({name: 'Home'})
        }
        else if(this.form.email == 'dokter@dokter.com'){
          this.$router.push({name: 'TiktePage'})
        }
        else{
        this.$router.push({name: 'Home'})}})
        .catch((err) => {
        this.error = err.message;
        });
    },
    ...mapActions(['SET_USER_BIO'])
  },
};
</script>

<style scoped lang="scss">
.card-header{
    background-color: #558EFF;
    font-size: 20px;
    color: #fff;
    padding: 30px 10px 30px 10px;
}
.card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: .5px solid rgba(255, 255, 255, 0.125);
    border-radius: 8px;
    box-shadow: 0px 12px 26px 0px rgba(16, 30, 115, 0.06);
}
form{
    width: 400px;
    margin: auto;
}
.form-group{
    text-align: left;
        
    label{
        font-size: 14px;
        font-weight: bold;
    }

    input{
        font-size: 14px;
    }
}
</style>