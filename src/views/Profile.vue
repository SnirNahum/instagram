<template>
  <section class="profile-main-layout">
    <ProfileHeader :user="user" />
    <ProfileStories :user="user" />
    <ProfileImgs :user="user" />
  </section>
</template>
<script>
import ProfileHeader from "../cmps/ProfileCmps/ProfileHeader.vue";
import ProfileImgs from "../cmps/ProfileCmps/ProfileImgs.vue";
import ProfileStories from "../cmps/ProfileCmps/ProfileStories.vue";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
  },
  components: {
    ProfileHeader,
    ProfileStories,
    ProfileImgs,
  },
};
</script>
