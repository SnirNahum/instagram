<template>
  <div class="preview-container">
    <div class="img-container">
      <img v-if="imageUploaded" :src="filePreview" alt="Image Preview" />
    </div>
    <create-details
      v-if="currentStage === 2"
      :storyToAdd="storyToAdd"
      :user="user"
    />
  </div>
</template>

<script>
import CreateDetails from "../CreateStory/CreateStoryDetails.vue";

export default {
  components: {
    CreateDetails,
  },
  props: {
    imageUploaded: Boolean,
    filePreview: String,
    currentStage: Number,
    storyToAdd: Object,
    user: Object,
  },
};
</script>
