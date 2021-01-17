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
                  td.text-center 
                  td.text-center
                  td.text-center 
                  td.text-center
</template>

<script>

export default {
}
</script>
<style scoped>
  .table{
    background-color: #dadafb;
  }
</style>
