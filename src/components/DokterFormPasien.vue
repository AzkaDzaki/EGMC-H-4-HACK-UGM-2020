<template>
    <div>
        <div class="Tiket container">
          <div class="mb-5">
                <div class="card">
                <div class="card-body">
                    <h1>Informasi Pesanan</h1>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Nama</th>
                        <td>{{edit_booking.patientDto.userName}}</td>
                        <th scope="row">ID</th>
                        <td>{{edit_booking.bookingSubmissionId}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Layanan</th>
                        <td>{{edit_booking.healthServiceDto.healthServiceName}}</td>
                        <th scope="row">Status</th>
                        <td>{{edit_booking.patientStatus}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Waktu Layanan</th>
                        <td>{{edit_booking.bookingSubmissionDate[2]}}-{{edit_booking.bookingSubmissionDate[1]}}-{{edit_booking.bookingSubmissionDate[0]}} | {{edit_booking.bookingSubmissionDate[3]}}:{{edit_booking.bookingSubmissionDate[4]}}</td>
                        </tr>
                    </tbody>
                    </table>
                    <hr>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Gejala</th>
                        <td>{{edit_booking.registrationForm.symptoms}}</td>
                        <th scope="row">Alergi</th>
                        <td>{{edit_booking.registrationForm.medicineAllergy}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Alasan Periksa</th>
                        <td>{{edit_booking.registrationForm.healthReasons}}</td>
                        <th scope="row">Riwayat Perjalanan</th>
                        <td>{{edit_booking.registrationForm.travelHistory}}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
          </div>
          <div class="">
              <div class="card">
                  <div class="card-body">
                    <h1>Rekam Medis Pasien</h1>
                    <form action="#" ref="tempt" @submit.prevent="submit">
                                <div class="form-group">
                                    <label class="label" for="mainComplaint">Keluhan utama</label>
                                    <input ref="mainComplaint"
                                    id="mainComplaint"
                                    type="mainComplaint"
                                    class="form-control"
                                    name="mainComplaint"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="label" for="personalMedicalHistory">Riwayat penyakit saat ini</label>
                                    <input ref="personalMedicalHistory"
                                    id="personalMedicalHistory"
                                    type="personalMedicalHistory"
                                    class="form-control"
                                    name="personalMedicalHistory"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="label" for="precedingDiseases">Riwayat penyakit dahulu</label>
                                    <input ref="precedingDiseases"
                                    id="precedingDiseases"
                                    type="precedingDiseases"
                                    class="form-control"
                                    name="precedingDiseases"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="label" for="familyMedicalHistory">Riwayat penyakit keluarga</label>
                                    <input ref="familyMedicalHistory"
                                    id="familyMedicalHistory"
                                    type="familyMedicalHistory"
                                    class="form-control"
                                    name="familyMedicalHistory"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="label" for="socialMedicalHistory">Riwayat sosial</label>
                                    <input ref="socialMedicalHistory"
                                    id="socialMedicalHistory"
                                    type="socialMedicalHistory"
                                    class="form-control"
                                    name="socialMedicalHistory"
                                    value
                                    required
                                    autofocus
                                    />
                                </div> 
                                <div class="form-group">
                                    <label class="label" for="physicalExamination">Pemeriksaan fisik</label>
                                    <input ref="physicalExamination"
                                    id="physicalExamination"
                                    type="physicalExamination"
                                    class="form-control"
                                    name="physicalExamination"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>  
                                <div class="form-group">
                                    <label class="label" for="therapy">Terapi</label>
                                    <input ref="therapy"
                                    id="therapy"
                                    type="therapy"
                                    class="form-control"
                                    name="therapy"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>                                 
                    <br>
                    <button type="submit" class="btn btn-primary ml-2">Konfirmasi</button>
                    <button class="btn btn-outline-secondary" style="background-color:#fff; color:#000" @click="$router.go(-1)">Kembali</button>
                    </form>
                  </div>
              </div>
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
        doctor: this.$store.state.user_bio.userId,
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
      .get(`http://localhost:8800/egmc/api/users/booking?id=${this.edit_booking_id}`, config)
      .then(response => (this.edit_booking = response.data))
    },
  methods: {
      sub(){
        this.patientStatus = 'UMUM',
        this.edit_booking_id = this.$store.state.edit_booking_id,
        this.doctor = this.$store.state.user_bio.userId
      },
    submit() {
        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.post('http://localhost:8800/egmc/api/doctors/record', 
        {
            bookingSubmissionId: this.edit_booking_id,
            doctorId: this.doctor,
            referral: true,
            analysisForm: {
                mainComplaint: this.$refs.tempt[0].value,
                personalMedicalHistory: this.$refs.tempt[1].value,
                precedingDiseases: this.$refs.tempt[2].value,
                familyMedicalHistory: this.$refs.tempt[3].value,
                socialMedicalHistory: this.$refs.tempt[4].value,
                physicalExamination: this.$refs.tempt[5].value,
                therapy: this.$refs.tempt[6].value
    }
        }
        , config).then(() => {
            this.$router.push({name: 'dokter-riwayat-layanan'})
        });
        },
  },
    cancel(){
        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.put(`http://localhost:8800/egmc/api/admin/booking/cancel?id=${this.edit_booking_id}`
        , config).then(() => {
            this.$router.push({name: 'admin-riwayat-layanan'})
        })
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

.table td, .table th{
    border-top: none;
    padding-left: 0;
}
</style>