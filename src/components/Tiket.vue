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
                        <td>Dennis Bagaskara</td>
                        <th scope="row">ID</th>
                        <td>14045</td>
                        </tr>
                        <tr>
                        <th scope="row">Layanan</th>
                        <td>Rapid Test</td>
                        <th scope="row">Status</th>
                        <td>Mahasiswa</td>
                        </tr>
                        <tr>
                        <th scope="row">Waktu Layanan</th>
                        <td>22/09/2020  |  Pukul 11.00</td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="flex">
                    <router-link to="/riwayat-layanan">
                    <button type="button" class="btn" style="margin-left:10px; padding-left:20px; padding-right:20px;">Konfirmasi</button>
                    </router-link>
                    <button type="button" class="btn btn-outline" style=" padding-left:20px; padding-right:20px;">Kembali</button>
                    </div>
                </div>
                </div>
          </div>
          <div class="col-3">
                <div class="card">
                <div class="card-body">
                    <p>StatistikCovid</p>
                </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

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