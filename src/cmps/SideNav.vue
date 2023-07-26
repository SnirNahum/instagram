<template>
  <header>
    <nav>
      <section class="links">
        <img class="logo" src="../../src/assets/Instagram_logo.svg.png" />
        <RouterLink to="/"
          ><img
            src="../assets/icons/home.png"
            class="sideNavIcon"
          />Home</RouterLink
        >
        <RouterLink to="/"
          ><img
            src="../assets/icons/search.png"
            class="sideNavIcon"
          />Search</RouterLink
        >
        <RouterLink to="/explore"
          ><img
            src="../assets/icons/explore.png"
            class="sideNavIcon"
          />Explore</RouterLink
        >
        <RouterLink to="/reels">
          <img
            src="../assets/icons/reels.png"
            class="sideNavIcon"
          />Reels</RouterLink
        >
        <RouterLink to="/messages"
          ><img
            src="../assets/icons/messages.png"
            class="sideNavIcon"
          />Messages</RouterLink
        >
        <RouterLink to="/"
          ><img
            src="../assets/icons/notifications.png"
            class="sideNavIcon"
          />Notification</RouterLink
        >
        <RouterLink to="/StoryCreate"
          ><img
            src="../assets/icons/createStory.png"
            class="sideNavIcon"
          />Create</RouterLink
        >
        <RouterLink to="/profile" class="profileLink">
          <img src="../assets/icons/profilePic.jpg" />Profile</RouterLink
        >
      </section>
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <RouterLink :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </RouterLink>
      <span>{{ loggedInUser.score?.toLocaleString() }}</span>
      <img :src="loggedInUser.imgUrl" />
    </section>
  </header>
</template>
<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
