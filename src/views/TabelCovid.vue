<template>
  <div class="RiwayatLayanan container">
        <div class="card">
        <div class="card-body">
            <h1>Statistik Covid di Indonesia</h1>
            <table class="table">
            <thead class="">
                <tr>
                <th scope="col" style="padding-left:1.25rem;">Provinsi</th>
                <th scope="col">Kasus Positif</th>
                <th scope="col">Kasus Sembuh</th>
                <th scope="col">Kasus Meninggal</th>

                </tr>
            </thead>
            <tbody v-for="covid in covid" :key="covid.id">
                <tr>
                <th scope="row" style="padding-left:1.25rem;">{{covid[1].provinsi}}</th>
                <td>{{covid.kasusPosi}}</td>
                <td>{{covid.kasusSemb}}</td>
                <td>{{covid.kasusMeni}}</td>
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
            covid: null
        }
    },
    mounted () {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(response => (this.covid = response.data))
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