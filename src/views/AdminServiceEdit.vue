<template>
    <div>
        <div class="Tiket container">
          <div class="">
              <div class="card">
                  <div class="card-body">
                    <h1>Rekam Medis Pasien</h1>
                    <form action="#" ref="tempt" @submit.prevent="submit">
                                <div class="form-group">
                                    <label class="label" for="mainComplaint">Nama layanan</label>
                                    <input ref="mainComplaint"
                                    id="mainComplaint"
                                    type="mainComplaint"
                                    class="form-control"
                                    name="mainComplaint"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="label" for="personalMedicalHistory">Waktu layanan</label>
                                    <input ref="personalMedicalHistory"
                                    id="personalMedicalHistory"
                                    type="personalMedicalHistory"
                                    class="form-control"
                                    name="personalMedicalHistory"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="label" for="precedingDiseases">Hari layanan</label>
                                    <input ref="precedingDiseases"
                                    id="precedingDiseases"
                                    type="precedingDiseases"
                                    class="form-control"
                                    name="precedingDiseases"
                                    value
                                    required
                                    autofocus
                                    />
                                </div>                                
                    <br>
                    <button type="submit" class="btn btn-primary ml-2"  @click="$router.go(-1)">Konfirmasi</button>
                    <button class="btn btn-outline-secondary" style="background-color:#fff; color:#000" @click="$router.go(-1)">Kembali</button>
                    </form>
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
        service_id: this.$store.state.service_id,
        service: null,
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
      .get(`http://localhost:8800/egmc/api/healthService?id=${this.service_id}`, config)
      .then(response => (this.service = response.data))
    },
  methods: {
      sub(){
        this.patientStatus = 'UMUM',
        this.edit_booking_id = this.$store.state.edit_booking_id,
        this.doctor = this.$store.state.user_bio.userId
      },
    submit() {
        let config = {
        headers: {
            'Accept' : 'application/json',
            "Content-Type": "application/json"
        }
        }
        axios.post('http://localhost:8800/egmc/api/doctors/record', 
        {
            bookingSubmissionId: this.edit_booking_id,
            doctorId: this.doctor,
            referral: true,
            analysisForm: {
                mainComplaint: this.$refs.tempt[0].value,
                personalMedicalHistory: this.$refs.tempt[1].value,
                precedingDiseases: this.$refs.tempt[2].value,
                familyMedicalHistory: this.$refs.tempt[3].value,
                socialMedicalHistory: this.$refs.tempt[4].value,
                physicalExamination: this.$refs.tempt[5].value,
                therapy: this.$refs.tempt[6].value
    }
        }
        , config).then(() => {
            this.$router.push({name: 'dokter-riwayat-layanan'})
        });
        },
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