<template lang="pug">
div
  v-app-bar(color="#278391", dark, height="80px")
    v-row 
      v-col(cols="1").mt-4
        v-img(src="../assets/intech.png")
      v-col(cols="6").mt-11
        span.font-weight-bold.display-1.mr-3 UP
        span.font-weight-light.display-1 Information Technology Laboratory
      v-col(cols="4").mt-11.ml-n5
        v-row 
          v-col(cols="6")
            v-text-field(
              outlined 
              dense 
              label="Email"
              prepend-inner-icon="mdi-email"
              v-model="email"
              )
          v-col(cols="6")
            v-text-field(
              v-model="password"
              outlined 
              dense 
              label="Password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            )
      v-col(cols="1").mt-12
        v-btn(color="rgba(34, 119, 130, 0.8)" depressed label="Login" small dark @click="login" v-model="login")
          v-icon.ml-n1 mdi-login
          span.ml-1 Login
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
        axios.post("http://localhost:8000/login", {
          email: this.email,
          password: this.password,
        }).then(() => {
          this.$store.commit('authenticate')
          axios.get("http://localhost:8000/api/user").then(response => {
            if (response.data.admin === 1) {
              this.$store.commit('isAdmin')
              this.$router.push('/admin').catch(error => {
                console.log(error)
              })
            } else {
              this.$store.commit('isUser')
              this.$router.push('/user').catch(error => {
                console.log(error)
              })
            }
          }).catch(error => {
            console.log(error)
          })
        })
      });
    }
  }
};
</script>
<style scoped>
</style>