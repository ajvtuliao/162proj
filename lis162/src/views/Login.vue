<template lang="pug">
  v-container
    v-row.mt-12
      v-col(cols="5")
        v-row.mt-8
          v-col
            v-img.coding(src="../assets/AdobeStock_305233591.jpg" contain)
        v-row
          v-col 
            v-card-title
              span.ml-n3.font-weight-black.display-2.learn.mt-3 Learn
              h2.font-weight-light.program.ml-3.mt-3 programming...
            v-card-title.mt-n7
              span.ml-n3.font-weight-black.display-2.earn.mt-3 Earn 
              h2.font-weight-light.money.ml-3.mt-3 money...
            v-card-title.mt-n7
              span.ml-n3.font-weight-black.display-2.enhance.mt-3 Enhance
              h2.font-weight-light.skills.ml-3.mt-3 your coding skills...
            v-card-title.mt-n7
              span.ml-n3.font-weight-black.display-2.join.mt-3 Join
              span.font-weight-black.display-3.intech.ml-3.mt-3 UP INTECH!
      v-col(cols="7")
        v-card.mt-5.mb-10.align-center.mx-auto(outlined elevation="2" width="600px" color="rgba(225, 244, 247, 0.1    ")
          v-row
            v-col(cols="4")
            v-col(cols="5")
              v-card-title.justify-content-center.ml-n3.mt-3
                span.mr-3.font-weight-black.display-2.sign SIGN 
                span.font-weight-light.display-2.up UP
            v-col(cols="3")
          v-row
            v-col
              v-row
                v-col
                v-col(cols="10")
                  v-form(v-model="valid")
                    v-text-field.mt-5(
                      outlined label="Name" 
                      placeholder="Last Name, First Name, M.I" 
                      input="text"
                      :rules="[rules.required]"
                      )
                v-col
              v-row
                v-col
                v-col(cols="10")
                  v-form(v-model="valid")
                    v-text-field.mt-5(outlined label="Email" input="text" :rules="[rules.required]")
                v-col
              v-row 
                v-col
                v-col(cols="10")
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
                v-col
              v-row
                v-col 
                v-col(cols="10")
                  v-form(v-model="valid")
                  v-text-field.mt-1.input-group--focused(
                    v-model="password"
                    outlined 
                    label="Confirm Password" 
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                    )
                v-col
              v-row 
                v-col
                v-col(cols="10")
                  v-row
                    v-col(cols="4")
                      v-checkbox.check(color="primary" label="Admin Account" :rules="[rules.required]")
                    v-col(cols="4")
                      v-checkbox.check(color="red" label="User Account" :rules="[rules.required]")
                    v-col(cols="4")
                v-col
          v-row
            v-col(cols="8")
            v-col(cols="4")
              v-btn.mb-6.ml-6.mt-n4(color="#4747EB" dark raised medium) Register
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
};
</script>
<style scoped>
  .coding{
    border-radius: 10px;
    margin-top: 23px;
  }
  .check{
    margin-top: 2px;
  }
  .sign{
    color: rgba(0, 0, 84, 0.9);
  }
  .up{
    color: rgba(126, 126, 241, 0.9);
  }
  .learn{
    color: #32ABBF;
  }
  .program{
    color: #7ED0DD;
  }
  .earn{
    color: #ff5b00;
  }
  .money{
    color: #fe8b4b;
  }
  .enhance{
    color: #2BB69F;
  }
  .skills{
    color: #6ADCC9;
  }
  .join{
    color: #ffd469;
  }
  .intech{
    color: #fab300;
  }
</style>