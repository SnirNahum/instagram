<template>
  <section class="main-layout">
    <SideNav v-if="shouldDisplaySideNav" />
    <RouterView />

    <!-- Guided Tour Component -->
    <!-- <GuidedTour v-if="showGuidedTour" @tour-complete="handleTourComplete" /> -->

    <UserMsg />
  </section>
</template>

<script>
import { userService } from "./services/user.service";
import { store } from "./store/store";

import UserMsg from "./cmps/UserMsg.vue";
import SideNav from "./cmps/SideNav/SideNav.vue";
// import GuidedTour from "./cmps/Driver.vue"; // Import your guided tour component

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
  data() {
    return {
      showGuidedTour: true,
    };
  },
  methods: {
    // handleTourComplete() {
    //   this.showGuidedTour = false;
    // },
  },
  components: {
    UserMsg,
    SideNav,
    // GuidedTour,
  },
};
</script>
