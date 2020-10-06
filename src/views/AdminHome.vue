<template>
  <div class="home">
    <AdminTambahLayanan class="mb-2" />
    <AdminRiwayatLayanan class="mb-2" />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminRiwayatLayanan from '@/components/AdminRiwayatLayanan.vue'
import AdminTambahLayanan from '@/components/AdminTambahLayanan.vue'

export default {
  name: 'Home',
  components: {
    AdminRiwayatLayanan,
    AdminTambahLayanan
    }
}
</script>
