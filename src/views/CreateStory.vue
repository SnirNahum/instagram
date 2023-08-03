<template>
  <section class="modal">
    <section class="modal-content-create">
      <CreateStoryModalHeader
        :currentStage="currentStage"
        @go-back="goBack"
        @add-story="addStory"
      />
      <CreateStoryUploadSection
        v-if="currentStage === 1"
        @on-drop="onDrop"
        @on-file-click="onFileClick"
        @on-file-change="onFileChange"
        :is-drag-over="isDragOver"
      />
      <CreateStoryPreviewSection
        v-if="currentStage === 2"
        :imageUploaded="imageUploaded"
        :filePreview="filePreview"
        :currentStage="currentStage"
        :storyToAdd="storyToAdd"
        :user="user"
      />
    </section>
  </section>
</template>

<script>
import CreateStoryModalHeader from "../cmps/CreateStory/CreateStoryModalHeader.vue";
import CreateStoryUploadSection from "../cmps/CreateStory/CreateStoryUploadSection.vue";
import CreateStoryPreviewSection from "../cmps/CreateStory/CreateStoryPreviewSection.vue";

import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { storyService } from "../services/story.service.local";
import { svgService } from "../services/svg.service";

export default {
  data() {
    return {
      storyToAdd: storyService.getEmptyStory(),
      file: null,
      currentStage: 1,
      isDragOver: false,
      imageUploaded: false,
      filePreview: null,
      user: null,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
  },
  methods: {
    goBack() {
      if (this.currentStage > 1) {
        this.currentStage--;
      }
    },
    onDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];
      setTimeout(() => {
        this.goToNextStage();
      }, 500);
      this.previewImage();
    },
    previewImage() {
      if (!this.file) {
        this.filePreview = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.filePreview = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    onFileClick() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      this.currentStage++;
      this.previewImage();
    },
    async addStory() {
      if (this.file) {
        try {
          this.storyToAdd.by = {
            _id: this.user._id,
            imgUrl: this.user.imgUrl,
            username: this.user.username,
            fullname: this.user.fullname,
          };
          this.storyToAdd.imgUrl = await this.uploadImage(this.file);
          console.log(this.storyToAdd);
          await this.saveStory();
          showSuccessMsg("Story added");
          const createDetails = document.querySelector(".create-details");
          createDetails.classList.toggle("create-details-expanded");
        } catch (err) {
          showErrorMsg("Cannot add story");
        }
      } else {
        showErrorMsg("Please upload a file");
      }
      this.$router.push("/");
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
    getSvg(emoji) {
      return svgService.getInstagramSvgs(emoji);
    },
  },
  components: {
    CreateStoryModalHeader,
    CreateStoryUploadSection,
    CreateStoryPreviewSection,
  },
};
</script>
