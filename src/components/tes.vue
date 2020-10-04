<template>
  <div>
      {{tes}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            tes: null
        }
    },
          mounted() {
    let config = {
      headers: {
        'Accept' : 'application/json',
      }
    }
    axios
      .get(`http://localhost:8080/egmc/api/users/history`, config)
      .then(response => (this.tes = response.data))
    },
}
</script>

<style>

</style>