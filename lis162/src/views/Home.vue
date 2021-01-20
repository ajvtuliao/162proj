<template lang="pug">
  div
    router-view
    v-container
      v-row.justify-content-center.align-center.ml-3.mt-3
        v-col(cols="12")
          v-text-field.search(
            placeholder="Search Name",
            solo,
            dense,
            prepend-inner-icon="mdi-magnify",
            clearable
            v-model="search"
            )
        //v-col(cols="1")
        //  v-btn( dark color="#FE8848").mt-n7
        //    v-icon mdi-account-search
        //    span.ml-2 Search
        //v-col

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
                tr(v-for="member in membersFilter" :key="member.id")
                  //- Name
                  td.text-center.font-weight-bold(@click="get_member_details(member.id)") {{ member.name }}
                    v-dialog(v-model="dialog.show" width="600px")
                      v-card.pa-3(width="600px") 
                        v-row
                          v-col.mt-n3.mb-3
                            v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member {{ dialog.name }}
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Membership Date:
                          v-col(cols="7")
                            //- Membership Date
                            v-card-text {{ dialog.date }}
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Membership Status:
                          v-col(cols="7")
                            //- Membership Status
                            v-card-text {{ dialog.status }}
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Skills:
                          v-col(cols="7")
                            //- Multiple Skills
                            v-card-text {{ dialog.skills }}
                        v-row.mx-2
                          v-col(cols="5")
                            v-card-subtitle.font-weight-bold Current Project:
                          v-col(cols="7")
                            v-row 
                              v-col(cols="7")
                                //- Project Name
                                v-card-text {{ dialog.current }}
                              v-col(cols="5")
                                //- Project Starting Daate
                                v-card-text {{ dialog.start }}
                        v-card-actions
                          v-spacer
                          v-btn.mr-2(
                            dark,
                            color="#ff4040",
                            @click="dialog.show = false"
                          )
                            v-icon.mr-1 mdi-close
                            span.mr-2 Close   
                  //- Status 
                  td.text-center
                    v-chip(label color="#ededfd")
                      v-icon(:color="color(member)") mdi-circle
                      span {{ member.status }}
                  //- Projects
                  td.text-center {{ member.project }}
                    //v-dialog(
                    //  v-model="dialog2"
                    //  width="500px"
                    //)
                    //  v-card(width="500px").pa-3
                    //    v-row
                    //      v-col.mt-n3.mb-3
                    //        v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Project Name
                    //    v-row.mx-2
                    //      v-col(cols="5")
                    //        v-card-subtitle.font-weight-bold Starting Date:
                    //      v-col(cols="7")
                    //        //- Starting Date
                    //    v-row.mx-2
                    //      v-col(cols="5").mt-10
                    //        v-card-subtitle.font-weight-bold Project Members:
                    //      v-col(cols="7")
                    //        //- Members
                    //    v-card-actions
                    //      v-spacer
                    //      v-btn.mr-2(
                    //        dark,
                    //        color="#ff4040",
                    //        @click="dialog2 = false"
                    //      )
                    //        v-icon.mr-1 mdi-close
                    //        span.mr-2 Close
                  //- Skill
                  td.text-center
                    v-chip-group(column)
                      v-chip(color="#ededfd" v-for="skill in member.skills" :key="skill.id" @click="show_skill_details(skill.skill)" )
                        span {{ skill.skill }}
                  v-dialog(
                    v-model="dialog1.show"
                    width="500px"
                  )
                    v-card(width="500px" outlined).pa-3
                      v-row
                        v-col.mt-n3.mb-3
                          v-card-title.display-1.justify-center.mt-3.ml-5.font-weight-bold.member Skill Details
                      v-row.mx-2
                        v-col(cols="4")
                          v-card-subtitle.font-weight-bold Skill:
                        v-col(cols="8")
                          //- Skill Names
                          v-card-text {{ dialog1.skill }}
                      v-row.mx-2
                        v-col(cols="4").mt-10
                          v-card-subtitle.font-weight-bold Description
                        v-col(cols="8"  )
                          //- Description
                          v-card-text {{ dialog1.description }}
                      v-card-actions
                        v-spacer
                        v-btn.mr-2(
                          dark,
                          color="#ff4040",
                          @click="dialog1.show = false"
                        )
                          v-icon.mr-1 mdi-close
                          span.mr-2 Close
</template>
und
<script>
import axios from "axios";

export default {
  data () {
    return {
      search: '',
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
        show: false,
        skill: "",
        description: "",
      },
      dialog2: false,
      members: []
    };
  },
  mounted: function() {
    axios.get("api/members").then(response => {
      this.members = response.data
    });
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
    get_member_details(id) {
      axios.get('api/members/member/'+id).then(response => {
        let member = response.data[0];
        this.dialog.name = member.name;
        this.dialog.status = member.status;
        this.dialog.date = member.date;
        this.dialog.skills = member.skills.map(x => {
          return x.skill
        }).toString();
        this.dialog.current = member.project;
        this.dialog.start = member.start;
        console.log(member);
      });
      this.dialog.show = !this.dialog.show;
    },
    show_skill_details(skill) {
      axios.get('api/skills/'+skill).then(response => {
        console.log(response);
        this.dialog1.skill = response.data.skill;
        this.dialog1.description = response.data.description;
        this.dialog1.show = !this.dialog1.show;
      })
    }
  }
}
</script>
<style scoped>
  .table{
    background-color: #ededfd;
  }
</style>
