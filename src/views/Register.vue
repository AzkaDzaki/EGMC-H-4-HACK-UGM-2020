<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Daftar EGMC</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>

            <form action="#" @submit.prevent="submit">
            <div class="form-group">
                <label class="label" for="name">Nama</label>
                <input
                id="name"
                type="name"
                class="form-control"
                name="name"
                value
                required
                autofocus
                v-model="form.userName"
                />
            </div>
            <div class="form-group">
                <label class="label" for="email">Email</label>
                <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                value
                required
                autofocus
                v-model="form.userEmail"
                />
            </div>
            <div class="form-group">
                <label class="label" for="password" >Password</label>
                <input
                id="id"
                type="password"
                class="form-control"
                name="id"
                required
                v-model="form.userPassword"
                />
            </div>
            <div class="form-group">
                <label class="label" for="password" >Confirm Password</label>
                <input
                id="id"
                type="password"
                class="form-control"
                name="id"
                required
                v-model="form.id"
                />
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                    <label class="label" for="name">Tanggal Lahir</label>
                    <input
                    id="ttl"
                    type="ttl"
                    class="form-control"
                    name="ttl"
                    value
                    required
                    autofocus
                    v-model="form.userBirthDate"
                    />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                    <label class="label" for="name">Kontak</label>
                    <input
                    id="kontak"
                    type="kontak"
                    class="form-control"
                    name="kontak"
                    value
                    required
                    autofocus
                    v-model="form.userPhoneNumber"
                    />
                </div>
              </div>
            </div>
            <div class="form-group">
                <label class="label" for="name">Alamat</label>
                <input
                id="alamat"
                type="alamat"
                class="form-control"
                name="alamat"
                value
                required
                autofocus
                v-model="form.userAddress"
                />
            </div>
            <button type="submit" class="btn btn-primary">Daftar</button>
            <br>
            <br>
            <p>Sudah memiliki akun? <router-link to="/login">Masuk</router-link> disini</p>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import axios from 'axios'


export default {
  data() {
    return {
      form: {
        userName: "",
        userEmail: "",
        userPassword: "",
        userBirthDate: "",
        userPhoneNumber: "",
        userAddress: ""
      },
      info: [
        {
            healthRecordId: "Lalala",
          referralReason: "Yeyeye"
        }
      ],
      error: null
    };
  },
  mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get('http://localhost:8800/egmc/api/users?id=USER-ee11ab2e-9c5c-4010-8544-f35fdcd7c3cc', config)
      .then(response => (this.info = response.data))
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.userEmail, this.form.userPassword)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.userName,
              id: this.form.id
            })
            .then(() => {
                this.$router.push({name: 'Home'})
            });
        })
        .catch(err => {
          this.error = err.message;
        });
      let config = {
        headers: {
          'Accept' : 'application/json',
          "Content-Type": "application/json"
        }
      }
      axios.post('http://localhost:8800/egmc/api/auth/user', this.form, config).then(() => {
        this.form.name = ''
        this.form.email = ''
        this.form.password = ''
        this.form.ttl = ''
        this.form.kontak = ''
        this.form.alamat = ''
        this.form.id = ''
      });
      this.$router.push({component: 'Home'})
    },
  }
};
</script>

<style lang="scss" scoped>
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