<template lang="pug">
v-app(style="background: #f3f3f3")
  v-content
    router-view(:key="$route.fullPath")
</template>

<script>
export default {
  name: 'App',

  components: {
    Navbar
  },

  computed: {
    getFullPath() {
      return this.$route.path;
    },
  },
  watch: {
    getFullPath() {
      this.getData();
    },
  },
};
</script>
