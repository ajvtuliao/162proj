<template lang="pug">
  div
    router-view
    v-container
      v-row.justify-content-center.align-center.ml-3.mt-3
        v-col(cols="10")
          v-text-field.search(
            placeholder="Search Name",
            solo,
            dense,
            prepend-inner-icon="mdi-magnify",
            clearable
            v-model="search"
            )
        v-col(cols="1")
          v-btn( dark color="#FE8848").mt-n7
            v-icon mdi-account-search
            span.ml-2 Search
        v-col

      v-row.mx-n12
        v-col
          v-simple-table.table(fixed-header)
            template(v-slot:default)
              thead
                tr
                  th.text-center Member Name
                  th.text-center Status
                  th.text-center Current Projects
                  th.text-center Skills
              tbody
                tr 
                  //- Name
                  td.text-center.font-weight-bold(@click=" dialog = !dialog") Crisostomo Ibarra
                    v-dialog(v-model="dialog" width="600px")
                      v-card.pa-3(width="600px") 
                        v-row
                          v-col.mt-n3.mb-3
                            v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Member Name
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Membership Date:
                          v-col(cols="7")
                            //- Membership Date
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Membership Status:
                          v-col(cols="7")
                            //- Membership Status
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Skills:
                          v-col(cols="7")
                            //- Multiple Skills
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Current Project:
                          v-col(cols="7")
                            v-row 
                              v-col(cols="7")
                                //- Project Name
                              v-col(cols="5")
                                //- Project Starting Daate
                        v-card-actions
                          v-spacer
                          v-btn.mr-2(
                            dark,
                            color="#ff4040",
                            @click="dialog = false"
                          )
                            v-icon.mr-1 mdi-close
                            span.mr-2 Close   
                  //- Status 
                  td.text-center
                    v-chip(label v-if="status = active" color="#ededfd")
                      v-icon(color="green") mdi-circle
                      span Active
                    v-chip(label v-if="status = inactive" color="#ededfd")
                      v-icon(color="red") mdi-circle
                      span Inactive
                    v-chip(v-if="status = moderator" color="#ededfd")
                      v-icon(color="orange") mdi-circle
                      span Moderator
                    v-chip(label v-if="status = alumni" color="#ededfd")
                      v-icon( color="blue") mdi-circle
                      span Alumni
                    v-chip(label v-if="status = applicant" color="#ededfd")
                      v-icon( color="purple") mdi-circle
                      span Applicant
                  //- Projects
                  td.text-center(@click="dialog2 = !dialog2") CS Library eBook Hub
                    v-dialog(
                      v-model="dialog2"
                      width="500px"
                    )
                      v-card(width="500px").pa-3 
                        v-row 
                          v-col.mt-n3.mb-3
                            v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Project Name
                        v-row.mx-2 
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Starting Date:
                          v-col(cols="7")
                            //- Starting Date
                        v-row.mx-2 
                          v-col(cols="5").mt-10
                            v-card-subtitle.font-weight-bold Project Members:
                          v-col(cols="7")
                            //- Members
                        v-card-actions
                          v-spacer
                          v-btn.mr-2(
                            dark,
                            color="#ff4040",
                            @click="dialog2 = false"
                          )
                            v-icon.mr-1 mdi-close
                            span.mr-2 Close
                  //- Skill
                  td.text-center(@click=" dialog1 = !dialog1")
                    v-dialog(
                      v-model="dialog1"
                      width="500px"
                    )
                      v-card(width="500px").pa-3 
                        v-row 
                          v-col.mt-n3.mb-3
                            v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Add Skill Details
                        v-row.mx-2 
                          v-col(cols="4")
                            v-card-subtitle.font-weight-bold Skill:
                          v-col(cols="8")
                            //- Skill Names
                        v-row.mx-2 
                          v-col(cols="4").mt-10
                            v-card-subtitle.font-weight-bold Description
                          v-col(cols="8")
                            //- Description
                        v-card-actions
                          v-spacer
                          v-btn.mr-2(
                            dark,
                            color="#ff4040",
                            @click="dialog1 = false"
                          )
                            v-icon.mr-1 mdi-close
                            span.mr-2 Close   
</template>

<script>

export default {
  data () {
    return {
      search: '',
      dialog: false, 
      dialog1: false, 
      dialog2: false,
      status: '',
    };
  },
}
</script>
<style scoped>
  .table{
    background-color: #ededfd;
  }
</style>
