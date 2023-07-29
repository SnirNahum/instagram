<template>
  <nav class="side-nav">
    <section class="side-nav-logo">
      <RouterLink to="/"
        ><i class="icon" v-html="getSvg('logo')"></i
      ></RouterLink>
    </section>
    <section class="side-nav-links">
      <RouterLink class="side-nav-link" to="/"
        ><i class="icon" v-html="getSvg('home')"></i
        ><span>Home</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/"
        ><i class="icon" v-html="getSvg('search')"></i
        ><span>Search</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/explore"
        ><i class="icon" v-html="getSvg('explore')"></i
        ><span>Explore</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/reels">
        <i class="icon" v-html="getSvg('reels')"></i
        ><span>Reels</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/messages"
        ><i class="icon" v-html="getSvg('messages')"></i
        ><span>Messages</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/"
        ><i class="icon" v-html="getSvg('notification')"></i
        ><span>Notifications</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/StoryCreate"
        ><i class="icon" v-html="getSvg('create')"></i
        ><span>Create</span></RouterLink
      >
      <RouterLink class="side-nav-link" to="/profile">
        <img src="../assets/icons/profilePic.jpg" /><span
          >Profile</span
        ></RouterLink
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
</template>
<script>
import { svgService } from "../services/svg.service";

export default {
  methods: {
    getSvg(
      home,
      search,
      explore,
      reels,
      messages,
      notification,
      create,
      searchActive
    ) {
      return svgService.getInstagramSvgs(
        home,
        search,
        explore,
        reels,
        messages,
        notification,
        create,
        searchActive
      );
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
