<template>
  <div class="FormPasien container">
      <div class="row">
          <div class="col-9">
                <div class="card">
                <div class="card-body">
                    <h1>Data Diri</h1>
                    <form>
                    <fieldset disabled>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group">
                                <label for="disabledTextInput">Nama</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder='user_bio.userName'>
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Alamat</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder='user_bio.userAddress'>
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Dokter</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder='$store.state.dokter_bio'>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                <label for="disabledTextInput">Tanggal Lahir</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder='user_bio.userBirthDate'>
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Kontak</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder='user_bio.userPhoneNumber'>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    </form>
                                        <h1>Keterangan</h1>

            <form action="#" @submit.prevent="submit">
            <div class="form-group">
                <label class="label" for="symptoms">Gejala</label>
                <input
                id="symptoms"
                type="symptoms"
                class="form-control"
                name="symptoms"
                value
                required
                autofocus
                v-model="temp.symptoms"
                />
            </div>
            <div class="form-group">
                <label class="label" for="healthReasons">Alasan Kesehatan</label>
                <input
                id="healthReasons"
                type="healthReasons"
                class="form-control"
                name="healthReasons"
                value
                required
                autofocus
                v-model="temp.healthReasons"
                />
            </div>
            <div class="form-group">
                <label class="label" for="medicineAllergy" >Alergi Obat</label>
                <input
                id="medicineAllergy"
                type="medicineAllergy"
                class="form-control"
                name="medicineAllergy"
                required
                v-model="temp.medicineAllergy"
                />
            </div>
            <div class="form-group">
                <label class="label" for="travelHistory" >Riwayat Perjalanan</label>
                <input
                id="travelHistory"
                type="travelHistory"
                class="form-control"
                name="travelHistory"
                required
                v-model="temp.travelHistory"
                />
            </div><router-link to="/tiket-pesanan">
            <button type="submit" class="btn btn-primary">Konfirmasi</button></router-link>
            <button type="submit" class="btn btn-primary">Kembali</button>

            </form>
</div>
                </div>
          </div>
          <div class="col-3">
            <div class="card">
            <div class="card-body flex">
                <!--<img v-bind:src="require('@/assets/img/' + get_service.icon)" class="icon" />-->
                <div class="layananTeks">
                    <h5 class="card-title">{{$store.state.get_service.healthServiceName}}</h5>
                    <p class="card-text">{{$store.state.get_service.healthServiceHour}}</p>
                    <hr>
                    <p class="card-text-hari">{{$store.state.get_service.healthServiceDays}}</p>
                </div>
            </div>
            </div>
          </div>
      </div>
  </div>
</template>


<script>
import axios from 'axios'
import { mapGetters } from "vuex";


export default {
  data() {
    return {
      temp: {
        symptoms: "",
        healthReasons: "",
        medicineAllergy: "",
        travelHistory: "",
      },
      form: {
        bookingSubmissionDate: '2120-10-03T05:10:47.444Z',
        patientStatus: 'UMUM',
        serviceId: this.$store.state.get_service.healthServiceId,
        userId: this.$store.state.user_bio.userId,
        registrationForm: {
            healthReasons: '',
            medicineAllergy: '',
            symptoms: '',
            travelHistory: ''
        }
      },
      error: null
    };
  },
    computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user_bio: "user_bio"
    }),
  },
  methods: {
    submit() {

        this.form.registrationForm.symptoms = this.temp.symptoms
        this.form.registrationForm.healthReasons = this.temp.healthReasons
        this.form.registrationForm.medicineAllergy = this.temp.medicineAllergy
        this.form.registrationForm.travelHistory = this.temp.travelHistory

        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.post('http://localhost:8080/egmc/api/users/booking', this.form, config).then(() => {
            this.form.name = ''
            this.form.email = ''
            this.form.password = ''
            this.form.ttl = ''
            this.form.kontak = ''
            this.form.alamat = ''
            this.form.id = ''
        });
        },
  }
};
</script>

<style lang="scss" scoped>

.card{
    border:none;
    border-radius: 8px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);

    h1{
        font-size: 18px;
        color: #336CFB;
        text-align: left;
        font-weight: bold;
        margin-bottom: 20px;
    }
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

.btn{
  background-color: #336CFB; 
  color: #ffffff; 
  float: right;
}

.btn-outline{
    background-color: #fff;
    color: #336CFB;
}
</style>