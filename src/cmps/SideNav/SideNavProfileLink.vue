<template>
  <RouterLink class="side-nav-link" :to="to">
    <img :src="userImg.imgUrl" alt="User Image" />
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    userImg() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
