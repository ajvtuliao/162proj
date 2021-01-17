<template lang="pug">
v-container
  v-row.justify-content-center.align-center
    v-col.mt-6(cols="10")
      v-row 
        v-col(cols="10")
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
    v-simple-table
</template>
<script>
export default {};
</script>
<style scoped>
</style>