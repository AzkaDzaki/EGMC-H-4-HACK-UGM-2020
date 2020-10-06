<template>
    <div class="DaftarLayanan container">
        <h1>Daftar Layanan</h1>
        <div class="row">
        <div class="col-md-6 col-lg-3 mb-3" v-for="layanan in all_service" :key="layanan.id" @click="GET_SERVICE(layanan.healthServiceId)">
            <router-link to="/form" style="text-decoration:none;">
            <div class="card">
            <div class="card-body flex">
                <!--<img v-bind:src="require('@/assets/img/' + layanan.icon)" class="icon" />-->
                <div class="layananTeks">
                    <h5 class="card-title">{{layanan.healthServiceName}}</h5>
                    <p class="card-text">{{layanan.healthServiceHour}}</p>
                    <hr>
                    <p class="card-text-hari">{{layanan.healthServiceDays}}</p>
                </div>
            </div>
            </div>
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from 'axios'

export default {
    data() {
        return {
            all_service: null
        }
    },
    mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get('http://localhost:8800/egmc/api/healthService/all', config)
      .then(response => (this.all_service = response.data))
    },
    methods: {
        ...mapActions(['GET_SERVICE'])
    }

}
</script>

<style scoped lang="scss">
.DaftarLayanan{
    color: #52575C;

    h1{
        font-size: 20px;
        font-weight: bold;
        text-align: left;
    }
}

.flex{
    display: flex;
}

.card-body{

    .layananTeks{
        text-align: left;        

        h5{
            font-size: 16px;
            font-weight: bold;
            color: #52575C;
        }
        p{
            font-size: 14px;
            color: #336CFB;
            margin-bottom: 0;

            &.card-text-hari{
                color: #52575C;
                font-weight: bold;
            }
        }
    }
}

.card{
    border:none;
    border-radius: 8px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
}

.col-sm-3{
    max-width: 25%;
}

.icon{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

hr{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>