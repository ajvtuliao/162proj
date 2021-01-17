<template lang="pug">
v-container
  v-row.mt-12
    v-col(cols="5")
    v-col(cols="7")
      v-card.mt-16.align-center.mx-auto(outlined elevation="2" width="600px")
        v-row
          v-col(cols="4")
          v-col(cols="4")
            v-card-title.justify-conten-center
              span.mr-1.font-weight-black.display-1 SIGN 
              span.font-weight-light.display-1.head-text UP
          v-col(cols="4")
        v-row
          v-col(cols="11")
            v-row
              v-col(cols="3")
                h3.mt-9.ml-5.font-weight-light Name:
              v-col(cols="9")
                v-form(v-model="valid")
                  v-text-field.mt-5(outlined label="Name" placeholder="Last Name, First Name, M.I" input="text")
            v-row
              v-col(cols="3")
                h3.mt-9.ml-5.font-weight-light Email:
              v-col(cols="9")
                v-form(v-model="valid")
                  v-text-field.mt-5(outlined label="Email" input="text")
            v-row 
              v-col(cols="3")
                h3.mt-5.ml-5.font-weight-light Password:
              v-col(cols="9")
                v-form(v-model="valid")
                v-text-field.mt-1.input-group--focused(
                  v-model="password"
                  outlined 
                  label="Password" 
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                  )
            v-row 
              v-col(cols="3")
                h3.mt-1.ml-5.font-weight-light Confirm Password:
              v-col(cols="9")
                v-form(v-model="valid")
                v-text-field.mt-1.input-group--focused(
                  v-model="password"
                  outlined 
                  label="Password" 
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  )
            v-row 
              v-col(cols="3")
                h3.mt-1.ml-5.font-weight-light Admin?
              v-col(cols="9")
                v-row
                  v-col(cols="3")
                    v-checkbox.check(color="primary" label="Yes")
                  v-col(cols="3")
                    v-checkbox.check(color="red" label="No")
                  v-col(cols="6")
        v-row
          v-col(cols="8")
          v-col(cols="4")
            v-btn.mb-6.ml-6.mt-n4(color="primary" raised medium) Register    
</template>
<script>
export default {
    data () {
        return {
          show: false,
          show1: false,
          rules: {
              required: value => !!value || 'Required.',
            },
        }
  },  
}
</script>
<style scoped>
  .check{
    margin-top: 2px;
  }
</style>