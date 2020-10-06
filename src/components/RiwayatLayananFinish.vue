<template>
  <div class="RiwayatLayanan container">
        <div class="card">
        <div class="card-body">
            <h1>Riwayat Layanan</h1>
            <table class="table">
            <thead class="">
                <tr>
                <th scope="col" style="padding-left:1.25rem;">Layanan</th>
                <th scope="col">Dokter</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Waktu</th>
                <th scope="col">Status</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <tbody v-for="history in history" :key="history.bookingSubmissionId">
                <tr>
                <th scope="row" style="padding-left:1.25rem;">{{history.bookingSubmissionDto.healthServiceDto.healthServiceName}}</th>
                <td>{{history.doctorDto.doctorName}}</td>
                <td>{{history.bookingSubmissionDto.bookingSubmissionDate[2]}}-{{history.bookingSubmissionDto.bookingSubmissionDate[1]}}-{{history.bookingSubmissionDto.bookingSubmissionDate[0]}}</td>
                <td>{{history.bookingSubmissionDto.bookingSubmissionDate[3]}}:{{history.bookingSubmissionDto.bookingSubmissionDate[4]}}</td>
                <td style="color:#5cb85c; font-weight:bold;">Finished</td>
                
                <td @click="detailPasien(history.healthRecordId)" style="cursor: pointer;"><span class="label" style="background-color:#5bc0de; padding: 8px;color:#fff;border-radius:8px">Detail</span></td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex";

export default {
    data(){
        return{
            history: null
        }
    },
        computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user_bio: "user_bio"
    }),
  },
    mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get(`http://localhost:8800/egmc/api/users/history/record?userId=${this.user_bio.userId}`, config)
      .then(response => (this.history = response.data))
    },
    methods: {
        detailPasien(id){
          this.$store.dispatch('GET_REC_ID', id)
          this.$router.push({name: 'DetailFormPasienFinish'})
        }
    }
}
</script>

<style scoped lang="scss">
.RiwayatLayanan{
    margin-top: 25px;

    h1{
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        padding: 1.25rem;
        padding-bottom: 0.7rem;
    }
}

.card{
    border:none;
    border-radius: 8px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
}

.card-body{
    padding: 0;
}

thead{
    background-color: #E8E8E8;
}

table{
    color: #52575C;
    text-align: left;
}
th, td{
    font-size: 14px;
}
</style>