<template lang="pug">
  div
    router-view
    v-container
      v-row.justify-content-center.align-center.mt-3.ml-n10.mr-n16
        v-col(cols="7").mr-n1.mt-1
          v-text-field(
            placeholder="Search Name",
            solo,
            dense,
            prepend-inner-icon="mdi-magnify",
            clearable
            )
        v-col(cols="1").mr-n3
          v-btn( dark color="#FE8848").mt-n6
            span Search
        v-col.mr-n6
        v-col(cols="3").mt-n6
          v-row.mr-n2
            v-col(cols="6").ml-n8
              v-btn(@click="dialog = !dialog" dark color="rgba(117, 204, 112, 0.9)")
                v-icon.ml-n2.mr-2 mdi-account-plus
                span Add Member
              v-dialog(v-model="dialog" width="800")
                v-card.pa-3(width="800px") 
                  v-row 
                    v-col
                      v-card-title.ma-2.member.justify-center
                      span.font-weight-light.display-1 Add 
                      span.font-weight-bold.display-1 Member 
                      span.font-weight-light.display-1 Details
                  v-row 
                    v-col
                  v-row
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Name
                    v-col(cols="9")
                      v-text-field(outlined prepend-inner-icon="mdi-account")
                  v-row
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Membership Date
                    v-col(cols="9")
                      v-dialog(
                        ref="dialog"
                        :return-value.sync="date"
                        width="300px"
                      )
                        template(v-slot:activator="{on, attrs}")
                          v-text-field(
                            outlined
                            v-model="date"
                            label="Membership Date"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          )
                        v-date-picker(
                          v-model="date"
                          type="month"
                          scrollable
                          color="#6adcc9"
                          header-color="#2bb69f"
                        )
                          v-spacer 
                          v-btn(dark color="danger" @click="modal = false").mr-3
                            span Cancel
                          v-btn(dark color="#4747EB" @click="$refs.dialog.save(date)")
                            span Save
                  v-row
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Name
                    v-col(cols="9")
                      v-text-field(outlined prepend-inner-icon="mdi-account")
                  v-row
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Name
                    v-col(cols="9")
                      v-text-field(outlined prepend-inner-icon="mdi-account")

      
                  
            v-col(cols="6").ml-5
              v-btn(dark color="#fad132")
                v-icon.ml-n2.mr-2 mdi-plus-box
                span Add Skill
      v-row.mx-n13
        v-col
          v-simple-table.table(fixed-header)
            template(v-slot:default)
              thead
                tr
                  th.text-center Member Name
                  th.text-center Status
                  th.text-center Edit Details
                  th.text-center Remove
              tbody
                tr 
                  td.text-center 
                  td.text-center
                  td.text-center 
                  td.text-center
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
    };
  },
};
</script>
<style scoped>
  .table{
    background-color: #dadafb;
  }
  .member{
    color: #040425;
  }
</style>