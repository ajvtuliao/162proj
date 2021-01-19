<template lang="pug">
  div
    router-view
    v-container
      v-row.justify-content-center.align-center.mt-3.ml-n10.mr-n16
        v-col(cols="8").mr-n1.mt-1
          v-text-field(
            placeholder="Search Name",
            solo,
            dense,
            prepend-inner-icon="mdi-magnify",
            clearable
            v-model="search"
          )
        //v-col(cols="1").mr-n3
        //  v-btn( dark color="#FE8848").mt-n6
        //    span Search
        v-col.mr-n6
          //- Add Member Button
        v-col(cols="3").mt-n6
          v-row.mr-n2
            v-col(cols="6").ml-n8
              v-btn(@click="dialog.show = !dialog.show" dark color="rgba(117, 204, 112, 0.9)")
                v-icon.ml-n2.mr-2 mdi-account-plus
                span Add Member
              // dialog
              v-dialog(v-model="dialog.show" width="800")
                v-card.pa-3(width="800px")
                  v-row
                    v-col.mt-n3.mb-3
                      v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Add Member Details
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Name
                    v-col(cols="9")
                      v-text-field(outlined prepend-inner-icon="mdi-account" v-model="dialog.name" label="Member Name")
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Membership Date
                    v-col(cols="9")
                      v-dialog(
                        ref="dialog_2"
                        :return-value.sync="dialog.date"
                        width="300px"
                        v-model="dialog.modal"
                      )
                        template(v-slot:activator="{on, attrs}")
                          v-text-field(
                            outlined
                            v-model="dialog.date"
                            label="Membership Date"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                          )
                        v-date-picker(
                          v-model="dialog.date"
                          scrollable
                          color="#6adcc9"
                          header-color="#2bb69f"
                        )
                          v-spacer
                          v-btn(dark color="#ff4040" @click="dialog.modal = false").mr-3.mb-2
                            span Cancel
                          v-btn(dark color="#4747EB" @click="$refs.dialog_2.save(dialog.date)").mb-2
                            span Save
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Membership Status
                    v-col(cols="9")
                      v-select(v-model="dialog.status" outlined label="Status" :items="memstat")
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Skills
                    v-col(cols="9")
                      v-select(v-model="dialog.skills" outlined label="Skills" multiple :items="skills")
                  v-row.mx-2
                    v-col(cols="3")
                      v-card-subtitle.font-weight-bold Current Project
                    v-col(cols="9")
                      v-row
                        v-col(cols="7")
                          v-text-field(v-model="dialog.current" outlined prepend-inner-icon="mdi-clipboard-file" label="Project Name")
                        v-col(cols="5")
                          v-dialog(
                            ref="dialog_3"
                            :return-value.sync="dialog.start"
                            width="300px"
                            v-model="dialog.modal1"
                          )
                            template(v-slot:activator="{on, attrs}")
                              v-text-field(
                                outlined
                                v-model="dialog.start"
                                label="Starting Date"
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                v-on="on"
                              )
                            v-date-picker(
                              v-model="dialog.start"
                              scrollable
                              color="#6adcc9"
                              header-color="#2bb69f"
                            )
                              v-spacer
                              v-btn(dark color="#ff4040" @click="dialog.modal1 = false").mr-3.mb-2
                                span Cancel
                              v-btn(dark color="#4747EB" @click="$refs.dialog_3.save(dialog.start)").mb-2
                                span Save  
                  v-card-actions
                    v-spacer
                    v-btn.mr-2(
                      dark,
                      color="#ff4040",
                      @click="dialog.show = false"
                    )
                      v-icon.mr-1 mdi-close
                      span.mr-2 Close
                    v-btn.mr-1(
                      dark,
                      color="#4747EB",
                      :loading="loading",
                      @click="addmember"
                    )
                      v-icon mdi-account-plus
                      v-spacer
                      span Add Member
                      v-spacer
            //-  Add Skill Button
            v-col(cols="6").ml-5
              v-btn(dark color="#fad132" @click="dialog1.show = !dialog1.show")
                v-icon.ml-n2.mr-2 mdi-plus-box
                span Add Skill
              //dialog1
              v-dialog(
                v-model="dialog1.show"
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
                        v-model="dialog1.skill"
                        label="Skill Name"
                      )
                  v-row.mx-2
                    v-col(cols="3").mt-10
                      v-card-subtitle.font-weight-bold Description
                    v-col(cols="9")
                      v-textarea(outlined v-model="dialog1.skilldesc" label="Skill Description" auto-grow)

                  v-card-actions
                    v-spacer
                    v-btn.mr-2(
                      dark,
                      color="#ff4040",
                      @click="dialog1.show = false"
                    )
                      v-icon.mr-1 mdi-close
                      span.mr-2 Close
                    v-btn.mr-1(
                      dark,
                      color="#4747EB",
                      :loading1="loading1",
                      @click="addskill"
                    )
                      v-spacer
                      span Add Skill
                      v-spacer
        //- Table
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
                // dialog3
                v-dialog(v-model="dialog3.show" width="600px")
                  v-card.pa-3(width="600px")
                    v-row
                      v-col.mt-n3.mb-3
                        v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member {{ dialog3.name }}
                    v-row.mx-2
                      v-col(cols="4")
                        v-card-subtitle.font-weight-bold Membership Date
                      v-col(cols="8")
                        //- Membership Date
                        v-card-text {{ dialog3.date }}
                    v-row.mx-2
                      v-col(cols="4")
                        v-card-subtitle.font-weight-bold Membership Status
                      v-col(cols="8")
                        //- Membership Status
                        v-card-text {{ dialog3.status }}
                    v-row.mx-2
                      v-col(cols="4")
                        v-card-subtitle.font-weight-bold Skills
                      v-col(cols="8")
                        //- Multiple Skills
                        v-card-text {{ dialog3.skills }}
                    v-row.mx-2
                      v-col(cols="4")
                        v-card-subtitle.font-weight-bold Current Project
                      v-col(cols="8")
                        v-row
                          v-col(cols="7")
                            v-card-text {{ dialog3.current }}
                          v-col(cols="5")
                            v-card-text {{ dialog3.start }}
                    v-card-actions
                      v-spacer
                      v-btn.mr-2(
                        dark,
                        color="#ff4040",
                        @click="dialog3.show = false"
                      )
                        v-icon.mr-1 mdi-close
                        span.mr-2 Close
                tr(v-for="member in membersFilter" :key="member.id" )
                  //- Member Name
                  td.text-center.font-weight-bold(@click="get_member_details_3(member.id)") {{ member.name }}
                  //- Member Status
                  td.text-center
                    v-chip(label color="#ededfd")
                      v-icon(:color="color(member)") mdi-circle
                      span {{ member.status }}
                  //- Edit Details
                  td.text-center
                    v-btn(color="#63bf5e" dark small @click="get_member_details_2(member.id)")
                      v-icon mdi-clipboard-edit
                      span Edit Details
                    //- Edit Details Button
                    //dialog2
                    v-dialog(v-model="dialog2.show" width="800px")
                      v-card.pa-3(width="800px")
                        v-row
                          v-col.mt-n3.mb-3
                            v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Edit Member Details
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Name
                          v-col(cols="9")
                            v-text-field(outlined prepend-inner-icon="mdi-account" v-model="dialog2.name" label="Member Name")
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Membership Date
                          v-col(cols="9")
                            v-dialog(
                              ref="dialog"
                              :return-value.sync="dialog2.date"
                              width="300px"
                              v-model="dialog2.modal"
                            )
                              template(v-slot:activator="{on}")
                                v-text-field(
                                  readonly
                                  outlined
                                  v-model="dialog2.date"
                                  label="Membership Date"
                                  prepend-icon="mdi-calendar"
                                  v-on="on"
                                )
                              v-date-picker(
                                v-model="dialog2.date"
                                scrollable
                                color="#6adcc9"
                                header-color="#2bb69f"
                              )
                                v-spacer
                                v-btn(dark color="#ff4040" @click="dialog2.modal = false").mr-3.mb-2
                                  span Cancel
                                v-btn(dark color="#4747EB" @click="$refs.dialog[member.id-1].save(dialog2.date)").mb-2
                                  span Save
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Membership Status
                          v-col(cols="9")
                            v-select(v-model="dialog2.status" outlined label="Status" :items="memstat")
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Skills
                          v-col(cols="9")
                            v-select(v-model="dialog2.skills" outlined label="Skills" multiple :items="skills")
                        v-row.mx-2
                          v-col(cols="3")
                            v-card-subtitle.font-weight-bold Current Project
                          v-col(cols="9")
                            v-row
                              v-col(cols="7")
                                v-text-field(v-model="dialog2.current" outlined prepend-inner-icon="mdi-clipboard-file" label="Project Name")
                              v-col(cols="5")
                                v-dialog(
                                  width="300px"
                                  v-model="dialog2.modal1"
                                  :return-value.sync="dialog2.start"
                                  ref="dialog_1"
                                )
                                  template(v-slot:activator="{on, attrs}")
                                    v-text-field(
                                      outlined
                                      v-model="dialog2.start"
                                      label="Starting Date"
                                      prepend-icon="mdi-calendar"
                                      v-bind="attrs"
                                      v-on="on"
                                    )
                                  v-date-picker(
                                    v-model="dialog2.start"
                                    scrollable
                                    color="#6adcc9"
                                    header-color="#2bb69f"
                                  )
                                    v-spacer
                                    v-btn(dark color="#ff4040" @click="dialog2.modal1 = false").mr-3.mb-2
                                      span Cancel
                                    v-btn(dark color="#4747EB" @click="$refs.dialog_1[member.id-1].save(dialog2.start)").mb-2
                                      span Save  
                        v-card-actions
                          v-spacer
                          v-btn.mr-2(
                            dark,
                            color="#ff4040",
                            @click="dialog2.show = false"
                          )
                            v-icon.mr-1 mdi-close
                            span.mr-2 Cancel
                          v-btn.mr-1(
                            dark,
                            color="#4747EB",
                            :loading2="loading2",
                            @click="editmember(member.id)"
                          )
                            v-icon.mr-2 mdi-clipboard-edit
                            v-spacer
                            span Edit Details
                            v-spacer
                  //-  Remove Button
                  td.text-center
                    v-btn(color="#ff4040" dark small @click="remove(member.id)")
                      v-icon mdi-trash-can 
                      span Remove Member

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      search: '',
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
      memstat: [
        "Active",
        "Inactive",
        "Moderator",
        "Alumni",
        "Applicant",
      ],
      members: [],
      dialog: {
        show:false,
        name: "",
        status: "",
        date: "",
        skills: "",
        current: "",
        start: "",
        modal: false,
        modal1: false,
      },
      dialog1: {
        show:false,
        skill: '',
        skilldesc: '',
      },
      dialog2: { // edit member
        show: false,
        name: "",
        status: "",
        date: "",
        skills: "",
        current: "",
        modal: false,
        modal1: false,
        start: ""
      },
      dialog3: {
        show: false,
        name: "",
        status: "",
        date: "",
        skills: "",
        current: "",
        start: ""
      },
    };
  },
  methods: {
    color(member) {
      switch (member.status) {
          case 'Active':
            return 'green';
          case 'Inactive':
            return 'red';
          case 'Moderator':
            return 'orange';
          case 'Alumni':
            return 'blue';
          default:
            return 'purple';
      }
    },
    get_member_details_2(id) {
      // console.log(id);
      axios.get('http://localhost:8000/api/members/member/'+id).then(response => {
        let member = response.data[0];
        this.dialog2.name = member.name;
        this.dialog2.status = member.status;
        this.dialog2.date = member.date;
        this.dialog2.skills = member.skills.map(x => {
          return x.skill
        });
        this.dialog2.current = member.project;
        this.dialog2.start = member.start;
      });
      this.dialog2.show = !this.dialog2.show;
    },
    get_member_details_3(id) {
      // console.log(id);
      axios.get('http://localhost:8000/api/members/member/'+id).then(response => {
        let member = response.data[0];
        this.dialog3.name = member.name;
        this.dialog3.status = member.status;
        this.dialog3.date = member.date;
        this.dialog3.skills = member.skills.map(x => {
          return x.skill
        }).toString();
        this.dialog3.current = member.project;
        this.dialog3.start = member.start;
        console.log(member);
      });
      this.dialog3.show = !this.dialog3.show;
    },
    addskill() {
      axios.post('http://localhost:8000/api/skills', {
        skill: this.dialog1.skill,
        skilldesc: this.dialog1.skilldesc
      }).then(response => {
        console.log(response)
        this.dialog1.show = !this.dialog1.show;
        axios.get("http://localhost:8000/api/skills").then(response => {
          this.skills = response.data.map(x => x.skill)
        })
      })
    },
    editmember(id) {
      axios.post('http://localhost:8000/api/members/member/'+id+'/edit', {
        name: this.dialog2.name,
        status: this.dialog2.status,
        date: this.dialog2.date,
        current: this.dialog2.current,
        start: this.dialog2.start,
        skills: this.dialog2.skills,
      }).then(response => {
        console.log(response)
        this.dialog2.show=false;
        axios.get("http://localhost:8000/api/members").then(response => {
          this.members = response.data
        })
      })
    },
    addmember() {
      axios.post('http://localhost:8000/api/members/member/', {
        name: this.dialog.name,
        status: this.dialog.status,
        date: this.dialog.date,
        skills: this.dialog.skills,
        current: this.dialog.current,
        start: this.dialog.start,
      }).then(response => {
        console.log(response)
        this.dialog.show = false;
        axios.get("http://localhost:8000/api/members").then(response => {
          this.members = response.data
        })
      })
    },
    remove(id) {
      axios.post('http://localhost:8000/api/members/member/'+id+'/delete').then(() => {
        axios.get("http://localhost:8000/api/members").then(response => {
          this.members = response.data
        })
      })
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 3000);
      this.loader = null;
    },
  },
  mounted: function() {
    axios.get("http://localhost:8000/api/members").then(response => {
      this.members = response.data
    });
    axios.get("http://localhost:8000/api/skills").then(response => {
      this.skills = response.data.map(x => x.skill)
    })
  },
  computed: {
    membersFilter: function() {
      if (this.search !== '') {
        return this.members.filter(x => {
          return x.name.toLowerCase().includes(this.search.toLowerCase());
        })
      } else {
        return this.members
      }
    },
  }
};
</script>
<style scoped>
.table {
  background-color: #ededfd;
}

.member {
  color: #000041;
}
</style>