<!-- <template>
  <section class="modal">
    <section class="modal-content-create">
      <div v-if="currentStage === 1">
        <div class="story-create-header">
          <p @click="goBack">Back</p>
          <h1>Create new post</h1>
          <p @click="goToNextStage">Next</p>
        </div>
        <hr />
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
              <p>Drag photos and videos here or</p>
              <button
                class="upload-story-btn"
                @click.prevent="onFileButtonClick"
              >
                Select from computer
              </button>
              <input
                style="display: none"
                type="file"
                @change="onFileChange"
                ref="fileInput"
              />
            </section>
            <img
              v-if="filePreview"
              :src="filePreview"
              alt="Image Preview"
              class="preview-image"
            />
          </section>
        </section>
      </div>
      <div v-if="currentStage === 2">
        <div class="story-create-header">
          <p @click="goBack">Back</p>
          <h1>Create new post</h1>
          <p @click="addStory">Post</p>
        </div>
        <hr />
        <section class="create-details">
          <p>username</p>
          <input type="text" v-model="storyToAdd.txt" />
          <div>Emojis</div>
          <div>Add location</div>
        </section>
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
      filePreview: null,
    };
  },
  methods: {
    goToNextStage() {
      this.currentStage++;
    },
    goBack() {
      if (this.currentStage > 1) {
        this.currentStage--;
      }
    },
    onDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];
      this.addStory();
      this.previewImage(); // Call the previewImage method when the image is dropped
    },
    previewImage() {
      if (!this.file) {
        this.filePreview = null;
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        console.log("Image Data:", reader.result); // Add this line to check the image data
        this.filePreview = reader.result;
      };
      reader.readAsDataURL(this.file);
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      this.previewImage(); // Call the previewImage method when the image is selected
    },
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
      } else {
        showErrorMsg("Please upload file");
      }
    },
    onFileButtonClick() {
      this.$refs.fileInput.click();
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

    getSvg(uploadImg) {
      return svgService.getInstagramSvgs(uploadImg);
    },
  },
};
</script>
<style scoped>
.preview-image {
  width: 200px; /* Adjust the width as needed */
  height: auto; /* Maintain the aspect ratio */
  border: 1px solid #ccc;
  margin-top: 10px;
}
</style> -->
