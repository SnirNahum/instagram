<template>
  <StoryPreview
    v-for="story in stories"
    :key="story._id"
    :story="story"
    @commentToAdd="commentToAdd"
  />
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
  emits: ["commentToAdd"],
  methods: {
    commentToAdd(storyId, commentToAdd) {
      this.$emit("commentToAdd", storyId, commentToAdd);
    },
  },
  components: {
    StoryPreview,
  },
};
</script>
