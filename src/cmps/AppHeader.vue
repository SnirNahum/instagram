<template>
  <SideNav />
  <section class="loggedin-user" v-if="loggedInUser">
    <RouterLink :to="`/user/${loggedInUser._id}`">
      {{ loggedInUser.fullname }}
    </RouterLink>
    <span>{{ loggedInUser.score?.toLocaleString() }}</span>
    <img :src="loggedInUser.imgUrl" />
  </section>
</template>
<script>
import SideNav from "./SideNav.vue";
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: { SideNav },
};
</script>
