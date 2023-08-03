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
    currentStage: Number,
    isDragOver: Boolean,
    onDragOver: Function,
    onDragLeave: Function,
    onDrop: Function,
    onFileClick: Function,
    onFileChange: Function,
    filePreview: String,
  },
  methods: {
    getSvg(emoji) {
      return svgService.getInstagramSvgs(emoji);
    },
  },
};
</script>
