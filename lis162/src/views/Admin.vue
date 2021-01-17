<template lang="pug">
v-container
  v-row.justify-content-center.align-center
    v-col(cols="8")
      v-text-field(
        placeholder="Search Name",
        solo,
        dense,
        prepend-inner-icon="mdi-magnify",
        clearable
        )
    v-col(cols="2")
      v-btn(label="Search")
    v-col(cols="2")
      v-btn.mr-5(label="Add Member")
      v-btn(label="Add Skills")
  v-row 
      v-simple-table(fixed-header)
        template(v-slot:default)
          thead
            tr
              th.text-center Member Name
              th.text-center Status
              th.text-center Current Projects
              th.text-center Skills
          tbody
            tr 
              td.text-center 
              td.text-center
              td.text-center 
              td.text-center
</template>
<script>
export default {};
</script>
<style scoped>
</style>