<template>
  <form class="feedContainer" @submit.prevent="addStory">
    <h2>Add story</h2>
    <input type="text" v-model="storyToAdd.txt" />
    <input type="file" @change="onFileChange" />
    <button type="submit">Post</button>
  </form>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { storyService } from "../services/story.service.local";

export default {
  data() {
    return {
      storyToAdd: storyService.getEmptyStory(),
      file: null,
    };
  },
  methods: {
    async addStory() {
      if (this.file) {
        try {
          this.storyToAdd.imgUrl = await this.uploadImage(this.file);
          await this.saveStory();
          showSuccessMsg("Story added");
          this.$router.push("/");
        } catch (err) {
          showErrorMsg("Cannot add story");
        }
      } else showErrorMsg("Please upload file");
    },
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async uploadImage(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    },
    async saveStory() {
      await this.$store.dispatch("addStory", { story: this.storyToAdd });
    },
    resetForm() {
      this.storyToAdd = storyService.getEmptyStory();
      this.file = null;
    },
  },
};
</script>
