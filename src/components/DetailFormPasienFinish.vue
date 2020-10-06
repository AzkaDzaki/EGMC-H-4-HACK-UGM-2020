<template>
    <div>
        <div class="Tiket container">
          <div class="">
                <div class="card mb-5">
                <div class="card-body">
                    <h1>Informasi Pesanan</h1>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Nama</th>
                        <td>{{edit_booking.bookingSubmissionDto.patientDto.userName}}</td>
                        <th scope="row">Dokter</th>
                        <td>{{edit_booking.doctorDto.doctorName}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Layanan</th>
                        <td>{{edit_booking.bookingSubmissionDto.healthServiceDto.healthServiceName}}</td>
                        <th scope="row">Status</th>
                        <td>{{edit_booking.bookingSubmissionDto.patientStatus}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Waktu Layanan</th>
                        <td>{{edit_booking.bookingSubmissionDto.bookingSubmissionDate[2]}}-{{edit_booking.bookingSubmissionDto.bookingSubmissionDate[1]}}-{{edit_booking.bookingSubmissionDto.bookingSubmissionDate[0]}} | {{edit_booking.bookingSubmissionDto.bookingSubmissionDate[3]}}:{{edit_booking.bookingSubmissionDto.bookingSubmissionDate[4]}}</td>
                        </tr>
                    </tbody>
                    </table>
                    <hr>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Gejala</th>
                        <td>{{edit_booking.bookingSubmissionDto.registrationForm.symptoms}}</td>
                        <th scope="row">Alergi</th>
                        <td>{{edit_booking.bookingSubmissionDto.registrationForm.medicineAllergy}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Alasan Periksa</th>
                        <td>{{edit_booking.bookingSubmissionDto.registrationForm.medicineAllergy}}</td>
                        <th scope="row">Riwayat Perjalanan</th>
                        <td>{{edit_booking.bookingSubmissionDto.registrationForm.travelHistory}}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div class="card">
                    <div class="card-body">
                    <h1>Informasi lebih lanjut</h1>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Keluhan utama</th>
                        <td>{{edit_booking.analysisForm.mainComplaint}}</td>
                        <th scope="row">Riwayat penyakit saat ini</th>
                        <td>{{edit_booking.analysisForm.personalMedicalHistory}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Riwayat penyakit dahulu</th>
                        <td>{{edit_booking.analysisForm.precedingDiseases}}</td>
                        <th scope="row">Riwayat penyakit keluarga</th>
                        <td>{{edit_booking.analysisForm.familyMedicalHistory}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Riwayat sosial</th>
                        <td>{{edit_booking.analysisForm.socialMedicalHistory}}</td>
                        <th scope="row">Pemeriksaan fisik</th>
                        <td>{{edit_booking.analysisForm.physicalExamination}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Terapi</th>
                        <td>{{edit_booking.analysisForm.therapy}}</td>
                        </tr>
                    </tbody>
                    </table>          
                    <div class="flex">
                    <button  @click="$router.go(-1)" class="btn btn-outline-secondary" style="background-color:#fff; color:#000">Kembali</button>
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
        edit_booking_id: this.$store.state.edit_booking_id,
        edit_booking: null,
      error: null,
      record_id: this.$store.state.rec_id
    };
  },
          computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      rec_id: "rec_id"
    }),
  },
    mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get(`http://localhost:8800/egmc/api/users/result?id=${this.record_id}`, config)
      .then(response => (this.edit_booking = response.data))
    },
    methods: {
      sub(){
        this.patientStatus = 'UMUM'
      },
    confirm() {
        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.put(`http://localhost:8800/egmc/api/admin/booking/confirm?id=${this.edit_booking_id}`, 
        {
        }
        , config).then(() => {
            this.$router.push({name: 'admin-riwayat-layanan'})
        })
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