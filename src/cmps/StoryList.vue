<template>
  <article v-for="story in stories" key="story._id">
    <StoryPreview :story="story" />
  </article>
</template>
<script>
import StoryPreview from "./StoryPreview.vue";
export default {
  props: {
    stories: {
      type: [Array, null],
      required: true,
    },
  },
  components: {
    StoryPreview,
  },
};
</script>
