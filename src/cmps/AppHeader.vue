<template>
  <SideNav />
</template>
<script>
import SideNav from "./SideNav/SideNav.vue";
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: { SideNav },
};
</script>
