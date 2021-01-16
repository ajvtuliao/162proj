<template lang="pug">
v-app(style="background: #f3f3f3")
  v-content
    router-view(:key="$route.fullPath")
</template>

<script>
import HelloWorld from './components/HelloWorld';

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
