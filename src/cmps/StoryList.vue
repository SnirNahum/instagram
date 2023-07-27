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
    commentToAdd(comment) {
      this.$emit("commentToAdd", comment);
    },
  },
  components: {
    StoryPreview,
  },
};
</script>
