<template>
  <div>
      <RiwayatLayanan />
      <RiwayatLayananFinish />
  </div>
</template>

<script>
import RiwayatLayanan from '@/components/RiwayatLayanan.vue'
import RiwayatLayananFinish from '@/components/RiwayatLayananFinish.vue'

export default {
    name: 'RiwayatLanananPage',
    components: {
        RiwayatLayanan,
        RiwayatLayananFinish
    }
}
</script>

<style>

</style>