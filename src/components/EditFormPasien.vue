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
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder="edit_booking.patientDto.userName">
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Alamat</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder="edit_booking.patientDto.userAddress">
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Dokter</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="lala">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                <label for="disabledTextInput">Tanggal Lahir</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder="edit_booking.patientDto.userBirthDate">
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Kontak</label>
                                <input type="text" id="disabledTextInput" class="form-control" :placeholder="edit_booking.patientDto.userPhoneNumber">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    </form>
                    <h1>Keterangan</h1>
                                <form action="#" ref="tempt" @submit.prevent="submit">
            <div class="form-group">
                <label class="label" for="symptoms">Gejala</label>
                <input ref="symptoms"
                id="symptoms"
                type="symptoms"
                class="form-control"
                name="symptoms"
                autofocus
                :placeholder="edit_booking.registrationForm.symptoms"
                />
            </div>
            <div class="form-group">
                <label class="label" for="healthReasons">Alasan Kesehatan</label>
                <input ref="healthReasons"
                id="healthReasons"
                type="healthReasons"
                class="form-control"
                name="healthReasons"
                value
                autofocus
                :placeholder="edit_booking.registrationForm.healthReasons"
                />
            </div>
            <div class="form-group">
                <label class="label" for="medicineAllergy" >Alergi Obat</label>
                <input ref="medicineAllergy"
                id="medicineAllergy"
                type="medicineAllergy"
                class="form-control"
                name="medicineAllergy"
                :placeholder="edit_booking.registrationForm.medicineAllergy"
                />
            </div>
            <div class="form-group">
                <label class="label" for="travelHistory" >Riwayat Perjalanan</label>
                <input ref="travelHistory"
                id="travelHistory"
                type="travelHistory"
                class="form-control"
                name="travelHistory"
                :placeholder="edit_booking.registrationForm.travelHistory"
                />
            </div>
            <div class="form-group">
                <label for="bookingSubmissionDate" class="col-2 col-form-label">Pilih Waktu Periksa{{edit_booking.bookingSubmissionDate[0]}}</label>
                <input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="bookingSubmissionDate" v-model="edit_booking.bookingSubmissionDate">
            </div>
            <div class="form-check" @click="sub" style="text-align: left">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Ya, data yang saya isikan adalah benar</label>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            <button class="btn">Kembali</button>
            </form>   
       
</div>
                </div>
          </div>
          <div class="col-3">
          </div>
      </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
        edit_booking_id: this.$store.state.edit_booking_id,
        edit_booking: null,
      error: null,
    };
  },
    mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get(`http://localhost:8080/egmc/api/users/booking?id=${this.edit_booking_id}`, config)
      .then(response => (this.edit_booking = response.data))
    },
  methods: {
      sub(){
        this.patientStatus = 'UMUM'
      },
    submit() {
        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.put(`http://localhost:8080/egmc/api/admin/booking/confirm?id=${this.edit_booking_id}`, 
        {
        }
        , config)
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