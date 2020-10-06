<template>
  <div class="container">
      <div class="card">
          <div class="card-body">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Harian</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Bulanan</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
        <canvas id="my-chart" width="500" height="150"></canvas>
  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <canvas id="my-chart-bulanan" width="500" height="150"></canvas>
  </div>
</div>        
          </div>
      </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    mounted(){
        new Chart(document.getElementById('my-chart'), {
        type: 'line',
        data: {
            labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'],
            datasets: [
            {
                label: 'Rata - rata pengunjung per hari',
                data: [12,14,17,12,19,20]
            }
            ]
        }
        });
        new Chart(document.getElementById('my-chart-bulanan'), {
        type: 'line',
        data: {
            labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            datasets: [
            {
                label: 'Pengunjung Bulanan',
                data: [84,90,74,88,66,100,104,83,93,69,73,76]
            }
            ]
        }
        });
    }
}
</script>

<style>

</style>