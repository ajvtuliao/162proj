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
                    v-col.mt-n3.mb-3
                      v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Add Member Details
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Name
                    v-col(cols="9")
                      v-text-field(outlined prepend-inner-icon="mdi-account" v-model="name" label="Member Name")
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Membership Date
                    v-col(cols="9")
                      v-dialog(
                        ref="dialog"
                        :return-value.sync="date"
                        width="300px"
                        v-model="modal"
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
                          v-btn(dark color="#ff4040" @click="modal = false").mr-3.mb-2
                            span Cancel
                          v-btn(dark color="#4747EB" @click="$refs.dialog.save(date)").mb-2
                            span Save
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Membership Status
                    v-col(cols="9")
                      v-select(v-model="status" outlined label="Status" :items="memstat")
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Skills
                    v-col(cols="9")
                      v-select(v-model="skill" outlined label="Skills" multiple)
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Current Project
                    v-col(cols="9")
                      v-row 
                        v-col(cols="7")
                          v-text-field(v-model="project" outlined prepend-inner-icon="mdi-clipboard-file" label="Project Name")
                        v-col(cols="5")
                          v-dialog(
                            ref="dialog"
                            :return-value.sync="projdate"
                            width="300px"
                            v-model="modal1"
                          )
                            template(v-slot:activator="{on, attrs}")
                              v-text-field(
                                outlined
                                v-model="projdate"
                                label="Starting Date"
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                v-on="on"
                              )
                            v-date-picker(
                              v-model="projdate"
                              type="month"
                              scrollable
                              color="#6adcc9"
                              header-color="#2bb69f"
                            )
                              v-spacer 
                              v-btn(dark color="#ff4040" @click="modal = false").mr-3.mb-2
                                span Cancel
                              v-btn(dark color="#4747EB" @click="$refs.dialog.save(date)").mb-2
                                span Save  
                  v-card-actions
                    v-spacer
                    v-btn.mr-2(
                      dark,
                      color="#ff4040",
                      @click="dialog = false"
                    )
                      v-icon.mr-1 mdi-close
                      span.mr-2 Close
                    v-btn.mr-2(
                      dark,
                      color="#4747EB",
                      :loading="loading",
                    ) 
                      v-icon.mr-2 mdi-account-plus
                      v-spacer
                      span Add Member
                      v-spacer             
            v-col(cols="6").ml-5
              v-btn(dark color="#fad132" @click="dialog1 = !dialog1")
                v-icon.ml-n2.mr-2 mdi-plus-box
                span Add Skill
              v-dialog(
                v-model="dialog1"
                width="600px"
              )
                v-card(width="600px").pa-3 
                  v-row 
                    v-col.mt-n3.mb-3
                      v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Add Skill Details
                  v-row.mx-2 
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Name
                    v-col(cols="9")
                      v-text-field(
                        outlined
                        v-model="skill"
                        label="Skill Name"
                      )
                  v-row.mx-2 
                    v-col(cols="3").mt-10
                      v-card-subtitle.font-weight-bold Description
                    v-col(cols="9")
                      v-textarea(outlined v-model="skilldesc" label="Skill Description" auto-grow)

                  v-card-actions
                    v-spacer
                    v-btn.mr-2(
                      dark,
                      color="#ff4040",
                      @click="dialog1 = false"
                    )
                      v-icon.mr-1 mdi-close
                      span.mr-2 Close
                    v-btn.mr-2(
                      dark,
                      color="#4747EB",
                      :loading1="loading1",
                    ) 
                      v-spacer
                      span Add Skill
                      v-spacer        
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
                  td.text-center.font-weight-bold
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
                  td.text-center 
                    v-btn(color="#63bf5e" dark small @click="dialog2 = !dialog2")
                      v-icon mdi-clipboard-edit
                      span Edit Details
                    v-dialog(v-model="dialog2" width="800px")
                      v-card.pa-3(width="800px") 
                        v-row
                          v-col.mt-n3.mb-3
                            v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Edit Member Details
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Name
                          v-col(cols="9")
                            v-text-field(outlined prepend-inner-icon="mdi-account" v-model="name" label="Member Name")
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Membership Date
                          v-col(cols="9")
                            v-dialog(
                              ref="dialog"
                              :return-value.sync="date"
                              width="300px"
                              v-model="modal"
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
                                v-btn(dark color="#ff4040" @click="modal = false").mr-3.mb-2
                                  span Cancel
                                v-btn(dark color="#4747EB" @click="$refs.dialog.save(date)").mb-2
                                  span Save
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Membership Status
                          v-col(cols="9")
                            v-select(v-model="status" outlined label="Status" :items="memstat")
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Skills
                          v-col(cols="9")
                            v-select(v-model="skill" outlined label="Skills" multiple)
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Current Project
                          v-col(cols="9")
                            v-row 
                              v-col(cols="7")
                                v-text-field(v-model="project" outlined prepend-inner-icon="mdi-clipboard-file"       label="Project Name")
                              v-col(cols="5")
                                v-dialog(
                                  ref="dialog"
                                  :return-value.sync="projdate"
                                  width="300px"
                                  v-model="modal1"
                                )
                                  template(v-slot:activator="{on, attrs}")
                                    v-text-field(
                                      outlined
                                      v-model="projdate"
                                      label="Starting Date"
                                      prepend-icon="mdi-calendar"
                                      v-bind="attrs"
                                      v-on="on"
                                    )
                                  v-date-picker(
                                    v-model="projdate"
                                    type="month"
                                    scrollable
                                    color="#6adcc9"
                                    header-color="#2bb69f"
                                  )
                                    v-spacer 
                                    v-btn(dark color="#ff4040" @click="modal = false").mr-3.mb-2
                                      span Cancel
                                    v-btn(dark color="#4747EB" @click="$refs.dialog.save(date)").mb-2
                                      span Save  
                        v-card-actions
                          v-spacer
                          v-btn.mr-2(
                            dark,
                            color="#ff4040",
                            @click="dialog2 = false"
                          )
                            v-icon.mr-1 mdi-close
                            span.mr-2 Close
                          v-btn.mr-1(
                            dark,
                            color="#4747EB",
                            :loading2="loading2",
                          ) 
                            v-icon.mr-2 mdi-clipboard-edit
                            v-spacer
                            span Edit Details
                            v-spacer             
                  td.text-center 
                    v-btn(color="#ff4040" dark small) 
                      v-icon mdi-trash-can 
                      span Remove Member
                    
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      dialog1: false,
      dialog2: false,
      date: new Date().toISOString().substr(0, 7),
      modal: false,
      modal1: false,
      loader: null,
      loading: false,
      loading1: false,
      loading2: false,
      name: '',
      status: '',
      project: '',
      projdate: new Date().toISOString().substr(0, 7),
      skills: [],
      skill: '',
      skilldesc: '',
      memstat: [
        "Active",
        "Inactive",
        "Moderator",
        "Alumni",
        "Applicant",
      ]
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
};
</script>
<style scoped>
  .table{
    background-color: #ededfd;
  }
  .member{
    color: #000041;
  }
</style>