<template>
  <div class="Tiket container">
      <div class="row">
          <div class="col-9">
                <div class="card">
                <div class="card-body">
                    <h1>Informasi Pesanan</h1>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Nama</th>
                        <td>{{booking.patientDto.userName}}</td>
                        <th scope="row">ID</th>
                        <td>{{booking.bookingSubmissionId}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Layanan</th>
                        <td>{{booking.healthServiceDto.healthServiceName}}</td>
                        <th scope="row">Status</th>
                        <td>{{booking.patientStatus}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Waktu Layanan</th>
                        <td>{{booking.bookingSubmissionDate[2]}}-{{booking.bookingSubmissionDate[1]}}-{{booking.bookingSubmissionDate[0]}} | {{booking.bookingSubmissionDate[3]}}:{{booking.bookingSubmissionDate[4]}}</td>
                        </tr>
                    </tbody>
                    </table>
                    <hr>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Gejala</th>
                        <td>{{booking.registrationForm.symptoms}}</td>
                        <th scope="row">Alergi</th>
                        <td>{{booking.registrationForm.medicineAllergy}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Alasan Kesehatan</th>
                        <td>{{booking.registrationForm.healthReasons}}</td>
                        <th scope="row">Riwayat Perjalanan</th>
                        <td>{{booking.registrationForm.travelHistory}}</td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="flex">
                    <router-link to="/riwayat-layanan">
                    <button type="button" class="btn" style="margin-left:10px; padding-left:20px; padding-right:20px;">Konfirmasi</button>
                    </router-link>
                    <button class="btn btn-outline-secondary" style="background-color:#fff;"><router-link to="" style="text-decoration:none;color:#6c757d;">Kembali</router-link></button>
                    </div>
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

export default {
    data(){
        return{
            booking_id: this.$store.state.booking_id,
            booking: null
        }
    },
    mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get(`http://localhost:8080/egmc/api/users/booking?id=${this.booking_id}`, config)
      .then(response => (this.booking = response.data))
    },
}
</script>

<style scoped lang="scss">

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

tbody{
    text-align: left;
        
    th{
        font-size: 14px;
        font-weight: bold;
    }

    td{
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