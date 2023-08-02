<template>
  <section class="main-layout">
    <SideNav v-if="shouldDisplaySideNav" />
    <RouterView />
    <UserMsg />
  </section>
</template>

<script>
import { userService } from "./services/user.service";
import { store } from "./store/store";

import UserMsg from "./cmps/UserMsg.vue";
import SideNav from "./cmps/SideNav/SideNav.vue";

export default {
  created() {
    console.log("Vue App created");
    const user = userService.getLoggedinUser();
    if (user) store.commit({ type: "setLoggedinUser", user });
  },
  computed: {
    shouldDisplaySideNav() {
      const currentRoute = this.$route.path;
      return !["/login", "/signup"].includes(currentRoute);
    },
  },
  components: {
    UserMsg,
    SideNav,
  },
};
</script>
