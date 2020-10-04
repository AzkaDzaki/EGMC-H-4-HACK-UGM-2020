<template>
    <div>
        {{edit_booking_id}}
                    <button @click="confirm" class="btn btn-primary">Confirm</button>
            <button @click="cancel" class="btn">Cancel</button>

             <div class="Tiket container">
          <div class="">
                <div class="card">
                <div class="card-body">
                    <h1>Informasi Pesanan</h1>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Nama</th>
                        <td>asd</td>
                        <th scope="row">ID</th>
                        <td>asd</td>
                        </tr>
                        <tr>
                        <th scope="row">Layanan</th>
                        <td>asd</td>
                        <th scope="row">Status</th>
                        <td>ads</td>
                        </tr>
                        <tr>
                        <th scope="row">Waktu Layanan</th>
                        <td>asd</td>
                        </tr>
                    </tbody>
                    </table>
                    <hr>
                    <table class="table table-borderless" style="text-align: left;">
                    <tbody>
                        <tr>
                        <th scope="row">Gejala</th>
                        <td>asd</td>
                        <th scope="row">Alergi</th>
                        <td>asd</td>
                        </tr>
                        <tr>
                        <th scope="row">Alasan Kesehatan</th>
                        <td>asd</td>
                        <th scope="row">Riwayat Perjalanan</th>
                        <td>asd</td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="flex">
                    <button @click="confirm" class="btn btn-primary ml-2">Confirm</button>
                    <button  @click="cancel" class="btn btn-outline-secondary" style="background-color:#fff;"><router-link to="" style="text-decoration:none;color:red;">Cancel</router-link></button>
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
  data() {
    return {
        edit_booking_id: this.$store.state.edit_booking_id,
        edit_booking: null,
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
      .get(`http://localhost:8080/egmc/api/users/booking?id=${this.edit_booking_id}`, config)
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
        axios.put(`http://localhost:8080/egmc/api/admin/booking/confirm?id=${this.edit_booking_id}`, 
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
        axios.put(`http://localhost:8080/egmc/api/admin/booking/cancel?id=${this.edit_booking_id}`
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
</style>