<template>
  <section class="side-nav-links">
    <SideNavLink
      to="/"
      icon="home"
      label="Home"
      :class="{ active: $route.path === '/' }"
    />
    <SideNavLink
      to="/"
      icon="search"
      label="Search"
      :class="{ active: $route.path === '/search' }"
    />
    <SideNavLink
      to="/explore"
      icon="explore"
      label="Explore"
      :class="{ active: $route.path === '/explore' }"
    />
    <SideNavLink
      to="/reels"
      icon="reels"
      label="Reels"
      :class="{ active: $route.path === '/reels' }"
    />
    <SideNavLink
      to="/messages"
      icon="messages"
      label="Messages"
      :class="{ active: $route.path === '/messages' }"
    />
    <SideNavLink
      to="/"
      icon="notification"
      label="Notifications"
      :class="{ active: $route.path === '/notifications' }"
    />
    <SideNavLink
      to="storyCreate"
      icon="create"
      label="Create"
      :class="{ active: $route.path === '/storyCreate' }"
    />
    <SideNavProfileLink
      to="/profile/userId"
      label="Profile"
      :class="{ active: $route.path === '/profile' }"
    />
  </section>
</template>

<script>
import SideNavLink from "./SideNavLink.vue";
import SideNavProfileLink from "./SideNavProfileLink.vue";

export default {
  methods: {
    openStoryCreateModal() {
      // this.$router.push({ path: "/storyCreate" });
    },
  },
  components: {
    SideNavLink,
    SideNavProfileLink,
  },
};
</script>
