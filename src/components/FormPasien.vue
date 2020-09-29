<template>
  <div class="FormPasien">
      <div class="row">
          <div class="col-9">
                <div class="card">
                <div class="card-body">
                    <h1>Data Diri</h1>
                    <form>
                    <fieldset disabled>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group">
                                <label for="disabledTextInput">Nama</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Alamat</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                <label for="disabledTextInput">Tanggal Lahir</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                                </div>
                                <div class="form-group">
                                <label for="disabledTextInput">Kontak</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    </form>

                    <h1>Keterangan</h1>
                    <form>
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Gejala</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Alasan Kesehatan</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Alergi Obat</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Riwayat Bepergian</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                        <router-link to="/tiket-pesanan">
                        <button type="button" class="btn" style="margin-left:10px; padding-left:20px; padding-right:20px;">Konfirmasi</button>
                        </router-link>
                        <button type="button" class="btn btn-outline" style=" padding-left:20px; padding-right:20px;">Kembali</button>
                        </div>
                    </form>
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