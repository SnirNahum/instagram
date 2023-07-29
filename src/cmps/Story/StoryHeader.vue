<template>
  <section class="story-header">
    <img :src="user.imgUrl" />
    <p>{{ user.fullname }}</p>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
