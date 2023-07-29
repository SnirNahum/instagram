<template>
  <section class="side-nav-links">
    <SideNavLink to="/" icon="home" label="Home" />
    <SideNavLink to="/" icon="search" label="Search" />
    <SideNavLink to="/explore" icon="explore" label="Explore" />
    <SideNavLink to="/reels" icon="reels" label="Reels" />
    <SideNavLink to="/messages" icon="messages" label="Messages" />
    <SideNavLink to="/" icon="notification" label="Notifications" />
    <SideNavLink to="/StoryCreate" icon="create" label="Create" />
    <SideNavProfileLink to="/profile" label="Profile" img="img" />
  </section>
</template>

<script>
import SideNavLink from "./SideNavLink.vue";
import SideNavProfileLink from "./SideNavProfileLink.vue";

export default {
  components: {
    SideNavLink,
    SideNavProfileLink,
  },
};
</script>
