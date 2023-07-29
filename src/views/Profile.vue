<template>
  <section class="profile-main-layout">
    <ProfileHeader />
    <ProfileStories />
    <ProfileImgs />
  </section>
</template>
<script>
import ProfileHeader from "../cmps/ProfileCmps/ProfileHeader.vue";
import ProfileImgs from "../cmps/ProfileCmps/ProfileImgs.vue";
import ProfileStories from "../cmps/ProfileCmps/ProfileStories.vue";

export default {
  data() {
    return {
      userId: null,
      stories: this.$store.getters.stories,
    };
  },
  components: {
    ProfileHeader,
    ProfileStories,
    ProfileImgs,
  },
};
</script>
