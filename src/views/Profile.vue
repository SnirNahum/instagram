<template>
  <section class="profile-main-layout">
    <ProfileHeader :user="user" />
    <ProfileStories :user="user" />
    <ProfileImgs :user="user" :userStories="userStories" />
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
      userStories: [],
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
    this.loadStory();
  },
  methods: {
    async loadStory() {
      const userId = this.user._id;
      try {
        await this.$store.dispatch({
          type: "loadStories",
          userId,
        });
        this.userStories = this.$store.getters.stories;
      } catch (err) {
        showErrorMsg("Cannot load story");
      }
    },
  },
  components: {
    ProfileHeader,
    ProfileStories,
    ProfileImgs,
  },
};
</script>
