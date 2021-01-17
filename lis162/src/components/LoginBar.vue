<template lang="pug">
    v-app-bar(color="#278391" dark height="80px")
      v-row
        v-col.mt-4(cols="1")
          v-img.my-1(src="../assets/intech.png")
        v-col(cols="6").mt-8.ml-n4
          v-card-title
            span.display-1.font-weight-black UP 
            span.display-1.font-weight-light.ml-2 Information Technology Laboratory
        v-col(cols="4").mt-12.ml-4
          v-row 
            v-col(cols="6")
              v-text-field(outlined dense label="Email" :rules="[rules.required]")
            v-col(cols="6")
              v-text-field(
                outlined 
                dense 
                label="Password"
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
                  )
        v-col(cols="1").mt-13
          v-btn(small color="rgba(174, 227, 234, 0.3)" depressed dark) Login
</template>
<script>
export default {
    data () {
        return {
          show: false,
        }
    },    
}
</script>
<style scoped>

</style>