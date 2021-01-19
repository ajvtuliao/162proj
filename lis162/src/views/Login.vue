<template lang="pug">
div
  router-view
  v-container
    v-row.mt-8.mr-n10
      v-col.mr-12(cols="5")
        v-row.mt-5.ml-n16.mr-n16
          v-col
            v-img.coding(src="../assets/AdobeStock_305233591.jpg", contain)
        v-row.ml-n16
          v-col.mt-n5 
            v-card-title
              span.ml-n3.font-weight-black.display-2.learn.mt-3 Learn
              h2.font-weight-light.program.ml-3.mt-3 programming languages...
            v-card-title.mt-n7
              span.ml-n3.font-weight-black.display-2.earn.mt-3 Earn
              h2.font-weight-light.money.ml-3.mt-3 money...
            v-card-title.mt-n7
              span.ml-n3.font-weight-black.display-2.enhance.mt-3 Enhance
              h2.font-weight-light.skills.ml-3.mt-3 your coding skills...
            v-card-title.mt-n7
              span.ml-n3.font-weight-black.display-2.join.mt-3 Join
              span.font-weight-black.display-3.intech.ml-3.mt-3 UP INTECH!
      v-col.mr-n16(cols="7")
        v-card.mt-5.mb-10.ml-16(
          outlined,
          elevation="2",
          width="600px",
          color="rgba(225, 244, 247, 0.1 "
        )
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
                      v-model="name",
                      outlined,
                      label="Name",
                      placeholder="First Name, Last Name",
                      prepend-inner-icon="mdi-account",
                      input="text",
                      :rules="[rules.required]"
                    )
                v-col
              v-row
                v-col
                v-col(cols="10")
                  v-form(v-model="valid")
                    v-text-field.mt-5(
                      outlined,
                      v-model="email",
                      label="Email",
                      prepend-inner-icon="mdi-email",
                      input="text",
                      :rules="[rules.required]"
                    )
                v-col
              v-row 
                v-col
                v-col(cols="10")
                  v-form(v-model="valid")
                  v-text-field.mt-1.input-group--focused(
                    v-model="password",
                    outlined,
                    label="Password",
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'",
                    :rules="[rules.required]",
                    :type="show ? 'text' : 'password'",
                    @click:append="show = !show"
                  )
                v-col
              v-row
                v-col 
                v-col(cols="10")
                  v-form(v-model="valid")
                  v-text-field.mt-1.input-group--focused(
                    v-model="password1",
                    outlined,
                    label="Confirm Password",
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'",
                    :rules="[rules.required]",
                    :type="show1 ? 'text' : 'password1'",
                    @click:append="show1 = !show1"
                  )
                v-col
              v-row 
                v-col
                v-col(cols="10")
                  v-row
                    v-col(cols="4")
                      v-checkbox.check(
                        color="primary",
                        label="Admin Account",
                        :rules="[rules.required]",
                        v-model="admin"
                      )
                    v-col(cols="4")
                      v-checkbox.check(
                        color="red",
                        label="User Account",
                        :rules="[rules.required]",
                        v-model="user"
                      )
                    v-col(cols="4")
                v-col
          v-row
            v-col(cols="8")
            v-col(cols="4")
              v-btn.mb-6.ml-n10.mt-n4(
                color="#4747EB",
                dark,
                raised,
                medium,
                @click="register"
              ) Create Account
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      name: "",
      email: "",
      admin: false,
      user: false,
      show1: false,
      password: "",
      password1: "",
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    register() {
      axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
        axios.post("http://localhost:8000/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password1,
          admin: this.admin
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
    },
  },
};
</script>
<style scoped>
.coding {
  border-radius: 10px;
  margin-top: 23px;
}
.check {
  margin-top: 2px;
}
.sign {
  color: rgba(0, 0, 84, 0.9);
}
.up {
  color: rgba(126, 126, 241, 0.9);
}
.learn {
  color: #32abbf;
}
.program {
  color: #7ed0dd;
}
.earn {
  color: #ff5b00;
}
.money {
  color: #fe8b4b;
}
.enhance {
  color: #2bb69f;
}
.skills {
  color: #6adcc9;
}
.join {
  color: #ffd469;
}
.intech {
  color: #fab300;
}
</style>