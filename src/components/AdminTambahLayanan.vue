<template>
    <div class="StatistikCovid container">
        <div class="row">
        <div class="col-lg-12 mb-3" >
            <h1>Daftar Layanan</h1>
            <div class="card">
            <div class="card-body">
            <div class="mb-4" style="text-align:left">
            <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Tambah Layanan</a>
            </p>
            <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                <div>
                    <form action="#" ref="tempt" @submit.prevent="submit">
                    <div class="form-group">
                        <label class="label" for="healthServiceName">Nama Layanan</label>
                        <input ref="healthServiceName"
                        id="healthServiceName"
                        type="healthServiceName"
                        class="form-control"
                        name="healthServiceName"
                        autofocus
                        />
                    </div>
                    <div class="form-group">
                        <label class="label" for="healthServiceHour">Waktu Layanan</label>
                        <input ref="healthServiceHour"
                        id="healthServiceHour"
                        type="healthServiceHour"
                        class="form-control"
                        name="healthServiceHour"
                        value
                        autofocus
                        />
                    </div>
                    <div class="form-group">
                        <label class="label" for="healthServiceDays" >Hari Layanan</label>
                        <input ref="healthServiceDays"
                        id="healthServiceDays"
                        type="healthServiceDays"
                        class="form-control"
                        name="healthServiceDays"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary ml-2">Konfirmasi</button>
                    </form>  
                    </div>  
                </div>
                </div>
            </div>
            </div>
                <div class="row">
                    <div class="col-3" v-for="service in service" :key="service.id">
                        <div class="card-covid">
                            <p class="covid-title">{{service.healthServiceName}}</p>
                            <p class="covid-item">{{service.healthServiceHour}}</p>
                            <p class="covid-item">{{service.healthServiceDays}}</p>
                        </div>
                    </div>
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
            service: null
        }
    },
    mounted () {
    axios
      .get('http://localhost:8800/egmc/api/healthService/all')
      .then(response => (this.service = response.data))
    },
  methods: {
    edit(id){
        this.$store.dispatch('GET_SERVICE_ID', id)
        this.$router.push({name: 'admin-edit-service'})
    },
    submit() {
        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.post('http://localhost:8800/egmc/api/admin/service', 
        {
            healthServiceName: this.$refs.tempt[0].value,
            healthServiceHour: this.$refs.tempt[1].value,
            healthServiceDays: this.$refs.tempt[2].value
        }
        , config).then(() => {
            console.log(this.$refs)
        })
        }
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
    h1{
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        padding-bottom: 0.7rem;
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
label{
    text-align:left;
    margin-left: auto;
}
</style>