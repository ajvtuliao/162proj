<template lang="pug">
v-app(style="background: #ffffff")
  v-content
    router-view
      v-container
        v-row.justify-content-center.align-center
          v-col(cols="10").mt-6
            v-row 
              v-col(cols="10")
                v-text-field(
                  placeholder="Search Name"
                  solo
                  dense
                  prepend-inner-icon="mdi-magnify"
                  clearable
                )
              v-col(cols="2")
                v-btn(label="Search")
          v-col(cols="2")
            v-btn(label="Add Member").mr-5
            v-btn(label="Add Skills")
        v-row 
          v-simple-table
</template>

<script>
export default {
  name: 'App',
};
</script>
<style scoped>
</style>
