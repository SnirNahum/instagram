<template>
  <section class="modal">
    <section class="modal-content-create">
      <!-- Header Section -->

      <div class="story-create-header">
        <p @click="goBack">Back</p>
        <h1>Create new post</h1>
        <p v-if="currentStage === 1" @click="goToNextStage">Next</p>
        <p v-else @click="addStory">Share</p>
      </div>

      <!-- Page 1 -->
      <section class="upload-section" v-if="currentStage === 1">
        <section
          class="img-preview"
          @dragover.prevent="onDragOver"
          @dragleave.prevent="onDragLeave"
          @drop.prevent="onDrop"
          :class="{ 'drag-over': isDragOver }"
        >
          <section class="story-create-upload">
            <i class="icon" v-html="getSvg('uploadImg')"></i>
            <p>Drag photos and videos here</p>
            <button class="upload-story-btn" @click.prevent="onFileClick">
              <p>Select from computer</p>
            </button>
            <input
              style="display: none"
              type="file"
              @change="onFileChange"
              ref="fileInput"
            />
          </section>
        </section>
      </section>

      <!-- Page 2 -->
      <div class="preview-container" v-if="currentStage === 2">
        <div class="img-container">
          <img v-if="imageUploaded" :src="filePreview" alt="Image Preview" />
        </div>
        <div class="create-details">
          <div class="story-header">
            <img src="https://robohash.org/2" />
            <p>username</p>
          </div>
          <div class="create-input">
            <pre><textarea
              type="text"
              placeholder="Write a caption..."
              v-model="storyToAdd.txt"
            ></textarea>
            </pre>
          </div>
          <div class="emoji"><i class="icon" v-html="getSvg('emoji')"></i></div>
          <div class="location">Add location</div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
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
    };
  },
  methods: {
    goToNextStage() {
      if (this.currentStage === 1) {
        if (!this.filePreview) {
          return;
        } else {
          this.imageUploaded = true;
          this.currentStage++;
        }
      }
    },
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
    onDragOver(event) {
      event.preventDefault();
      this.isDragOver = true;
    },
    onDragLeave(event) {
      event.preventDefault();
      this.isDragOver = false;
    },
    async addStory() {
      if (this.file) {
        try {
          this.storyToAdd.imgUrl = await this.uploadImage(this.file);
          await this.saveStory();
          showSuccessMsg("Story added");
          this.imageUploaded = true;
          this.currentStage = 3;

          this.imageUploaded = true;
          this.currentStage = 3;

          const createDetails = document.querySelector(".create-details");
          createDetails.classList.toggle("create-details-expanded");
        } catch (err) {
          showErrorMsg("Cannot add story");
        }
      } else {
        showErrorMsg("Please upload file");
      }
      this.$router.push("/");
    },
    onFileClick() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      this.previewImage(); // Call the previewImage method when the image is selected
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
};
</script>
