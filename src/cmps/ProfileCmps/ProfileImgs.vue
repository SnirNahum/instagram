<template>
  <section class="profile-img">
    <div class="image-container">
      <div class="image-wrapper">
        <img
          v-for="story in userStories"
          :src="story.imgUrl"
          :key="story._id"
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    userStories: {
      type: Object,
      required: true,
    },
  },

  methods: {
    // getSvg(like) {
    //   return svgService.getInstagramSvgs(like);
    // },
  },
};
</script>
