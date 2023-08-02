<template>
  <section class="profile-header">
    <section class="profile-header-img">
      <div>
        <img class="avatar" :src="user.imgUrl" />
      </div>
    </section>
    <section class="profile-header-user-details">
      <ProfileHeaderActions />
      <ProfileHeaderStats />
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
  },

  components: {
    ProfileHeaderActions,
    ProfileHeaderStats,
  },
};
</script>
