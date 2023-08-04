<template>
  <StoryPreview
    v-for="story in stories"
    :key="story._id"
    :story="story"
    @commentToAdd="commentToAdd"
    @addStoryLike="addStoryLike"
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
  emits: ["commentToAdd", "addStoryLike"],
  methods: {
    commentToAdd(storyId, commentToAdd) {
      this.$emit("commentToAdd", storyId, commentToAdd);
    },
    addStoryLike(storyId, userId) {
      this.$emit("addStoryLike", storyId, userId);
    },
  },
  components: {
    StoryPreview,
  },
};
</script>
