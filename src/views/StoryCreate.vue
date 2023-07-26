<template>
  <form class="feedContainer" @submit.prevent="addStory">
    <h2>Add story</h2>
    <input type="text" v-model="storyToAdd.txt" />
    <input type="file" @change="onFileChange" />
    <button type="submit">Save</button>
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
      try {
        if (this.file) {
          const imageUrl = await this.uploadImage(this.file);
          this.storyToAdd.imgUrl = imageUrl;
        }
        await this.saveStory();
        showSuccessMsg("Story added");
        this.$router.push("/");

        this.resetForm();
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot add story");
      }
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
      const { storyToAdd } = this;
      await this.$store.dispatch("addStory", { story: storyToAdd });
    },
    resetForm() {
      this.storyToAdd = storyService.getEmptyStory();
      this.file = null;
    },
  },
};
</script>
