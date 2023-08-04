<template>
  <section class="profile-main-layout" :key="userId">
    <ProfileHeader v-if="user" :user="user" :userStories="userStories" />
    <ProfileImgs v-if="user" :user="user" :userStories="userStories" />
  </section>
</template>

<script>
import ProfileHeader from "../cmps/ProfileCmps/ProfileHeader.vue";
import ProfileImgs from "../cmps/ProfileCmps/ProfileImgs.vue";
import { showErrorMsg } from "../services/event-bus.service";

export default {
  data() {
    return {
      user: null,
      userStories: [],
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
  created() {
    this.loadUser();
  },
  watch: {
    userId() {
      // Reset data and load new user when userId changes
      this.user = null;
      this.userStories = [];
      this.loadUser();
    },
  },
  methods: {
    async loadUser() {
      try {
        const user = await this.$store.dispatch({
          type: "loadUser",
          userId: this.userId,
        });
        this.user = user;
        this.loadStory();
      } catch (err) {
        showErrorMsg("Cannot load user");
      }
    },
    async loadStory() {
      try {
        await this.$store.dispatch({
          type: "loadStories",
          userId: this.userId,
        });
        this.userStories = this.$store.getters.stories;
      } catch (err) {
        showErrorMsg("Cannot load story");
      }
    },
  },
  components: {
    ProfileHeader,
    ProfileImgs,
  },
};
</script>
