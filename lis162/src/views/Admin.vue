<template lang="pug">
  div
    router-view
    v-container
      v-row.justify-content-center.align-center.mt-3.ml-n10.mr-n16
        v-col(cols="7").mr-n1
          v-text-field(
            placeholder="Search Name",
            solo,
            dense,
            prepend-inner-icon="mdi-magnify",
            clearable
            )
        v-col(cols="1").mr-n3
          v-btn( dark color="#FE8848").mt-n7
            span Search
        v-col.mr-n6
        v-col(cols="3").mt-n6
          v-row.mr-n2
            v-col(cols="6").ml-n8
              v-btn(@click="dialog = dialog" dark color="rgba(117, 204, 112, 0.9)")
                v-icon.ml-n2.mr-2 mdi-account-plus
                span Add Member
            v-col(cols="6").ml-5
              v-btn(dark color="#fad132")
                v-icon.ml-n2.mr-2 mdi-plus-box
                span Add Skill
      v-row 
        v-col
          v-simple-table(fixed-header)
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
    };
  },
};
</script>
<style scoped>
</style>