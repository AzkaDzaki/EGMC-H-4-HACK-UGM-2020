<template>
    <div class="DaftarLayanan container">
        <h1>Daftar Layanan</h1>
        <div class="row">
        <div class="col-md-6 col-lg-3 mb-3" v-for="layanan in layanan" :key="layanan.id">
            <router-link to="/form" style="text-decoration:none;">
            <div class="card">
            <div class="card-body flex">
                <img v-bind:src="require('@/assets/img/' + layanan.icon)" class="icon" />
                <div class="layananTeks">
                    <h5 class="card-title">{{layanan.nama}}</h5>
                    <p class="card-text">{{layanan.jam}}</p>
                    <hr>
                    <p class="card-text-hari">{{layanan.buka}}</p>
                </div>
            </div>
            </div>
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            layanan: [
                {
                    nama: 'Rapid Test',
                    jam: '09.00 - 10.00',
                    buka: 'Setiap hari',
                    icon: 'rapid.png'
                },
                {
                    nama: 'Swab',
                    jam: '09.00 - 15.00',
                    buka: 'Senin - Jumat',
                    icon: 'swab.png'
                },
                {
                    nama: 'Poli Klinik Umum',
                    jam: '09.00 - 15.00',
                    buka: 'Senin - Jumat',
                    icon: 'swab.png'
                },
                {
                    nama: 'Poli Gigi',
                    jam: '09.00 - 15.00',
                    buka: 'Senin - Jumat',
                    icon: 'swab.png'
                }
            ]
        }
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