<template>
  <div class="RiwayatLayanan container">
        <div class="card">
        <div class="card-body">
            <h1>Riwayat Layanan</h1>
            <table class="table">
            <thead class="">
                <tr>
                <th scope="col" style="padding-left:1.25rem;">Layanan</th>
                <th scope="col">Nama</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Waktu</th>
                <th scope="col">Status</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <tbody v-for="history in history" :key="history.bookingSubmissionId">
                <tr>
                <th scope="row" style="padding-left:1.25rem;">{{history.healthServiceDto.healthServiceName}}</th>
                <td>{{history.patientDto.userName}}</td>
                <td>{{history.bookingSubmissionDate[2]}}-{{history.bookingSubmissionDate[1]}}-{{history.bookingSubmissionDate[0]}}</td>
                <td>{{history.bookingSubmissionDate[3]}}:{{history.bookingSubmissionDate[4]}}</td>
                <td>{{history.bookingSubmissionStatus}}</td>
                <td style="cursor:pointer;" @click="edit(history.bookingSubmissionId)">Edit</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            history: null
        }
    },
    mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get(`http://localhost:8080/egmc/api/admin/findAll/booking`, config)
      .then(response => (this.history = response.data))
    },
    methods: {
        edit(bookingSubmissionId){
            this.$store.dispatch('EDIT_BOOKING_ID', bookingSubmissionId)
            this.$router.push({name: 'admin-confirm'})

        },
        del(){
        let config = {
            headers: {
                'Accept' : 'application/json',
                "Content-Type": "application/json"
            }
        }
        axios.delete('http://localhost:8080/egmc/api/users/booking?id=SUB-25b8c2b3-8226-4851-b78d-bcbc8efc4cec', config).then(() =>{
            this.history.splice(0,1)
        })
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