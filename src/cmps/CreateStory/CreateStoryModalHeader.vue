<template>
  <section class="upload-section">
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
</template>

<script>
import { svgService } from "../../services/svg.service";

export default {
  props: {
    isDragOver: Boolean,
  },
  methods: {
    onDragOver(event) {
      event.preventDefault();
      this.$emit("on-drag-over", event);
    },
    onDragLeave(event) {
      event.preventDefault();
      this.$emit("on-drag-leave", event);
    },
    onDrop(event) {
      event.preventDefault();
      this.$emit("on-drop", event);
    },
    onFileClick() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      this.$emit("on-file-change", event);
    },
    getSvg(emoji) {
      return svgService.getInstagramSvgs(emoji);
    },
  },
};
</script>
