<template lang="pug">
div
  v-app-bar(color="#278391", dark, height="80px")
    v-row 
      v-col(cols="1").mt-4
        v-img(src="../assets/intech.png")
      v-col(cols="10").mt-8.ml-n2
        span.font-weight-bold.display-3.mr-3 UP INTECH
        span.font-weight-light.display-2.mt-n2 Membership Monitoring System
      v-col(cols="1").mt-12.ml-n2
        v-btn.ml-n16(color="rgba(34, 119, 130, 0.8)" dark depressed @click="logout")
            v-icon.mr-2 mdi-logout
            span Logout
</template>
<script>
import axios from "axios";
export default {
  methods: {
    logout() {
      axios.post('http://localhost:8000/logout').then(() => {
        this.$store.commit('logout')
        this.$router.push('/')
      })
    }
  }
};
</script>
<style scoped>
</style>