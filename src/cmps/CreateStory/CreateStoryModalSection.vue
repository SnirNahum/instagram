<template>
  <div class="story-create-header">
    <p></p>
    <p v-if="currentStage === 2" @click="goBack">Back</p>
    <h1>Create new post</h1>
    <p></p>
    <p v-if="currentStage === 2" @click="addStory">Share</p>
  </div>
</template>

<script>
export default {
  props: {
    currentStage: Number,
  },
  methods: {
    goBack() {
      this.$emit("go-back");
    },
    addStory() {
      this.$emit("add-story");
    },
  },
};
</script>
