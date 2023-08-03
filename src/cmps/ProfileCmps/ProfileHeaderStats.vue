<template>
  <section class="profile-header-stats">
    <p class="profile-header-stats"><span>40</span> posts</p>
    <p class="profile-header-stats"><span>380 </span> followers</p>
    <p class="profile-header-stats"><span>584</span> Following</p>
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
  },
};
</script>
