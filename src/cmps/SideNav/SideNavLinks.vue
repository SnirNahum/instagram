<template>
  <section class="side-nav-links">
    <SideNavLink
      to="/"
      icon="home"
      label="Home"
      :class="{ active: activeLink === 'home' }"
      @update-active="updateActiveLink"
    />
    <SideNavLink
      to="/"
      icon="search"
      label="Search"
      :class="{ active: $route.path === '/search' }"
      @update-active="updateActiveLink"
    />
    <SideNavLink
      to="/explore"
      icon="explore"
      label="Explore"
      :class="{ active: $route.path === '/explore' }"
      @update-active="updateActiveLink"
    />
    <SideNavLink
      to="/reels"
      icon="reels"
      label="Reels"
      :class="{ active: $route.path === '/reels' }"
      @update-active="updateActiveLink"
    />
    <SideNavLink
      to="/messages"
      icon="messages"
      label="Messages"
      :class="{ active: $route.path === '/messages' }"
      @update-active="updateActiveLink"
    />
    <SideNavLink
      to="/notifications"
      icon="notification"
      label="Notifications"
      :class="{ active: $route.path === '/notifications' }"
      @update-active="updateActiveLink"
    />
    <SideNavLink
      to="/storyCreate"
      icon="create"
      label="Create"
      :class="{ active: $route.path === '/storyCreate' }"
      @update-active="updateActiveLink"
    />
    <SideNavProfileLink
      :to="user ? `/profile/${user._id}` : '/'"
      label="Profile"
      :class="{ active: $route.path === '/profile' }"
    />
  </section>
</template>

<script>
import SideNavLink from "./SideNavLink.vue";
import SideNavProfileLink from "./SideNavProfileLink.vue";

export default {
  data() {
    return {
      activeLink: null,
      user: null,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
  },
  methods: {
    updateActiveLink(icon) {
      this.activeLink = icon + "Active";
    },
  },
  components: {
    SideNavLink,
    SideNavProfileLink,
  },
};
</script>
