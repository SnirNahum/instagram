<template>
  <section class="profile-header-stats" v-if="userStories.length">
    <p class="profile-header-stats">
      <span>{{ userStories.length }}</span> posts
    </p>
    <p class="profile-header-stats">
      <span>{{ user.followers.length }} </span> followers
    </p>
    <p class="profile-header-stats">
      <span>{{ user.following.length }}</span> Following
    </p>
  </section>
  <!-- <pre>{{ user }}</pre> -->
  <h2 class="profile-header-username">{{ user.username }}</h2>
  <div class="profile-header-bio">
    <span>Love to travel and exploring</span>
    <span>Passion for coding</span>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      requred: true,
    },
    userStories: {
      type: Array,
      requred: true,
    },
  },
  created() {
    console.log(this.userStories);
  },
};
</script>
