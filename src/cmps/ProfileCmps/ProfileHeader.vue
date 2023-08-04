<template>
  <section class="profile-header">
    <section class="profile-header-img">
      <div>
        <img v-if="user" class="avatar" :src="user.imgUrl" />
      </div>
    </section>
    <section class="profile-header-user-details">
      <ProfileHeaderActions :user="user" />
      <ProfileHeaderStats :user="user" :userStories="userStories" />
    </section>
  </section>
</template>
<script>
import ProfileHeaderActions from "./ProfileHeaderActions.vue";
import ProfileHeaderStats from "./ProfileHeaderStats.vue";

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    userStories: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProfileHeaderActions,
    ProfileHeaderStats,
  },
};
</script>
