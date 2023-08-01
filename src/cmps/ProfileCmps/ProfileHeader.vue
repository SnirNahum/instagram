<template>
  <section class="profile-header">
    <section class="profile-header-img">
      <div>
        <img
          class="avatar"
          src="https://i.pinimg.com/564x/8e/6d/ee/8e6deed92dc84de3e9212fd56a0d0a97--johnny-bravo-cartoon-network.jpg"
        />
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

export default { components: { ProfileHeaderActions, ProfileHeaderStats } };
</script>
