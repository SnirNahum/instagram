<template>
  <header>
    <nav>
      <RouterLink to="/">
        <img class="logo" src="../../src//assets/Instagram_logo.svg.png" />
      </RouterLink>
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/">Search</RouterLink>
      <RouterLink to="/explore">Explore</RouterLink>
      <RouterLink to="/reels">Reels</RouterLink>
      <RouterLink to="/messages">Messages</RouterLink>
      <RouterLink to="/">Notification</RouterLink>
      <RouterLink to="/StoryCreate">Create</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>

      <!-- <RouterLink to="/car">Cars</RouterLink>
      <RouterLink to="/review">Reviews</RouterLink>
      <RouterLink to="/chat">Chat</RouterLink>
      <RouterLink to="/login">Login / Signup</RouterLink> -->
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
