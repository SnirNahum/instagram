<template>
  <section class="profile-img">
    <div class="image-container">
      <div class="image-wrapper">
        <router-link
          v-for="story in userStories"
          :to="`/${story._id}`"
          :key="story._id"
        >
          <img :src="story.imgUrl" :key="story._id" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    userStories: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>
