<template>
  <div class="RiwayatLayanan container">
        <div class="card">
        <div class="card-body">
            <h1>Riwayat Layanan</h1>
            <table class="table">
            <thead class="">
                <tr>
                <th scope="col" style="padding-left:1.25rem;">Layanan</th>
                <th scope="col">Lorem Ipsum</th>
                <th scope="col">Tanggal</th>
                <th scope="col">Waktu</th>
                <th scope="col">Status</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" style="padding-left:1.25rem;">Rapid Test</th>
                <td>Lorem Ipsum</td>
                <td>10/10/2020</td>
                <td>09.15-09.45</td>
                <td>Selesai</td>
                <td>#</td>
                </tr>
                <tr>
                <th scope="row" style="padding-left:1.25rem;">Rapid Test</th>
                <td>Lorem Ipsum</td>
                <td>10/10/2020</td>
                <td>09.15-09.45</td>
                <td>Selesai</td>
                <td>#</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
  </div>
</template>

<script>
export default {

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