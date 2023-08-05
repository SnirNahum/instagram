<template>
  <section class="modal" @click="onCloseModal">
    <section class="modal-content-create">
      <Driver v-if="showGuidedTour" @tour-complete="handleTourComplete" />

      <div class="story-create-header">
        <p v-if="currentStage === 1"></p>
        <i
          v-if="currentStage === 2"
          class="icon"
          v-html="getSvg('backBtn')"
          @click="goBack"
          style:cu
        ></i>
        <h1>Create new post</h1>
        <p v-if="currentStage === 1"></p>
        <p
          v-if="currentStage === 2"
          class="create-story-share"
          @click="addStory"
        >
          Share
        </p>
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
            <img :src="user.imgUrl" />
            <p>{{ user.username }}</p>
          </div>
          <div class="create-input">
            <pre><textarea
              class="story-create-input"
              type="text"
              placeholder="Write a caption..."
              v-model="storyToAdd.txt"
            ></textarea>
            </pre>
          </div>
          <div class="input-tools">
            <div class="emoji">
              <i class="icon" v-html="getSvg('emoji')"></i>
            </div>
            <span>{{ storyToAdd.txt.length }} / 200</span>
          </div>
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
import Driver from "../cmps/Driver.vue";

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
      showGuidedTour: true,
    };
  },
  created() {
    this.user = this.$store.getters.loggedinUser;
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
    async onDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];

      await this.previewImage();

      this.goToNextStage();
    },
    async previewImage() {
      if (!this.file) {
        this.filePreview = null;
        return;
      }

      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.filePreview = reader.result;
          resolve();
        };
        reader.readAsDataURL(this.file);
      });
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
          this.storyToAdd.by = {
            _id: this.user._id,
            imgUrl: this.user.imgUrl,
            username: this.user.username,
            fullname: this.user.fullname,
          };
          this.storyToAdd.imgUrl = await this.uploadImage(this.file);

          await this.saveStory();
          showSuccessMsg("Story added");

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
    async onFileClick() {
      this.$refs.fileInput.click();
    },
    async onFileChange(event) {
      this.file = event.target.files[0];

      await this.previewImage();

      this.goToNextStage();
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

    getSvg(backBtn) {
      return svgService.getInstagramSvgs(backBtn);
    },
    onCloseModal(event) {
      if (event.target.classList.contains("modal")) {
        this.$router.go(-1);
      }
    },
    handleTourComplete() {
      this.showGuidedTour = false;
    },
  },
  components: {
    Driver,
  },
};
</script>
