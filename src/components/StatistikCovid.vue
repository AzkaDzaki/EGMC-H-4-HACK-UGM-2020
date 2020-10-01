<template>
    <div class="StatistikCovid container">
        <div class="row">
        <div class="col-lg-12 mb-3" >
            <div class="card">
            <div class="card-body">
                <h1>Statistik Covid</h1>
                <p style="text-align:left;">DI Yogyakarta</p>
                <div class="row">
                    <div class="col-4">
                        <div class="card-covid">
                            <p class="covid-title">Kasus Positif</p>
                            <p class="covid-item">{{covid.kasusPosi}} Jiwa</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card-covid">
                            <p class="covid-title">Kasus Sembuh</p>
                            <p class="covid-item">{{covid.kasusSemb}} Jiwa</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card-covid">
                            <p class="covid-title">Kasus Meninggal</p>
                            <p class="covid-item">{{covid.kasusMeni}} Jiwa</p>
                        </div>
                    </div>
                </div>
                <br>
                <router-link to="/statistik-covid" style="text-decoration:none;">
                <p style="text-align:right; color:#336CFB; font-size:14px;">Lihat Semua</p>
                </router-link>
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
            covid: null
        }
    },
    mounted () {
    axios
      .get('https://indonesia-covid-19.mathdro.id/api/provinsi')
      .then(response => (this.covid = response.data.data[21]))
  }
}
</script>

<style scoped lang="scss">
.StatistikCovid{
    margin-top: 25px;
}

.card{
    border:none;
    border-radius: 8px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
}

.card-body{
    h1{
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        padding-bottom: 0.7rem;
    }
    p.covid-title{
        font-size: 16px;
        font-weight: bold;
    }
    p.covid-item{
        margin-bottom: 0;
        font-size: 14px;
    }
}
.card-covid{
  box-shadow: 0 0 0.5px 0.5px #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  -moz-outline-radius: 5px;
}
</style>