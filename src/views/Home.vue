<template>
  <div class="home">
    <ListLayanan class="mb-2" />
    <StatistikCovid class="mb-2" />
    <RiwayatLayanan />
  </div>
</template>

<script>
// @ is an alias to /src
import ListLayanan from '@/components/ListLayanan.vue'
import StatistikCovid from '@/components/StatistikCovid.vue'
import RiwayatLayanan from '@/components/RiwayatLayanan.vue'

export default {
  name: 'Home',
  components: {
    ListLayanan,
    StatistikCovid,
    RiwayatLayanan
  }
}
</script>
